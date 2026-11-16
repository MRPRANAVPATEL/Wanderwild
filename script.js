(()=>{
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches,H=document.documentElement;
const U=(id,w=1000)=>`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;
const im=(id,alt,w)=>`<img src="${U(id,w)}" alt="${alt}" loading="lazy" onerror="this.remove()">`;
const D=[
{n:'Amalfi Coast',c:'Italy',x:539,y:137,ll:'40.63°N 14.60°E',cat:'coast',col:'tang',id:'1533105079780-92b9be482077',t:'Lemon terraces stacked above a turquoise sea.'},
{n:'Kyoto',c:'Japan',x:877,y:153,ll:'35.01°N 135.77°E',cat:'culture',col:'coral',id:'1493976040374-85c8e12f0c0e',t:'Lantern-lit lanes, moss gardens and a thousand quiet temples.'},
{n:'Bali',c:'Indonesia',x:820,y:273,ll:'8.41°S 115.19°E',cat:'nature',col:'green',id:'1537996194471-e657df975ab4',t:'Rice terraces, sea temples and mornings that start with incense.'},
{n:'Marrakech',c:'Morocco',x:478,y:162,ll:'31.63°N 8.00°W',cat:'culture',col:'sun',id:'1489749798305-4fea3ae63d43',t:'Spice-colored souks and rooftops built for sunset.'},
{n:'Patagonia',c:'Argentina',x:297,y:389,ll:'50.34°S 72.26°W',cat:'adventure',col:'cobalt',id:'1531761535209-180857e963b9',t:'Granite spires and wind that rewrites your plans.'},
{n:'Iceland',c:'Iceland',x:449,y:70,ll:'64.96°N 19.02°W',cat:'adventure',col:'coral',id:'1504829857797-ddff29c27927',t:'Black sand, steaming valleys and light that never quite sets.'}];
const S=[
{t:'72 Hours in Kyoto',cat:'city',r:8,a:'Aiko Mori',d:'Oct 28, 2026',id:'1528360983277-13d401cdc186'},
{t:'The Secret Beaches of Southern Italy',cat:'coast',r:11,a:'Tomás Rivera',d:'Oct 19, 2026',id:'1507525428034-b723cf961d3e'},
{t:'Finding Silence in the Mountains',cat:'mountains',r:9,a:'Ines Calder',d:'Oct 07, 2026',id:'1464822759023-fed622ff2c3b'},
{t:'A Weekend Lost in Marrakech',cat:'city',r:7,a:'Sana El Idrissi',d:'Sep 24, 2026',id:'1539650116574-8efeb43e2750'},
{t:'The Other Side of Bali',cat:'coast',r:10,a:'Dewi Larasati',d:'Sep 12, 2026',id:'1518548419970-58e3b4079ab2'}];
const G=[['1469474968028-56623f02e42e','Valley mist, first light'],['1520769669658-f07657f5a307','Iceland, after the rain'],['1519681393784-d120267933ba','Night above the treeline'],['1523906834658-6e24ef2386f9','Canal hour, Venice']];
const M=[['Slow Travel','green','1470071459604-3b5ec3a7fe05','Stay a week. Learn one street.'],['Wild Adventures','coral','1551632811-561732d1e306','Trails, summits, weather.'],['City Escapes','sun','1502602898657-3e91760cbb34','Cafés, rooftops, side streets.'],['Beach Days','tang','1507699622108-4be3abd695ad','Salt, sun, nothing planned.'],['Mountain Stories','cobalt','1506905925346-21bda4d32df4','Cold air, big views.']];
const P=[['1414235077428-338989a2e8c0','Market breakfast'],['1555396273-367ea4eb4db5','Late dinner'],['1488646953014-85cb44e25828','Planning the route'],['1476514525535-07fb3b4ae5f1','Above 3,000m'],['1512343879784-a960bf40e7f2','Last swim']];
$('#dgrid').innerHTML=D.map((d,i)=>`<article class="dest" data-cat="${d.cat}" style="--c:var(--${d.col})"><a href="#stories" data-cursor="Open"><div class="ph">${im(d.id,d.n+', '+d.c,900)}</div><span class="meta cat">${d.cat}</span><h3 class="disp">${d.n}</h3><p class="meta">${d.c} · ${d.ll}</p><p class="blurb">${d.t}</p><span class="arr" aria-hidden="true">→</span></a></article>`).join('');
$('#slist').innerHTML=S.map((s,i)=>`<article class="story rv" data-cat="${s.cat}"><a href="#journal" data-cursor="Read"><div class="ph">${im(s.id,s.t,1200)}</div><div class="st-txt"><span class="meta">${s.cat} · ${s.r} min read</span><h3 class="disp"><span>${s.t}</span></h3><p class="meta">By ${s.a} — ${s.d}</p></div><span class="num ser" aria-hidden="true">0${i+1}</span></a></article>`).join('');
$('#rail').innerHTML=G.map(g=>`<figure class="shot" tabindex="0">${im(g[0],g[1],1200)}<figcaption class="meta">${g[1]}</figcaption></figure>`).join('');
$('#moods').innerHTML=M.map((m,i)=>`<button class="mo${i==0?' on':''}" style="--c:var(--${m[1]})" aria-pressed="${i==0}">${im(m[2],m[0],900)}<h3 class="disp">${m[0]}</h3><p class="meta">${m[3]}</p></button>`).join('');
const pf=p=>`<figure class="pt">${im(p[0],p[1],800)}<span class="l meta">${p[1]}</span></figure>`;
$('#pgrid').innerHTML=P.slice(0,3).map(pf).join('')+`<div class="pt tx"><span class="meta">@wanderwild</span><span class="disp">Tag your<br>wandering</span></div>`+P.slice(3).map(pf).join('');
const layout=()=>$$('.dest:not([hidden])').forEach((e,k)=>e.dataset.k=k%6);layout();
$$('.filters').forEach(f=>f.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;$$('button',f).forEach(x=>x.classList.toggle('on',x===b));
$$('#'+f.dataset.for+' [data-cat]').forEach(el=>el.hidden=b.dataset.f!=='all'&&el.dataset.cat!==b.dataset.f);layout();}));
const act=b=>$$('.mo').forEach(m=>{m.classList.toggle('on',m===b);m.setAttribute('aria-pressed',m===b)});
$('#moods').addEventListener('click',e=>{const b=e.target.closest('.mo');if(b)act(b)});
$$('.mo').forEach(m=>{m.addEventListener('mouseenter',()=>matchMedia('(hover:hover)').matches&&act(m));m.addEventListener('focus',()=>act(m))});
$('#fbtn').onclick=e=>{const c=$('#chap'),o=c.hidden;c.hidden=!o;e.currentTarget.setAttribute('aria-expanded',o);$('span',e.currentTarget).textContent=o?'−':'+'};
const rail=$('#rail');$('#gnext').onclick=()=>rail.scrollBy({left:rail.clientWidth*.6,behavior:'smooth'});$('#gprev').onclick=()=>rail.scrollBy({left:-rail.clientWidth*.6,behavior:'smooth'});
let dn=0,sx=0,sl=0;rail.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;dn=1;sx=e.clientX;sl=rail.scrollLeft;rail.classList.add('drag')});
addEventListener('pointermove',e=>{if(dn)rail.scrollLeft=sl-(e.clientX-sx)});addEventListener('pointerup',()=>{dn=0;rail.classList.remove('drag')});
rail.addEventListener('keydown',e=>{if(e.key==='ArrowRight')rail.scrollBy({left:300,behavior:'smooth'});if(e.key==='ArrowLeft')rail.scrollBy({left:-300,behavior:'smooth'})});
const nav=$('#nav'),mb=$('#mbtn'),se=$('#search'),sq=$('#sq');
const tm=v=>{nav.classList.toggle('open',v);mb.setAttribute('aria-expanded',v);mb.textContent=v?'Close':'Menu'};
mb.onclick=()=>tm(!nav.classList.contains('open'));nav.addEventListener('click',e=>e.target.closest('a')&&tm(false));
const idx=[...D.map(d=>({l:d.n+', '+d.c,k:d.cat,h:'#destinations'})),...S.map(s=>({l:s.t,k:s.cat,h:'#stories'}))];
const res=()=>{const q=sq.value.trim().toLowerCase();const r=idx.filter(i=>!q||(i.l+i.k).toLowerCase().includes(q));$('#sres').innerHTML=r.length?r.map(i=>`<li><a href="${i.h}">${i.l}<span class="meta">${i.k}</span></a></li>`).join(''):'<li class="meta">No matches — try “beach” or “Kyoto”.</li>'};
const so=v=>{se.hidden=!v;if(v){res();sq.focus()}else $('#sbtn').focus()};
$('#sbtn').onclick=()=>so(true);$('#sx').onclick=()=>so(false);sq.oninput=res;$('#sres').onclick=e=>e.target.closest('a')&&so(false);
addEventListener('keydown',e=>{if(e.key==='Escape'){if(!se.hidden)so(false);tm(false)}});
$('#nform').addEventListener('submit',e=>{e.preventDefault();const n=$('#nn'),m=$('#ne'),o=$('#nm');[n,m].forEach(i=>i.removeAttribute('aria-invalid'));o.className='msg';
if(!n.value.trim()){n.setAttribute('aria-invalid',true);o.textContent='Please tell us your first name.';o.classList.add('err');return n.focus()}
if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(m.value)){m.setAttribute('aria-invalid',true);o.textContent='That email doesn’t look right.';o.classList.add('err');return m.focus()}
o.textContent=`Welcome aboard, ${n.value.trim()}. (Demo only — nothing was sent.)`;o.classList.add('ok');e.target.reset()});
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target)}}),{threshold:.12});
$$('.rv').forEach(el=>ro.observe(el));
const px=$$('[data-p]');let tick=0;
const par=()=>{tick=0;px.forEach(el=>{const r=el.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;el.style.translate=`0 ${(r.top+r.height/2-innerHeight/2)*+el.dataset.p}px`})};
if(!RM){addEventListener('scroll',()=>{if(!tick)tick=requestAnimationFrame(par)},{passive:true});par()}
const cur=$('#cur');
if(matchMedia('(pointer:fine)').matches&&!RM){let cx=0,cy=0,tx=0,ty=0;
addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY;cur.classList.add('on')});
(function f(){cx+=(tx-cx)*.2;cy+=(ty-cy)*.2;cur.style.transform=`translate(${cx}px,${cy}px)`;requestAnimationFrame(f)})();
document.addEventListener('pointerover',e=>cur.classList.toggle('big',!!e.target.closest('[data-cursor],.shot,.mo')));
$$('[data-mag]').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.3}px,${(e.clientY-r.top-r.height/2)*.3}px)`});b.addEventListener('pointerleave',()=>b.style.transform='')})}
const co=$('#coords');let ci=0,la=0,lo=0;
const num=s=>{const m=s.match(/([\d.]+)°([NS]) ([\d.]+)°([EW])/);return[(m[2]=='S'?-1:1)*m[1],(m[4]=='W'?-1:1)*m[3]]};
const fm=(a,b)=>`${Math.abs(a).toFixed(2)}°${a<0?'S':'N'} ${Math.abs(b).toFixed(2)}°${b<0?'W':'E'}`;
const go=()=>{const d=D[ci++%D.length],[ta,tb]=num(d.ll),a0=la,b0=lo,t0=performance.now();
const st=t=>{const p=RM?1:Math.min(1,(t-t0)/1400),k=1-Math.pow(1-p,3);la=a0+(ta-a0)*k;lo=b0+(tb-b0)*k;co.textContent=`${d.n} — ${fm(la,lo)}`;if(p<1)requestAnimationFrame(st)};requestAnimationFrame(st)};
go();if(!RM)setInterval(go,3600);
const ct=$('#count');let n=0;
const fin=()=>{H.classList.add('ready');setTimeout(()=>$('#loader').remove(),1300)};
if(RM)fin();else{const iv=setInterval(()=>{n=Math.min(100,n+Math.ceil(Math.random()*9));ct.textContent=n;if(n>=100){clearInterval(iv);setTimeout(fin,250)}},45)}
})();