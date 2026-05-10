---
title: "div + float + width layout builder"
weight = 1.1
hidden = true
---

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
    --mono:      'JetBrains Mono', monospace;
    --sans:      'DM Sans', sans-serif;
    --radius-md: 8px;
    --radius-lg: 12px;
    --kw:  #185FA5;
    --prop: #993C1D;
    --val:  #3B6D11;
    --sel:  #533AB7;
    --cm:  #9b9892;
  }

  body {
    font-family: var(--sans);
    background: var(--bg);
    color: var(--text-1);
    min-height: 100vh;
    padding: 2.5rem 1.5rem;
  }

  .wrapper {
    max-width: 860px;
    margin: 0 auto;
  }

  /* header */
  .header { margin-bottom: 1.75rem; }
  .header h1 {
    font-family: var(--mono);
    font-size: 18px;
    font-weight: 500;
    color: var(--text-1);
    letter-spacing: -0.01em;
  }
  .header p {
    font-size: 14px;
    color: var(--text-2);
    margin-top: 5px;
    line-height: 1.6;
  }

  /* presets */
  .presets { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 1.5rem; }
  .preset-btn {
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
  .preset-btn:hover { background: var(--surface-2); color: var(--text-1); }
  .preset-btn.active {
    background: var(--accent-bg);
    color: var(--accent);
    border-color: var(--accent-bd);
  }

  /* workspace */
  .workspace {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 600px) { .workspace { grid-template-columns: 1fr; } }

  .panel {
    background: var(--surface);
    border: 0.5px solid var(--border-md);
    border-radius: var(--radius-lg);
    overflow: hidden;
  }
  .panel-label {
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

  /* blocks editor */
  .blocks-panel { padding: 12px 14px 0; }
  .block-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    padding: 8px 10px;
    border-radius: var(--radius-md);
    background: var(--surface-2);
    border: 0.5px solid var(--border);
  }
  .block-color { width: 13px; height: 13px; border-radius: 3px; flex-shrink: 0; }
  .block-label {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--text-2);
    min-width: 38px;
  }
  .block-controls { display: flex; align-items: center; gap: 6px; flex: 1; flex-wrap: wrap; }
  .block-controls label {
    font-size: 11px;
    color: var(--text-3);
    font-family: var(--mono);
  }
  .block-controls select,
  .block-controls input[type=text] {
    font-family: var(--mono);
    font-size: 12px;
    padding: 3px 6px;
    border-radius: 5px;
    border: 0.5px solid var(--border-md);
    background: var(--surface);
    color: var(--text-1);
    outline: none;
    transition: border-color 0.12s;
  }
  .block-controls select:focus,
  .block-controls input[type=text]:focus { border-color: var(--accent); }
  .block-controls input[type=text] { width: 70px; }

  .remove-btn {
    font-family: var(--mono);
    font-size: 13px;
    color: var(--text-3);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0 3px;
    flex-shrink: 0;
    line-height: 1;
    transition: color 0.12s;
  }
  .remove-btn:hover { color: #a32d2d; }

  .add-btn {
    font-family: var(--sans);
    font-size: 12px;
    color: var(--text-3);
    background: none;
    border: 0.5px dashed var(--border-md);
    border-radius: var(--radius-md);
    padding: 6px 10px;
    cursor: pointer;
    width: 100%;
    margin: 6px 14px 14px;
    width: calc(100% - 28px);
    transition: color 0.12s, border-color 0.12s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  .add-btn:hover { color: var(--text-1); border-style: solid; }

  /* preview */
  .preview-inner {
    padding: 14px;
    min-height: 200px;
  }
  .preview-inner::after { content: ""; display: table; clear: both; }
  .preview-block {
    min-height: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-family: var(--mono);
    font-size: 11px;
    font-weight: 500;
    color: rgba(0,0,0,0.45);
    line-height: 1.5;
    text-align: center;
    transition: all 0.2s ease;
  }

  /* code panel */
  .code-panel {
    background: var(--surface);
    border: 0.5px solid var(--border-md);
    border-radius: var(--radius-lg);
    overflow: hidden;
    margin-bottom: 1rem;
  }
  .code-inner { padding: 14px 18px; overflow-x: auto; }
  pre {
    font-family: var(--mono);
    font-size: 12.5px;
    line-height: 1.75;
    color: var(--text-1);
    white-space: pre;
  }
  .kw   { color: var(--kw); }
  .prop { color: var(--prop); }
  .val  { color: var(--val); }
  .sel  { color: var(--sel); }
  .cm   { color: var(--cm); }

  /* insight */
  .insight {
    background: var(--accent-bg);
    border: 0.5px solid var(--accent-bd);
    border-radius: var(--radius-md);
    padding: 11px 15px;
    font-size: 13.5px;
    color: #0c447c;
    line-height: 1.65;
  }
  .insight strong { font-weight: 500; }
  .insight code {
    font-family: var(--mono);
    font-size: 12px;
    background: rgba(24,95,165,0.12);
    padding: 1px 5px;
    border-radius: 4px;
  }
</style>

<div class="wrapper">

  <div class="header">
    <h1>div + float + width — layout builder</h1>
    <p>Pick a preset or tweak each block's float and width to discover how layouts emerge.</p>
  </div>

  <div class="presets" id="presets"></div>

  <div class="workspace">
    <div class="panel">
      <div class="panel-label">blocks</div>
      <div class="blocks-panel" id="blocks-panel"></div>
      <button class="add-btn" onclick="addBlock()">
        <i class="ti ti-plus" aria-hidden="true"></i> add block
      </button>
    </div>
    <div class="panel">
      <div class="panel-label">live preview</div>
      <div class="preview-inner" id="preview"></div>
    </div>
  </div>

  <div class="code-panel">
    <div class="panel-label">generated code</div>
    <div class="code-inner"><pre id="code-out"></pre></div>
  </div>

  <div class="insight" id="insight"></div>

</div>

<script>
const COLOR_LIST = ['#B5D4F4','#9FE1CB','#FAC775','#F4C0D1','#CECBF6','#F0997B'];

const PRESETS = [
  { name: 'full width',   blocks: [{float:'none',width:'100%'},{float:'none',width:'100%'}] },
  { name: 'two columns',  blocks: [{float:'left',width:'50%'},{float:'left',width:'50%'}] },
  { name: 'sidebar left', blocks: [{float:'left',width:'30%'},{float:'left',width:'70%'}] },
  { name: 'sidebar right',blocks: [{float:'left',width:'70%'},{float:'right',width:'30%'}] },
  { name: 'three cols',   blocks: [{float:'left',width:'33.33%'},{float:'left',width:'33.33%'},{float:'left',width:'33.33%'}] },
  { name: 'holy grail',   blocks: [
    {float:'none',width:'100%'},
    {float:'left',width:'20%'},
    {float:'left',width:'60%'},
    {float:'right',width:'20%'},
    {float:'none',width:'100%'}
  ]},
];

let blocks = [{float:'left',width:'50%'},{float:'left',width:'50%'}];
let activePreset = 1;

function addBlock() {
  if (blocks.length >= 6) return;
  blocks.push({float:'left',width:'50%'});
  activePreset = -1;
  render();
}
function removeBlock(i) {
  if (blocks.length <= 1) return;
  blocks.splice(i, 1);
  activePreset = -1;
  render();
}
function setFloat(i, v) { blocks[i].float = v; activePreset = -1; render(); }
function setWidth(i, v) { blocks[i].width = v; activePreset = -1; render(); }
function loadPreset(idx) {
  activePreset = idx;
  blocks = PRESETS[idx].blocks.map(b => ({...b}));
  render();
}

function getInsight(blocks) {
  const allNone = blocks.every(b => b.float === 'none');
  const hasRight = blocks.some(b => b.float === 'right');
  const floatedBlocks = blocks.filter(b => b.float !== 'none');
  const totalFloated = floatedBlocks.reduce((s,b) => s + (parseFloat(b.width)||0), 0);

  if (allNone)
    return '<strong>no floats:</strong> every div behaves as a block element — it claims the full width and stacks vertically, one after another, like paragraphs of text.';
  if (blocks.length === 2 && floatedBlocks.length === 2 && Math.abs(totalFloated - 100) < 1)
    return '<strong>two floated divs summing to 100%:</strong> they sit perfectly side by side. Bump either width so the total exceeds 100% and the second div wraps to the next line — try it!';
  if (hasRight)
    return '<strong>float: right</strong> pulls a div to the right edge of its container. Pair it with a left-floated div and you get columns without the two divs needing to be adjacent in your HTML.';
  if (floatedBlocks.length >= 3 && totalFloated <= 100)
    return `<strong>${floatedBlocks.length} floated divs, total width ${Math.round(totalFloated)}%:</strong> they line up in a single row because the widths fit. Increase any width so the total exceeds 100% — the overflowing div drops to the next row.`;
  if (totalFloated > 100)
    return `<strong>widths exceed 100% (total: ${Math.round(totalFloated)}%):</strong> the floated divs no longer fit in one row — the last one wraps down. Reduce the widths until they sum to ≤ 100% to pull everything back into a single row.`;
  return '<strong>tip:</strong> floated divs stack horizontally until they run out of room. The parent must use <code>overflow: hidden</code> or a clearfix — otherwise it collapses to zero height around its floated children.';
}

function render() {
  // blocks editor
  const panel = document.getElementById('blocks-panel');
  panel.innerHTML = blocks.map((b,i) => `
    <div class="block-row">
      <div class="block-color" style="background:${COLOR_LIST[i % COLOR_LIST.length]}"></div>
      <span class="block-label">div ${String.fromCharCode(65+i)}</span>
      <div class="block-controls">
        <label>float</label>
        <select onchange="setFloat(${i},this.value)">
          ${['none','left','right'].map(f=>`<option${b.float===f?' selected':''}>${f}</option>`).join('')}
        </select>
        <label>width</label>
        <input type="text" value="${b.width}"
          onchange="setWidth(${i},this.value)"
          onblur="setWidth(${i},this.value)" />
      </div>
      <button class="remove-btn" onclick="removeBlock(${i})" title="remove block">✕</button>
    </div>
  `).join('');

  // preview
  const preview = document.getElementById('preview');
  preview.innerHTML = blocks.map((b,i) => {
    const col = COLOR_LIST[i % COLOR_LIST.length];
    const style = `float:${b.float};width:${b.width};background:${col};padding:10px;`;
    const label = `div ${String.fromCharCode(65+i)}`;
    const sub = (b.float !== 'none' ? `float:${b.float} · ` : '') + `width:${b.width}`;
    return `<div class="preview-block" style="${style}">${label}<span style="font-size:10px;opacity:0.55;display:block;margin-top:2px">${sub}</span></div>`;
  }).join('') + '<div style="clear:both"></div>';

  // code
  const codeLines = [
    `<span class="cm">/* CSS */</span>`,
    `<span class="sel">.container</span> {`,
    `  <span class="prop">overflow</span>: <span class="val">hidden</span>; <span class="cm">/* clearfix */</span>`,
    `}`,
    ``,
    ...blocks.map((b,i) => {
      const cls = `div-${String.fromCharCode(97+i)}`;
      const lines = [`<span class="sel">.${cls}</span> {`];
      if (b.float !== 'none') lines.push(`  <span class="prop">float</span>: <span class="val">${b.float}</span>;`);
      lines.push(`  <span class="prop">width</span>: <span class="val">${b.width}</span>;`);
      lines.push(`}`);
      return lines.join('\n');
    }),
    ``,
    `<span class="cm">/* HTML */</span>`,
    `<span class="kw">&lt;div</span> <span class="prop">class</span>=<span class="val">"container"</span><span class="kw">&gt;</span>`,
    ...blocks.map((_,i) =>
      `  <span class="kw">&lt;div</span> <span class="prop">class</span>=<span class="val">"div-${String.fromCharCode(97+i)}"</span><span class="kw">&gt;</span>...<span class="kw">&lt;/div&gt;</span>`
    ),
    `<span class="kw">&lt;/div&gt;</span>`,
  ];
  document.getElementById('code-out').innerHTML = codeLines.join('\n');
  document.getElementById('insight').innerHTML = getInsight(blocks);

  document.querySelectorAll('.preset-btn').forEach((btn,i) => {
    btn.classList.toggle('active', i === activePreset);
  });
}

// build preset buttons
const presetsEl = document.getElementById('presets');
PRESETS.forEach((p,i) => {
  const btn = document.createElement('button');
  btn.className = 'preset-btn';
  btn.textContent = p.name;
  btn.onclick = () => loadPreset(i);
  presetsEl.appendChild(btn);
});

loadPreset(1);
</script>
{{< /rawhtml >}}
