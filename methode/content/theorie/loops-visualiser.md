+++
title = "Loops Visualiser"
weight = 1.1
hidden = true
+++

{{< rawhtml >}}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">

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
    --num:  #3B6D11;
    --str:  #993C1D;
    --op:   #533AB7;
    --cm:   #9b9892;
  }

  body { font-family: var(--sans); background: var(--bg); color: var(--text-1); min-height: 100vh; padding: 2.5rem 1.5rem; }
  .wrapper { max-width: 960px; margin: 0 auto; }

  .lb-header { margin-bottom: 1.5rem; }
  .lb-header h1 { font-family: var(--mono); font-size: 18px; font-weight: 500; color: var(--text-1); letter-spacing: -0.01em; }
  .lb-header p  { font-size: 13.5px; color: var(--text-2); margin-top: 4px; line-height: 1.6; }

  .group-label {
    font-family: var(--mono); font-size: 10px; font-weight: 500;
    color: var(--text-3); text-transform: uppercase; letter-spacing: 0.09em;
    margin-bottom: 5px; margin-top: 14px;
  }
  .group-label:first-of-type { margin-top: 0; }

  .lb-presets { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 4px; }
  .pb {
    font-family: var(--mono); font-size: 12px; font-weight: 500;
    padding: 5px 12px; border-radius: var(--radius-md);
    border: 0.5px solid var(--border-md); background: var(--surface); color: var(--text-2);
    cursor: pointer; transition: background .12s, color .12s, border-color .12s;
  }
  .pb:hover { background: var(--surface-2); color: var(--text-1); }
  .pb.on    { background: var(--accent-bg); color: var(--accent); border-color: var(--accent-bd); }
  .pb.on.while-btn { background: #faeeda; color: #854F0B; border-color: rgba(186,117,23,.35); }

  .lb-controls {
    display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
    margin: 14px 0 1rem; padding: 9px 12px;
    background: var(--surface); border: 0.5px solid var(--border-md); border-radius: var(--radius-lg);
  }
  .btn {
    font-family: var(--sans); font-size: 12.5px; font-weight: 500;
    padding: 5px 13px; border-radius: var(--radius-md);
    border: 0.5px solid var(--border-md); background: var(--surface); color: var(--text-2);
    cursor: pointer; display: inline-flex; align-items: center; gap: 5px;
    transition: background .12s, color .12s;
  }
  .btn:hover    { background: var(--surface-2); color: var(--text-1); }
  .btn:disabled { opacity: .35; cursor: default; }
  .btn.for-step   { background: var(--accent-bg); color: var(--accent); border-color: var(--accent-bd); }
  .btn.for-step:hover { background: #d0e7f7; color: var(--accent-tx); }
  .btn.while-step { background: #faeeda; color: #854F0B; border-color: rgba(186,117,23,.35); }
  .btn.while-step:hover { background: #f5e0c0; color: #633806; }

  .speed-group {
    display: flex; align-items: center; gap: 8px; margin-left: auto;
    font-family: var(--mono); font-size: 11px; color: var(--text-3);
  }
  input[type=range] { -webkit-appearance: none; appearance: none; width: 80px; height: 3px; background: rgba(0,0,0,.15); border-radius: 2px; outline: none; }
  input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 13px; height: 13px; border-radius: 50%; background: var(--accent); cursor: pointer; }
  input[type=range]::-moz-range-thumb    { width: 13px; height: 13px; border-radius: 50%; background: var(--accent); cursor: pointer; border: none; }

  .lb-progress { height: 2px; background: var(--border); border-radius: 1px; overflow: hidden; margin-bottom: 1rem; }
  .lb-progress-fill { height: 100%; border-radius: 1px; transition: width .25s; width: 0%; background: var(--accent); }

  .lb-ws { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
  @media (max-width: 640px) { .lb-ws { grid-template-columns: 1fr; } }

  .lb-panel { background: var(--surface); border: 0.5px solid var(--border-md); border-radius: var(--radius-lg); overflow: hidden; }
  .lb-plabel {
    font-family: var(--mono); font-size: 10.5px; font-weight: 500;
    color: var(--text-3); text-transform: uppercase; letter-spacing: .07em;
    padding: 9px 14px; border-bottom: 0.5px solid var(--border); background: var(--surface-2);
  }

  .code-body { padding: 10px 12px; overflow-x: auto; }
  .code-line {
    display: flex; gap: 10px; padding: 0 6px; border-radius: 4px;
    font-family: var(--mono); font-size: 12px; line-height: 1.85;
    transition: background .15s; white-space: pre;
  }
  .code-line .ln  { color: var(--text-3); font-size: 10.5px; min-width: 16px; user-select: none; padding-top: 1px; }
  .code-line .src { color: var(--text-2); flex: 1; }

  .hl-d0 { background: #e6f1fb; } .hl-d0 .src { color: var(--text-1); } .hl-d0 .ln { color: #185FA5; }
  .hl-d1 { background: #eaf3de; } .hl-d1 .src { color: var(--text-1); } .hl-d1 .ln { color: #3B6D11; }
  .hl-d2 { background: #f5eef8; } .hl-d2 .src { color: var(--text-1); } .hl-d2 .ln { color: #533AB7; }
  .hl-while      { background: #faeeda; } .hl-while .src { color: var(--text-1); } .hl-while .ln { color: #854F0B; }
  .hl-while-cond { background: #fef3e2; } .hl-while-cond .src { color: var(--text-1); } .hl-while-cond .ln { color: #BA7517; }

  .kw      { color: #185FA5; }
  .kw-w    { color: #854F0B; }
  .num     { color: #3B6D11; }
  .str     { color: #993C1D; }
  .op      { color: #533AB7; }
  .cm      { color: #9b9892; font-style: italic; }

  .depth-legend {
    display: flex; gap: 14px; flex-wrap: wrap;
    font-family: var(--mono); font-size: 10.5px;
    padding: 7px 12px; border-top: 0.5px solid var(--border); background: var(--surface-2);
  }
  .dl-item { display: flex; align-items: center; gap: 5px; color: var(--text-3); }
  .dl-dot  { width: 8px; height: 8px; border-radius: 2px; flex-shrink: 0; }

  .arrays-wrap { padding: 10px 12px 12px; }
  .arr-group   { margin-bottom: 10px; }
  .arr-label   { font-family: var(--mono); font-size: 9.5px; text-transform: uppercase; letter-spacing: .07em; margin-bottom: 5px; }
  .arr-label.ld0 { color: #185FA5; } .arr-label.ld1 { color: #3B6D11; } .arr-label.ld2 { color: #533AB7; } .arr-label.ldw { color: #854F0B; }

  .arr-row { display: flex; gap: 6px; flex-wrap: wrap; align-items: flex-end; }
  .cell { display: flex; flex-direction: column; align-items: center; gap: 2px; transition: transform .18s; }
  .cell.active { transform: translateY(-3px); }
  .cell-ptr { font-family: var(--mono); font-size: 9px; height: 11px; font-weight: 500; }
  .cell-ptr.ld0 { color: #185FA5; } .cell-ptr.ld1 { color: #3B6D11; } .cell-ptr.ld2 { color: #533AB7; } .cell-ptr.ldw { color: #854F0B; }
  .cell-box {
    width: 46px; height: 46px; border-radius: var(--radius-md);
    border: 0.5px solid var(--border-md); background: var(--surface-2);
    display: flex; align-items: center; justify-content: center;
    font-family: var(--mono); font-size: 12px; font-weight: 500; color: var(--text-2);
    transition: all .2s;
  }
  .cb-a0  { background: #e6f1fb; border-color: rgba(24,95,165,.25);  color: #0c447c; }
  .cb-a1  { background: #eaf3de; border-color: rgba(59,109,17,.35);   color: #3B6D11; }
  .cb-a2  { background: #f5eef8; border-color: rgba(83,58,183,.25);   color: #533AB7; }
  .cb-aw  { background: #faeeda; border-color: rgba(186,117,23,.35);  color: #854F0B; }
  .cb-d0  { background: #e6f1fb; border-color: rgba(24,95,165,.15);   color: #185FA5; opacity: .5; }
  .cb-d1  { background: #eaf3de; border-color: rgba(59,109,17,.15);   color: #3B6D11; opacity: .5; }
  .cb-d2  { background: #f5eef8; border-color: rgba(83,58,183,.15);   color: #533AB7; opacity: .5; }
  .cb-dw  { background: #faeeda; border-color: rgba(186,117,23,.15);  color: #854F0B; opacity: .5; }
  .cell-idx { font-family: var(--mono); font-size: 9px; color: var(--text-3); }

  .var-display { padding: 14px 14px 10px; display: flex; flex-direction: column; gap: 10px; }
  .var-row     { display: flex; align-items: center; gap: 10px; }
  .var-name    { font-family: var(--mono); font-size: 12px; font-weight: 500; color: var(--text-2); min-width: 28px; }
  .var-val-box {
    min-width: 60px; height: 46px; border-radius: var(--radius-md);
    border: 0.5px solid var(--border-md); background: var(--surface-2);
    display: flex; align-items: center; justify-content: center;
    font-family: var(--mono); font-size: 16px; font-weight: 500; color: var(--text-2);
    padding: 0 10px; transition: all .2s;
  }
  .var-val-box.active { background: #faeeda; border-color: rgba(186,117,23,.35); color: #854F0B; }
  .var-cond {
    font-family: var(--mono); font-size: 11px; padding: 4px 9px;
    border-radius: 4px; border: 0.5px solid var(--border); background: var(--surface-2); color: var(--text-3);
    transition: all .2s;
  }
  .var-cond.tc { background: #eaf3de; border-color: rgba(59,109,17,.3); color: #3B6D11; }
  .var-cond.fc { background: #fde8e8; border-color: rgba(163,45,45,.3); color: #a32d2d; }

  .state-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(110px,1fr)); gap: 8px; padding: 10px 12px; }
  .state-card { background: var(--surface-2); border: 0.5px solid var(--border); border-radius: var(--radius-md); padding: 8px 10px; }
  .state-key  { font-family: var(--mono); font-size: 9.5px; letter-spacing: .04em; text-transform: uppercase; color: var(--text-3); margin-bottom: 2px; }
  .state-val  { font-family: var(--mono); font-size: 18px; font-weight: 500; color: var(--text-1); transition: color .2s; }
  .sv-true  { color: #3B6D11; } .sv-false { color: #993C1D; }
  .sv-flash-for   { color: #185FA5; } .sv-flash-while { color: #854F0B; }

  .log-body { padding: 10px 14px; font-family: var(--mono); font-size: 11.5px; line-height: 1.85; min-height: 70px; max-height: 150px; overflow-y: auto; }
  .log-entry { display: block; color: var(--text-2); } .log-entry.new { color: var(--text-1); }
  .log-empty { color: var(--text-3); font-style: italic; }

  .insight-body { padding: 10px 14px; font-size: 13px; color: var(--text-2); line-height: 1.65; min-height: 70px; }

  .lb-ins { border-radius: var(--radius-md); padding: 10px 14px; font-size: 13px; line-height: 1.65; margin-bottom: 1rem; border: 0.5px solid var(--accent-bd); background: var(--accent-bg); color: var(--accent-tx); }
  .lb-ins.while { background: #faeeda; border-color: rgba(186,117,23,.35); color: #633806; }
  .lb-ins strong { font-weight: 500; }
  .lb-ins code   { font-family: var(--mono); font-size: 11.5px; background: rgba(24,95,165,.12); padding: 1px 5px; border-radius: 4px; }
  .lb-ins.while code { background: rgba(186,117,23,.15); }

  .icon { width: 13px; height: 13px; vertical-align: middle; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
</style>

<div class="wrapper">

  <div class="lb-header">
    <h1>Loops visualizer</h1>
    <p>Doorloop for-loops en while-loops stap voor stap. </p>
  </div>

  <div class="group-label">for-loops</div>
  <div class="lb-presets" id="presetFor"></div>

  <div class="group-label">while-loops</div>
  <div class="lb-presets" id="presetWhile"></div>

  <div class="lb-controls">
    <button class="btn for-step" id="btnStep" onclick="step()">
      <svg class="icon" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      stap
    </button>
    <button class="btn" id="btnPlay" onclick="togglePlay()">
      <svg class="icon" id="playIcon" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      <span id="playLabel">afspelen</span>
    </button>
    <button class="btn" onclick="reset()">
      <svg class="icon" viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg>
      opnieuw
    </button>
    <div class="speed-group">
      snelheid
      <input type="range" min="1" max="5" step="1" value="3" id="speedSlider" oninput="updateSpeed()">
      <span id="speedLabel">gemiddeld</span>
    </div>
  </div>

  <div class="lb-progress"><div class="lb-progress-fill" id="progressFill"></div></div>

  <div class="lb-ws">
    <div class="lb-panel">
      <div class="lb-plabel">code</div>
      <div class="code-body" id="codeBlock"></div>
      <div class="depth-legend" id="depthLegend"></div>
    </div>
    <div class="lb-panel" id="rightPanel">
      <div class="lb-plabel" id="rightLabel">arrays in geheugen</div>
      <div id="rightBody"></div>
    </div>
    <div class="lb-panel" style="grid-column:1/-1">
      <div class="lb-plabel">Loop-toestand</div>
      <div class="state-row" id="stateRow"></div>
    </div>
    <div class="lb-panel">
      <div class="lb-plabel">Wat wordt er geprint?</div>
      <div class="log-body" id="logArea"><span class="log-empty">nog geen uitvoer — doorloop de loop stap voor stap</span></div>
    </div>
    <div class="lb-panel">
      <div class="lb-plabel">wat gebeurt er?</div>
      <div class="insight-body" id="insightBox">Druk op stap om te beginnen.</div>
    </div>
  </div>

  <div class="lb-ins" id="tipBox"></div>

</div>

<script>
/* ════════════════════════════════════════
   DATA: FOR-LOOP MODI
════════════════════════════════════════ */
var FOR_MODES = [

  /* 0 — basis */
  { name:'basis for-loop',
    depth:1,
    arrays:[{varName:'fruits', items:['apple','banana','cherry','date','elderberry']}],
    code:[
      {t:'<span class="kw">var</span> fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, ...]', d:-1},
      {t:'', d:-1},
      {t:'<span class="kw">for</span> (<span class="kw">var</span> i = <span class="num">0</span>; i <span class="op">&lt;</span> fruits.length; i<span class="op">++</span>) {', d:0, ph:'b0'},
      {t:'  console.log(fruits[i])', d:0, ph:'b0'},
      {t:'}', d:-1}
    ],
    tip:'<strong>array-index:</strong> arrays beginnen bij index <code>0</code>, niet bij <code>1</code>. <code>fruits[0]</code> is het eerste element; het laatste zit altijd op <code>fruits.length - 1</code>.',
    done:'Loop is klaar \u2014 i heeft fruits.length (5) bereikt. Elk element is precies \u00e9\u00e9n keer bezocht.',
    initC:function(){ return [0]; },
    isDone:function(c){ return c[0] >= 5; },
    total:5,
    stepFn:function(c, ex){
      var i=c[0], arr=['apple','banana','cherry','date','elderberry'];
      c[0]++;
      return {ac:[[i]], log:'fruits['+i+'] \u2192 "'+arr[i]+'"',
        insight:'i = '+i+'. We lezen fruits['+i+'], dat is "'+arr[i]+'". Daarna wordt i '+(i+1)+'.', ph:'b0'};
    }
  },

  /* 1 — optelling */
  { name:'optellen van getallen',
    depth:1,
    arrays:[{varName:'numbers', items:[3,7,2,9,4]}],
    extra:[{label:'som', base:0}],
    code:[
      {t:'<span class="kw">var</span> numbers = [<span class="num">3</span>, <span class="num">7</span>, <span class="num">2</span>, <span class="num">9</span>, <span class="num">4</span>]', d:-1},
      {t:'<span class="kw">var</span> sum = <span class="num">0</span>', d:-1},
      {t:'', d:-1},
      {t:'<span class="kw">for</span> (<span class="kw">var</span> i = <span class="num">0</span>; i <span class="op">&lt;</span> numbers.length; i<span class="op">++</span>) {', d:0, ph:'b0'},
      {t:'  sum = sum <span class="op">+</span> numbers[i]', d:0, ph:'b0'},
      {t:'}', d:-1}
    ],
    tip:'<strong>accumulator-patroon:</strong> declareer <code>var sum = 0</code> v\u00f3\u00f3r de loop en tel er elke iteratie iets bij op \u2014 een van de meest voorkomende patronen in JavaScript.',
    done:function(ex){ return 'Klaar. sum = '+ex[0]+'. Alle 5 getallen zijn \u00e9\u00e9n voor \u00e9\u00e9n opgeteld.'; },
    initC:function(){ return [0]; },
    isDone:function(c){ return c[0] >= 5; },
    total:5,
    stepFn:function(c, ex){
      var i=c[0], arr=[3,7,2,9,4], prev=ex[0];
      ex[0] = prev + arr[i]; c[0]++;
      return {ac:[[i]], log:'sum = '+prev+' + '+arr[i]+' = '+ex[0],
        insight:'We tellen numbers['+i+'] ('+arr[i]+') op bij sum. sum was '+prev+', nu is het '+ex[0]+'.', ph:'b0', fe:[0]};
    }
  },

  /* 2 — grootste zoeken */
  { name:'grootste waarde vinden',
    depth:1,
    arrays:[{varName:'nums', items:[12,5,38,7,21]}],
    extra:[{label:'max', base:12}],
    code:[
      {t:'<span class="kw">var</span> nums = [<span class="num">12</span>, <span class="num">5</span>, <span class="num">38</span>, <span class="num">7</span>, <span class="num">21</span>]', d:-1},
      {t:'<span class="kw">var</span> max = nums[<span class="num">0</span>]  <span class="cm">// begin met eerste</span>', d:-1},
      {t:'', d:-1},
      {t:'<span class="kw">for</span> (<span class="kw">var</span> i = <span class="num">1</span>; i <span class="op">&lt;</span> nums.length; i<span class="op">++</span>) {', d:0, ph:'b0'},
      {t:'  <span class="kw">if</span> (nums[i] <span class="op">&gt;</span> max) { max = nums[i] }', d:0, ph:'b0'},
      {t:'}', d:-1}
    ],
    tip:'<strong>if binnen een loop:</strong> we beginnen bij i = <code>1</code> omdat <code>max = nums[0]</code> al ingesteld is. Het eerste element hoeven we niet met zichzelf te vergelijken.',
    done:function(ex){ return 'Klaar. max = '+ex[0]+'. Elk element is vergeleken; de grootste is bijgehouden.'; },
    initC:function(){ return [1]; },
    isDone:function(c){ return c[0] >= 5; },
    total:4,
    stepFn:function(c, ex){
      var i=c[0], arr=[12,5,38,7,21], prev=ex[0], bigger=(arr[i]>prev);
      if(bigger) ex[0]=arr[i]; c[0]++;
      return {ac:[[i]],
        log: bigger ? 'nums['+i+']='+arr[i]+' > max('+prev+') \u2192 nieuw max: '+arr[i] : 'nums['+i+']='+arr[i]+' \u2264 max('+prev+') \u2192 geen wijziging',
        insight: bigger ? arr[i]+' is groter dan max ('+prev+'), dus max wordt '+arr[i]+'.' : arr[i]+' is niet groter dan '+prev+', dus max blijft hetzelfde.',
        ph:'b0', fe: bigger?[0]:[]};
    }
  },

  /* 3 — genest \u00d72 */
  { name:'\u00d72 geneste for-loops',
    depth:2,
    arrays:[{varName:'rijen', items:[1,2,3]},{varName:'kolommen', items:[1,2,3]}],
    code:[
      {t:'<span class="kw">var</span> rijen = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]', d:-1},
      {t:'<span class="kw">var</span> kolommen = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]', d:-1},
      {t:'', d:-1},
      {t:'<span class="kw">for</span> (<span class="kw">var</span> i = <span class="num">0</span>; i <span class="op">&lt;</span> rijen.length; i<span class="op">++</span>) {', d:0, ph:'b0'},
      {t:'  <span class="kw">for</span> (<span class="kw">var</span> j = <span class="num">0</span>; j <span class="op">&lt;</span> kolommen.length; j<span class="op">++</span>) {', d:1, ph:'b1'},
      {t:'    console.log(rijen[i] <span class="op">*</span> kolommen[j])', d:1, ph:'b1'},
      {t:'  }', d:-1},
      {t:'}', d:-1}
    ],
    tip:'<strong>geneste loops:</strong> de binnenste loop loopt <em>volledig</em> door voor elke stap van de buitenste loop. 3\u00d73 = 9 iteraties in totaal \u2014 het aantal vermenigvuldigt zich.',
    done:'Beide loops klaar. Buiten-loop liep 3 keer; binnen-loop liep 3 keer per buitenstap \u2014 9 iteraties totaal.',
    initC:function(){ return [0,0]; },
    isDone:function(c){ return c[0] >= 3; },
    total:9,
    stepFn:function(c, ex){
      var i=c[0], j=c[1], rijen=[1,2,3], kolommen=[1,2,3];
      var res = rijen[i]*kolommen[j];
      c[1]++; if(c[1]>=3){ c[1]=0; c[0]++; }
      return {ac:[[i],[j]],
        log:'rijen['+i+']\u00d7kolommen['+j+'] = '+rijen[i]+'\u00d7'+kolommen[j]+' = '+res,
        insight:'Buiten i='+i+' (rijen[i]='+rijen[i]+'), binnen j='+j+' (kolommen[j]='+kolommen[j]+'). Product = '+res+'.', ph:'b1'};
    }
  },

  /* 4 — genest \u00d73 */
  { name:'\u00d73 geneste for-loops',
    depth:3,
    arrays:[{varName:'xs',items:[0,1]},{varName:'ys',items:[0,1]},{varName:'zs',items:[0,1]}],
    code:[
      {t:'<span class="kw">var</span> xs=[<span class="num">0</span>,<span class="num">1</span>], ys=[<span class="num">0</span>,<span class="num">1</span>], zs=[<span class="num">0</span>,<span class="num">1</span>]', d:-1},
      {t:'', d:-1},
      {t:'<span class="kw">for</span> (<span class="kw">var</span> i=<span class="num">0</span>; i<span class="op">&lt;</span>xs.length; i<span class="op">++</span>) {', d:0, ph:'b0'},
      {t:'  <span class="kw">for</span> (<span class="kw">var</span> j=<span class="num">0</span>; j<span class="op">&lt;</span>ys.length; j<span class="op">++</span>) {', d:1, ph:'b1'},
      {t:'    <span class="kw">for</span> (<span class="kw">var</span> k=<span class="num">0</span>; k<span class="op">&lt;</span>zs.length; k<span class="op">++</span>) {', d:2, ph:'b2'},
      {t:'      console.log(xs[i], ys[j], zs[k])', d:2, ph:'b2'},
      {t:'    }', d:-1},{t:'  }', d:-1},{t:'}', d:-1}
    ],
    tip:'<strong>drie geneste loops:</strong> stel je voor dat het cijfers zijn die optellen. k reset elke keer als j verder gaat; j reset als i verder gaat. 2\u00d72\u00d72 = 8 iteraties totaal.',
    done:'Alle drie de loops klaar. 2\u00d72\u00d72 = 8 iteraties \u2014 elke (x,y,z)-combinatie is bezocht.',
    initC:function(){ return [0,0,0]; },
    isDone:function(c){ return c[0] >= 2; },
    total:8,
    stepFn:function(c, ex){
      var i=c[0],j=c[1],k=c[2];
      c[2]++; if(c[2]>=2){ c[2]=0; c[1]++; if(c[1]>=2){ c[1]=0; c[0]++; } }
      return {ac:[[i],[j],[k]],
        log:'('+i+', '+j+', '+k+')',
        insight:'i='+i+' x='+i+', j='+j+' y='+j+', k='+k+' z='+k+'. De binnenste teller k loopt het snelst.', ph:'b2'};
    }
  }
];

/* ════════════════════════════════════════
   DATA: WHILE-LOOP MODI
════════════════════════════════════════ */
var WHILE_MODES = [

  /* 0 — aftellen */
  { name:'aftellen',
    isWhile:true,
    wvars:[{name:'n', base:5}],
    code:[
      {t:'<span class="kw">var</span> n = <span class="num">5</span>', wp:'init'},
      {t:'', wp:null},
      {t:'<span class="kw-w">while</span> (n <span class="op">&gt;</span> <span class="num">0</span>) {', wp:'cond'},
      {t:'  console.log(n)', wp:'body'},
      {t:'  n<span class="op">--</span>  <span class="cm">// verminder n met 1</span>', wp:'body'},
      {t:'}', wp:null}
    ],
    tip:'<strong>while-loop:</strong> blijft draaien zolang de voorwaarde <code>true</code> is. Zorg altijd dat iets in de loop de voorwaarde uiteindelijk <code>false</code> maakt \u2014 anders krijg je een eindeloze loop!',
    done:'n heeft 0 bereikt, dus de voorwaarde n\u00a0>\u00a00 werd false en de loop stopte.',
    total:5,
    initWV:function(){ return [5]; },
    condFn:function(wv){ return wv[0] > 0; },
    condStr:function(wv){ return 'n > 0   ( n = '+wv[0]+' )'; },
    stepFn:function(wv, ex){
      var n=wv[0]; wv[0]--;
      return {log:'n = '+n, insight:'n is '+n+', dus > 0, we gaan de loop in. We printen '+n+', dan maakt n-- het '+(n-1)+'.', wp:'body'};
    },
    isDone:function(wv){ return wv[0] <= 0; }
  },

  /* 1 — eerste even getal */
  { name:'eerste even getal',
    isWhile:true,
    wvars:[{name:'n', base:11}],
    code:[
      {t:'<span class="kw">var</span> n = <span class="num">11</span>  <span class="cm">// begin oneven</span>', wp:'init'},
      {t:'', wp:null},
      {t:'<span class="kw-w">while</span> (n <span class="op">%</span> <span class="num">2</span> <span class="op">!&thinsp;==</span> <span class="num">0</span>) {', wp:'cond'},
      {t:'  n<span class="op">++</span>  <span class="cm">// ophogen tot even</span>', wp:'body'},
      {t:'}', wp:null},
      {t:'console.log(n)  <span class="cm">// eerste even \u2265 11</span>', wp:'done'}
    ],
    tip:'<strong>while voor zoeken:</strong> gebruik een while-loop als je van tevoren niet weet hoeveel stappen nodig zijn. Hier gaan we door totdat de voorwaarde false wordt.',
    done:'n is nu 12 \u2014 het eerste even getal \u2265 11. De voorwaarde n\u00a0%\u00a02\u00a0!==\u00a00 werd false, dus de loop eindigde.',
    total:1,
    initWV:function(){ return [11]; },
    condFn:function(wv){ return wv[0] % 2 !== 0; },
    condStr:function(wv){ return 'n % 2 !== 0   ( n = '+wv[0]+' )'; },
    stepFn:function(wv, ex){
      var before=wv[0]; wv[0]++;
      return {log:'n was '+before+' (oneven) \u2192 n is nu '+wv[0],
        insight:'n = '+before+' is oneven ('+before+' % 2 = 1), voorwaarde is true. We verhogen n naar '+wv[0]+'.', wp:'body'};
    },
    isDone:function(wv){ return wv[0] % 2 === 0; }
  },

  /* 2 — halveren */
  { name:'halveren',
    isWhile:true,
    wvars:[{name:'n', base:64}],
    code:[
      {t:'<span class="kw">var</span> n = <span class="num">64</span>', wp:'init'},
      {t:'', wp:null},
      {t:'<span class="kw-w">while</span> (n <span class="op">&gt;</span> <span class="num">1</span>) {', wp:'cond'},
      {t:'  n = n <span class="op">/</span> <span class="num">2</span>', wp:'body'},
      {t:'  console.log(n)', wp:'body'},
      {t:'}', wp:null}
    ],
    tip:'<strong>while met deling:</strong> dit patroon zie je terug in binair zoeken. Elke stap halveert n \u2014 het duurt maar 6 stappen om van 64 helemaal naar 1 te komen.',
    done:'n heeft 1 bereikt. De voorwaarde n\u00a0>\u00a01 werd false. Slechts 6 stappen nodig om 64 te halveren naar 1.',
    total:6,
    initWV:function(){ return [64]; },
    condFn:function(wv){ return wv[0] > 1; },
    condStr:function(wv){ return 'n > 1   ( n = '+wv[0]+' )'; },
    stepFn:function(wv, ex){
      var before=wv[0]; wv[0]=wv[0]/2;
      return {log:before+' / 2 = '+wv[0],
        insight:'n = '+before+' is > 1, dus halveren we: '+before+' / 2 = '+wv[0]+'.', wp:'body'};
    },
    isDone:function(wv){ return wv[0] <= 1; }
  },

  /* 3 — while + array */
  { name:'while + array',
    isWhile:true,
    wvars:[{name:'i', base:0}],
    arrays:[{varName:'scores', items:[85,92,47,76,61]}],
    code:[
      {t:'<span class="kw">var</span> scores = [<span class="num">85</span>,<span class="num">92</span>,<span class="num">47</span>,<span class="num">76</span>,<span class="num">61</span>]', wp:'init'},
      {t:'<span class="kw">var</span> i = <span class="num">0</span>', wp:'init'},
      {t:'', wp:null},
      {t:'<span class="kw-w">while</span> (i <span class="op">&lt;</span> scores.length) {', wp:'cond'},
      {t:'  console.log(scores[i])', wp:'body'},
      {t:'  i<span class="op">++</span>', wp:'body'},
      {t:'}', wp:null}
    ],
    tip:'<strong>while vs. for:</strong> dit doet hetzelfde als een for-loop over een array \u2014 maar je beheert de teller zelf. Een <code>for</code>-loop is voor dit patroon meestal overzichtelijker.',
    done:'i heeft scores.length (5) bereikt. Zelfde resultaat als een for-loop, alleen anders geschreven.',
    total:5,
    initWV:function(){ return [0]; },
    condFn:function(wv){ return wv[0] < 5; },
    condStr:function(wv){ return 'i < scores.length   ( i = '+wv[0]+' )'; },
    stepFn:function(wv, ex){
      var i=wv[0], arr=[85,92,47,76,61]; wv[0]++;
      return {ac:[[i]], log:'scores['+i+'] = '+arr[i],
        insight:'i = '+i+' is < 5, dus we gaan de loop in. We printen scores['+i+'] ('+arr[i]+'), daarna wordt i '+(i+1)+'.', wp:'body'};
    },
    isDone:function(wv){ return wv[0] >= 5; }
  }
];

/* ════════════════════════════════════════
   ENGINE
════════════════════════════════════════ */
var ALL_MODES = FOR_MODES.concat(WHILE_MODES);
var modeIdx   = 0;

var sCounters = [];
var sExtra    = [];
var sWVars    = [];
var sDone     = [];
var stepCount = 0;
var finished  = false;

var playing   = false;
var playTimer = null;
var speedMs   = [1500,1000,750,500,250];
var speedIdx  = 2;
var speedNames= ['langzaam','vrij langzaam','gemiddeld','snel','zeer snel'];

function getMode(){ return ALL_MODES[modeIdx]; }
function isWhile(){ return !!getMode().isWhile; }

function initEngineState(){
  var m = getMode();
  if(isWhile()){
    sWVars    = m.initWV();
    sCounters = [];
    sExtra    = [];
  } else {
    sCounters = m.initC();
    sExtra    = m.extra ? m.extra.map(function(e){ return e.base; }) : [];
    sWVars    = [];
  }
  sDone     = (m.arrays||[]).map(function(){ return []; });
  stepCount = 0;
  finished  = false;
}

function buildPresets(){
  var fEl = document.getElementById('presetFor');
  var wEl = document.getElementById('presetWhile');
  fEl.innerHTML = ''; wEl.innerHTML = '';

  FOR_MODES.forEach(function(m, fi){
    var b = document.createElement('button');
    b.className = 'pb' + (modeIdx === fi ? ' on' : '');
    b.textContent = m.name;
    b.onclick = (function(idx){ return function(){ modeIdx=idx; reset(); buildPresets(); }; })(fi);
    fEl.appendChild(b);
  });

  WHILE_MODES.forEach(function(m, wi){
    var globalIdx = FOR_MODES.length + wi;
    var b = document.createElement('button');
    b.className = 'pb while-btn' + (modeIdx === globalIdx ? ' on' : '');
    b.textContent = m.name;
    b.onclick = (function(idx){ return function(){ modeIdx=idx; reset(); buildPresets(); }; })(globalIdx);
    wEl.appendChild(b);
  });

  document.getElementById('btnStep').className = 'btn ' + (isWhile() ? 'while-step' : 'for-step');
  document.getElementById('progressFill').style.background = isWhile() ? '#BA7517' : '#185FA5';
}

function buildCode(){
  var m = getMode(), html = '';
  m.code.forEach(function(line, l){
    html += '<div class="code-line" id="cl'+l+'"><span class="ln">'+(l+1)+'</span><span class="src">'+(line.t||'&nbsp;')+'</span></div>';
  });
  document.getElementById('codeBlock').innerHTML = html;
  buildLegend();
}

function buildLegend(){
  var m = getMode(), html = '';
  var DC = ['#378ADD','#5DCAA5','#AFA9EC'];
  var DL = ['buitenste loop (i)','middelste loop (j)','binnenste loop (k)'];
  if(isWhile()){
    html = '<div class="dl-item"><div class="dl-dot" style="background:#EF9F27"></div><span>while-loop \u2014 oranje</span></div>';
  } else if(m.depth > 1){
    for(var d=0; d<m.depth; d++) html += '<div class="dl-item"><div class="dl-dot" style="background:'+DC[d]+'"></div><span>'+DL[d]+'</span></div>';
  }
  document.getElementById('depthLegend').innerHTML = html;
}

function clearHL(){ document.querySelectorAll('.code-line').forEach(function(el){ el.className='code-line'; }); }

function hlFor(ph){
  clearHL();
  var m = getMode();
  m.code.forEach(function(line, l){
    if(line.ph === ph){
      var cls = line.d===0?'hl-d0': line.d===1?'hl-d1': line.d===2?'hl-d2':'';
      if(cls) document.getElementById('cl'+l).className = 'code-line '+cls;
    }
  });
}

function hlWhile(wp){
  clearHL();
  var m = getMode();
  m.code.forEach(function(line, l){
    if(line.wp === wp){
      var cls = wp==='cond' ? 'hl-while-cond' : 'hl-while';
      document.getElementById('cl'+l).className = 'code-line '+cls;
    }
  });
}

function buildRightPanel(){
  var m = getMode();
  var arrs = m.arrays || [];
  if(isWhile() && arrs.length === 0){
    document.getElementById('rightLabel').textContent = 'variabele';
    var html = '<div class="var-display">';
    m.wvars.forEach(function(v, vi){
      html += '<div class="var-row">'
        + '<span class="var-name">'+v.name+'</span>'
        + '<div class="var-val-box active" id="wvBox'+vi+'">'+v.base+'</div>'
        + '<span class="var-cond" id="wvCond'+vi+'">voorwaarde: ?</span>'
        + '</div>';
    });
    html += '</div>';
    document.getElementById('rightBody').innerHTML = html;
  } else {
    document.getElementById('rightLabel').textContent = arrs.length > 1 ? 'arrays in geheugen' : 'array in geheugen';
    var html = '<div class="arrays-wrap">';
    arrs.forEach(function(arr, ai){
      var lcls = isWhile() ? 'ldw' : ['ld0','ld1','ld2'][ai];
      var ptrCls = isWhile() ? 'ldw' : ['ld0','ld1','ld2'][ai];
      html += '<div class="arr-group"><div class="arr-label '+lcls+'">'+arr.varName+'</div><div class="arr-row">';
      arr.items.forEach(function(v, ci){
        html += '<div class="cell" id="cell-'+ai+'-'+ci+'">'
          + '<div class="cell-ptr '+ptrCls+'" id="ptr-'+ai+'-'+ci+'"></div>'
          + '<div class="cell-box" id="box-'+ai+'-'+ci+'">'+v+'</div>'
          + '<div class="cell-idx">['+ci+']</div>'
          + '</div>';
      });
      html += '</div></div>';
    });
    html += '</div>';
    document.getElementById('rightBody').innerHTML = html;
  }
}

function updateVarDisplay(){
  var m = getMode();
  if(!isWhile()) return;
  var cond = !m.isDone(sWVars);
  m.wvars.forEach(function(v, vi){
    var box = document.getElementById('wvBox'+vi);
    if(box){ box.textContent = String(sWVars[vi]); box.className = 'var-val-box'+(cond?' active':''); }
    var cd = document.getElementById('wvCond'+vi);
    if(cd){ cd.textContent = m.condStr(sWVars); cd.className = 'var-cond '+(cond?'tc':'fc'); }
  });
}

function updateCells(ac){
  var m = getMode(), arrs = m.arrays||[];
  arrs.forEach(function(arr, ai){
    var activeIdx = (ac && ac[ai]) ? ac[ai][0] : -1;
    arr.items.forEach(function(v, ci){
      var box  = document.getElementById('box-'+ai+'-'+ci);
      var ptr  = document.getElementById('ptr-'+ai+'-'+ci);
      var cell = document.getElementById('cell-'+ai+'-'+ci);
      if(!box) return;
      box.className = 'cell-box';
      if(ptr)  ptr.textContent = '';
      if(cell) cell.classList.remove('active');
      var done = sDone[ai].indexOf(ci) >= 0;
      if(ci === activeIdx){
        box.classList.add(isWhile() ? 'cb-aw' : ['cb-a0','cb-a1','cb-a2'][ai]);
        if(ptr)  ptr.textContent = (isWhile()?'i':'ijk'[ai])+'='+ci;
        if(cell) cell.classList.add('active');
      } else if(done){
        box.classList.add(isWhile() ? 'cb-dw' : ['cb-d0','cb-d1','cb-d2'][ai]);
      }
    });
  });
}

function buildState(){
  var m = getMode(), html = '';
  if(isWhile()){
    m.wvars.forEach(function(v, vi){
      html += '<div class="state-card"><div class="state-key">'+v.name+'</div><div class="state-val" id="svWV'+vi+'">'+v.base+'</div></div>';
    });
    html += '<div class="state-card"><div class="state-key">voorwaarde</div><div class="state-val" id="svCond">\u2014</div></div>';
    html += '<div class="state-card"><div class="state-key">iteraties</div><div class="state-val" id="svIter">0</div></div>';
  } else {
    for(var d=0; d<m.depth; d++){
      var vn = ['i','j','k'][d];
      var len = m.arrays[d].items.length;
      html += '<div class="state-card"><div class="state-key">'+vn+'</div><div class="state-val" id="svI'+d+'">\u2014</div></div>';
      html += '<div class="state-card"><div class="state-key">'+vn+' &lt; '+len+'</div><div class="state-val" id="svC'+d+'">\u2014</div></div>';
    }
    sExtra.forEach(function(v, ei){
      html += '<div class="state-card"><div class="state-key">'+m.extra[ei].label+'</div><div class="state-val" id="svEx'+ei+'">'+v+'</div></div>';
    });
  }
  document.getElementById('stateRow').innerHTML = html;
}

function refreshState(){
  var m = getMode();
  if(isWhile()){
    var cond = !m.isDone(sWVars);
    m.wvars.forEach(function(v, vi){
      var el = document.getElementById('svWV'+vi);
      if(el){ el.textContent = String(sWVars[vi]); el.classList.add('sv-flash-while'); setTimeout(function(){ el.classList.remove('sv-flash-while'); }, 400); }
    });
    var ce = document.getElementById('svCond');
    if(ce){ ce.textContent = cond?'true':'false'; ce.className = 'state-val '+(cond?'sv-true':'sv-false'); }
    var ie = document.getElementById('svIter');
    if(ie) ie.textContent = String(stepCount);
  } else {
    for(var d=0; d<m.depth; d++){
      var len = m.arrays[d].items.length, iv = sCounters[d];
      var iEl = document.getElementById('svI'+d); if(iEl) iEl.textContent = String(iv);
      var cEl = document.getElementById('svC'+d);
      if(cEl){ cEl.textContent = iv<len?'true':'false'; cEl.className='state-val '+(iv<len?'sv-true':'sv-false'); }
    }
  }
}

function flashExtra(indices){
  if(!indices) return;
  indices.forEach(function(ei){
    var el = document.getElementById('svEx'+ei);
    if(!el) return;
    el.textContent = String(sExtra[ei]);
    el.classList.add('sv-flash-for');
    setTimeout(function(){ el.classList.remove('sv-flash-for'); }, 400);
  });
}

function addLog(text){
  var area = document.getElementById('logArea');
  var empty = area.querySelector('.log-empty'); if(empty) area.innerHTML='';
  area.querySelectorAll('.log-entry').forEach(function(e){ e.classList.remove('new'); });
  var span = document.createElement('span'); span.className='log-entry new'; span.textContent=text;
  area.appendChild(span); area.scrollTop = area.scrollHeight;
}
function setInsight(t){ document.getElementById('insightBox').textContent = t; }

function updateProgress(){
  var m = getMode();
  var pct = Math.min(100, Math.round(stepCount / m.total * 100));
  document.getElementById('progressFill').style.width = pct+'%';
}

function updateSpeed(){
  speedIdx = parseInt(document.getElementById('speedSlider').value) - 1;
  document.getElementById('speedLabel').textContent = speedNames[speedIdx];
  if(playing){ clearInterval(playTimer); playTimer = setInterval(step, speedMs[speedIdx]); }
}

function reset(){
  clearInterval(playTimer); playing=false; setPlayIcon(false);
  initEngineState();
  buildCode(); buildRightPanel(); buildState();
  updateCells(null); refreshState();
  document.getElementById('logArea').innerHTML = '<span class="log-empty">nog geen uitvoer \u2014 doorloop de loop stap voor stap</span>';
  setInsight('Druk op stap om de loop stap voor stap te doorlopen.');
  document.getElementById('btnStep').disabled = false;
  document.getElementById('progressFill').style.width = '0%';
  var m = getMode();
  var tb = document.getElementById('tipBox');
  tb.innerHTML = m.tip; tb.className = 'lb-ins'+(isWhile()?' while':'');
  clearHL();
  if(isWhile()) hlWhile('cond'); else hlFor(m.code.find(function(l){ return l.ph; }).ph);
  if(isWhile()) updateVarDisplay();
}

function step(){
  var m = getMode();
  if(isWhile()){
    if(m.isDone(sWVars)){ finishLoop(); return; }
    var r = m.stepFn(sWVars, sExtra);
    stepCount++;
    if(r.ac){
      r.ac.forEach(function(idxArr, ai){
        var ci=idxArr[0];
        if(sDone[ai].indexOf(ci)<0) sDone[ai].push(ci);
        updateCells(r.ac);
      });
    }
    refreshState(); updateVarDisplay();
    addLog(r.log); setInsight(r.insight);
    hlWhile(r.wp); updateProgress();
    if(m.isDone(sWVars)) setTimeout(finishLoop, 350);
  } else {
    if(m.isDone(sCounters)){ finishLoop(); return; }
    var r = m.stepFn(sCounters, sExtra);
    stepCount++;
    if(r.ac && m.depth===1){
      var ci=r.ac[0][0];
      if(sDone[0].indexOf(ci)<0) sDone[0].push(ci);
    }
    updateCells(r.ac); refreshState();
    if(r.fe) flashExtra(r.fe);
    addLog(r.log); setInsight(r.insight);
    hlFor(r.ph); updateProgress();
    if(m.isDone(sCounters)) setTimeout(finishLoop, 350);
  }
}

function finishLoop(){
  finished = true;
  clearHL(); updateCells(null);
  var m = getMode();
  var msg = typeof m.done==='function' ? m.done(isWhile()?sWVars:sExtra) : m.done;
  setInsight(msg);
  document.getElementById('progressFill').style.width = '100%';
  clearInterval(playTimer); playing=false; setPlayIcon(false);
  document.getElementById('btnStep').disabled = true;
  if(isWhile()){
    var ce = document.getElementById('svCond');
    if(ce){ ce.textContent='false'; ce.className='state-val sv-false'; }
    updateVarDisplay();
  }
}

function setPlayIcon(p){
  document.getElementById('playIcon').innerHTML = p
    ? '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>'
    : '<polygon points="5 3 19 12 5 21 5 3"/>';
  document.getElementById('playLabel').textContent = p ? 'pauzeren' : 'afspelen';
}
function togglePlay(){
  if(playing){
    clearInterval(playTimer); playing=false; setPlayIcon(false);
  } else {
    if(document.getElementById('btnStep').disabled) reset();
    playing=true; setPlayIcon(true);
    playTimer=setInterval(function(){
      if(document.getElementById('btnStep').disabled){ clearInterval(playTimer); playing=false; setPlayIcon(false); return; }
      step();
    }, speedMs[speedIdx]);
  }
}

buildPresets();
reset();
</script>
{{< /rawhtml >}}
