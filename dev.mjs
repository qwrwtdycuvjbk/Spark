import {createServer} from 'node:http';
import {DatabaseSync} from 'node:sqlite';
import {existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync} from 'node:fs';
import {randomBytes} from 'node:crypto';
import worker from './dist/server/index.js';

const dir='.data';
mkdirSync(dir,{recursive:true});
const keyPath=dir+'/credential-key';
if(!existsSync(keyPath))writeFileSync(keyPath,randomBytes(32).toString('base64'));
const sqlite=new DatabaseSync(dir+'/outreach.sqlite');
for(const file of readdirSync('drizzle').filter(name=>name.endsWith('.sql')).sort()){
  for(const statement of readFileSync('drizzle/'+file,'utf8').split('--> statement-breakpoint')){
    const sql=statement.trim();
    if(!sql)continue;
    try{sqlite.exec(sql)}catch(error){if(!/already exists/i.test(String(error?.message||error)))throw error}
  }
}
const env={
  OWNER_EMAIL:'owner@localhost',
  CREDENTIAL_ENCRYPTION_KEY:readFileSync(keyPath,'utf8').trim(),
  DB:{prepare(sql){let args=[];return {bind(...values){args=values;return this},async first(){return sqlite.prepare(sql).get(...args)??null},async all(){return {results:sqlite.prepare(sql).all(...args)}},async run(){const result=sqlite.prepare(sql).run(...args);return {meta:{changes:result.changes}}}}}}
};
const port=Number(process.env.PORT||3939);
const server=createServer(async(req,res)=>{
  try{
    const chunks=[];
    for await(const chunk of req)chunks.push(chunk);
    const body=Buffer.concat(chunks);
    const origin=`http://${req.headers.host}`;
    const headers=new Headers();
    for(const [key,value] of Object.entries(req.headers))if(value)headers.set(key,Array.isArray(value)?value.join(', '):value);
    headers.set('oai-authenticated-user-email',env.OWNER_EMAIL);
    if(req.method==='POST')headers.set('origin',origin);
    const response=await worker.fetch(new Request(origin+req.url,{method:req.method,headers,body:body.length?body:undefined}),env);
    res.statusCode=response.status;
    response.headers.forEach((value,key)=>res.setHeader(key,value));
    res.end(Buffer.from(await response.arrayBuffer()));
  }catch(error){
    res.statusCode=500;
    res.end(error instanceof Error?error.message:'Local server error');
  }
});
server.listen(port,'127.0.0.1',()=>console.log(`People Prime local site: http://127.0.0.1:${port}`));
