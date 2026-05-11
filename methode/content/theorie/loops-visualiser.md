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

  body {
    font-family: var(--sans);
    background: var(--bg);
    color: var(--text-1);
    min-height: 100vh;
    padding: 2.5rem 1.5rem;
  }

  .wrapper { max-width: 960px; margin: 0 auto; }

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

  /* presets */
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
  .pb.on { background: var(--accent-bg); color: var(--accent); border-color: var(--accent-bd); }

  /* controls bar */
  .lb-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    padding: 9px 12px;
    background: var(--surface);
    border: 0.5px solid var(--border-md);
    border-radius: var(--radius-lg);
  }
  .btn {
    font-family: var(--sans);
    font-size: 12.5px;
    font-weight: 500;
    padding: 5px 13px;
    border-radius: var(--radius-md);
    border: 0.5px solid var(--border-md);
    background: var(--surface);
    color: var(--text-2);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: background 0.12s, color 0.12s;
  }
  .btn:hover { background: var(--surface-2); color: var(--text-1); }
  .btn:disabled { opacity: 0.35; cursor: default; }
  .btn-primary { background: var(--accent-bg); color: var(--accent); border-color: var(--accent-bd); }
  .btn-primary:hover { background: #d0e7f7; color: var(--accent-tx); }

  .speed-group {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text-3);
  }
  input[type=range] {
    -webkit-appearance: none;
    appearance: none;
    width: 80px;
    height: 3px;
    background: rgba(0,0,0,0.15);
    border-radius: 2px;
    outline: none;
  }
  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 13px; height: 13px;
    border-radius: 50%;
    background: var(--accent);
    cursor: pointer;
  }
  input[type=range]::-moz-range-thumb {
    width: 13px; height: 13px;
    border-radius: 50%;
    background: var(--accent);
    cursor: pointer;
    border: none;
  }

  /* progress */
  .lb-progress { height: 2px; background: var(--border); border-radius: 1px; overflow: hidden; margin-bottom: 1rem; }
  .lb-progress-fill { height: 100%; background: var(--accent); border-radius: 1px; transition: width 0.25s; width: 0%; }

  /* workspace */
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

  /* code panel */
  .code-body { padding: 10px 12px; overflow-x: auto; }
  .code-line {
    display: flex;
    gap: 10px;
    padding: 0px 6px;
    border-radius: 4px;
    font-family: var(--mono);
    font-size: 12px;
    line-height: 1.85;
    transition: background 0.15s;
    white-space: pre;
  }
  .code-line .ln { color: var(--text-3); font-size: 10.5px; min-width: 16px; user-select: none; padding-top: 1px; }
  .code-line .src { color: var(--text-2); flex: 1; }
  .code-line.active-outer { background: #e6f1fb; }
  .code-line.active-outer .src { color: var(--text-1); }
  .code-line.active-outer .ln { color: var(--accent); }
  .code-line.active-mid { background: #eaf3de; }
  .code-line.active-mid .src { color: #1a1918; }
  .code-line.active-mid .ln { color: #3B6D11; }
  .code-line.active-inner { background: #f5eef8; }
  .code-line.active-inner .src { color: #1a1918; }
  .code-line.active-inner .ln { color: #533AB7; }

  .kw  { color: var(--kw); }
  .num { color: var(--num); }
  .str { color: var(--str); }
  .op  { color: var(--op); }
  .cm  { color: var(--cm); font-style: italic; }

  /* arrays panel — shows multiple arrays for nested loops */
  .arrays-wrap { padding: 10px 12px 12px; }
  .arr-group { margin-bottom: 10px; }
  .arr-label {
    font-family: var(--mono);
    font-size: 9.5px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    margin-bottom: 5px;
  }
  .arr-label.l0 { color: var(--accent); }
  .arr-label.l1 { color: #3B6D11; }
  .arr-label.l2 { color: #533AB7; }

  .arr-row { display: flex; gap: 6px; flex-wrap: wrap; align-items: flex-end; }
  .cell { display: flex; flex-direction: column; align-items: center; gap: 2px; transition: transform 0.18s; }
  .cell.active { transform: translateY(-3px); }
  .cell-ptr { font-family: var(--mono); font-size: 9px; height: 11px; font-weight: 500; }
  .cell-ptr.l0 { color: var(--accent); }
  .cell-ptr.l1 { color: #3B6D11; }
  .cell-ptr.l2 { color: #533AB7; }
  .cell-box {
    width: 46px; height: 46px;
    border-radius: var(--radius-md);
    border: 0.5px solid var(--border-md);
    background: var(--surface-2);
    display: flex; align-items: center; justify-content: center;
    font-family: var(--mono); font-size: 12px; font-weight: 500;
    color: var(--text-2);
    transition: all 0.2s;
  }
  .cell-box.active-0 { background: var(--accent-bg); border-color: var(--accent-bd); color: var(--accent-tx); }
  .cell-box.active-1 { background: #eaf3de; border-color: rgba(59,109,17,0.35); color: #3B6D11; }
  .cell-box.active-2 { background: #f5eef8; border-color: rgba(83,58,183,0.25); color: #533AB7; }
  .cell-box.done-0   { background: #e6f1fb; border-color: rgba(24,95,165,0.2); color: #185FA5; opacity: 0.55; }
  .cell-box.done-1   { background: #eaf3de; border-color: rgba(59,109,17,0.2); color: #3B6D11; opacity: 0.55; }
  .cell-box.done-2   { background: #f5eef8; border-color: rgba(83,58,183,0.2); color: #533AB7; opacity: 0.55; }
  .cell-idx { font-family: var(--mono); font-size: 9px; color: var(--text-3); }

  /* state panel */
  .state-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 8px;
    padding: 10px 12px;
  }
  .state-card {
    background: var(--surface-2);
    border: 0.5px solid var(--border);
    border-radius: var(--radius-md);
    padding: 8px 10px;
  }
  .state-key { font-family: var(--mono); font-size: 9.5px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--text-3); margin-bottom: 2px; }
  .state-val { font-family: var(--mono); font-size: 18px; font-weight: 500; color: var(--text-1); transition: color 0.2s; }
  .state-val.true-c  { color: #3B6D11; }
  .state-val.false-c { color: #993C1D; }
  .state-val.flash-0 { color: var(--accent); }
  .state-val.flash-1 { color: #3B6D11; }
  .state-val.flash-2 { color: #533AB7; }

  /* log */
  .log-body {
    padding: 10px 14px;
    font-family: var(--mono);
    font-size: 11.5px;
    line-height: 1.85;
    min-height: 70px;
    max-height: 150px;
    overflow-y: auto;
  }
  .log-entry { display: block; color: var(--text-2); }
  .log-entry.new { color: var(--text-1); }
  .log-empty { color: var(--text-3); font-style: italic; }

  /* insight body */
  .insight-body {
    padding: 10px 14px;
    font-size: 13px;
    color: var(--text-2);
    line-height: 1.65;
    min-height: 70px;
  }

  /* bottom tip */
  .lb-ins {
    background: var(--accent-bg);
    border: 0.5px solid var(--accent-bd);
    border-radius: var(--radius-md);
    padding: 10px 14px;
    font-size: 13px;
    color: var(--accent-tx);
    line-height: 1.65;
    margin-bottom: 1rem;
  }
  .lb-ins strong { font-weight: 500; }
  .lb-ins code {
    font-family: var(--mono);
    font-size: 11.5px;
    background: rgba(24,95,165,0.12);
    padding: 1px 5px;
    border-radius: 4px;
  }

  .icon { width: 13px; height: 13px; vertical-align: middle; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }

  /* nested loop depth legend */
  .depth-legend {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    font-family: var(--mono);
    font-size: 10.5px;
    padding: 7px 12px;
    border-top: 0.5px solid var(--border);
    background: var(--surface-2);
  }
  .dl-item { display: flex; align-items: center; gap: 5px; }
  .dl-dot { width: 8px; height: 8px; border-radius: 2px; }
</style>

<div class="wrapper">

  <div class="lb-header">
    <h1>for loops + arrays — visualizer</h1>
    <p>Pick a scenario and step through the loop one iteration at a time. Nested loops are colour-coded by depth.</p>
  </div>

  <div class="lb-presets" id="lbp"></div>

  <div class="lb-controls">
    <button class="btn btn-primary" id="btnStep" onclick="step()">
      <svg class="icon" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      step
    </button>
    <button class="btn" id="btnPlay" onclick="togglePlay()">
      <svg class="icon" id="playIcon" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
      <span id="playLabel">play</span>
    </button>
    <button class="btn" onclick="reset()">
      <svg class="icon" viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg>
      reset
    </button>
    <div class="speed-group">
      speed
      <input type="range" min="1" max="5" step="1" value="3" id="speedSlider" oninput="updateSpeed()">
      <span id="speedLabel">medium</span>
    </div>
  </div>

  <div class="lb-progress"><div class="lb-progress-fill" id="progressFill"></div></div>

  <div class="lb-ws">
    <div class="lb-panel">
      <div class="lb-plabel">code</div>
      <div class="code-body" id="codeBlock"></div>
      <div class="depth-legend" id="depthLegend"></div>
    </div>
    <div class="lb-panel">
      <div class="lb-plabel">arrays in memory</div>
      <div class="arrays-wrap" id="arrayRow"></div>
    </div>
    <div class="lb-panel" style="grid-column:1/-1">
      <div class="lb-plabel">loop state</div>
      <div class="state-row" id="stateRow"></div>
    </div>
    <div class="lb-panel">
      <div class="lb-plabel">console output</div>
      <div class="log-body" id="logArea"><span class="log-empty">no output yet — step through the loop</span></div>
    </div>
    <div class="lb-panel">
      <div class="lb-plabel">what's happening</div>
      <div class="insight-body" id="insightBox">Press step to begin.</div>
    </div>
  </div>

  <div class="lb-ins" id="lbi"></div>

</div>

<script>
/* ─── colour palette per loop depth ─── */
var DEPTH_COLORS = [
  { bg: '#e6f1fb', bd: 'rgba(24,95,165,0.25)',  tx: '#0c447c', dot: '#378ADD', label: 'outer loop (i)', cls: 'l0' },
  { bg: '#eaf3de', bd: 'rgba(59,109,17,0.30)',   tx: '#3B6D11', dot: '#5DCAA5', label: 'middle loop (j)', cls: 'l1' },
  { bg: '#f5eef8', bd: 'rgba(83,58,183,0.22)',   tx: '#533AB7', dot: '#AFA9EC', label: 'inner loop (k)',  cls: 'l2' }
];

/* ─── scenario definitions ─── */
var MODES = [
  /* 0 — basic single loop */
  {
    name: 'basic for loop',
    depth: 1,
    arrays: [
      { varName: 'fruits', items: ['apple','banana','cherry','date','elderberry'] }
    ],
    code: [
      { t: '<span class="kw">var</span> fruits = [<span class="str">"apple"</span>, <span class="str">"banana"</span>, ...]', d: -1 },
      { t: '', d: -1 },
      { t: '<span class="kw">for</span> (<span class="kw">var</span> i = <span class="num">0</span>; i <span class="op">&lt;</span> fruits.length; i<span class="op">++</span>) {', d: 0, ph: 'check-0' },
      { t: '  console.log(fruits[i])', d: 0, ph: 'body-0' },
      { t: '}', d: -1 }
    ],
    tip: '<strong>array index:</strong> arrays start at <code>0</code>, not <code>1</code>. <code>fruits[0]</code> is the first item; the last is always at <code>fruits.length - 1</code>.',
    done: 'Loop finished — i reached fruits.length (5). Every element was visited exactly once.',
    step: function(state) {
      var i = state.counters[0];
      var arr = MODES[0].arrays[0].items;
      state.counters[0]++;
      return {
        activeCell: [[i]],
        log: 'fruits[' + i + '] \u2192 "' + arr[i] + '"',
        insight: 'i = ' + i + '. We read fruits[' + i + '], which is "' + arr[i] + '". Then i becomes ' + (i+1) + '.',
        phase: 'body-0'
      };
    },
    isDone: function(state) { return state.counters[0] >= MODES[0].arrays[0].items.length; },
    totalSteps: function() { return MODES[0].arrays[0].items.length; }
  },

  /* 1 — sum with accumulator */
  {
    name: 'sum with accumulator',
    depth: 1,
    arrays: [
      { varName: 'numbers', items: [3, 7, 2, 9, 4] }
    ],
    extra: [{ label: 'sum', val: 0 }],
    code: [
      { t: '<span class="kw">var</span> numbers = [<span class="num">3</span>, <span class="num">7</span>, <span class="num">2</span>, <span class="num">9</span>, <span class="num">4</span>]', d: -1 },
      { t: '<span class="kw">var</span> sum = <span class="num">0</span>  <span class="cm">// starts at 0</span>', d: -1 },
      { t: '', d: -1 },
      { t: '<span class="kw">for</span> (<span class="kw">var</span> i = <span class="num">0</span>; i <span class="op">&lt;</span> numbers.length; i<span class="op">++</span>) {', d: 0, ph: 'check-0' },
      { t: '  sum = sum <span class="op">+</span> numbers[i]', d: 0, ph: 'body-0' },
      { t: '}', d: -1 }
    ],
    tip: '<strong>accumulator pattern:</strong> declare <code>var sum = 0</code> before the loop, then add to it each iteration. This is one of the most common patterns in JavaScript.',
    done: function(state) { return 'Loop done. sum = ' + state.extra[0].val + '. All 5 numbers added one at a time.'; },
    step: function(state) {
      var i = state.counters[0];
      var arr = MODES[1].arrays[0].items;
      var prev = state.extra[0].val;
      state.extra[0].val = prev + arr[i];
      state.counters[0]++;
      return {
        activeCell: [[i]],
        log: 'sum = ' + prev + ' + ' + arr[i] + ' = ' + state.extra[0].val,
        insight: 'We add numbers[' + i + '] (' + arr[i] + ') to sum. sum was ' + prev + ', now it\u2019s ' + state.extra[0].val + '.',
        phase: 'body-0',
        flashExtra: [0]
      };
    },
    isDone: function(state) { return state.counters[0] >= MODES[1].arrays[0].items.length; },
    totalSteps: function() { return MODES[1].arrays[0].items.length; }
  },

  /* 2 — nested 2: multiplication table */
  {
    name: 'nested \u00d7 2',
    depth: 2,
    arrays: [
      { varName: 'rows',  items: [1, 2, 3] },
      { varName: 'cols',  items: [1, 2, 3] }
    ],
    code: [
      { t: '<span class="kw">var</span> rows = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]', d: -1 },
      { t: '<span class="kw">var</span> cols = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]', d: -1 },
      { t: '', d: -1 },
      { t: '<span class="kw">for</span> (<span class="kw">var</span> i = <span class="num">0</span>; i <span class="op">&lt;</span> rows.length; i<span class="op">++</span>) {', d: 0, ph: 'check-0' },
      { t: '  <span class="kw">for</span> (<span class="kw">var</span> j = <span class="num">0</span>; j <span class="op">&lt;</span> cols.length; j<span class="op">++</span>) {', d: 1, ph: 'check-1' },
      { t: '    console.log(rows[i] <span class="op">*</span> cols[j])', d: 1, ph: 'body-1' },
      { t: '  }', d: 1 },
      { t: '}', d: -1 }
    ],
    tip: '<strong>nested loops:</strong> the inner loop runs <em>completely</em> for every single step of the outer loop. With 3 \u00d7 3 arrays that\u2019s 9 total iterations \u2014 the number of steps multiplies.',
    done: 'Both loops finished. The outer loop ran 3 times; the inner loop ran 3 times per outer step \u2014 9 total iterations.',
    step: function(state) {
      var m = MODES[2];
      var i = state.counters[0], j = state.counters[1];
      var ri = m.arrays[0].items[i], cj = m.arrays[1].items[j];
      var res = ri * cj;
      state.counters[1]++;
      if (state.counters[1] >= m.arrays[1].items.length) {
        state.counters[1] = 0;
        state.counters[0]++;
      }
      return {
        activeCell: [[i], [j]],
        log: 'rows[' + i + '] \u00d7 cols[' + j + '] = ' + ri + ' \u00d7 ' + cj + ' = ' + res,
        insight: 'Outer i=' + i + ' (rows[i]=' + ri + '), inner j=' + j + ' (cols[j]=' + cj + '). Product = ' + res + '.',
        phase: 'body-1'
      };
    },
    isDone: function(state) { return state.counters[0] >= MODES[2].arrays[0].items.length; },
    totalSteps: function() { return MODES[2].arrays[0].items.length * MODES[2].arrays[1].items.length; }
  },

  /* 3 — nested 3: 3D coordinates */
  {
    name: 'nested \u00d7 3',
    depth: 3,
    arrays: [
      { varName: 'xs', items: [0, 1] },
      { varName: 'ys', items: [0, 1] },
      { varName: 'zs', items: [0, 1] }
    ],
    code: [
      { t: '<span class="kw">var</span> xs = [<span class="num">0</span>, <span class="num">1</span>]', d: -1 },
      { t: '<span class="kw">var</span> ys = [<span class="num">0</span>, <span class="num">1</span>]', d: -1 },
      { t: '<span class="kw">var</span> zs = [<span class="num">0</span>, <span class="num">1</span>]', d: -1 },
      { t: '', d: -1 },
      { t: '<span class="kw">for</span> (<span class="kw">var</span> i = <span class="num">0</span>; i <span class="op">&lt;</span> xs.length; i<span class="op">++</span>) {', d: 0, ph: 'check-0' },
      { t: '  <span class="kw">for</span> (<span class="kw">var</span> j = <span class="num">0</span>; j <span class="op">&lt;</span> ys.length; j<span class="op">++</span>) {', d: 1, ph: 'check-1' },
      { t: '    <span class="kw">for</span> (<span class="kw">var</span> k = <span class="num">0</span>; k <span class="op">&lt;</span> zs.length; k<span class="op">++</span>) {', d: 2, ph: 'check-2' },
      { t: '      console.log(xs[i], ys[j], zs[k])', d: 2, ph: 'body-2' },
      { t: '    }', d: 2 },
      { t: '  }', d: 1 },
      { t: '}', d: -1 }
    ],
    tip: '<strong>three nested loops:</strong> think of them as ticking digits in a number. The innermost counter (k) resets every time the middle counter (j) advances. 2\u00d72\u00d72 = 8 total iterations.',
    done: 'All three loops finished. 2 \u00d7 2 \u00d7 2 = 8 total iterations \u2014 every (x, y, z) coordinate combination was visited.',
    step: function(state) {
      var m = MODES[3];
      var i = state.counters[0], j = state.counters[1], k = state.counters[2];
      var x = m.arrays[0].items[i], y = m.arrays[1].items[j], z = m.arrays[2].items[k];
      state.counters[2]++;
      if (state.counters[2] >= m.arrays[2].items.length) {
        state.counters[2] = 0;
        state.counters[1]++;
        if (state.counters[1] >= m.arrays[1].items.length) {
          state.counters[1] = 0;
          state.counters[0]++;
        }
      }
      return {
        activeCell: [[i], [j], [k]],
        log: '(' + x + ', ' + y + ', ' + z + ')',
        insight: 'i=' + i + ' (x=' + x + '), j=' + j + ' (y=' + y + '), k=' + k + ' (z=' + z + '). Innermost k ticks fastest.',
        phase: 'body-2'
      };
    },
    isDone: function(state) { return state.counters[0] >= MODES[3].arrays[0].items.length; },
    totalSteps: function() { return 8; }
  },

  /* 4 — find largest (single) */
  {
    name: 'find largest',
    depth: 1,
    arrays: [
      { varName: 'nums', items: [12, 5, 38, 7, 21] }
    ],
    extra: [{ label: 'max', val: 12 }],
    code: [
      { t: '<span class="kw">var</span> nums = [<span class="num">12</span>, <span class="num">5</span>, <span class="num">38</span>, <span class="num">7</span>, <span class="num">21</span>]', d: -1 },
      { t: '<span class="kw">var</span> max = nums[<span class="num">0</span>]  <span class="cm">// start with first</span>', d: -1 },
      { t: '', d: -1 },
      { t: '<span class="kw">for</span> (<span class="kw">var</span> i = <span class="num">1</span>; i <span class="op">&lt;</span> nums.length; i<span class="op">++</span>) {', d: 0, ph: 'check-0' },
      { t: '  <span class="kw">if</span> (nums[i] <span class="op">&gt;</span> max) {', d: 0, ph: 'body-0' },
      { t: '    max = nums[i]', d: 0, ph: 'body-0' },
      { t: '  }', d: 0 },
      { t: '}', d: -1 }
    ],
    tip: '<strong>if inside a loop:</strong> we start i at <code>1</code> because <code>max = nums[0]</code> is already set — no need to compare the first element to itself.',
    done: function(state) { return 'Done. max = ' + state.extra[0].val + '. We compared every element and kept the largest seen so far.'; },
    startAt: [1],
    step: function(state) {
      var arr = MODES[4].arrays[0].items;
      var i = state.counters[0];
      var prev = state.extra[0].val;
      var bigger = arr[i] > prev;
      if (bigger) state.extra[0].val = arr[i];
      state.counters[0]++;
      return {
        activeCell: [[i]],
        log: bigger
          ? 'nums[' + i + ']=' + arr[i] + ' > max(' + prev + ') \u2192 new max: ' + arr[i]
          : 'nums[' + i + ']=' + arr[i] + ' \u2264 max(' + prev + ') \u2192 no change',
        insight: bigger
          ? arr[i] + ' is larger than the current max (' + prev + '), so max updates to ' + arr[i] + '.'
          : arr[i] + ' is not larger than ' + prev + ', so max stays the same.',
        phase: 'body-0',
        flashExtra: bigger ? [0] : []
      };
    },
    isDone: function(state) { return state.counters[0] >= MODES[4].arrays[0].items.length; },
    totalSteps: function() { return 4; }
  }
];

/* ─── engine state ─── */
var modeIdx = 0;
var engineState = null;
var donePerArray = [];   // array of sets, one per array
var playing = false;
var playTimer = null;
var stepCount = 0;
var speedMs = [700, 500, 350, 200, 100];
var speedIdx = 2;
var speedNames = ['slow', 'medium-slow', 'medium', 'fast', 'very fast'];

function getMode() { return MODES[modeIdx]; }

function initState() {
  var m = getMode();
  var start = m.startAt || [];
  var counters = [];
  for (var d = 0; d < m.depth; d++) counters.push(start[d] !== undefined ? start[d] : 0);
  var extra = null;
  if (m.extra) {
    extra = [];
    for (var e = 0; e < m.extra.length; e++) extra.push({ label: m.extra[e].label, val: m.extra[e].val });
  }
  donePerArray = [];
  for (var a = 0; a < m.arrays.length; a++) donePerArray.push([]);
  return { counters: counters, extra: extra };
}

/* ─── presets ─── */
function buildPresets() {
  var c = document.getElementById('lbp');
  c.innerHTML = '';
  for (var m = 0; m < MODES.length; m++) {
    (function(idx) {
      var b = document.createElement('button');
      b.className = 'pb' + (idx === modeIdx ? ' on' : '');
      b.textContent = MODES[idx].name;
      b.onclick = function() { modeIdx = idx; reset(); buildPresets(); };
      c.appendChild(b);
    })(m);
  }
}

/* ─── code panel ─── */
function buildCode() {
  var m = getMode();
  var html = '';
  for (var l = 0; l < m.code.length; l++) {
    html += '<div class="code-line" id="cl' + l + '"><span class="ln">' + (l+1) + '</span><span class="src">' + (m.code[l].t || '&nbsp;') + '</span></div>';
  }
  document.getElementById('codeBlock').innerHTML = html;
  buildDepthLegend();
}

function buildDepthLegend() {
  var m = getMode();
  if (m.depth <= 1) { document.getElementById('depthLegend').innerHTML = ''; return; }
  var html = '';
  for (var d = 0; d < m.depth; d++) {
    html += '<div class="dl-item"><div class="dl-dot" style="background:' + DEPTH_COLORS[d].dot + '"></div><span style="font-family:var(--mono);font-size:10.5px;color:var(--text-3)">' + DEPTH_COLORS[d].label + '</span></div>';
  }
  document.getElementById('depthLegend').innerHTML = html;
}

function clearCodeHighlight() {
  var lines = document.querySelectorAll('.code-line');
  for (var l = 0; l < lines.length; l++) lines[l].className = 'code-line';
}

function highlightCode(phase) {
  clearCodeHighlight();
  var m = getMode();
  for (var l = 0; l < m.code.length; l++) {
    if (m.code[l].ph === phase) {
      var depth = m.code[l].d;
      var cls = depth >= 0 ? ' active-' + (depth === 0 ? 'outer' : depth === 1 ? 'mid' : 'inner') : '';
      document.getElementById('cl' + l).className = 'code-line' + cls;
    }
  }
}

/* ─── array panel ─── */
function buildArrays() {
  var m = getMode();
  var html = '';
  for (var a = 0; a < m.arrays.length; a++) {
    var arr = m.arrays[a];
    var dc = DEPTH_COLORS[a];
    html += '<div class="arr-group"><div class="arr-label ' + dc.cls + '">' + arr.varName + ' (loop depth ' + (a+1) + ')</div><div class="arr-row" id="arrRow' + a + '">';
    for (var ci = 0; ci < arr.items.length; ci++) {
      html += '<div class="cell" id="cell-' + a + '-' + ci + '"><div class="cell-ptr ' + dc.cls + '" id="ptr-' + a + '-' + ci + '"></div><div class="cell-box" id="box-' + a + '-' + ci + '">' + arr.items[ci] + '</div><div class="cell-idx">[' + ci + ']</div></div>';
    }
    html += '</div></div>';
  }
  document.getElementById('arrayRow').innerHTML = html;
}

function updateCells(activeCells) {
  // activeCells: array of [index] per array depth, or null
  var m = getMode();
  for (var a = 0; a < m.arrays.length; a++) {
    var arr = m.arrays[a];
    var activeIdx = (activeCells && activeCells[a] !== undefined) ? activeCells[a][0] : -1;
    for (var ci = 0; ci < arr.items.length; ci++) {
      var box = document.getElementById('box-' + a + '-' + ci);
      var ptr = document.getElementById('ptr-' + a + '-' + ci);
      var cell = document.getElementById('cell-' + a + '-' + ci);
      if (!box) continue;
      box.className = 'cell-box';
      if (ptr) ptr.textContent = '';
      if (cell) cell.classList.remove('active');
      // check done
      var isDone = false;
      for (var d = 0; d < donePerArray[a].length; d++) { if (donePerArray[a][d] === ci) { isDone = true; break; } }
      if (ci === activeIdx) {
        box.classList.add('active-' + a);
        if (ptr) ptr.textContent = ['i','j','k'][a] + '=' + ci;
        if (cell) cell.classList.add('active');
      } else if (isDone) {
        box.classList.add('done-' + a);
      }
    }
  }
}

/* ─── state panel ─── */
function buildState() {
  var m = getMode();
  var html = '';
  for (var d = 0; d < m.depth; d++) {
    var v = engineState.counters[d];
    var len = m.arrays[d].items.length;
    var varName = ['i','j','k'][d];
    html += '<div class="state-card"><div class="state-key">' + varName + ' (depth ' + (d+1) + ')</div><div class="state-val" id="stateI' + d + '">\u2014</div></div>';
    html += '<div class="state-card"><div class="state-key">' + varName + ' &lt; ' + len + '</div><div class="state-val" id="stateChk' + d + '">\u2014</div></div>';
  }
  if (engineState.extra) {
    for (var e = 0; e < engineState.extra.length; e++) {
      html += '<div class="state-card"><div class="state-key">' + engineState.extra[e].label + '</div><div class="state-val" id="stateEx' + e + '">' + engineState.extra[e].val + '</div></div>';
    }
  }
  document.getElementById('stateRow').innerHTML = html;
}

function refreshStateValues() {
  var m = getMode();
  for (var d = 0; d < m.depth; d++) {
    var len = m.arrays[d].items.length;
    var iv = engineState.counters[d];
    var iEl = document.getElementById('stateI' + d);
    if (iEl) iEl.textContent = String(iv);
    var chEl = document.getElementById('stateChk' + d);
    if (chEl) {
      var ok = iv < len;
      chEl.textContent = ok ? 'true' : 'false';
      chEl.className = 'state-val ' + (ok ? 'true-c' : 'false-c');
    }
  }
}

function flashExtra(indices) {
  if (!indices || !engineState.extra) return;
  for (var x = 0; x < indices.length; x++) {
    var idx = indices[x];
    var el = document.getElementById('stateEx' + idx);
    if (!el) continue;
    el.textContent = String(engineState.extra[idx].val);
    el.classList.add('flash-0');
    (function(e) { setTimeout(function() { e.classList.remove('flash-0'); }, 400); })(el);
  }
}

/* ─── log ─── */
function addLog(text) {
  var area = document.getElementById('logArea');
  var empty = area.querySelector('.log-empty');
  if (empty) area.innerHTML = '';
  var prev = area.querySelectorAll('.log-entry');
  for (var p = 0; p < prev.length; p++) prev[p].classList.remove('new');
  var span = document.createElement('span');
  span.className = 'log-entry new';
  span.textContent = text;
  area.appendChild(span);
  area.scrollTop = area.scrollHeight;
}
function setInsight(t) { document.getElementById('insightBox').textContent = t; }

/* ─── progress ─── */
function updateProgress() {
  var m = getMode();
  var total = m.totalSteps();
  var pct = Math.min(100, Math.round(stepCount / total * 100));
  document.getElementById('progressFill').style.width = pct + '%';
}

/* ─── speed ─── */
function updateSpeed() {
  speedIdx = parseInt(document.getElementById('speedSlider').value) - 1;
  document.getElementById('speedLabel').textContent = speedNames[speedIdx];
  if (playing) { clearInterval(playTimer); playTimer = setInterval(step, speedMs[speedIdx]); }
}

/* ─── reset ─── */
function reset() {
  clearInterval(playTimer);
  playing = false;
  setPlayIcon(false);
  stepCount = 0;
  engineState = initState();
  buildCode();
  buildArrays();
  buildState();
  updateCells(null);
  refreshStateValues();
  document.getElementById('logArea').innerHTML = '<span class="log-empty">no output yet \u2014 step through the loop</span>';
  setInsight('Press step to begin walking through the loop one iteration at a time.');
  document.getElementById('btnStep').disabled = false;
  document.getElementById('progressFill').style.width = '0%';
  document.getElementById('lbi').innerHTML = getMode().tip;
  clearCodeHighlight();
}

/* ─── step ─── */
function step() {
  var m = getMode();
  if (m.isDone(engineState)) {
    finishLoop();
    return;
  }
  var result = m.step(engineState);
  stepCount++;
  // mark done cells: the previously active cell is now done
  // We track after step since counters have advanced
  // Use activeCell from result (before advance) to mark done
  for (var a = 0; a < result.activeCell.length; a++) {
    var prevIdx = result.activeCell[a][0];
    var alreadyDone = false;
    for (var dd = 0; dd < donePerArray[a].length; dd++) { if (donePerArray[a][dd] === prevIdx) { alreadyDone = true; break; } }
    // Only mark as done if it won't be visited again (simple heuristic: single loops)
    if (m.depth === 1) { if (!alreadyDone) donePerArray[a].push(prevIdx); }
    // For nested: don't mark done since same cell revisited
  }
  updateCells(result.activeCell);
  refreshStateValues();
  if (result.flashExtra) flashExtra(result.flashExtra);
  addLog(result.log);
  setInsight(result.insight);
  updateProgress();
  highlightCode(result.phase);
  if (m.isDone(engineState)) {
    setTimeout(finishLoop, 350);
  }
}

function finishLoop() {
  updateCells(null);
  clearCodeHighlight();
  var m = getMode();
  var doneMsg = typeof m.done === 'function' ? m.done(engineState) : m.done;
  setInsight(doneMsg);
  document.getElementById('progressFill').style.width = '100%';
  clearInterval(playTimer);
  playing = false;
  setPlayIcon(false);
  document.getElementById('btnStep').disabled = true;
}

/* ─── play/pause ─── */
function setPlayIcon(isPlaying) {
  document.getElementById('playIcon').innerHTML = isPlaying
    ? '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>'
    : '<polygon points="5 3 19 12 5 21 5 3"/>';
  document.getElementById('playLabel').textContent = isPlaying ? 'pause' : 'play';
}

function togglePlay() {
  if (playing) {
    clearInterval(playTimer);
    playing = false;
    setPlayIcon(false);
  } else {
    if (document.getElementById('btnStep').disabled) reset();
    playing = true;
    setPlayIcon(true);
    playTimer = setInterval(function() {
      if (document.getElementById('btnStep').disabled) {
        clearInterval(playTimer); playing = false; setPlayIcon(false); return;
      }
      step();
    }, speedMs[speedIdx]);
  }
}

/* ─── boot ─── */
buildPresets();
reset();
</script>
{{< /rawhtml >}}
