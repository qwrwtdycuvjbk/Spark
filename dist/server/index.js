const HTML="<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n<title>People Prime | Outreach</title>\n<meta name=\"description\" content=\"People Prime America startup prospect discovery and approval\">\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Outfit:wght@400;500;600;700&display=swap\" rel=\"stylesheet\">\n<link rel=\"icon\" href=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' rx='8' fill='%231a1a1a'/%3E%3Ctext x='8' y='29' font-size='24' fill='%23e8c547'%3EP%3C/text%3E%3C/svg%3E\">\n<style>\n:root{\n  --ink:#1c1c1c;\n  --muted:#6d6860;\n  --paper:#f3eee6;\n  --card:#fffcf8;\n  --gold:#e8c547;\n  --mustard:#d9a441;\n  --coral:#e07a48;\n  --line:#e4ddd2;\n  --navy:#2b3844;\n  --lime:var(--gold);\n  color-scheme:light;\n}\n*{box-sizing:border-box}\nhtml,body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.55 Outfit,system-ui,sans-serif}\nbutton,input,select,textarea{font:inherit}\nbutton{cursor:pointer}\nbutton,a,input,textarea,select{transition:background .18s,border-color .18s,color .18s,transform .18s}\nbutton:disabled{opacity:.45;cursor:not-allowed}\na{color:#8a5a22;text-underline-offset:3px}\n.site-bar{position:sticky;top:0;z-index:4;display:flex;align-items:center;gap:28px;padding:18px 36px;background:rgba(243,238,230,.92);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}\n.brand{font-family:Fraunces,Georgia,serif;font-size:22px;font-weight:700;letter-spacing:-.4px;white-space:nowrap;flex-shrink:0}\n.brand span{display:inline-block;background:var(--gold);color:var(--ink);padding:0 7px;margin-left:4px;border-radius:4px;transform:rotate(-2deg)}\n.brand small{display:none}\n#nav{display:flex;flex-wrap:nowrap;gap:4px;margin-left:auto;overflow-x:auto;min-width:0;flex:1;justify-content:flex-end}\n#nav button{border:0;background:none;color:#5f5a53;padding:8px 11px;font-size:13px;font-weight:500;border-radius:999px;white-space:nowrap}\n#nav button:hover{color:var(--ink);background:#fff}\n#nav button.active{background:var(--ink);color:#fff}\n.avatar{display:grid;place-items:center;width:38px;height:38px;border-radius:50%;background:var(--ink);color:var(--gold);font-size:12px;font-weight:700;flex-shrink:0}\nmain{max-width:1280px;margin:0 auto;padding:18px 36px 80px}\n.notice{margin:8px 0 10px;color:var(--muted);font-size:13px}\n.head{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;margin:18px 0 28px}\n.head h1{font-family:Fraunces,Georgia,serif;font-size:clamp(40px,6vw,72px);font-weight:700;letter-spacing:-1.8px;line-height:.95;margin:0;text-transform:uppercase}\n.head h1 em{font-style:normal;background:var(--gold);padding:0 .18em;border-radius:6px;display:inline-block;transform:rotate(-1.5deg)}\n.head p{margin:14px 0 0;max-width:520px;color:var(--muted)}\nh2{font-family:Fraunces,Georgia,serif;font-size:22px;margin:0 0 14px}\np{margin:8px 0;color:var(--muted)}\n.btn{border:1px solid var(--ink);background:#fff;color:var(--ink);border-radius:999px;padding:10px 16px;font-weight:600;font-size:14px}\n.btn:hover:not(:disabled){background:#fff8e6}\n.primary{background:var(--ink);color:#fff;border-color:var(--ink)}\n.primary:hover:not(:disabled){background:#333}\n.stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;margin:8px 0 28px}\n.stat,.panel,.card,.column,.job-card,.rail-card{background:var(--card);border:1px solid var(--line);border-radius:18px;min-width:0}\n.stat,.panel{padding:22px}\n.stat small{color:var(--muted);font-size:13px;letter-spacing:.04em;text-transform:uppercase}\n.stat strong{display:block;font-family:Fraunces,Georgia,serif;font-size:40px;line-height:1.1;margin:10px 0 6px;color:var(--ink)}\n.stat span{color:var(--muted);font-size:13px}\n.stat:first-child{background:var(--gold);border-color:var(--gold)}\n.grid{display:grid;grid-template-columns:1.4fr 1fr;gap:20px}\n.toolbar{display:flex;gap:10px;margin-bottom:18px;flex-wrap:wrap}\ninput,select,textarea{border:1px solid var(--line);border-radius:999px;padding:11px 14px;background:#fff;color:var(--ink);max-width:100%}\ntextarea{border-radius:14px}\ninput:focus,textarea:focus,select:focus{outline:2px solid var(--gold);outline-offset:2px}\ntable{width:100%;border-collapse:collapse;text-align:left;font-size:14px}\nth{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:var(--muted);font-weight:600}\ntd,th{padding:16px 10px;border-bottom:1px solid var(--line)}\ntd strong{display:block;font-size:15px;margin-bottom:4px;color:var(--ink)}\ntd small,.muted,.sources-summary{color:var(--muted)}\ntbody tr:hover{background:#faf6ef}\n.tablewrap{overflow:auto}\n.pill{display:inline-block;padding:4px 10px;border-radius:999px;background:#f3eee6;color:#5c564e;font-size:12px;font-weight:600;white-space:nowrap}\n.green{background:#e7f3e4;color:#3d6b38}\n.amber{background:#f8ead0;color:#8a6320}\n.row{display:flex;align-items:center;justify-content:space-between;gap:15px;padding:16px 0;border-bottom:1px solid var(--line);font-size:14px}\n.board{display:grid;grid-template-columns:repeat(4,minmax(190px,1fr));gap:16px;overflow:auto}\n.column{padding:18px;background:#f7f1e8}\n.column>h2{border-bottom:2px solid var(--gold);padding-bottom:12px}\n.card{padding:16px;margin:12px 0}\n.card select{width:100%;margin-top:12px;font-size:13px}\n.formgrid,.review-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}\nlabel{display:block;font-size:14px;font-weight:600;margin-bottom:14px;color:var(--ink)}\nlabel input,label textarea,label select{display:block;width:100%;margin-top:8px;font-weight:400}\ntextarea{min-height:220px;resize:vertical}\ndialog{color:var(--ink);background:var(--card);border:1px solid var(--line);border-radius:24px;padding:28px;width:min(560px,92vw);max-height:90vh;overflow:auto}\ndialog::backdrop{background:#1c181299;backdrop-filter:blur(4px)}\n.toast{position:fixed;bottom:24px;right:24px;background:var(--ink);color:#fff;padding:14px 20px;border-radius:14px;max-width:min(450px,90vw);z-index:5}\nbutton:focus-visible,a:focus-visible{outline:3px solid var(--gold);outline-offset:3px}\n.empty{padding:40px 20px;text-align:center;border:1px dashed var(--line);border-radius:16px;margin-top:16px;background:#fff}\n.empty h2{color:var(--ink)}\n.error{background:#fae9e7;color:#8a3936;padding:14px;border-radius:12px}\n.chips{display:flex;gap:8px;flex-wrap:wrap}\n.chips span,.chip{background:#fff;border:1px solid var(--line);color:#514c46;padding:7px 12px;border-radius:999px;font-size:13px}\ninput[type=checkbox]{display:inline;width:auto;margin:0 8px 0 0;accent-color:var(--mustard)}\n.job-evidence{background:#f7f1e8;border:1px solid var(--line);border-radius:12px;padding:14px;margin:12px 0}\n.scope-note{max-width:680px}\n#scope,#jobscope{min-width:220px}\n.magazine{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:36px;align-items:start}\n.jobs-toolbar{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:18px;color:var(--muted);font-size:13px}\n.jobs-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}\n.job-card{padding:0;overflow:hidden;background:transparent;border:0;display:flex;flex-direction:column}\n.job-cover{height:168px;border-radius:18px;display:flex;align-items:flex-end;justify-content:flex-end;padding:16px;color:#fff;font-family:Fraunces,Georgia,serif;font-size:42px;font-weight:700;letter-spacing:-1px}\n.job-cover.t0{background:linear-gradient(145deg,#2d3b48,#7ea0b0)}\n.job-cover.t1{background:linear-gradient(145deg,#e07a48,#f3c39a)}\n.job-cover.t2{background:linear-gradient(145deg,#d9a441,#f3e3a8)}\n.job-cover.t3{background:linear-gradient(145deg,#4d6b4a,#b7d0a8)}\n.job-cover.t4{background:linear-gradient(145deg,#1c1c1c,#8a8073)}\n.job-card h2{font-size:20px;line-height:1.3;margin:12px 0 6px;text-transform:none;letter-spacing:-.3px}\n.job-card h2 a{color:var(--ink);text-decoration:none}\n.job-card h2 a:hover{text-decoration:underline}\n.job-company{margin:12px 0 0;font-size:12px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:#8a5a22}\n.job-meta{display:flex;gap:10px;flex-wrap:wrap;margin:4px 0 14px;font-size:13px;color:var(--muted)}\n.job-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:auto}\n.job-actions a{text-decoration:none}\n.rail-card{padding:22px;margin-bottom:18px}\n.rail-card h2{font-size:13px;letter-spacing:.12em;text-transform:uppercase;font-family:Outfit,sans-serif;color:var(--muted);margin-bottom:14px}\n.rail-search input{width:100%}\n.cat-list{display:flex;flex-direction:column;gap:10px}\n.cat-list button{display:flex;align-items:center;gap:10px;border:0;background:none;padding:0;color:var(--ink);font-size:14px;text-align:left}\n.cat-list button.active{font-weight:700}\n.dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}\n.cta-card{background:var(--coral);border-color:var(--coral);color:#fff;padding:28px 24px}\n.cta-card h2,.cta-card p{color:#fff;text-transform:none;letter-spacing:-.4px;font-family:Fraunces,Georgia,serif;font-size:32px;line-height:1.1}\n.cta-card p{font-size:14px;font-family:Outfit,sans-serif;opacity:.9;margin-top:12px}\n.brand-card{background:var(--gold);border-color:var(--gold);min-height:180px;display:flex;flex-direction:column;justify-content:space-between}\n.brand-card strong{font-family:Fraunces,Georgia,serif;font-size:42px;line-height:.9;letter-spacing:-1.4px}\n.scan-status{padding:12px 16px;background:#fff;border-radius:12px}\n.jobs-summary{display:none}\n.site-foot{max-width:1280px;margin:0 auto 40px;padding:0 36px;color:var(--muted);font-size:13px}\n@media(max-width:1100px){\n  .magazine,.grid,.stats{grid-template-columns:1fr}\n  .jobs-list{grid-template-columns:1fr 1fr}\n}\n@media(max-width:850px){\n  .review-grid,.formgrid,.jobs-list{grid-template-columns:1fr}\n  .site-bar,main,.site-foot{padding-left:16px;padding-right:16px}\n  #nav{order:3;width:100%;overflow:auto;margin:0}\n  .site-bar{flex-wrap:wrap}\n  .head h1{font-size:40px}\n  .board{grid-template-columns:repeat(4,220px)}\n}\n@media(prefers-reduced-motion:reduce){*{transition:none!important}}\n</style>\n</head>\n<body>\n<header class=\"site-bar\">\n  <div class=\"brand\">people<span>prime</span></div>\n  <nav id=\"nav\"></nav>\n  <span class=\"avatar\">JA</span>\n</header>\n<main>\n  <div class=\"notice\">Global remote companies from We Work Remotely, Remote.io, and Himalayas · Apollo finds the contact · Apollo sends the sequence</div>\n  <div id=\"app\"><p>Loading your workspace…</p></div>\n</main>\n<footer class=\"site-foot\">People Prime America · Private workspace · Approval required for outreach</footer>\n<dialog id=\"modal\"></dialog>\n<div id=\"toast\" class=\"toast\" hidden></div>\n<script>const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c]));\nlet state={view:'Jobs',connected:false,prospects:[],lastRun:null,busy:false,error:'',loaded:false,budget:null,source:'ats',scope:'worldwide',atsBoardCount:0,jobsFeed:{jobs:[],run:null},jobsQuery:'',jobsScope:'worldwide',jobsSource:'',sequences:[],emailAccounts:[],sequenceId:'',emailAccountId:''},selected=null;\nconst tabs=['Jobs','Discovery','Approval queue','Approved','Pipeline','Replies','Team & connections'];\nconst when=x=>x?new Date(x).toLocaleString():'Not yet';\nfunction toast(t){$('#toast').textContent=t;$('#toast').hidden=false;setTimeout(()=>$('#toast').hidden=true,6000)}\nasync function api(path,body){const r=await fetch('/api/'+path,{method:body?'POST':'GET',headers:body?{'Content-Type':'application/json'}:{},body:body?JSON.stringify(body):undefined});let data;try{data=await r.json()}catch{throw Error('The workspace could not load. Refresh the page or sign in again.')}if(!r.ok)throw Error(data.error||'Please try again.');return data}\nasync function load(){try{Object.assign(state,await api('state'),{loaded:true,error:''})}catch(e){state.error=e.message}render()}\nfunction go(v){state.view=v;render()}\nfunction head(t,d,b=''){return `<div class=\"head\"><div><h1>${t}</h1><p>${d}</p></div>${b}</div>`}\nfunction coverTone(name){return 't'+[...String(name||'')].reduce((n,c)=>n+c.charCodeAt(0),0)%5}\nfunction empty(t,d){return `<div class=\"empty\"><h2>${t}</h2><p>${d}</p></div>`}\nfunction badge(t){return `<span class=\"pill ${t==='Approved'?'green':t==='Opted out'?'amber':''}\">${esc(t)}</span>`}\nfunction table(ps){return `<div class=\"tablewrap\"><table><thead><tr><th>Company</th><th>Contact</th><th>Status</th><th>Found</th><th></th></tr></thead><tbody>${ps.map(p=>`<tr><td><strong>${esc(p.company)}</strong><small>${p.hiringJobs?`${p.remoteJobCount||0} matching remote tech roles · checked ${esc(new Date(p.hiringCheckedAt).toLocaleDateString())}`:`${esc(p.industry||'Technology candidate')} · ${esc(p.employees??'Unknown')} employees`}</small></td><td>${esc(p.contact?.name||'Contact research needed')}<br><small>${esc(p.contact?.title||'')}</small></td><td>${badge(p.status)}</td><td>${esc(new Date(p.discoveredAt).toLocaleDateString())}</td><td><button class=\"btn\" data-review=\"${esc(p.id)}\">Review</button></td></tr>`).join('')}</tbody></table></div>`}\nfunction render(){ $('#nav').innerHTML=tabs.map(v=>`<button data-view=\"${v}\" class=\"${v===state.view?'active':''}\">${v}${v==='Approval queue'?' · '+state.prospects.filter(p=>p.status==='Needs review').length:''}</button>`).join('');let h='';const action=`<button class=\"btn primary\" id=\"discover\" ${state.busy||(state.source==='apollo'&&(!state.connected||state.budget?.used>=100))?'disabled':''}>${state.busy?'Finding companies…':'Load companies'}</button>`;\nif(state.view==='Jobs')h=renderJobs();\nif(state.view==='Discovery')h=head('FIND <em>THAT</em> CLIENT','Companies hiring remote tech roles open to a global workforce.',action)+`<div class=\"stats\"><div class=\"stat\"><small>Companies found</small><strong>${state.prospects.filter(p=>String(p.id).startsWith('board:')).length}</strong><span>We Work Remotely, Remote.io, Himalayas</span></div><div class=\"stat\"><small>Awaiting review</small><strong>${state.prospects.filter(p=>p.status==='Needs review').length}</strong><span>No outreach authorized yet</span></div><div class=\"stat\"><small>Approved contacts</small><strong>${state.prospects.filter(p=>p.status==='Approved').length}</strong><span>Ready for an Apollo sequence</span></div><div class=\"stat\"><small>Apollo</small><strong style=\"font-size:22px\">${state.connected?'Connected':'Not connected'}</strong><span>${state.connected?'Contacts and campaigns':'Connect before finding people'}</span></div></div><div class=\"grid\"><section class=\"panel\"><h2>Where these companies come from</h2><div class=\"toolbar\"><label>Source<select id=\"source\"><option value=\"ats\" ${state.source==='ats'?'selected':''}>We Work Remotely, Remote.io, Himalayas</option><option value=\"apollo\" ${state.source==='apollo'?'selected':''}>Apollo company database</option></select></label></div><div class=\"chips\"><span>Global workforce</span><span>India and US remote</span><span>Technical roles</span><span>0 credits to load companies</span></div><p class=\"scope-note\">Loads every matching company from the current We Work Remotely programming feeds, Himalayas worldwide listings, and Remote.io tech job pages. A role counts when the listing is open worldwide, or open to both India and the United States. US-only roles are left out.</p><p class=\"muted\">Remote.io checks the next 80 tech listings each time you load, then continues on the next click. Finding a person in Apollo uses credits. Adding an approved contact to a sequence does not.</p></section><section class=\"panel\"><h2>Connection & activity</h2><div class=\"row\"><span>Monthly credit allowance</span><b>${state.budget?.used??0} / 100 reserved</b></div><p class=\"muted\">One credit per company search or business-email lookup. Sequence enrollment is separate and does not use this allowance.</p><div class=\"row\"><span>Apollo account</span>${badge(state.connected?'Connected':'Setup needed')}</div><div class=\"row\"><span>Last load</span><span>${esc(when(state.lastRun?.at))}</span></div>${state.lastRun?`<p>${state.lastRun.added??0} new companies saved from ${state.lastRun.returned??0} matches.${state.lastRun.counts?` We Work Remotely ${state.lastRun.counts.wwr||0}, Himalayas ${state.lastRun.counts.himalayas||0}, Remote.io ${state.lastRun.counts.remoteio||0}.`:''} ${state.lastRun.refreshed||0} existing companies refreshed.${state.lastRun.failed?` ${state.lastRun.failed} source${state.lastRun.failed===1?'':'s'} unavailable.`:''}</p>`:''}<button class=\"btn\" data-view=\"Team & connections\">${state.connected?'Manage connection':'Connect Apollo'}</button></section></div><section class=\"panel\" style=\"margin-top:20px\"><h2>Saved companies</h2>${boardProspects().length?companyTable(filteredCompanies()):empty('No companies loaded yet','Load We Work Remotely, Remote.io, and Himalayas to see employers hiring a global remote workforce.')}</section>`;\nif(state.view==='Approval queue'||state.view==='Approved'){const ps=state.prospects.filter(p=>p.status===(state.view==='Approved'?'Approved':'Needs review'));h=head(state.view,state.view==='Approved'?'Exact recipient and message approved. Nothing has been sent.':'Check company fit, select a contact, and review the exact message.')+`<section class=\"panel\">${ps.length?table(ps):empty(state.view==='Approved'?'No approved messages yet':'Your review queue is clear','Discover companies to add new prospects.')}</section><section class=\"panel\" style=\"margin-top:20px\"><h2>Excluded prospects</h2>${state.prospects.some(p=>['Rejected','Opted out'].includes(p.status))?table(state.prospects.filter(p=>['Rejected','Opted out'].includes(p.status))):'<p>No rejected or opted-out prospects.</p>'}</section>`}\nif(state.view==='Pipeline'){const stages=['New','Contacted','Replied','Meeting'];h=head('CLIENT <em>PIPELINE</em>','Track conversations manually while Outlook is disconnected.')+`<div class=\"board\">${stages.map(stage=>`<section class=\"column\"><h2>${stage}</h2>${state.prospects.filter(p=>!['Rejected','Opted out'].includes(p.status)&&(p.stage||'New')===stage).map(p=>`<div class=\"card\"><b>${esc(p.company)}</b><p>${esc(p.contact?.name||'Contact needed')}</p>${badge(p.status)}<select aria-label=\"Stage for ${esc(p.company)}\" data-stage=\"${esc(p.id)}\">${stages.map(s=>`<option ${stage===s?'selected':''}>${s}</option>`).join('')}</select></div>`).join('')||'<p>No prospects here.</p>'}</section>`).join('')}</div>`}\nif(state.view==='Replies')h=head('REPLIES','Real conversations will appear after Outlook is connected.')+`<section class=\"panel\">${empty('Mailbox connection needed','No mailbox is being read and no follow-up emails are scheduled.')}<button class=\"btn\" data-view=\"Team & connections\">Connection status</button></section>`;\nif(state.view==='Team & connections')h=head('TEAM <em>&</em> CONNECTIONS','Public job boards power hiring discovery. Apollo helps find contacts.')+`<div class=\"grid\"><section class=\"panel\"><h2>Apollo ${state.connected?'· connected':''}</h2><p>Your API key is encrypted on the server and is never displayed after saving.</p><form id=\"connect\"><label>Apollo API key<input id=\"apikey\" type=\"password\" autocomplete=\"off\" required placeholder=\"Enter your API key here, not in chat\"></label><p class=\"muted\">Allow company search, people search, contact create, and sequence enrollment. The connection test uses a people search and does not start discovery.</p><button class=\"btn primary\" ${state.busy?'disabled':''}>${state.connected?'Replace connection':'Connect Apollo'}</button></form>${state.connected?'<button class=\"btn\" style=\"margin-top:15px\" id=\"disconnect\">Disconnect Apollo</button>':''}<p><a href=\"https://developer.apollo.io/\" target=\"_blank\" rel=\"noopener\">Open Apollo developer settings</a></p><p class=\"muted\">API access depends on your Apollo account and key permissions.</p></section><section class=\"panel\"><h2>Monthly allowance</h2><p><b>${state.budget?.used??0} / 100 credits reserved</b> for ${esc(state.budget?.month||'this month')}.</p><p class=\"muted\">One credit reserved per company search or business-email enrichment attempt, using Apollo’s current standard pricing. Phone and waterfall enrichment stay off. Legacy plan pricing may differ; this counter is not your Apollo billing balance. Resets on the first of each month in Chicago time.</p><h2>Team & Outlook</h2><div class=\"row\"><span>Jahnavi · workspace owner</span>${badge('Not connected')}</div><p>Create the outreach sequence and connect a mailbox in Apollo. This workspace adds approved contacts to that sequence, and Apollo sends the email.</p><h2 style=\"margin-top:25px\">Approval rules</h2><p>Every initial message and every follow-up needs its own approval. Editing a message cancels its approval. Rejected and opted-out prospects stay excluded from discovery duplicates.</p></section></div>`;\n$('#app').innerHTML=(state.error?`<div class=\"error\">${esc(state.error)} <button class=\"btn\" id=\"retry\">Retry</button></div>`:'')+h;\ndocument.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>go(b.dataset.view));document.querySelectorAll('[data-review]').forEach(b=>b.onclick=()=>review(b.dataset.review));document.querySelectorAll('[data-stage]').forEach(s=>s.onchange=()=>changeStage(s.dataset.stage,s.value));if($('#source'))$('#source').onchange=e=>{state.source=e.target.value;render()};if($('#scope'))$('#scope').onchange=e=>{state.scope=e.target.value};if($('#refreshjobs'))$('#refreshjobs').onclick=refreshJobFeed;if($('#jobquery'))$('#jobquery').oninput=e=>{const start=e.target.selectionStart;state.jobsQuery=e.target.value;render();const next=$('#jobquery');if(next){next.focus();try{next.setSelectionRange(start,start)}catch{}}};if($('#jobscope'))$('#jobscope').onchange=e=>{state.jobsSource=e.target.value;render()};if($('#sequence'))$('#sequence').onchange=e=>{state.sequenceId=e.target.value};if($('#mailbox'))$('#mailbox').onchange=e=>{state.emailAccountId=e.target.value};if($('#loadcampaigns'))$('#loadcampaigns').onclick=loadCampaigns;if($('#sendcampaign'))$('#sendcampaign').onclick=()=>sendCampaign();document.querySelectorAll('[data-job-company]').forEach(b=>b.onclick=()=>saveJobToQueue(b.dataset.jobCompany));document.querySelectorAll('[data-source-filter]').forEach(b=>b.onclick=()=>{state.jobsSource=b.dataset.sourceFilter;render()});if($('#retry'))$('#retry').onclick=load;if($('#discover'))$('#discover').onclick=discover;if($('#connect'))$('#connect').onsubmit=connect;if($('#disconnect'))$('#disconnect').onclick=disconnect;}\nasync function busy(fn){if(state.busy)return;state.busy=true;render();try{await fn()}catch(e){toast(e.message)}finally{state.busy=false;await load()}}\nasync function discover(){await busy(async()=>{const r=await api('discover',{source:state.source,scope:state.scope});toast(`${r.added} new companies saved.${r.source==='ATS'?` ${r.refreshed} existing companies refreshed; ${r.failed} boards unavailable.`:''}`)})}\nasync function connect(ev){ev.preventDefault();const key=$('#apikey').value;await busy(async()=>{await api('connect',{key});toast('Apollo connected. You can now run company discovery.');state.view='Discovery'})}\nasync function disconnect(){await busy(async()=>{await api('disconnect',{});toast('Apollo disconnected. Your saved prospects remain.')})}\nasync function changeStage(id,stage){const p=state.prospects.find(p=>p.id===id);try{await api('prospect',{id,revision:p.revision,action:'pipeline',stage});await load()}catch(e){toast(e.message);await load()}}\nfunction emailPreview(p){const company=p.company||'your team',role=(p.hiringJobs&&p.hiringJobs[0]&&p.hiringJobs[0].title)||'remote technical role',first=p.firstName||p.contact?.name?.split(' ')[0]||'there';return {subject:`Hiring for your ${role}`,body:`Hi ${first},\\n\\nHope you're doing well.\\n\\nI noticed ${company} is hiring for a ${role}, wanted to reach out in case hiring is starting to feel heavier than it should.\\n\\nMost teams we speak with are dealing with the same pain:\\n\\nToo many resumes, not enough real fits\\nWeeks spent screening before the first good interview\\nHard-to-fill roles slowing down delivery\\nPayroll, compliance, and onboarding adding more work on top\\n\\nPeople Prime Worldwide helps companies hire faster without the resume pile. We’re a staffing partner with 14+ years of experience and 50,000+ successful deployments, supporting US remote tech hiring across contract and contract-to-hire.\\n\\nHow we can help:\\n\\nSend a small, vetted shortlist, not 100+ applicants\\nMatch on skills, seniority, and work authorization\\nSupport contract and C2H engagements\\nHandle payroll, compliance, and onboarding if you hire through us\\n\\nIf useful, I’d be happy to put together 3 free profiles for your ${role} opening within 24–48 hours.\\n\\nYou can also post the role here for free:\\nhttps://peopleremotely.com\\n\\nHappy to jump on a quick call if easier.`}}\nfunction review(id){selected=state.prospects.find(p=>p.id===id);const p=selected;const mail=(p.subject||p.body)&&p.subject!==`Helping ${p.company} fill global remote tech roles`?p:emailPreview(p);const excluded=['Rejected','Opted out'].includes(p.status);$('#modal').style.width='min(1000px,94vw)';$('#modal').innerHTML=`<div class=\"head\"><div><h2>${esc(p.company)}</h2>${badge(p.status)}</div><button class=\"btn\" id=\"close\">Close</button></div><div id=\"modalerror\" role=\"alert\"></div><div class=\"review-grid\"><section><h2>Why this company</h2><p>${esc(p.signal)}</p><p class=\"muted\">Found ${esc(when(p.discoveredAt))}</p><p><a href=\"${esc(p.source)}\" target=\"_blank\" rel=\"noopener\">${p.hiringSource?'View employer job board':'Review company in Apollo'}</a>${p.website?` · <a href=\"${esc(p.website)}\" target=\"_blank\" rel=\"noopener\">Company website</a>`:''}</p>${jobEvidence(p)}<label>Hiring evidence and company-fit notes<textarea id=\"evidence\" style=\"min-height:100px\" placeholder=\"Paste a careers-page link and the relevant roles. Note why the company is a startup fit.\">${esc(p.evidence)}</textarea></label><label><input id=\"fit\" type=\"checkbox\" ${p.fitReviewed?'checked':''}>I reviewed company fit, hiring evidence, and location restrictions</label><h2>Decision-maker</h2>${p.contact?`<p><b>${esc(p.contact.name)}</b><br>${esc(p.contact.title)}<br>${esc(p.contact.email||'No email returned')}<br>${badge(p.contact.emailStatus||'Unverified')}</p>`:'<p>No contact selected yet.</p>'}<label>Company domain<input id=\"domain\" value=\"${esc(p.domain||domainOf(p.website))}\" placeholder=\"company.com\" autocomplete=\"off\"></label><p class=\"muted\">The website is filled in automatically when it can be found. Check it before searching. Finding the company uses 1 Apollo credit. Finding people does not.</p><button class=\"btn\" id=\"findcontacts\" ${excluded?'disabled':''}>Find company in Apollo · 1 credit</button>${p.apolloId?'<button class=\"btn\" id=\"findpeople\">Find people · no credit</button>':''}<div id=\"contacts\"></div></section><section><h2>Message for your approval</h2><label>Subject<input id=\"subject\" value=\"${esc(mail.subject)}\"></label><label>Email<textarea id=\"message\">${esc(mail.body)}</textarea></label><p class=\"muted\">Save this message before approving. Apollo sends the copy already written in the sequence you select, from the mailbox you choose, so paste this template into that sequence. Use Apollo’s {{first_name}} and {{company}} fields. The role name here comes from the open job.</p><div class=\"toolbar\"><button class=\"btn\" id=\"save\" ${excluded?'disabled':''}>Save changes</button><button class=\"btn primary\" id=\"approve\" ${excluded?'disabled':''}>Approve message</button></div><div class=\"toolbar\"><button class=\"btn\" id=\"reject\" ${excluded?'disabled':''}>Reject prospect</button><button class=\"btn\" id=\"suppress\" ${excluded?'disabled':''}>Mark opted out</button></div>${p.approval?`<p class=\"muted\">Approved ${esc(when(p.approval.at))}. ${p.campaign?'This contact is already in an Apollo sequence.':'Add them from the campaign panel, or use the button below.'}</p><button class=\"btn primary\" id=\"sendone\" ${p.campaign?'disabled':''}>Add this contact to the Apollo sequence</button>`:''}</section></div>`;if(!$('#modal').open)$('#modal').showModal();$('#close').onclick=()=>$('#modal').close();$('#save').onclick=()=>mutate('save',{subject:$('#subject').value,body:$('#message').value,evidence:$('#evidence').value,fitReviewed:$('#fit').checked});$('#approve').onclick=()=>{if($('#subject').value!==p.subject||$('#message').value!==p.body||$('#evidence').value!==p.evidence||$('#fit').checked!==p.fitReviewed)return modalError('Save your changes before approving.');mutate('approve')};$('#reject').onclick=()=>mutate('reject');$('#suppress').onclick=()=>mutate('suppress');$('#findcontacts').onclick=findContacts;if($('#findpeople'))$('#findpeople').onclick=()=>findPeople();if($('#sendone'))$('#sendone').onclick=()=>sendCampaign(p.id);if(!$('#domain').value)lookupWebsite(p);}\nfunction modalError(t){$('#modalerror').className='error';$('#modalerror').textContent=t}\nasync function mutate(action,extra={}){const p=selected;document.querySelectorAll('#modal button').forEach(b=>b.disabled=true);try{await api('prospect',{id:p.id,revision:p.revision,action,...extra});await load();review(p.id);toast(action==='approve'?'Message approved. Add the contact to an Apollo sequence when you are ready.':'Changes saved.')}catch(e){modalError(e.message);document.querySelectorAll('#modal button').forEach(b=>b.disabled=false)}}\nfunction domainOf(value){const raw=String(value||'').trim();if(!raw)return '';try{return new URL(/^https?:/i.test(raw)?raw:'https://'+raw).hostname.replace(/^www\\./,'').toLowerCase()}catch{return ''}}\nfunction matchCards(list){return list.map(o=>`<div class=\"card\"><b>${esc(o.name)}</b><p>${esc(o.domain||o.website||'No website on this Apollo record')} · ${esc(o.country||'Location unavailable')}</p><button class=\"btn\" data-link=\"${esc(o.id)}\">Confirm this company</button></div>`).join('')}\nasync function lookupWebsite(p){try{const r=await api('website',{name:p.company});if(selected!==p||!r.domain||$('#domain').value)return;$('#domain').value=r.domain}catch{}}\nasync function findContacts(){const p=selected;$('#findcontacts').disabled=true;try{let domain=$('#domain')?.value||'';if(!domain){const found=await api('website',{name:p.company});domain=found.domain||'';if(domain&&selected===p&&$('#domain'))$('#domain').value=domain}const r=await api('prospect',{id:p.id,revision:p.revision,action:'resolve',domain});p.revision=r.revision;if(r.domain)p.domain=r.domain;if(!r.companies.length){$('#contacts').innerHTML=r.domain?`<p>Apollo does not have a company for <b>${esc(r.domain)}</b>. Nothing was linked. Try another domain, or research this contact outside Apollo.</p>`:'<p>Apollo has no company under this name. Add the website domain, such as company.com, and search again.</p>';return}const note=r.notFound?'':r.nameOnly?'<p>These are name matches only, so they may be a different business. Enter the company domain and search again for the exact Apollo record.</p>':'<p>Apollo matched this domain. Confirm it is the same company:</p>';$('#contacts').innerHTML=note+matchCards(r.companies);document.querySelectorAll('[data-link]').forEach(b=>b.onclick=()=>mutate('link',{organizationId:b.dataset.link}))}catch(e){modalError(e.message)}finally{$('#findcontacts').disabled=false}}\nasync function findPeople(){const p=selected;const button=$('#findpeople');if(button)button.disabled=true;try{const r=await api('prospect',{id:p.id,revision:p.revision,action:'contacts'});$('#contacts').innerHTML=r.contacts.length?r.contacts.map(c=>`<div class=\"card\"><b>${esc(c.name)}</b><p>${esc(c.title)}</p><p class=\"muted\">Business email lookup may use Apollo credits.</p><button class=\"btn\" data-enrich=\"${esc(c.id)}\">Select & find business email</button></div>`).join(''):'<p>No one with those titles was returned for this Apollo company.</p>';document.querySelectorAll('[data-enrich]').forEach(b=>b.onclick=()=>mutate('enrich',{contactId:b.dataset.enrich}))}catch(e){modalError(e.message)}finally{if(button)button.disabled=false}}\nfunction jobEvidence(p){if(!p.hiringJobs)return '';return `<h2 style=\"margin-top:22px\">Open remote roles</h2><p class=\"sources-summary\">Checked ${esc(when(p.hiringCheckedAt))}. A live listing is a hiring signal, not proof of agency demand.</p>${p.hiringJobs.map(j=>`<div class=\"job-evidence\"><a href=\"${esc(j.url)}\" target=\"_blank\" rel=\"noopener\">${esc(j.title)}</a><p>${esc(j.location)}</p>${badge(j.scope)}<p class=\"muted\">${j.publishedAt?'Published '+esc(when(j.publishedAt)):'Publication date not supplied'}</p></div>`).join('')}`}\nfunction jobDate(value){return new Date(value).toLocaleString('en-US',{timeZone:'America/Chicago',month:'short',day:'numeric',hour:'numeric',minute:'2-digit'})+' CT'}\nfunction boardProspects(){return state.prospects.filter(p=>String(p.id).startsWith('board:'))}\nfunction filteredCompanies(){const q=state.jobsQuery.toLowerCase();return boardProspects().filter(p=>{const src=!state.jobsSource||(p.sources||[]).includes(state.jobsSource)||p.hiringJobs?.some(j=>j.source===state.jobsSource);const blob=[p.company,...(p.hiringJobs||[]).map(j=>j.title+' '+j.location)].join(' ').toLowerCase();return src&&(!q||blob.includes(q))})}\nfunction companyTable(ps){return `<div class=\"tablewrap\"><table><thead><tr><th>Company</th><th>Roles</th><th>Boards</th><th>Contact</th><th></th></tr></thead><tbody>${ps.map(p=>`<tr><td><strong>${esc(p.company)}</strong><small>${esc((p.hiringJobs||[]).map(j=>j.title).slice(0,2).join(' · ')||'Remote technical role')}</small></td><td>${p.remoteJobCount||p.hiringJobs?.length||0}</td><td>${(p.sources||[...new Set((p.hiringJobs||[]).map(j=>j.source))]).map(s=>`<span class=\"pill\">${esc(s)}</span>`).join(' ')}</td><td>${esc(p.contact?.name||'Not selected')}<br><small>${esc(p.contact?.title||p.status)}</small></td><td><button class=\"btn\" data-review=\"${esc(p.id)}\">Review</button></td></tr>`).join('')}</tbody></table></div>`}\nfunction campaignPanel(){return `<section class=\"panel\" style=\"margin-top:20px\"><h2>Apollo campaign</h2><p>Approve a contact first. Apollo adds that contact to the sequence you pick and sends the email saved as a step in that sequence. Add the message inside the sequence in Apollo and turn the sequence on before adding the contact.</p><div class=\"toolbar\"><button class=\"btn\" id=\"loadcampaigns\" ${state.busy||!state.connected?'disabled':''}>${state.connected?'Load Apollo sequences':'Connect Apollo first'}</button><label>Sequence<select id=\"sequence\">${state.sequences.length?state.sequences.map(s=>`<option value=\"${esc(s.id)}\" ${state.sequenceId===s.id?'selected':''}>${esc(s.name)}</option>`).join(''):'<option value=\"\">No sequence loaded</option>'}</select></label><label>Mailbox<select id=\"mailbox\">${state.emailAccounts.length?state.emailAccounts.map(a=>`<option value=\"${esc(a.id)}\" ${state.emailAccountId===a.id?'selected':''}>${esc(a.email)}</option>`).join(''):'<option value=\"\">No mailbox loaded</option>'}</select></label><button class=\"btn primary\" id=\"sendcampaign\" ${state.busy||!state.sequenceId?'disabled':''}>Add approved contacts</button></div><p class=\"muted\">${state.prospects.filter(p=>p.status==='Approved'&&p.contact?.emailStatus==='verified').length} approved contacts with a verified email. ${state.prospects.filter(p=>p.campaign).length} already added to a sequence.</p></section>`}\nfunction renderJobs(){const companies=filteredCompanies();const run=state.lastRun?.source==='BOARDS'?state.lastRun:(state.jobsFeed?.run?.source==='BOARDS'?state.jobsFeed.run:null);const sources=['We Work Remotely','Himalayas','Remote.io'];\nconst summary=run?.at?`Last loaded ${esc(when(run.at))}. ${run.counts?`We Work Remotely ${run.counts.wwr||0} roles, Himalayas ${run.counts.himalayas||0}, Remote.io ${run.counts.remoteio||0}. `:''}${run.remoteIo?.total?`Remote.io checked ${run.remoteIo.checked||0} of ${run.remoteIo.total} tech listings this pass. `:''}${run.failed?`${(run.failedBoards||[]).join(', ')} could not be reached.`:''}`:'Click load to pull the current listings. Finding companies does not use Apollo credits.';\nreturn head('COMPANIES <em>THAT</em> HIRE','Remote tech roles open to India and US remote.',`<button class=\"btn primary\" id=\"refreshjobs\" ${state.busy?'disabled':''}>${state.busy?'Loading companies…':'Load companies'}</button>`)+`<div class=\"jobs-toolbar\"><span>Showing ${companies.length} compan${companies.length===1?'y':'ies'}</span><label>Board<select id=\"jobscope\">${['',...sources].map(s=>`<option value=\"${esc(s)}\" ${state.jobsSource===s?'selected':''}>${s||'All three boards'}</option>`).join('')}</select></label><label>Search<input id=\"jobquery\" type=\"search\" value=\"${esc(state.jobsQuery)}\" placeholder=\"Company or role\"></label></div><p class=\"muted\">${summary}</p>${companies.length?companyTable(companies):empty(run?'No worldwide tech companies in this pass':'Company list','Load We Work Remotely, Remote.io, and Himalayas. Every matching company is kept.')}${campaignPanel()}`}\nasync function refreshJobFeed(){await busy(async()=>{const feed=await api('jobs/refresh',{});state.jobsFeed=feed;if(feed.run)state.lastRun=feed.run;toast(`${feed.added||0} new companies saved.${feed.failed?' Some sources could not be reached.':''}`)})}\nasync function loadCampaigns(){await busy(async()=>{const r=await api('campaigns',{});state.sequences=r.sequences||[];state.emailAccounts=r.emailAccounts||[];if(!state.sequences.some(s=>s.id===state.sequenceId))state.sequenceId=state.sequences[0]?.id||'';if(!state.emailAccounts.some(a=>a.id===state.emailAccountId))state.emailAccountId=(state.emailAccounts.find(a=>a.default)||state.emailAccounts[0])?.id||'';toast(state.sequences.length?`${state.sequences.length} Apollo sequences found.`:'No Apollo sequences yet. Create the email in Apollo, then load again.')})}\nasync function sendCampaign(prospectId){if(!state.sequenceId||!state.emailAccountId){toast('Load your Apollo sequences and choose a mailbox first.');return}await busy(async()=>{const r=await api('send',{sequenceId:state.sequenceId,emailAccountId:state.emailAccountId,...(prospectId?{prospectId}:{})});toast(`${r.added} contact${r.added===1?'':'s'} added to the Apollo sequence.${r.errors?.length?' '+r.errors[0]:''}`)});if(prospectId)review(prospectId)}\nasync function saveJobToQueue(jobId){await busy(async()=>{const r=await api('jobs/company',{jobId});toast(r.existing?'This company is already saved in your workspace.':'Company saved to the approval queue.')})}\n\nload();\n</script>\n</body>\n</html>\n";
const ATS_BOARDS=[
  {
    "ats": "himalayas",
    "slug": "himalayas",
    "name": "Himalayas"
  },
  {
    "slug": "elevenlabs",
    "name": "ElevenLabs"
  },
  {
    "slug": "numeral",
    "name": "Numeral"
  },
  {
    "slug": "partyhat",
    "name": "Partyhat"
  },
  {
    "slug": "Mintlify",
    "name": "Mintlify"
  },
  {
    "slug": "percona",
    "name": "Percona"
  },
  {
    "slug": "runpod",
    "name": "Runpod"
  },
  {
    "slug": "morpho",
    "name": "Morpho"
  },
  {
    "slug": "dehazelabs",
    "name": "DehazeLabs"
  },
  {
    "slug": "whitecircle",
    "name": "White Circle"
  },
  {
    "slug": "flipper",
    "name": "Flipper"
  },
  {
    "slug": "realmalliance",
    "name": "Realm"
  },
  {
    "slug": "dash0",
    "name": "Dash0"
  },
  {
    "slug": "OpenAge",
    "name": "OpenAge"
  },
  {
    "slug": "scoreplay",
    "name": "ScorePlay"
  },
  {
    "slug": "posthog",
    "name": "PostHog"
  },
  {
    "slug": "deel",
    "name": "Deel"
  },
  {
    "slug": "owner",
    "name": "Owner.com"
  },
  {
    "slug": "chamelio",
    "name": "Chamelio"
  },
  {
    "slug": "CasperStudios",
    "name": "Casper Studios"
  },
  {
    "slug": "bespokelabs",
    "name": "Bespoke Labs"
  },
  {
    "slug": "emergence",
    "name": "Emergence Software"
  },
  {
    "slug": "trust-wallet",
    "name": "Trust Wallet"
  },
  {
    "slug": "blink",
    "name": "Blink Tech"
  },
  {
    "slug": "colonist",
    "name": "Colonist"
  },
  {
    "slug": "inflectionio",
    "name": "Inflection.io"
  },
  {
    "slug": "linear",
    "name": "Linear"
  },
  {
    "slug": "ashby",
    "name": "Ashby"
  },
  {
    "slug": "notion",
    "name": "Notion"
  },
  {
    "slug": "ramp",
    "name": "Ramp"
  },
  {
    "slug": "supabase",
    "name": "Supabase"
  },
  {
    "slug": "vercel",
    "name": "Vercel"
  },
  {
    "slug": "render",
    "name": "Render"
  },
  {
    "slug": "railway",
    "name": "Railway"
  },
  {
    "slug": "resend",
    "name": "Resend"
  },
  {
    "slug": "clerk",
    "name": "Clerk"
  },
  {
    "slug": "neon",
    "name": "Neon"
  },
  {
    "slug": "inngest",
    "name": "Inngest"
  },
  {
    "slug": "docker",
    "name": "Docker"
  },
  {
    "slug": "temporal",
    "name": "Temporal"
  },
  {
    "slug": "livekit",
    "name": "LiveKit"
  },
  {
    "slug": "lovable",
    "name": "Lovable"
  },
  {
    "slug": "replit",
    "name": "Replit"
  },
  {
    "slug": "modal",
    "name": "Modal"
  },
  {
    "slug": "baseten",
    "name": "Baseten"
  },
  {
    "slug": "gitbook",
    "name": "GitBook"
  },
  {
    "slug": "attio",
    "name": "Attio"
  },
  {
    "slug": "plain",
    "name": "Plain"
  },
  {
    "slug": "incident",
    "name": "incident.io"
  },
  {
    "slug": "zapier",
    "name": "Zapier"
  },
  {
    "slug": "sentry",
    "name": "Sentry"
  },
  {
    "slug": "cohere",
    "name": "Cohere"
  },
  {
    "slug": "imprint",
    "name": "Imprint"
  },
  {
    "slug": "mercury",
    "name": "Mercury"
  },
  {
    "slug": "polar",
    "name": "Polar"
  },
  {
    "slug": "langchain",
    "name": "LangChain"
  },
  {
    "slug": "clickhouse",
    "name": "ClickHouse"
  },
  {
    "slug": "airbyte",
    "name": "Airbyte"
  },
  {
    "ats": "greenhouse",
    "slug": "webflow",
    "name": "Webflow"
  },
  {
    "ats": "greenhouse",
    "slug": "figma",
    "name": "Figma"
  },
  {
    "ats": "greenhouse",
    "slug": "discord",
    "name": "Discord"
  },
  {
    "ats": "greenhouse",
    "slug": "asana",
    "name": "Asana"
  },
  {
    "ats": "greenhouse",
    "slug": "duolingo",
    "name": "Duolingo"
  },
  {
    "ats": "greenhouse",
    "slug": "airtable",
    "name": "Airtable"
  },
  {
    "ats": "greenhouse",
    "slug": "netlify",
    "name": "Netlify"
  },
  {
    "ats": "greenhouse",
    "slug": "planetscale",
    "name": "PlanetScale"
  },
  {
    "ats": "greenhouse",
    "slug": "honeycomb",
    "name": "Honeycomb"
  },
  {
    "ats": "greenhouse",
    "slug": "launchdarkly",
    "name": "LaunchDarkly"
  },
  {
    "ats": "greenhouse",
    "slug": "mixpanel",
    "name": "Mixpanel"
  },
  {
    "ats": "greenhouse",
    "slug": "algolia",
    "name": "Algolia"
  },
  {
    "ats": "greenhouse",
    "slug": "contentful",
    "name": "Contentful"
  },
  {
    "ats": "greenhouse",
    "slug": "customerio",
    "name": "Customer.io"
  },
  {
    "ats": "greenhouse",
    "slug": "cockroachlabs",
    "name": "Cockroach Labs"
  },
  {
    "ats": "greenhouse",
    "slug": "fastly",
    "name": "Fastly"
  },
  {
    "ats": "greenhouse",
    "slug": "pagerduty",
    "name": "PagerDuty"
  },
  {
    "ats": "greenhouse",
    "slug": "salesloft",
    "name": "Salesloft"
  },
  {
    "ats": "greenhouse",
    "slug": "greenhouse",
    "name": "Greenhouse"
  },
  {
    "ats": "greenhouse",
    "slug": "remote",
    "name": "Remote"
  },
  {
    "ats": "lever",
    "slug": "angellist",
    "name": "Wellfound"
  },
  {
    "ats": "lever",
    "slug": "anyscale",
    "name": "Anyscale"
  }
];
const ROLE_BOARDS=[
  {"ats":"greenhouse","slug":"stripe","name":"Stripe"},
  {"ats":"greenhouse","slug":"airbnb","name":"Airbnb"},
  {"ats":"greenhouse","slug":"coinbase","name":"Coinbase"},
  {"ats":"greenhouse","slug":"robinhood","name":"Robinhood"},
  {"ats":"greenhouse","slug":"pinterest","name":"Pinterest"},
  {"ats":"greenhouse","slug":"databricks","name":"Databricks"},
  {"ats":"greenhouse","slug":"cloudflare","name":"Cloudflare"},
  {"ats":"greenhouse","slug":"okta","name":"Okta"},
  {"ats":"greenhouse","slug":"twilio","name":"Twilio"},
  {"ats":"greenhouse","slug":"mongodb","name":"MongoDB"},
  {"ats":"greenhouse","slug":"chime","name":"Chime"},
  {"ats":"greenhouse","slug":"scaleai","name":"Scale AI"},
  {"ats":"greenhouse","slug":"datadog","name":"Datadog"},
  {"ats":"greenhouse","slug":"kalshi","name":"Kalshi"},
  {"ats":"greenhouse","slug":"andurilindustries","name":"Anduril"},
  {"ats":"ashby","slug":"openai","name":"OpenAI"},
  {"ats":"ashby","slug":"perplexity","name":"Perplexity"}
]
;
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

const json=(x,status=200)=>Response.json(x,{status,headers:{'Cache-Control':'no-store'}});
class AppError extends Error {constructor(message,status=400){super(message);this.status=status}}
const db=(env)=>{if(!env.DB)throw new AppError('Saved data is temporarily unavailable.',503);return env.DB};
const getSetting=async(e,k)=>(await db(e).prepare('SELECT value FROM settings WHERE key = ?').bind(k).first())?.value;
const setting=(e,k,v)=>db(e).prepare('INSERT INTO settings(key,value) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value').bind(k,v).run();
const record=async(e,id)=>{const r=await db(e).prepare('SELECT * FROM records WHERE id = ?').bind(id).first();if(!r)throw new AppError('Prospect not found.',404);return {...JSON.parse(r.data),revision:r.revision}};
const all=async(e,kind)=>(await db(e).prepare('SELECT * FROM records WHERE kind = ? ORDER BY updated DESC LIMIT 2000').bind(kind).all()).results.map(r=>({...JSON.parse(r.data),revision:r.revision}));
async function insert(e,p){return db(e).prepare('INSERT OR IGNORE INTO records(id,kind,data,revision,updated) VALUES(?,?,?,?,?)').bind(p.id,'prospect',JSON.stringify(p),1,new Date().toISOString()).run()}
async function update(e,p,rev){const result=await db(e).prepare('UPDATE records SET data=?,revision=revision+1,updated=? WHERE id=? AND revision=?').bind(JSON.stringify(p),new Date().toISOString(),p.id,rev).run();if(!result.meta.changes)throw new AppError('This prospect changed in another window. Reload and review again.',409)}
const to64=b=>btoa(String.fromCharCode(...new Uint8Array(b)));const from64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
async function cryptoKey(e){if(!e.CREDENTIAL_ENCRYPTION_KEY)throw new AppError('Connection security is not configured.',503);return crypto.subtle.importKey('raw',from64(e.CREDENTIAL_ENCRYPTION_KEY),'AES-GCM',false,['encrypt','decrypt'])}
async function encrypt(e,value){const iv=crypto.getRandomValues(new Uint8Array(12));return JSON.stringify({iv:to64(iv),data:to64(await crypto.subtle.encrypt({name:'AES-GCM',iv},await cryptoKey(e),new TextEncoder().encode(value)))})}
async function apolloKey(e){const raw=await getSetting(e,'apollo');if(!raw)throw new AppError('Connect your Apollo account in Discovery first.',409);const x=JSON.parse(raw);return new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:from64(x.iv)},await cryptoKey(e),from64(x.data)))}
function budgetMonth(){const parts=new Intl.DateTimeFormat('en-US',{timeZone:'America/Chicago',year:'numeric',month:'2-digit'}).formatToParts(new Date());return parts.find(p=>p.type==='year').value+'-'+parts.find(p=>p.type==='month').value}
async function budget(e){const month=budgetMonth();return {month,limit:100,used:Number(await getSetting(e,'credits:'+month)||0)}}
async function reserveCredit(e){const k='credits:'+budgetMonth();const result=await db(e).prepare("INSERT INTO settings(key,value) VALUES(?, '1') ON CONFLICT(key) DO UPDATE SET value=CAST(CAST(settings.value AS INTEGER)+1 AS TEXT) WHERE CAST(settings.value AS INTEGER)<100").bind(k).run();if(!result.meta.changes)throw new AppError('Monthly 100-credit allowance reached. Paid requests are paused until next month.',429)}
async function apollo(e,key,path,body,method='POST'){const bare=String(path).split('?')[0];if(['mixed_companies/search','people/match','organizations/enrich'].includes(bare))await reserveCredit(e);let r;try{r=await fetch('https://api.apollo.io/api/v1/'+path,{method,headers:{'Content-Type':'application/json','x-api-key':key,'accept':'application/json'},body:method==='GET'?undefined:JSON.stringify(body??{}),signal:AbortSignal.timeout(25000)})}catch{throw new AppError('Apollo did not respond. Please try again later.',502)}if(!r.ok){if(r.status===404&&bare==='organizations/enrich')return {organization:null};throw new AppError(({401:'Apollo rejected this API key.',403:'Your Apollo key or plan does not permit this operation.',429:'Apollo rate limit reached. Try again later.'})[r.status]||'Apollo could not complete the request.',502)}return r.json()}
async function lock(e,key,fn){const now=Date.now();const r=await db(e).prepare('INSERT INTO locks(key,expires) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET expires=excluded.expires WHERE locks.expires < ?').bind(key,now+120000,now).run();if(!r.meta.changes)throw new AppError('This operation is already running. Please wait.',409);try{return await fn()}finally{await db(e).prepare('DELETE FROM locks WHERE key=? AND expires=?').bind(key,now+120000).run()}}
const text=(s,max=1000)=>typeof s==='string'?s.trim().slice(0,max):'';
function apolloQuery(path,params){const q=new URLSearchParams();for(const [k,v] of Object.entries(params)){const key=Array.isArray(v)?k+'[]':k;for(const item of [].concat(v))if(item!==undefined&&item!=='')q.append(key,String(item))}return path+'?'+q.toString()}
const safeURL=s=>{try{const u=new URL(s);return u.protocol==='https:'?u.href:''}catch{return ''}};
function draft(p){const first=p.firstName||'there',company=p.company||'your team',role=(p.hiringJobs&&p.hiringJobs[0]&&p.hiringJobs[0].title)||'remote technical role';return {subject:`Hiring for your ${role}`,body:`Hi ${first},\n\nHope you're doing well.\n\nI noticed ${company} is hiring for a ${role}, wanted to reach out in case hiring is starting to feel heavier than it should.\n\nMost teams we speak with are dealing with the same pain:\n\nToo many resumes, not enough real fits\nWeeks spent screening before the first good interview\nHard-to-fill roles slowing down delivery\nPayroll, compliance, and onboarding adding more work on top\n\nPeople Prime Worldwide helps companies hire faster without the resume pile. We’re a staffing partner with 14+ years of experience and 50,000+ successful deployments, supporting US remote tech hiring across contract and contract-to-hire.\n\nHow we can help:\n\nSend a small, vetted shortlist, not 100+ applicants\nMatch on skills, seniority, and work authorization\nSupport contract and C2H engagements\nHandle payroll, compliance, and onboarding if you hire through us\n\nIf useful, I’d be happy to put together 3 free profiles for your ${role} opening within 24–48 hours.\n\nYou can also post the role here for free:\nhttps://peopleremotely.com\n\nHappy to jump on a quick call if easier.`}}
function skipMessage(reason){return {contacts_finished_in_other_campaigns:'This contact already finished another Apollo sequence. They were not added to this one.',contacts_active_in_other_campaigns:'This contact is still active in another Apollo sequence, so Apollo did not add them here.',contacts_without_email:'Apollo has no email for this contact.',contacts_unverified_email:'Apollo does not have a verified email for this contact.',contacts_with_job_change:'Apollo marked a job change for this contact and did not add them.',contacts_no_permission:'Apollo blocked outreach to this contact.',contact_not_found:'Apollo could not find this contact.'}[reason]||'Apollo did not place this contact in the sequence.'}
async function listCampaigns(e){const key=await apolloKey(e);const [sequences,accounts]=await Promise.all([apollo(e,key,'emailer_campaigns/search',{page:1,per_page:50}),apollo(e,key,'email_accounts',null,'GET')]);return {sequences:(sequences.emailer_campaigns||[]).filter(s=>s.id&&s.name&&!s.archived).map(s=>({id:s.id,name:text(s.name,200),active:s.active!==false})),emailAccounts:(accounts.email_accounts||accounts.email_accounts||[]).filter(a=>a.id&&a.active!==false).map(a=>({id:a.id,email:text(a.email,254),default:!!a.default}))}}
async function enrollCampaign(e,b){const sequenceId=text(b.sequenceId,80),emailAccountId=text(b.emailAccountId,80);if(!sequenceId||!emailAccountId)throw new AppError('Choose an Apollo sequence and sending mailbox first. Apollo sends the email from that sequence.',409);const key=await apolloKey(e);const campaign=await apollo(e,key,'emailer_campaigns/'+encodeURIComponent(sequenceId),null,'GET');const sequence=campaign.emailer_campaign||campaign;const steps=Number(sequence.num_steps??sequence.emailer_steps?.length??0);const sequenceName=text(sequence.name,200)||'This sequence';if(!steps)throw new AppError(sequenceName+' has no email step in Apollo. Open the sequence, add the email, turn it on, then add the contact here.',409);if(sequence.active===false)throw new AppError(sequenceName+' is turned off in Apollo. Turn the sequence on, then add the contact here.',409);const waiting=(await all(e,'prospect')).filter(p=>p.status==='Approved'&&p.contact?.emailStatus==='verified'&&p.contact?.email&&(!b.prospectId||p.id===b.prospectId)&&p.campaign?.sequenceId!==sequenceId).slice(0,40);if(!waiting.length)throw new AppError('No approved contacts with a verified email are waiting for this sequence.',409);let added=0;const errors=[];for(const raw of waiting){try{await lock(e,'p:'+raw.id,async()=>{const p=await record(e,raw.id);if(p.status!=='Approved'||p.contact?.emailStatus!=='verified'||p.campaign?.sequenceId===sequenceId)return;const rev=p.revision;delete p.revision;const parts=String(p.contact.name||'').trim().split(/\s+/);const created=await apollo(e,key,'contacts',{first_name:p.firstName||parts[0]||'there',last_name:text(p.contact.lastName||parts.slice(1).join(' '),100),email:p.contact.email,title:p.contact.title||'',organization_name:p.company,organization_id:p.apolloId||undefined,person_id:p.contact.personId||p.contact.id,run_dedupe:true});const contactId=created.contact?.id;if(!contactId)throw new AppError('Apollo did not return a contact id.',502);const q=new URLSearchParams({emailer_campaign_id:sequenceId,send_email_from_email_account_id:emailAccountId,sequence_finished_in_other_campaigns:'true'});q.append('contact_ids[]',contactId);const addedTo=await apollo(e,key,'emailer_campaigns/'+encodeURIComponent(sequenceId)+'/add_contact_ids?'+q,{});const skipReason=addedTo.skipped_contact_ids?.[contactId];const placed=(addedTo.contacts||[]).some(c=>c.id===contactId)||skipReason==='contacts_already_exists_in_current_campaign';if(!placed)throw new AppError(skipMessage(skipReason),502);p.contact.apolloContactId=contactId;p.campaign={sequenceId,emailAccountId,contactId,at:new Date().toISOString()};p.stage='Contacted';await update(e,p,rev);added++})}catch(err){errors.push(raw.company+': '+(err instanceof Error?err.message:'Could not add this contact.'))}}if(!added&&errors.length)throw new AppError(errors[0],502);return {added,errors}}
async function discovery(e){return lock(e,'discovery',async()=>{const key=await apolloKey(e);const page=Math.min(500,Number(await getSetting(e,'nextPage40_size500')||1));const data=await apollo(e,key,'mixed_companies/search',{organization_locations:['United States'],organization_num_employees_ranges:['20,500'],q_organization_keyword_tags:['software','SaaS','artificial intelligence'],q_organization_job_titles:['software engineer','data engineer','machine learning engineer','QA engineer'],organization_num_jobs_range:{min:1},page,per_page:40});if(!Array.isArray(data.organizations))throw new AppError('Apollo returned an unexpected company response.',502);let added=0;for(const o of data.organizations){if(!o.id||!o.name)continue;const p={id:'apollo:'+o.id,apolloId:o.id,company:text(o.name,200),website:safeURL(o.website_url),employees:o.estimated_num_employees??null,industry:text(o.industry,200),country:text(o.country,80),source:`https://app.apollo.io/#/organizations/${encodeURIComponent(o.id)}`,discoveredAt:new Date().toISOString(),signal:'Matched Apollo filters for US headquarters, 20–500 employees, technology keywords and active technical job postings. Verify startup status and current openings before approval.',status:'Needs review',stage:'New',owner:'Jahnavi',contact:null,subject:'',body:'',evidence:'',fitReviewed:false};const r=await insert(e,p);added+=r.meta.changes||0}await setting(e,'nextPage40_size500',String(data.organizations.length===40&&page<500?page+1:1));await setting(e,'lastRun',JSON.stringify({at:new Date().toISOString(),added,returned:data.organizations.length,page}));return {added,returned:data.organizations.length}})}
function rolesPage(data,family){
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const names={apm:'Associate product manager',pm:'Product manager','solution-engineer':'Solution engineer'};
 const tabs=[['', 'All'],['apm','Associate product manager'],['pm','Product manager'],['solution-engineer','Solution engineer']];
 const nav=tabs.map(([id,label])=>`<a class="${(family||'')===id?'on':''}" href="${id?'/api/roles?family='+encodeURIComponent(id):'/api/roles'}">${label}</a>`).join('');
 const rows=data.jobs.map(j=>{const meta=`${j.company} · ${names[j.family]||j.family} · ${j.location} · ${j.postedAgo}`;return `<article title="${esc(meta)}"><h2><a href="${esc(j.url)}" target="_blank" rel="noopener">${esc(j.title)}</a></h2><p class="meta">${esc(meta)}</p></article>`}).join('')||'<p class="empty">No full-time early-career roles in the United States for this group right now.</p>';
 return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Open product roles</title><link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,650&family=Outfit:wght@400;500;600&display=swap" rel="stylesheet"><style>
:root{--ink:#1c1c1c;--muted:#6d6860;--paper:#f3eee6;--card:#fffcf8;--line:#e4ddd2}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:14px/1.35 Outfit,system-ui,sans-serif}
main{max-width:720px;margin:0 auto;padding:12px 12px 28px}h1{font-family:Fraunces,Georgia,serif;font-size:22px;line-height:1.1;margin:0 0 2px}
.lead,.note{color:var(--muted);font-size:12px;margin:0}nav{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0}nav a{color:var(--ink);text-decoration:none;border:1px solid var(--line);background:var(--card);border-radius:999px;padding:3px 9px;font-size:12px}nav a.on{background:var(--ink);color:#fff;border-color:var(--ink)}
.list{display:grid;grid-template-columns:1fr;gap:4px}article{background:var(--card);border:1px solid var(--line);border-radius:6px;padding:5px 8px;min-width:0}h2{font-size:13px;line-height:1.2;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}h2 a{color:var(--ink);text-decoration:none}h2 a:hover{text-decoration:underline}.meta{color:var(--muted);font-size:11px;margin:1px 0 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.empty{padding:12px 0}
</style></head><body><main><h1>Full-time early-career roles in the United States</h1><p class="lead">${data.jobs.length} full-time ${data.jobs.length===1?'opening':'openings'} from the company boards saved in this project. Internships are left out.${data.truncated?' Showing the newest 500.':''}</p><nav>${nav}</nav>${data.failed?.length?`<p class="note">${data.failed.length} ${data.failed.length===1?'board did':'boards did'} not respond.</p>`:''}<div class="list">${rows}</div></main></body></html>`;
}
async function api(req,e){const u=new URL(req.url),path=u.pathname;const email=req.headers.get('oai-authenticated-user-email');if(!email||email.toLowerCase()!==e.OWNER_EMAIL?.toLowerCase())return json({error:'Sign in as the workspace owner to continue.'},403);if(req.method==='POST'&&(req.headers.get('origin')!==u.origin||!req.headers.get('content-type')?.startsWith('application/json')))return json({error:'Invalid request origin.'},403);let b={};if(req.method==='POST'){const body=await req.text();if(body.length>20000)throw new AppError('Request is too large.',413);try{b=JSON.parse(body)}catch{throw new AppError('Invalid request.')}}
if(path==='/api/state'&&req.method==='GET')return json({connected:!!await getSetting(e,'apollo'),prospects:await all(e,'prospect'),lastRun:JSON.parse(await getSetting(e,'lastRun')||'null'),outlook:false,atsBoardCount:ATS_BOARDS.length,jobsFeed:await jobsFeed(e),budget:await budget(e)});
if(path==='/api/connect'&&req.method==='POST'){const key=text(b.key,1000);if(key.length<10)throw new AppError('Enter a valid Apollo API key.');await apollo(e,key,'mixed_people/api_search',{person_titles:['head of talent'],per_page:1,page:1});await setting(e,'apollo',await encrypt(e,key));return json({connected:true})}
if(path==='/api/disconnect'&&req.method==='POST'){await db(e).prepare('DELETE FROM settings WHERE key=?').bind('apollo').run();return json({connected:false})}
if(path==='/api/jobs/refresh'&&req.method==='POST')return json(await refreshJobs(e));
if(path==='/api/jobs/company'&&req.method==='POST')return json(await saveJobCompany(e,text(b.jobId,1000)));
if(path==='/api/roles'&&req.method==='GET'){const family=u.searchParams.get('family')||'';const data=await findRoleJobs([...ATS_BOARDS,...ROLE_BOARDS],family);const accept=req.headers.get('accept')||'';if(u.searchParams.get('format')==='json'||!accept.includes('text/html'))return json(data);return new Response(rolesPage(data,family),{headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}})}
if(path==='/api/discover'&&req.method==='POST')return json(b.source==='apollo'?await discovery(e):await discoverBoards(e,b.scope||'worldwide'));
if(path==='/api/campaigns'&&req.method==='POST')return json(await listCampaigns(e));
if(path==='/api/send'&&req.method==='POST')return json(await enrollCampaign(e,b));
if(path==='/api/website'&&req.method==='POST')return json({domain:await suggestCompanyDomain(text(b.name,200))});
if(path==='/api/prospect'&&req.method==='POST'){return lock(e,'p:'+text(b.id),async()=>{const p=await record(e,text(b.id));if(b.revision!==p.revision)throw new AppError('Reload this prospect before changing it.',409);const rev=p.revision;delete p.revision;
function orgMatch(o){const id=o.organization_id||o.id;const domain=companyDomain(o.primary_domain||o.website_url||'');const website=safeURL(o.website_url)||(domain?'https://'+domain:'');return {id,name:text(o.name,200),website,domain,country:text(o.country||'',100)}}
if(b.action==='resolve'){
 if(p.status==='Opted out'||p.status==='Rejected')throw new AppError('This prospect is excluded.');
 const domain=companyDomain(b.domain||p.domain||p.website||'');
 const key=await apolloKey(e);
 if(domain){
  p.domain=domain;p.website='https://'+domain;
  const data=await apollo(e,key,'mixed_companies/search',{q_organization_domains_list:[domain],per_page:5,page:1});
  const rows=[...(data.organizations||[]),...(data.accounts||[])];
  p.companyMatches=rows.filter(o=>o.id&&o.name&&companyDomain(o.primary_domain||o.website_url||o.domain||'')===domain).map(orgMatch);
  p.apolloMiss=!p.companyMatches.length;
  await update(e,p,rev);return json({companies:p.companyMatches,notFound:!p.companyMatches.length,domain,revision:rev+1});
 }
 const data=await apollo(e,key,'mixed_companies/search',{q_organization_name:p.company,per_page:5,page:1});
 p.companyMatches=(data.organizations||[]).filter(o=>o.id&&o.name).map(orgMatch);
 p.apolloMiss=!p.companyMatches.length;
 await update(e,p,rev);return json({companies:p.companyMatches,nameOnly:true,notFound:!p.companyMatches.length,revision:rev+1});
}
if(b.action==='contacts'){if(!p.apolloId)throw new AppError('Confirm the company’s Apollo match first.');const titles=['CTO','Founder','VP People','Head of Engineering','Global Talent','Talent Acquisition Manager','Director of IT'];const domain=companyDomain(p.domain||p.website||'');const params={person_titles:titles,include_similar_titles:true,per_page:25,page:1};if(domain)params.q_organization_domains_list=[domain];else params.organization_ids=[p.apolloId];const data=await apollo(e,await apolloKey(e),apolloQuery('mixed_people/api_search',params),{});return json({contacts:(data.people||[]).map(c=>({id:c.id,firstName:c.first_name,name:[c.first_name,c.last_name||c.last_name_obfuscated].filter(Boolean).join(' '),title:c.title,hasEmail:c.has_email})),revision:rev})}
if(b.action==='link'){
 if(p.status==='Opted out'||p.status==='Rejected')throw new AppError('This prospect is excluded.');
 const match=p.companyMatches?.find(o=>o.id===b.organizationId);if(!match)throw new AppError('Choose a company from the latest Apollo matches.');p.apolloId=match.id;p.apolloMatch=match;p.website=match.website;p.companyMatches=[];p.contact=null;p.subject='';p.body='';p.approval=null;p.status='Needs review';p.fitReviewed=false;
}
else if(b.action==='enrich'){if(p.status==='Opted out')throw new AppError('This prospect has opted out.');const id=text(b.contactId,100);if(!id)throw new AppError('Select a contact.');const data=await apollo(e,await apolloKey(e),'people/match',{id,reveal_personal_emails:false,reveal_phone_number:false,run_waterfall_email:false});const c=data.person;const orgId=c?.organization_id||c?.organization?.id;const orgDomain=companyDomain(c?.organization?.primary_domain||c?.organization?.website_url||'');const wanted=companyDomain(p.domain||p.website||'');if(!c||orgId!==p.apolloId&&orgDomain!==wanted)throw new AppError('Apollo did not confirm this person belongs to the company.');p.contact={id:c.id,personId:c.id,name:text(c.name,200),lastName:text(c.last_name,100),title:text(c.title,200),email:text(c.email,254),emailStatus:text(c.email_status,50)};p.firstName=text(c.first_name,100);Object.assign(p,draft(p));p.status='Needs review';p.approval=null}
else if(b.action==='save'){p.subject=text(b.subject,250);p.body=text(b.body,10000);p.evidence=text(b.evidence,1500);p.fitReviewed=b.fitReviewed===true;p.status=p.status==='Opted out'?'Opted out':'Needs review';p.approval=null}
else if(b.action==='approve'){if(p.status==='Opted out'||p.status==='Rejected')throw new AppError('This prospect is excluded.');if(!p.contact?.email||p.contact.emailStatus!=='verified')throw new AppError('A verified business email is required before approval.');if(!p.fitReviewed||!p.evidence||!p.subject||!p.body)throw new AppError('Review startup fit, add hiring evidence, and save the message first.');p.status='Approved';p.approval={at:new Date().toISOString(),by:email,email:p.contact.email,subject:p.subject,body:p.body,revision:rev+1};}
else if(b.action==='reject'||b.action==='suppress'){p.status=b.action==='reject'?'Rejected':'Opted out';p.approval=null}
else if(b.action==='pipeline'){if(!['New','Contacted','Replied','Meeting'].includes(b.stage))throw new AppError('Invalid stage.');p.stage=b.stage}
else if(b.action!=='enrich')throw new AppError('Unknown action.');await update(e,p,rev);return json({ok:true})})}
return json({error:'Not found.'},404)}
export default {async fetch(req,env){try{if(new URL(req.url).pathname.startsWith('/api/'))return await api(req,env);if(req.method!=='GET')return json({error:'Method not allowed'},405);return new Response(HTML,{headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer'}})}catch(err){return json({error:err instanceof AppError?err.message:'Unable to save or load data. Please retry; your input has been kept.'},err instanceof AppError?err.status:503)}}};
