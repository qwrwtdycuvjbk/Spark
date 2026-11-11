const TECH_TITLE=/\b(software|developer|front.?end|back.?end|full.?stack|devops|sre|site reliability|platform engineer|data engineer|data scientist|machine learning|ai engineer|sdet|security engineer|cloud engineer|infrastructure engineer|database engineer|mobile engineer|engineering manager)\b/i;
const TECH_DEPT=/engineering|software|technology|product|developer/i;
const US_PLACE=/\b(united states|u\.s\.a\.|u\.s\.|usa|america)\b/i;
const NOT_US=/south america|latin america|central america/i;
const WORLDWIDE_PLACE=/^(global|worldwide|anywhere|anywhere in the world|all locations|work from anywhere)$/;
export function toIsoDate(value){
 if(typeof value==='string'&&/^\d{4}-\d{2}-\d{2}T/.test(value)){const t=Date.parse(value);return Number.isFinite(t)?new Date(t).toISOString():null}
 if(typeof value==='string'&&/^\d+$/.test(value))return toIsoDate(Number(value));
 if(typeof value==='number'&&Number.isFinite(value)){const ms=value<1e12?value*1000:value;const d=new Date(ms);return Number.isFinite(d.getTime())?d.toISOString():null}
 return null;
}
export function httpsUrl(value,hosts){
 try{const u=new URL(value);if(u.protocol!=='https:')return '';if(hosts&&!hosts.includes(u.hostname))return '';return u.href}catch{return ''}
}
export function locationFlags(location){
 const raw=String(location||'').trim();
 const marker=raw.toLowerCase().replace(/remote|work from home|distributed|[()–—-]/g,' ').replace(/\s+/g,' ').trim();
 const worldwide=WORLDWIDE_PLACE.test(marker);
 const us=US_PLACE.test(raw)&&!NOT_US.test(raw);
 return {worldwide,us,scope:worldwide?'Worldwide stated':us?'US remote':'Location restrictions / review'};
}
export function matchesScope(job,scope){
 if(scope==='worldwide')return !!job.worldwide;
 if(scope==='us')return !!job.us;
 return !!(job.worldwide||job.us);
}
function isTechTitle(title,dept=''){
 const t=String(title||''),d=String(dept||'');
 return TECH_TITLE.test(t)||(/\b(qa|quality assurance|quality engineer|test engineer)\b/i.test(t)&&TECH_DEPT.test(d));
}
function pack(title,location,url,publishedAt,extra={}){
 const flags=locationFlags(location);
 return {title:String(title||'').trim().slice(0,200),location:String(location||'Location not specified').slice(0,500),url,...flags,publishedAt:toIsoDate(publishedAt),...extra};
}
export function classifyJob(j){
 if(j.isListed===false||!(j.workplaceType?j.workplaceType==='Remote':j.isRemote===true))return null;
 const title=String(j.title||'');const dept=String(j.department||'');
 if(!isTechTitle(title,dept))return null;
 const url=httpsUrl(j.jobUrl,['jobs.ashbyhq.com']);if(!url)return null;
 const places=[j.location,...(j.secondaryLocations||[]).map(x=>x.location)].filter(Boolean).map(x=>String(x).trim());
 return pack(title,places.join('; ')||'Location not specified',url,j.publishedAt);
}
export function classifyGreenhouseJob(j){
 const title=String(j.title||'').trim();
 const dept=(j.departments||[]).map(d=>d.name).join(' ');
 if(!isTechTitle(title,dept))return null;
 const location=String(j.location?.name||'').trim()||'Location not specified';
 if(!/remote|anywhere|distributed|work from home/i.test(location))return null;
 const url=httpsUrl(j.absolute_url);if(!url)return null;
 return pack(title,location,url,j.first_published||j.updated_at);
}
const US_STATE=/\b(alabama|alaska|arizona|arkansas|california|colorado|connecticut|delaware|florida|georgia|hawaii|idaho|illinois|indiana|iowa|kansas|kentucky|louisiana|maine|maryland|massachusetts|michigan|minnesota|mississippi|missouri|montana|nebraska|nevada|new hampshire|new jersey|new mexico|new york|north carolina|north dakota|ohio|oklahoma|oregon|pennsylvania|rhode island|south carolina|south dakota|tennessee|texas|utah|vermont|virginia|washington|west virginia|wisconsin|wyoming|district of columbia)\b/i;
const US_ABBR=/(?:^|[\s,;(•-])(AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY|DC)(?=$|[\s,;)•-])/;
const US_METRO=/\b(nyc|new york city|san francisco|bay area|seattle|los angeles|boston|chicago|austin|dallas|houston|atlanta|denver|miami|phoenix|philadelphia|san diego|san jose|bellevue|redmond|sunnyvale|mountain view|palo alto|menlo park|cupertino|brooklyn|manhattan)\b/i;
export function isUsaLocation(location){
 const raw=String(location||'');
 if(!raw.trim()||/not specified/i.test(raw))return false;
 if(/\b(tbilisi)\b/i.test(raw)&&!/\b(united states|u\.s\.a?\.?|usa)\b/i.test(raw)&&!US_ABBR.test(raw))return false;
 return /\b(united states|u\.s\.a?\.?|usa)\b/i.test(raw)||/(?:^|[\s,;(•-])US(?=$|[\s,;)•-])/.test(raw)||US_STATE.test(raw)||US_ABBR.test(raw)||US_METRO.test(raw);
}
const SENIOR_TITLE=/\b(staff|principal|director|group|head|lead|vp|vice president|chief|distinguished|sr\.?)\b/i;
const MID_TITLE=/\b(ii|iii|iv|l2|l3|mid[- ]level)\b|\bproduct manager\s*[23]\b/i;
const ENTRY_TITLE=/\b(new grad|new graduate|recent grad|recent graduate|early career|entry[- ]level|junior|apm|associate|university graduate|college graduate|campus|rotational|graduate program)\b/i;
const INTERN_TITLE=/\b(intern(?:ships?)?|co-?ops?|working student|summer analyst)\b/i;
export function isEntryLevel(title){
 const t=String(title||'');
 if(SENIOR_TITLE.test(t))return false;
 if(/\bsenior\b/i.test(t)&&!/\bsenior associate\b/i.test(t))return false;
 if(MID_TITLE.test(t))return false;
 return !!roleFamily(t)||ENTRY_TITLE.test(t);
}
function employmentKind(value){return String(value||'').toLowerCase().replace(/[^a-z]+/g,'')}
export function isFullTimeRole(title,employment=''){
 const t=String(title||'');
 const kind=employmentKind(employment);
 if(INTERN_TITLE.test(t)||/intern|coop/.test(kind))return false;
 if(!kind)return true;
 if(kind.includes('fulltime'))return true;
 if(/parttime|contract|temporary|freelance|seasonal/.test(kind))return false;
 return true;
}
export function roleFamily(title){
 const t=String(title||'');
 if(/\bassociate product manager\b/i.test(t)||/\bapm\b/i.test(t))return 'apm';
 if(/\bsolutions? engineer\b/i.test(t))return 'solution-engineer';
 if(/\bproduct manager\b/i.test(t))return 'pm';
 return '';
}
export function postedAgo(publishedAt,now=new Date()){
 const time=Date.parse(publishedAt||'');
 const current=new Date(now).getTime();
 if(!Number.isFinite(time)||!Number.isFinite(current))return 'Date not listed';
 const minutes=Math.floor((current-time)/60000);
 if(minutes<1)return 'just now';
 if(minutes<60)return minutes===1?'1 minute ago':`${minutes} minutes ago`;
 const hours=Math.floor(minutes/60);
 if(hours<24)return hours===1?'1 hour ago':`${hours} hours ago`;
 const days=Math.floor(hours/24);
 if(days<30)return days===1?'1 day ago':`${days} days ago`;
 const months=Math.floor(days/30);
 if(months<12)return months===1?'1 month ago':`${months} months ago`;
 const years=Math.floor(days/365);
 return years===1?'1 year ago':`${years} years ago`;
}
function postedLabel(publishedAt){
 const time=Date.parse(publishedAt||'');
 if(!Number.isFinite(time))return '';
 return new Intl.DateTimeFormat('en-US',{timeZone:'America/Chicago',month:'short',day:'numeric',year:'numeric',hour:'numeric',minute:'2-digit'}).format(new Date(time))+' CT';
}
function roleRecord(board,ats,title,location,url,publishedAt,employment=''){
 const family=roleFamily(title);
 if(!family)return null;
 return {...pack(title,location,url,publishedAt),postedAt:postedLabel(publishedAt),postedAgo:postedAgo(publishedAt),family,employment:String(employment||'').slice(0,80),company:String(board.name||'').slice(0,200),board:boardLabel(ats),source:boardSource(board)};
}
export function roleJobFromAshby(board,j){
 if(j.isListed===false)return null;
 const url=httpsUrl(j.jobUrl,['jobs.ashbyhq.com']);if(!url)return null;
 const places=[j.location,...(j.secondaryLocations||[]).map(x=>x.location)].filter(Boolean).map(x=>String(x).trim());
 return roleRecord(board,'ashby',j.title,places.join('; ')||'Location not specified',url,j.publishedAt,j.employmentType);
}
export function roleJobFromGreenhouse(board,j){
 const url=httpsUrl(j.absolute_url);if(!url)return null;
 const location=String(j.location?.name||'').trim()||'Location not specified';
 return roleRecord(board,'greenhouse',j.title,location,url,j.first_published||j.updated_at,j.metadata?.find?.(m=>/employment|commitment/i.test(m.name||''))?.value);
}
export function roleJobFromLever(board,j){
 const url=httpsUrl(j.hostedUrl||j.applyUrl,['jobs.lever.co']);if(!url)return null;
 const places=[j.categories?.location,...(j.categories?.allLocations||[])].filter(Boolean).map(x=>String(x).trim());
 return roleRecord(board,'lever',j.text||j.title,places.join('; ')||'Location not specified',url,j.createdAt,j.categories?.commitment);
}
export function classifyLeverJob(j){
 const title=String(j.text||j.title||'').trim();
 const dept=String(j.categories?.department||'');
 if(!isTechTitle(title,dept))return null;
 const places=[j.categories?.location,...(j.categories?.allLocations||[])].filter(Boolean).map(x=>String(x).trim());
 const location=places.join('; ')||'Location not specified';
 const remote=String(j.workplaceType||'').toLowerCase()==='remote'||/remote|anywhere|distributed|work from home/i.test(location);
 if(!remote)return null;
 const url=httpsUrl(j.hostedUrl||j.applyUrl,['jobs.lever.co']);if(!url)return null;
 return pack(title,location,url,j.createdAt);
}
export function classifyHimalayasJob(j){
 const title=String(j.title||'').trim();
 const cats=[...(j.categories||[]),...(j.parentCategories||[])].join(' ');
 if(!isTechTitle(title,cats))return null;
 const places=(j.locationRestrictions||[]).map(x=>typeof x==='string'?x:x?.name).filter(Boolean);
 const location=places.length?places.join('; '):'Worldwide';
 const url=httpsUrl(j.applicationLink||j.guid);if(!url)return null;
 const company=String(j.companyName||'').trim().slice(0,200);const boardSlug=String(j.companySlug||company).trim().toLowerCase().replace(/[^a-z0-9-]+/g,'-');
 if(!company||!boardSlug)return null;
 const job=pack(title,location,url,j.pubDate,{company,boardSlug,boardUrl:'https://himalayas.app/companies/'+encodeURIComponent(boardSlug),source:'Himalayas',companyDomain:firstCompanyDomain(j.description)});
 if(!places.length){job.worldwide=true;job.scope='Worldwide stated'}
 return job;
}
const GLOBAL_PLACE=/anywhere in the world|worldwide|\bglobal\b|work from anywhere|all countries|all locations/i;
export function companyDomain(value){
 const raw=String(value||'').trim();
 if(!raw)return '';
 try{
  const u=new URL(/^https?:/i.test(raw)?raw:'https://'+raw.replace(/^\/\//,''));
  const host=u.hostname.replace(/^www\./,'').toLowerCase();
  return /^[a-z0-9.-]+\.[a-z]{2,}$/.test(host)?host:'';
 }catch{return ''}
}
const LISTING_HOST=/(^|\.)(weworkremotely\.com|himalayas\.app|remote\.io|linkedin\.com|lnkd\.in|twitter\.com|x\.com|facebook\.com|instagram\.com|youtube\.com|youtu\.be|google\.com|greenhouse\.io|lever\.co|ashbyhq\.com|workable\.com|smartrecruiters\.com|myworkdayjobs\.com|icims\.com|glassdoor\.com|indeed\.com)$/i;
export function firstCompanyDomain(text){
 for(const match of String(text||'').matchAll(/https?:\/\/[^\s"'<>]+/gi)){
  const domain=companyDomain(match[0].replace(/[),.;]+$/,''));
  if(domain&&!LISTING_HOST.test(domain))return domain;
 }
 return '';
}
function companyNameKey(value){return String(value||'').toLowerCase().replace(/&/g,' and ').replace(/\.(com|io|ai|co|app|dev|org|net)$/g,'').replace(/\b(incorporated|inc|llc|ltd|limited|corp|corporation|gmbh|plc|ltda|pvt|pty)\b/g,'').replace(/[^a-z0-9]+/g,'').trim()}
export function pickCompanyDomain(name,suggestions){const wanted=companyNameKey(name);if(wanted.length<3)return '';const hit=(Array.isArray(suggestions)?suggestions:[]).find(item=>companyNameKey(item?.name)===wanted&&companyDomain(item?.domain)&&!LISTING_HOST.test(companyDomain(item.domain)));return hit?companyDomain(hit.domain):''}
export async function suggestCompanyDomain(name){const q=String(name||'').trim();if(q.length<2)return '';try{const r=await fetch('https://autocomplete.clearbit.com/v1/companies/suggest?query='+encodeURIComponent(q),{headers:{accept:'application/json'},signal:AbortSignal.timeout(8000)});if(!r.ok)return '';return pickCompanyDomain(q,await r.json())}catch{return ''}}
export function companyKey(name){return 'board:'+String(name||'').trim().toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,80)}
export function isGlobalWorkforce(names){
 const list=(Array.isArray(names)?names:[names]).flatMap(v=>Array.isArray(v)?v:[v]).map(v=>typeof v==='string'?v:(v?.name||v?.address?.addressCountry||'')).map(v=>String(v||'').trim()).filter(Boolean);
 const text=list.join(' | ');
 if(GLOBAL_PLACE.test(text))return true;
 const hasIndia=list.some(n=>/^(in|india)$/i.test(n)||/\bindia\b/i.test(n));
 const hasUs=list.some(n=>/^(us|usa|united states)$/i.test(n)||/\bunited states\b|\bu\.s\.a?\.?\b/i.test(n));
 return hasIndia&&hasUs;
}
export function classifyWwrItem(item){
 const region=String(item?.region||'').trim();
 if(!isGlobalWorkforce([region]))return null;
 const rawTitle=String(item?.title||'').trim();
 const splitAt=rawTitle.indexOf(':');
 const company=splitAt>0?rawTitle.slice(0,splitAt).trim():'';
 const title=splitAt>0?rawTitle.slice(splitAt+1).trim():rawTitle;
 if(!company||!isTechTitle(title,item?.category||''))return null;
 const url=httpsUrl(item?.link||item?.guid,['weworkremotely.com']);if(!url)return null;
 const job=pack(title,region,url,item?.pubDate,{company,boardSlug:companyKey(company).slice(6),boardUrl:'https://weworkremotely.com/remote-jobs',source:'We Work Remotely',companyDomain:firstCompanyDomain(item?.description)});
 job.worldwide=true;job.scope='Worldwide stated';
 return job;
}
export function parseRssItems(xml){
 return String(xml||'').split(/<item\b[^>]*>/i).slice(1).map(chunk=>{
  const body=chunk.split(/<\/item>/i)[0];
  const tag=name=>{const m=body.match(new RegExp('<'+name+'[^>]*>([\\s\\S]*?)</'+name+'>','i'));return m?m[1].replace(/<!\[CDATA\[|\]\]>/g,'').trim():''};
  return {title:tag('title'),region:tag('region'),category:tag('category'),link:tag('link')||tag('guid'),pubDate:tag('pubDate'),description:tag('description')};
 });
}
export function classifyRemoteIoPosting(data,pageUrl){
 if(!data||data['@type']!=='JobPosting')return null;
 const names=[];
 const req=data.applicantLocationRequirements;
 for(const entry of (Array.isArray(req)?req:[req]).filter(Boolean))names.push(entry.name,entry.address?.addressCountry);
 if(data.jobLocation?.address?.addressCountry)names.push(data.jobLocation.address.addressCountry);
 if(!isGlobalWorkforce(names))return null;
 const title=String(data.title||'').trim();
 const company=String(data.hiringOrganization?.name||'').trim().slice(0,200);
 if(!company||!isTechTitle(title,'Engineering'))return null;
 const url=httpsUrl(data.url||pageUrl,['remote.io']);if(!url)return null;
 const org=data.hiringOrganization||{};
 const job=pack(title,'Worldwide',url,data.datePosted,{company,boardSlug:companyKey(company).slice(6),boardUrl:'https://remote.io/remote-jobs',source:'Remote.io',companyDomain:companyDomain(org.url||org.sameAs||'')||firstCompanyDomain(data.description)});
 job.worldwide=true;job.scope='Worldwide stated';
 return job;
}
export function remoteIoJobFromHtml(html,pageUrl){
 for(const block of String(html||'').matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)){
  try{const data=JSON.parse(block[1]);const job=classifyRemoteIoPosting(data,pageUrl);if(job)return job}catch{}
 }
 return null;
}
export function remoteIoTechUrls(xml){
 return [...String(xml||'').matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(m=>m[1].trim()).filter(u=>/^https:\/\/remote\.io\/remote-jobs\/(software-development|devops-sysadmin|data|quality-assurance)\//.test(u));
}
function atsOf(board){return board.ats||'ashby'}
function boardSource(board){
 const ats=atsOf(board),slug=encodeURIComponent(board.slug);
 return {ashby:`https://jobs.ashbyhq.com/${slug}`,greenhouse:`https://boards.greenhouse.io/${slug}`,lever:`https://jobs.lever.co/${slug}`,himalayas:'https://himalayas.app/jobs'}[ats]||('https://jobs.ashbyhq.com/'+slug);
}
function boardLabel(ats){return {ashby:'Ashby',greenhouse:'Greenhouse',lever:'Lever',himalayas:'Himalayas'}[ats]||'ATS'}
function prospectId(ats,slug){return 'ats:'+ats+':'+String(slug).toLowerCase()}
async function getJson(url,timeout=10000){
 const r=await fetch(url,{headers:{Accept:'application/json'},redirect:'error',signal:AbortSignal.timeout(timeout)});
 if(!r.ok)throw Error('Board unavailable');return r.json();
}
async function fetchAshby(board){
 const data=await getJson('https://api.ashbyhq.com/posting-api/job-board/'+encodeURIComponent(board.slug));
 if(!Array.isArray(data.jobs))throw Error('Invalid job board response');
 return data.jobs.map(classifyJob).filter(Boolean);
}
async function fetchGreenhouse(board){
 const data=await getJson('https://boards-api.greenhouse.io/v1/boards/'+encodeURIComponent(board.slug)+'/jobs');
 if(!Array.isArray(data.jobs))throw Error('Invalid job board response');
 return data.jobs.map(classifyGreenhouseJob).filter(Boolean);
}
async function fetchLever(board){
 const data=await getJson('https://api.lever.co/v0/postings/'+encodeURIComponent(board.slug)+'?mode=json');
 if(!Array.isArray(data))throw Error('Invalid job board response');
 return data.map(classifyLeverJob).filter(Boolean);
}
async function fetchHimalayas(){
 const jobs=[];let cursor;
 for(let i=0;i<3;i++){
  const u=new URL('https://himalayas.app/jobs/api');u.searchParams.set('limit','20');if(cursor)u.searchParams.set('cursor',cursor);
  const data=await getJson(u.href);const batch=Array.isArray(data.jobs)?data.jobs:[];
  jobs.push(...batch.map(classifyHimalayasJob).filter(Boolean));
  cursor=data.nextCursor;if(!cursor||!batch.length)break;
 }
 return jobs;
}
async function getText(url,hosts,timeout=15000){
 const u=new URL(url);if(u.protocol!=='https:'||!hosts.includes(u.hostname))throw Error('Unexpected host');
 const r=await fetch(u.href,{headers:{Accept:'text/html,application/xml,application/json,application/rss+xml','User-Agent':'PeoplePrimeOutreach/1.0'},redirect:'follow',signal:AbortSignal.timeout(timeout)});
 if(!r.ok)throw Error('Board unavailable');return r.text();
}
const WWR_FEEDS=[
 'https://weworkremotely.com/categories/remote-programming-jobs.rss',
 'https://weworkremotely.com/categories/remote-full-stack-programming-jobs.rss',
 'https://weworkremotely.com/categories/remote-back-end-programming-jobs.rss',
 'https://weworkremotely.com/categories/remote-front-end-programming-jobs.rss',
 'https://weworkremotely.com/categories/remote-devops-sysadmin-jobs.rss'
];
async function fetchWwr(){
 const jobs=[];const seen=new Set();
 const pages=await Promise.allSettled(WWR_FEEDS.map(url=>getText(url,['weworkremotely.com'])));
 const ok=pages.filter(p=>p.status==='fulfilled');
 if(!ok.length)throw Error('Board unavailable');
 for(const page of ok)for(const item of parseRssItems(page.value)){
  const job=classifyWwrItem(item);if(!job||seen.has(job.url))continue;seen.add(job.url);jobs.push(job);
 }
 return jobs;
}
async function fetchHimalayasWorldwide(startPage=1,pages=12){
 const jobs=[];const seen=new Set();let next=startPage;let short=false;
 for(let start=startPage;start<startPage+pages&&!short;start+=4){
  const nums=[0,1,2,3].map(i=>start+i).filter(page=>page<startPage+pages);
  const results=await Promise.all(nums.map(async page=>{try{return await getJson('https://himalayas.app/jobs/api/search?worldwide=true&limit=20&page='+page,15000)}catch{return null}}));
  if(start===startPage&&results.every(d=>!d))throw Error('Board unavailable');
  for(let i=0;i<results.length;i++){
   const data=results[i];const batch=Array.isArray(data?.jobs)?data.jobs:[];
   if(!data||batch.length<20)short=true;
   next=nums[i]+1;
   for(const raw of batch){const job=classifyHimalayasJob(raw);if(!job?.worldwide||seen.has(job.url))continue;seen.add(job.url);jobs.push(job)}
  }
 }
 return {jobs,next:short?1:next};
}
async function fetchRemoteIo(startIndex=0,limit=80){
 const xml=await getText('https://remote.io/sitemap-jobs.xml',['remote.io'],20000);
 const urls=remoteIoTechUrls(xml);const slice=urls.slice(startIndex,startIndex+limit);const jobs=[];
 for(let i=0;i<slice.length;i+=8){
  const pages=await Promise.all(slice.slice(i,i+8).map(async url=>{try{return remoteIoJobFromHtml(await getText(url,['remote.io']),url)}catch{return null}}));
  jobs.push(...pages.filter(Boolean));
 }
 const next=startIndex+slice.length;
 return {jobs,total:urls.length,next:next<urls.length?next:0,checked:slice.length};
}
const ROLE_FAMILIES=['apm','pm','solution-engineer'];
function wantedFamilies(family){
 const picked=String(family||'').split(',').map(s=>s.trim()).filter(s=>ROLE_FAMILIES.includes(s));
 return new Set(picked.length?picked:ROLE_FAMILIES);
}
async function fetchRoleBoard(board,fetchJson){
 const ats=atsOf(board);
 if(ats==='greenhouse'){
  const data=await fetchJson('https://boards-api.greenhouse.io/v1/boards/'+encodeURIComponent(board.slug)+'/jobs');
  if(!Array.isArray(data.jobs))throw Error('Invalid job board response');
  return data.jobs.map(j=>roleJobFromGreenhouse(board,j)).filter(Boolean);
 }
 if(ats==='lever'){
  const data=await fetchJson('https://api.lever.co/v0/postings/'+encodeURIComponent(board.slug)+'?mode=json');
  if(!Array.isArray(data))throw Error('Invalid job board response');
  return data.map(j=>roleJobFromLever(board,j)).filter(Boolean);
 }
 const data=await fetchJson('https://api.ashbyhq.com/posting-api/job-board/'+encodeURIComponent(board.slug));
 if(!Array.isArray(data.jobs))throw Error('Invalid job board response');
 return data.jobs.map(j=>roleJobFromAshby(board,j)).filter(Boolean);
}
export async function findRoleJobs(boards,family='',fetchJson=getJson){
 const wanted=wantedFamilies(family);
 const tracked=(Array.isArray(boards)?boards:[]).filter(b=>['ashby','greenhouse','lever'].includes(atsOf(b)));
 const jobs=[];const seen=new Set();const failed=[];let checked=0;
 for(let start=0;start<tracked.length;start+=6){
  const group=tracked.slice(start,start+6);
  const results=await Promise.allSettled(group.map(board=>fetchRoleBoard(board,fetchJson)));
  for(let i=0;i<results.length;i++){
   checked++;
   if(results[i].status==='rejected'){failed.push(group[i].name);continue}
   for(const job of results[i].value){
    if(!wanted.has(job.family)||seen.has(job.url)||!isUsaLocation(job.location)||!isEntryLevel(job.title)||!isFullTimeRole(job.title,job.employment))continue;
    seen.add(job.url);jobs.push(job);
   }
  }
 }
 if(tracked.length&&failed.length===checked)throw new AppError('The public job boards could not be reached. Please try again later.',502);
 jobs.sort((a,b)=>String(b.publishedAt||'').localeCompare(String(a.publishedAt||''))||a.company.localeCompare(b.company)||a.title.localeCompare(b.title));
 const counts={apm:0,pm:0,'solution-engineer':0};
 const listed=jobs.slice(0,500).map(job=>({...job,postedAt:postedLabel(job.publishedAt),postedAgo:postedAgo(job.publishedAt)}));
 for(const job of listed)counts[job.family]++;
 for(const job of jobs.slice(500))counts[job.family]++;
 return {jobs:listed,counts,checked,failed,truncated:jobs.length>500};
}
async function fetchBoard(board){
 const ats=atsOf(board);
 if(ats==='greenhouse')return fetchGreenhouse(board);
 if(ats==='lever')return fetchLever(board);
 if(ats==='himalayas')return fetchHimalayas();
 return fetchAshby(board);
}
function companyGroups(board,jobs){
 if(atsOf(board)!=='himalayas')return [{board,jobs,id:prospectId(atsOf(board),board.slug),name:board.name,source:boardSource(board)}];
 const map=new Map();
 for(const job of jobs){
  const id=prospectId('himalayas',job.boardSlug);
  if(!map.has(id))map.set(id,{board:{ats:'himalayas',slug:job.boardSlug,name:job.company},jobs:[],id,name:job.company,source:job.boardUrl||'https://himalayas.app/jobs'});
  map.get(id).jobs.push(job);
 }
 return [...map.values()];
}
async function discoverATS(e,scope){
 if(!['remote','worldwide','us'].includes(scope))throw new AppError('Choose a valid hiring scope.');
 return lock(e,'discovery',async()=>{
 const saved=await all(e,'prospect');const now=new Date().toISOString();let added=0,refreshed=0,matched=0,checked=0;const failures=[],companyIds=[];
 const extra=ATS_BOARDS.filter(b=>atsOf(b)==='himalayas');const tracked=ATS_BOARDS.filter(b=>atsOf(b)!=='himalayas');
 const previous=Number(await getSetting(e,'atsOffset')||0)%Math.max(tracked.length,1);
 const boards=[...extra,...tracked.slice(previous),...tracked.slice(0,previous)];
 for(let start=0;start<boards.length;start+=6){
  const group=boards.slice(start,start+6);const results=await Promise.allSettled(group.map(fetchBoard));
  for(let i=0;i<results.length;i++){
   const board=group[i],result=results[i];checked++;
   if(result.status==='rejected'){failures.push(board.name);continue}
   const scoped=result.value.filter(j=>matchesScope(j,scope)).sort((a,b)=>Number(b.worldwide)-Number(a.worldwide)||(Date.parse(b.publishedAt)||0)-(Date.parse(a.publishedAt)||0));
   for(const company of companyGroups(board,scoped)){
    if(!company.jobs.length)continue;
    const existing=saved.find(p=>p.id===company.id||p.company.toLowerCase()===company.name.toLowerCase());
    matched++;companyIds.push(existing?.id||company.id);
    const source=company.source;const ats=atsOf(company.board);
    const info={hiringJobs:company.jobs.slice(0,8),remoteJobCount:company.jobs.length,hiringCheckedAt:now,hiringScope:scope,hiringSource:source,signal:`${company.jobs.length} matching remote technical role${company.jobs.length===1?'':'s'} listed on the employer’s ${boardLabel(ats)} board when checked. Review each role’s location restrictions. Startup size and staffing-vendor acceptance are unverified.`};
    if(existing){await lock(e,'p:'+existing.id,async()=>{const latest=await record(e,existing.id);const rev=latest.revision;delete latest.revision;Object.assign(latest,info);await update(e,latest,rev)});refreshed++;continue}
    if(added>=40)continue;
    const p={id:company.id,company:company.name,apolloId:null,website:'',employees:null,industry:'Remote technical hiring',country:'Not verified',source,discoveredAt:now,...info,status:'Needs review',stage:'New',owner:'Jahnavi',contact:null,subject:'',body:'',evidence:company.jobs.slice(0,3).map(j=>`${j.title} — ${j.location}\n${j.url}`).join('\n\n'),fitReviewed:false};
    const inserted=await insert(e,p);added+=inserted.meta.changes||0;
   }
  }
 }
 if(failures.length===checked)throw new AppError('The public job boards could not be reached. No new results were saved. Please try again later.',502);
 await setting(e,'atsOffset',String((previous+40)%Math.max(tracked.length,1)));
 const run={at:now,source:'ATS',scope,added,refreshed,returned:matched,checked,failed:failures.length,failedBoards:failures,companyIds,credits:0};await setting(e,'lastRun',JSON.stringify(run));return run;
 });
}

const JOB_TIMEZONE='America/Chicago';
export function localDay(value){const d=new Date(value);if(!Number.isFinite(d.getTime()))return null;const parts=new Intl.DateTimeFormat('en-US',{timeZone:JOB_TIMEZONE,year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(d);return ['year','month','day'].map(k=>parts.find(p=>p.type===k).value).join('-')}
export function jobDateWindow(now=new Date()){
 const today=localDay(now);const [y,m,d]=today.split('-').map(Number);const yesterday=new Date(Date.UTC(y,m-1,d-1)).toISOString().slice(0,10);
 return {today,yesterday,timezone:JOB_TIMEZONE};
}
export function isRecentJob(job,now=new Date()){
 const publishedAt=toIsoDate(job.publishedAt)||(typeof job.publishedAt==='string'&&/^\d{4}-\d{2}-\d{2}T/.test(job.publishedAt)?job.publishedAt:null);
 if(!publishedAt)return false;
 const time=Date.parse(publishedAt);if(!Number.isFinite(time)||time>new Date(now).getTime())return false;
 const {today,yesterday}=jobDateWindow(now),day=localDay(time);return day===today||day===yesterday;
}
async function jobsFeed(e){const feed=JSON.parse(await getSetting(e,'jobsFeed')||'{"jobs":[],"run":null}');const jobs=feed.run?.source==='BOARDS'?(feed.jobs||[]):(feed.jobs||[]).filter(j=>isRecentJob(j));return {...feed,jobs,window:jobDateWindow()}}
function groupBoardCompanies(jobs){
 const map=new Map();
 for(const job of jobs){
  const id=companyKey(job.company);if(!id||id==='board:')continue;
  if(!map.has(id))map.set(id,{id,name:job.company,jobs:[],sources:new Set(),source:job.boardUrl||'',domain:''});
  const row=map.get(id);
  if(!row.jobs.some(j=>j.url===job.url))row.jobs.push(job);
  row.sources.add(job.source);
  if(!row.source)row.source=job.boardUrl||'';
  if(!row.domain&&job.companyDomain)row.domain=job.companyDomain;
 }
 return [...map.values()];
}
async function discoverBoards(e,scope='worldwide'){
 if(!['remote','worldwide','us'].includes(scope))throw new AppError('Choose a valid hiring scope.');
 const failures=[];const jobs=[];const counts={wwr:0,himalayas:0,remoteio:0};let remoteIo={checked:0,total:0,next:0};let himalayasNext=1;
 const start=Number(await getSetting(e,'remoteIoIndex')||0);
 const page=Math.max(1,Number(await getSetting(e,'himalayasPage')||1));
 const tasks=[
  ['We Work Remotely',async()=>{const found=await fetchWwr();counts.wwr=found.length;jobs.push(...found)}],
  ['Himalayas',async()=>{const found=await fetchHimalayasWorldwide(page,12);counts.himalayas=found.jobs.length;himalayasNext=found.next;jobs.push(...found.jobs)}],
  ['Remote.io',async()=>{const found=await fetchRemoteIo(start,80);counts.remoteio=found.jobs.length;remoteIo=found;jobs.push(...found.jobs)}]
 ];
 const results=await Promise.allSettled(tasks.map(([,fn])=>fn()));
 results.forEach((result,i)=>{if(result.status==='rejected')failures.push(tasks[i][0])});
 if(failures.length===tasks.length)throw new AppError('We Work Remotely, Remote.io, and Himalayas could not be reached. No new results were saved.',502);
 return lock(e,'discovery',async()=>{
  const saved=await all(e,'prospect');const now=new Date().toISOString();let added=0,refreshed=0,matched=0;const companyIds=[];
  for(const company of groupBoardCompanies(jobs)){
   if(!company.jobs.length||added+refreshed>=1000&&!saved.some(p=>p.id===company.id))continue;
   const existing=saved.find(p=>p.id===company.id||p.company.toLowerCase()===company.name.toLowerCase());
   matched++;companyIds.push(existing?.id||company.id);
   const sources=[...company.sources];
   const info={hiringJobs:company.jobs.slice(0,8),remoteJobCount:company.jobs.length,hiringCheckedAt:now,hiringScope:'worldwide',hiringSource:company.source,sources,signal:`${company.name} is hiring ${company.jobs.length} remote technical role${company.jobs.length===1?'':'s'} open to a global workforce on ${sources.join(', ')}. India-based and US remote candidates can both be considered. Startup size and staffing-vendor acceptance are unverified.`};
   if(company.domain){info.domain=company.domain;info.website='https://'+company.domain}
   if(existing){await lock(e,'p:'+existing.id,async()=>{const latest=await record(e,existing.id);const rev=latest.revision;delete latest.revision;Object.assign(latest,info);await update(e,latest,rev)});refreshed++;continue}
   const p={id:company.id,company:company.name,apolloId:null,website:company.domain?'https://'+company.domain:'',domain:company.domain||'',employees:null,industry:'Remote technical hiring',country:'Global workforce',source:company.source,discoveredAt:now,...info,status:'Needs review',stage:'New',owner:'Jahnavi',contact:null,subject:'',body:'',evidence:company.jobs.slice(0,3).map(j=>`${j.title} — ${j.location}\n${j.url}`).join('\n\n'),fitReviewed:false};
   const inserted=await insert(e,p);added+=inserted.meta.changes||0;
  }
  await setting(e,'remoteIoIndex',String(failures.includes('Remote.io')?start:(remoteIo.next||0)));
  await setting(e,'himalayasPage',String(failures.includes('Himalayas')?page:himalayasNext));
  const run={at:now,source:'BOARDS',scope:'worldwide',added,refreshed,returned:matched,checked:tasks.length,failed:failures.length,failedBoards:failures,companyIds,counts,remoteIo,credits:0};
  await setting(e,'lastRun',JSON.stringify(run));
  const feedJobs=jobs.slice(0,500).map(job=>({...job,id:job.url,checkedAt:now}));
  await setting(e,'jobsFeed',JSON.stringify({jobs:feedJobs,run}));
  return run;
 });
}
async function refreshJobs(e){const run=await discoverBoards(e);const feed=await jobsFeed(e);return {...feed,added:run.added,refreshed:run.refreshed,returned:run.returned,failed:run.failed,failedBoards:run.failedBoards,run}}
async function saveJobCompany(e,jobId){const feed=await jobsFeed(e);const job=feed.jobs.find(j=>j.id===jobId);if(!job)throw new AppError('This job is no longer in the current company list. Load companies again.',409);
 return lock(e,'discovery',async()=>{const prospects=await all(e,'prospect');const id=['We Work Remotely','Remote.io','Himalayas'].includes(job.source)?companyKey(job.company):prospectId(job.ats||'ashby',job.boardSlug);const existing=prospects.find(p=>p.id===id||p.company.toLowerCase()===job.company.toLowerCase());if(existing)return {id:existing.id,existing:true};
 const evidence=`${job.title} — ${job.location}\nPublished/reposted: ${job.publishedAt}\n${job.url}`;
 await insert(e,{id,company:job.company,apolloId:null,website:'',employees:null,industry:'Remote technical hiring',country:'Not verified',source:job.boardUrl,discoveredAt:new Date().toISOString(),hiringJobs:[job],remoteJobCount:1,hiringCheckedAt:job.checkedAt,hiringScope:'remote',hiringSource:job.boardUrl,signal:'A remote technical vacancy was published or republished today or yesterday on a tracked ATS or Himalayas listing. Review location restrictions and company fit.',status:'Needs review',stage:'New',owner:'Jahnavi',contact:null,subject:'',body:'',evidence,fitReviewed:false});return {id,existing:false};
 });
}
