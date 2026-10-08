import {readFile,mkdir,writeFile,cp,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist/server',{recursive:true});
const html=(await readFile('src/index.html','utf8')).replace('<script src="/app.js"></script>', '<script>'+await readFile('src/app.js','utf8')+'</script>');
const worker=await readFile('src/worker.js','utf8');
await writeFile('dist/server/index.js',`const HTML=${JSON.stringify(html)};\n`+worker);
await mkdir('dist/.openai',{recursive:true});await cp('.openai/hosting.json','dist/.openai/hosting.json');await cp('drizzle','dist/.openai/drizzle',{recursive:true});
