+++
title = "Layout Builder"
weight = 1.1
hidden = true
+++

{{< rawhtml >}}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css">

<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
 
  :root {
    --bg:        #f7f6f3;
    --surface:   #ffffff;
    --surface-2: #f1f0ec;
    --border:    rgba(0,0,0,0.10);
    --border-md: rgba(0,0,0,0.18);
    --text-1:    #1a1918;
    --text-2:    #5c5a56;
    --text-3:    #9b9892;
    --accent:    #185FA5;
    --accent-bg: #e6f1fb;
    --accent-bd: rgba(24,95,165,0.25);
    --accent-tx: #0c447c;
    --mono:      'JetBrains Mono', monospace;
    --sans:      'DM Sans', sans-serif;
    --radius-md: 8px;
    --radius-lg: 12px;
    --kw:   #185FA5;
    --prop: #993C1D;
    --val:  #3B6D11;
    --sel:  #533AB7;
    --cm:   #9b9892;
  }
 
  body {
    font-family: var(--sans);
    background: var(--bg);
    color: var(--text-1);
    min-height: 100vh;
    padding: 2.5rem 1.5rem;
  }
 
  .wrapper { max-width: 920px; margin: 0 auto; }
 
  .lb-header { margin-bottom: 1.5rem; }
  .lb-header h1 {
    font-family: var(--mono);
    font-size: 18px;
    font-weight: 500;
    color: var(--text-1);
    letter-spacing: -0.01em;
  }
  .lb-header p {
    font-size: 13.5px;
    color: var(--text-2);
    margin-top: 4px;
    line-height: 1.6;
  }
 
  .lb-presets { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 1.25rem; }
  .pb {
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 500;
    padding: 5px 12px;
    border-radius: var(--radius-md);
    border: 0.5px solid var(--border-md);
    background: var(--surface);
    color: var(--text-2);
    cursor: pointer;
    transition: background 0.12s, color 0.12s, border-color 0.12s;
  }
  .pb:hover { background: var(--surface-2); color: var(--text-1); }
  .pb.on {
    background: var(--accent-bg);
    color: var(--accent);
    border-color: var(--accent-bd);
  }
 
  .lb-ws {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 640px) { .lb-ws { grid-template-columns: 1fr; } }
 
  .lb-panel {
    background: var(--surface);
    border: 0.5px solid var(--border-md);
    border-radius: var(--radius-lg);
    overflow: hidden;
  }
  .lb-plabel {
    font-family: var(--mono);
    font-size: 10.5px;
    font-weight: 500;
    color: var(--text-3);
    text-transform: uppercase;
    letter-spacing: 0.07em;
    padding: 9px 14px;
    border-bottom: 0.5px solid var(--border);
    background: var(--surface-2);
  }
 
  .lb-tree { padding: 10px 10px 4px; }
  .nd { margin-bottom: 4px; }
  .nr {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 8px;
    border-radius: var(--radius-md);
    background: var(--surface-2);
    border: 0.5px solid var(--border);
  }
  .nc {
    margin-left: 18px;
    margin-top: 4px;
    padding-left: 10px;
    border-left: 2px solid var(--border-md);
  }
  .dot { width: 11px; height: 11px; border-radius: 2px; flex-shrink: 0; }
  .nl {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text-2);
    min-width: 36px;
    flex-shrink: 0;
  }
  .nctl { display: flex; align-items: center; gap: 5px; flex: 1; flex-wrap: wrap; }
  .nctl label { font-size: 10px; color: var(--text-3); font-family: var(--mono); }
  .nctl select,
  .nctl input[type=text] {
    font-family: var(--mono);
    font-size: 11px;
    padding: 2px 5px;
    border-radius: 4px;
    border: 0.5px solid var(--border-md);
    background: var(--surface);
    color: var(--text-1);
    outline: none;
    transition: border-color 0.12s;
  }
  .nctl select:focus,
  .nctl input[type=text]:focus { border-color: var(--accent); }
  .nctl input[type=text] { width: 62px; }
 
  .btn-child {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--accent);
    background: var(--accent-bg);
    border: 0.5px solid var(--accent-bd);
    border-radius: 4px;
    padding: 2px 7px;
    cursor: pointer;
    flex-shrink: 0;
    transition: opacity 0.12s;
  }
  .btn-child:hover { opacity: 0.7; }
 
  .btn-rm {
    font-size: 13px;
    color: var(--text-3);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 2px;
    flex-shrink: 0;
    line-height: 1;
    transition: color 0.12s;
  }
  .btn-rm:hover { color: #a32d2d; }
 
  .btn-add {
    font-family: var(--sans);
    font-size: 12px;
    color: var(--text-3);
    background: none;
    border: 0.5px dashed var(--border-md);
    border-radius: var(--radius-md);
    padding: 6px 10px;
    cursor: pointer;
    width: calc(100% - 20px);
    margin: 5px 10px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: color 0.12s, border-color 0.12s;
  }
  .btn-add:hover { color: var(--text-1); border-style: solid; }
 
  .prv { padding: 12px; min-height: 190px; }
  .prv::after { content: ""; display: table; clear: both; }
  .pb2 {
    border-radius: 3px;
    font-family: var(--mono);
    font-size: 10px;
    color: rgba(0,0,0,0.4);
    text-align: center;
    padding: 5px 3px 3px;
    min-height: 44px;
    transition: all 0.18s ease;
  }
  .pb2::after { content: ""; display: table; clear: both; }
 
  .lb-code {
    background: var(--surface);
    border: 0.5px solid var(--border-md);
    border-radius: var(--radius-lg);
    overflow: hidden;
    margin-bottom: 1rem;
  }
  .lb-code-in { padding: 12px 16px; overflow-x: auto; }
  .lb-code-in pre {
    font-family: var(--mono);
    font-size: 12px;
    line-height: 1.75;
    color: var(--text-1);
    white-space: pre;
  }
  .kw   { color: var(--kw); }
  .prop { color: var(--prop); }
  .val  { color: var(--val); }
  .sel  { color: var(--sel); }
  .cm   { color: var(--cm); }
 
  .lb-ins {
    background: var(--accent-bg);
    border: 0.5px solid var(--accent-bd);
    border-radius: var(--radius-md);
    padding: 10px 14px;
    font-size: 13px;
    color: var(--accent-tx);
    line-height: 1.65;
  }
  .lb-ins strong { font-weight: 500; }
  .lb-ins code {
    font-family: var(--mono);
    font-size: 11.5px;
    background: rgba(24,95,165,0.12);
    padding: 1px 5px;
    border-radius: 4px;
  }
</style>

<div class="wrapper">
 
  <div class="lb-header">
    <h1>Layout Builder</h1>
    <p>Kies een voorbeeld of bouw je eigen layout. Gebruik "+ child" om divs in andere divs te nesten.</p>
  </div>
 
  <div class="lb-presets" id="lbp"></div>
 
  <div class="lb-ws">
    <div class="lb-panel">
      <div class="lb-plabel">blokken</div>
      <div class="lb-tree" id="lbt"></div>
      <button class="btn-add" onclick="lbAddRoot()">
        <i class="ti ti-plus" aria-hidden="true"></i> blok toevoegen
      </button>
    </div>
    <div class="lb-panel">
      <div class="lb-plabel">live voorbeeld</div>
      <div class="prv" id="lbv"></div>
    </div>
  </div>
 
  <div class="lb-code">
    <div class="lb-plabel">gegenereerde code</div>
    <div class="lb-code-in"><pre id="lbc"></pre></div>
  </div>
 
  <div class="lb-ins" id="lbi"></div>
 
</div>

<script>
const COLORS=[['#B5D4F4','#85B7EB','#378ADD'],['#9FE1CB','#5DCAA5','#1D9E75'],['#FAC775','#EF9F27','#BA7517'],['#F4C0D1','#ED93B1','#D4537E'],['#CECBF6','#AFA9EC','#7F77DD'],['#F0997B','#D85A30','#993C1D']];
function dc(d,i){return COLORS[d%COLORS.length][i%3];}
 
let uid=0;
function mn(f='left',w='50%',c=[]){return{id:uid++,float:f,width:w,children:c};}
let tree=[mn('left','50%'),mn('left','50%')];
let ap=1;
 
const PRESETS=[
  {name:'volledige breedte', mk:()=>[mn('none','100%'),mn('none','100%')]},
  {name:'twee kolommen',     mk:()=>[mn('left','50%'),mn('left','50%')]},
  {name:'zijbalk links',     mk:()=>[mn('left','30%'),mn('left','70%')]},
  {name:'zijbalk rechts',    mk:()=>[mn('left','70%'),mn('right','30%')]},
  {name:'drie kolommen',     mk:()=>[mn('left','33.33%'),mn('left','33.33%'),mn('left','33.33%')]},
  {name:'moeilijke layout',        mk:()=>[mn('none','100%'),mn('left','20%'),mn('left','60%'),mn('right','20%'),mn('none','100%')]},
  {name:'geneste kolommen',  mk:()=>{const a=mn('left','50%'),b=mn('left','50%'),p=mn('left','60%',[a,b]),s=mn('left','40%');return[p,s];}},
];
 
function loadP(i){ap=i;uid=0;tree=PRESETS[i].mk();render();}
 
function find(ns,id){for(const n of ns){if(n.id===id)return n;const f=find(n.children,id);if(f)return f;}return null;}
 
function lbAddRoot(){tree.push(mn('left','50%'));ap=-1;render();}
window.lbChild=id=>{const n=find(tree,id);if(n){n.children.push(mn('left','50%'));ap=-1;render();}};
window.lbRm=id=>{function rm(ns){const i=ns.findIndex(n=>n.id===id);if(i!==-1){ns.splice(i,1);return true;}return ns.some(n=>rm(n.children));}rm(tree);ap=-1;render();};
window.lbF=(id,v)=>{const n=find(tree,id);if(n){n.float=v;ap=-1;render();}};
window.lbW=(id,v)=>{const n=find(tree,id);if(n){n.width=v;ap=-1;render();}};
 
let lc=0;
function lbl(){let n=lc++,s='';do{s=String.fromCharCode(65+(n%26))+s;n=Math.floor(n/26)-1;}while(n>=0);return s;}
 
function rTree(ns,d,pi){
  return ns.map((node,si)=>{
    const l=lbl(),col=dc(d,pi!==null?pi:si);
    const ch=node.children.length?`<div class="nc">${rTree(node.children,d+1,si)}</div>`:'';
    const canRm=!(d===0&&tree.length<=1);
    return `<div class="nd"><div class="nr">
      <div class="dot" style="background:${col}"></div>
      <span class="nl">div ${l}</span>
      <div class="nctl">
        <label>float</label>
        <select onchange="lbF(${node.id},this.value)">${['none','left','right'].map(f=>`<option${node.float===f?' selected':''}>${f}</option>`).join('')}</select>
        <label>breedte</label>
        <input type="text" value="${node.width}" onchange="lbW(${node.id},this.value)" onblur="lbW(${node.id},this.value)">
      </div>
      <button class="btn-child" onclick="lbChild(${node.id})">+ Child</button>
      ${canRm?`<button class="btn-rm" onclick="lbRm(${node.id})" title="verwijderen">✕</button>`:''}
    </div>${ch}</div>`;
  }).join('');
}
 
function rPrev(ns,d,pi){
  return ns.map((node,si)=>{
    const col=dc(d,pi!==null?pi:si);
    const inner=node.children.length?`<div style="overflow:hidden;width:100%">${rPrev(node.children,d+1,si)}</div>`:'';
    const sub=`<span style="font-size:9px;opacity:.5;display:block;margin-bottom:2px">${node.float!=='none'?'float:'+node.float+' · ':''}${node.width}</span>`;
    return `<div class="pb2" style="float:${node.float};width:${node.width};background:${col}">${sub}${inner}</div>`;
  }).join('')+'<div style="clear:both"></div>';
}
 
let cssR=[],htmlL=[],cc=0;
function nc2(){let n=cc++,s='';do{s=String.fromCharCode(97+(n%26))+s;n=Math.floor(n/26)-1;}while(n>=0);return'div-'+s;}
function bCode(ns,ind){
  ns.forEach(node=>{
    const cl=nc2(),i='  '.repeat(ind);
    const cx=[];
    if(node.float!=='none')cx.push(`  <span class="prop">float</span>: <span class="val">${node.float}</span>;`);
    cx.push(`  <span class="prop">width</span>: <span class="val">${node.width}</span>;`);
    if(node.children.length)cx.push(`  <span class="prop">overflow</span>: <span class="val">hidden</span>; <span class="cm">/* clearfix */</span>`);
    cssR.push(`<span class="sel">.${cl}</span> {\n${cx.join('\n')}\n}`);
    if(node.children.length){
      htmlL.push(`${i}<span class="kw">&lt;div</span> <span class="prop">class</span>=<span class="val">"${cl}"</span><span class="kw">&gt;</span>`);
      bCode(node.children,ind+1);
      htmlL.push(`${i}<span class="kw">&lt;/div&gt;</span>`);
    } else {
      htmlL.push(`${i}<span class="kw">&lt;div</span> <span class="prop">class</span>=<span class="val">"${cl}"</span><span class="kw">&gt;</span>...<span class="kw">&lt;/div&gt;</span>`);
    }
  });
}
 
function insight(ns){
  function flat(n){return[n,...n.children.flatMap(flat)];}
  const all=ns.flatMap(flat);
  const hasNest=all.some(n=>n.children.length>0);
  const allNone=all.every(n=>n.float==='none');
  const hasR=all.some(n=>n.float==='right');
  const tf=ns.filter(n=>n.float!=='none');
  const tot=tf.reduce((s,n)=>s+(parseFloat(n.width)||0),0);
  if(hasNest)return '<strong>geneste divs:</strong> de breedte van een child-div is relatief aan de parent, niet aan de pagina. Dus <code>width: 50%</code> binnen een parent van <code>width: 60%</code> geeft je 30% van de totale paginabreedte. Elk niveau maakt zijn eigen containing block aan.';
  if(allNone)return '<strong>geen floats:</strong> elke div gedraagt zich als een blokelement — hij neemt de volledige breedte in en stapelt verticaal, zoals alinea\'s tekst.';
  if(ns.length===2&&tf.length===2&&Math.abs(tot-100)<1)return '<strong>twee gefloate divs die samen 100% zijn:</strong> ze staan perfect naast elkaar. Maak een van de breedtes groter zodat het totaal boven 100% uitkomt, en de tweede div springt naar de volgende regel.';
  if(hasR)return '<strong>float: right</strong> trekt een div naar de rechterrand van zijn container. Gecombineerd met een links-gefloate sibling krijg je een twee-kolommenindeling.';
  if(tf.length>=3&&tot<=100)return `<strong>${tf.length} gefloate divs, totale breedte ${Math.round(tot)}%:</strong> ze staan op één rij omdat de breedtes passen. Vergroot een breedte zodat het totaal boven 100% uitkomt en de laatste div naar beneden springt.`;
  if(tot>100)return `<strong>breedtes overschrijden 100% (totaal: ${Math.round(tot)}%):</strong> de laatste gefloate div springt naar de volgende rij. Verklein de breedtes tot het totaal ≤ 100% is.`;
  return '<strong>tip:</strong> een parent met gefloate children moet <code>overflow: hidden</code> gebruiken als clearfix — anders klapt hij in tot nul hoogte.';
}
 
function render(){
  lc=0;
  document.getElementById('lbt').innerHTML=rTree(tree,0,null);
  document.getElementById('lbv').innerHTML=rPrev(tree,0,null);
  cssR=[];htmlL=[];cc=0;bCode(tree,0);
  document.getElementById('lbc').innerHTML=[
    `<span class="cm">/* CSS */</span>`,
    `<span class="sel">.container</span> {\n  <span class="prop">overflow</span>: <span class="val">hidden</span>;\n}`,
    '',...cssR,'',
    `<span class="cm">/* HTML */</span>`,
    `<span class="kw">&lt;div</span> <span class="prop">class</span>=<span class="val">"container"</span><span class="kw">&gt;</span>`,
    ...htmlL,
    `<span class="kw">&lt;/div&gt;</span>`,
  ].join('\n');
  document.getElementById('lbi').innerHTML=insight(tree);
  document.querySelectorAll('.pb').forEach((b,i)=>b.classList.toggle('on',i===ap));
}
 
const pe=document.getElementById('lbp');
PRESETS.forEach((p,i)=>{
  const b=document.createElement('button');
  b.className='pb';
  b.textContent=p.name;
  b.onclick=()=>loadP(i);
  pe.appendChild(b);
});
 
loadP(1);
</script>
{{< /rawhtml >}}
