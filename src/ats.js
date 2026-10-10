const TECH_TITLE=/\b(software|developer|front.?end|back.?end|full.?stack|devops|sre|site reliability|platform engineer|data engineer|data scientist|machine learning|ai engineer|sdet|security engineer|cloud engineer|infrastructure engineer|database engineer|mobile engineer|engineering manager)\b/i;
export function classifyJob(j){
 if(j.isListed===false||!(j.workplaceType?j.workplaceType==='Remote':j.isRemote===true))return null;
 const title=String(j.title||'');const dept=String(j.department||'');
 if(!TECH_TITLE.test(title)&&!(/\b(qa|quality assurance|quality engineer|test engineer)\b/i.test(title)&&/engineering|software|technology|product/i.test(dept)))return null;
 let url;try{url=new URL(j.jobUrl);if(url.protocol!=='https:'||url.hostname!=='jobs.ashbyhq.com')return null}catch{return null}
 const places=[j.location,...(j.secondaryLocations||[]).map(x=>x.location)].filter(Boolean).map(x=>String(x).trim());
 const location=places.join('; ')||'Location not specified';
 const marker=location.toLowerCase().replace(/remote|[()–—-]/g,'').trim().replace(/\s+/g,' ');
 const worldwide=['global','worldwide','anywhere','anywhere in the world','all locations'].includes(marker);
 return {title:title.slice(0,200),location:location.slice(0,500),scope:worldwide?'Worldwide stated':'Location restrictions / review',worldwide,url:url.href,publishedAt:typeof j.publishedAt==='string'?j.publishedAt:null};
}
async function fetchBoard(board){
 const r=await fetch('https://api.ashbyhq.com/posting-api/job-board/'+encodeURIComponent(board.slug),{headers:{Accept:'application/json'},redirect:'error',signal:AbortSignal.timeout(10000)});
 if(!r.ok)throw Error('Board unavailable');const data=await r.json();if(!Array.isArray(data.jobs))throw Error('Invalid job board response');
 return data.jobs.map(classifyJob).filter(Boolean);
}
async function discoverATS(e,scope){
 if(!['remote','worldwide'].includes(scope))throw new AppError('Choose a valid hiring scope.');
 return lock(e,'discovery',async()=>{
 const saved=await all(e,'prospect');const now=new Date().toISOString();let added=0,refreshed=0,matched=0,checked=0;const failures=[],companyIds=[];
 const previous=Number(await getSetting(e,'atsOffset')||0);const boards=[...ATS_BOARDS.slice(previous),...ATS_BOARDS.slice(0,previous)];
 // Read public boards with bounded concurrency and process every success and failure.
 for(let start=0;start<boards.length;start+=6){
  const group=boards.slice(start,start+6);const results=await Promise.allSettled(group.map(fetchBoard));
  for(let i=0;i<results.length;i++){
   const board=group[i],result=results[i];checked++;
   if(result.status==='rejected'){failures.push(board.name);continue}
   const jobs=result.value.filter(j=>scope!=='worldwide'||j.worldwide).sort((a,b)=>Number(b.worldwide)-Number(a.worldwide)||(Date.parse(b.publishedAt)||0)-(Date.parse(a.publishedAt)||0));
   const id='ats:ashby:'+board.slug.toLowerCase();const existing=saved.find(p=>p.id===id||p.company.toLowerCase()===board.name.toLowerCase());
   if(!jobs.length)continue;
   matched++;companyIds.push(existing?.id||id);
   const source='https://jobs.ashbyhq.com/'+encodeURIComponent(board.slug);
   const info={hiringJobs:jobs.slice(0,8),remoteJobCount:jobs.length,hiringCheckedAt:now,hiringScope:scope,hiringSource:source,signal:`${jobs.length} matching remote technical role${jobs.length===1?'':'s'} listed on the employer’s Ashby board when checked. Review each role’s location restrictions. Startup size and staffing-vendor acceptance are unverified.`};
   if(existing){await lock(e,'p:'+existing.id,async()=>{const latest=await record(e,existing.id);const rev=latest.revision;delete latest.revision;Object.assign(latest,info);await update(e,latest,rev)});refreshed++;continue}
   if(added>=40)continue;
   const p={id,company:board.name,apolloId:null,website:'',employees:null,industry:'Remote technical hiring',country:'Not verified',source,discoveredAt:now,...info,status:'Needs review',stage:'New',owner:'Jahnavi',contact:null,subject:'',body:'',evidence:jobs.slice(0,3).map(j=>`${j.title} — ${j.location}\n${j.url}`).join('\n\n'),fitReviewed:false};
   const inserted=await insert(e,p);added+=inserted.meta.changes||0;
  }
 }
 if(failures.length===checked)throw new AppError('The public job boards could not be reached. No new results were saved. Please try again later.',502);
 await setting(e,'atsOffset',String((previous+40)%ATS_BOARDS.length));
 const run={at:now,source:'ATS',scope,added,refreshed,returned:matched,checked,failed:failures.length,failedBoards:failures,companyIds,credits:0};await setting(e,'lastRun',JSON.stringify(run));return run;
 });
}
