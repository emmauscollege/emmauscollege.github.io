+++
title = "div + float + width layout builder"
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

  .lb-wrapper { font-family: var(--sans); color: var(--text-1); padding: 1.5rem 0; }

  .lb-header { margin-bottom: 1.5rem; }
  .lb-header h2 { font-family: var(--mono); font-size: 17px; font-weight: 500; color: var(--text-1); letter-spacing: -0.01em; }
  .lb-header p  { font-size: 13.5px; color: var(--text-2); margin-top: 4px; line-height: 1.6; }

  .lb-presets { display: flex; flex-wrap: wrap; gap: 7px; margin-bottom: 1.25rem; }
  .lb-preset-btn {
    font-family: var(--mono); font-size: 12px; font-weight: 500;
    padding: 5px 12px; border-radius: var(--radius-md);
    border: 0.5px solid var(--border-md);
    background: var(--surface); color: var(--text-2);
    cursor: pointer; transition: background 0.12s, color 0.12s, border-color 0.12s;
  }
  .lb-preset-btn:hover { background: var(--surface-2); color: var(--text-1); }
  .lb-preset-btn.active { background: var(--accent-bg); color: var(--accent); border-color: var(--accent-bd); }

  .lb-workspace { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
  @media (max-width: 640px) { .lb-workspace { grid-template-columns: 1fr; } }

  .lb-panel { background: var(--surface); border: 0.5px solid var(--border-md); border-radius: var(--radius-lg); overflow: hidden; }
  .lb-panel-label {
    font-family: var(--mono); font-size: 10.5px; font-weight: 500;
    color: var(--text-3); text-transform: uppercase; letter-spacing: 0.07em;
    padding: 9px 14px; border-bottom: 0.5px solid var(--border);
    background: var(--surface-2);
  }

  /* tree editor */
  .lb-tree { padding: 10px 10px 6px; }

  .lb-node { margin-bottom: 4px; }
  .lb-node-row {
    display: flex; align-items: center; gap: 6px;
    padding: 6px 8px; border-radius: var(--radius-md);
    background: var(--surface-2); border: 0.5px solid var(--border);
  }
  .lb-node-children { margin-left: 18px; margin-top: 4px; padding-left: 10px; border-left: 2px solid var(--border-md); }

  .lb-dot { width: 11px; height: 11px; border-radius: 2px; flex-shrink: 0; }
  .lb-lbl { font-family: var(--mono); font-size: 11px; color: var(--text-2); min-width: 36px; flex-shrink: 0; }
  .lb-ctl  { display: flex; align-items: center; gap: 5px; flex: 1; flex-wrap: wrap; }
  .lb-ctl label { font-size: 10px; color: var(--text-3); font-family: var(--mono); }
  .lb-ctl select,
  .lb-ctl input[type=text] {
    font-family: var(--mono); font-size: 11px;
    padding: 2px 5px; border-radius: 4px;
    border: 0.5px solid var(--border-md);
    background: var(--surface); color: var(--text-1);
    outline: none; transition: border-color 0.12s;
  }
  .lb-ctl select:focus, .lb-ctl input[type=text]:focus { border-color: var(--accent); }
  .lb-ctl input[type=text] { width: 62px; }

  .lb-btn-child {
    font-family: var(--mono); font-size: 10px; color: var(--accent);
    background: var(--accent-bg); border: 0.5px solid var(--accent-bd);
    border-radius: 4px; padding: 2px 6px; cursor: pointer; flex-shrink: 0;
    transition: opacity 0.12s;
  }
  .lb-btn-child:hover { opacity: 0.75; }
  .lb-btn-rm {
    font-size: 11px; color: var(--text-3); background: none; border: none;
    cursor: pointer; padding: 0 2px; flex-shrink: 0; line-height: 1;
    transition: color 0.12s;
  }
  .lb-btn-rm:hover { color: #a32d2d; }
  .lb-btn-add {
    font-family: var(--sans); font-size: 11.5px; color: var(--text-3);
    background: none; border: 0.5px dashed var(--border-md);
    border-radius: var(--radius-md); padding: 5px 10px;
    cursor: pointer; width: calc(100% - 20px); margin: 4px 10px 10px;
    display: flex; align-items: center; justify-content: center; gap: 4px;
    transition: color 0.12s, border-color 0.12s;
  }
  .lb-btn-add:hover { color: var(--text-1); border-style: solid; }

  /* preview */
  .lb-preview { padding: 12px; min-height: 180px; }
  .lb-preview::after { content: ""; display: table; clear: both; }
  .lb-pblock {
    min-height: 44px; border-radius: 3px;
    font-family: var(--mono); font-size: 10px; font-weight: 500;
    color: rgba(0,0,0,0.4); text-align: center;
    transition: all 0.18s ease; position: relative;
    padding: 6px 4px 4px;
  }
  .lb-pblock::after { content: ""; display: table; clear: both; }
  .lb-pblock-label { display: block; margin-bottom: 3px; }

  /* code */
  .lb-code-panel { background: var(--surface); border: 0.5px solid var(--border-md); border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 1rem; }
  .lb-code-inner { padding: 12px 16px; overflow-x: auto; }
  .lb-code-inner pre { font-family: var(--mono); font-size: 12px; line-height: 1.75; color: var(--text-1); white-space: pre; }
  .kw   { color: var(--kw); }
  .prop { color: var(--prop); }
  .val  { color: var(--val); }
  .sel  { color: var(--sel); }
  .cm   { color: var(--cm); }

  /* insight */
  .lb-insight {
    background: var(--accent-bg); border: 0.5px solid var(--accent-bd);
    border-radius: var(--radius-md); padding: 10px 14px;
    font-size: 13px; color: #0c447c; line-height: 1.65;
  }
  .lb-insight strong { font-weight: 500; }
  .lb-insight code { font-family: var(--mono); font-size: 11.5px; background: rgba(24,95,165,0.12); padding: 1px 5px; border-radius: 4px; }
</style>

<div class="lb-wrapper">

  <div class="lb-header">
    <h2>div + float + width — layout builder</h2>
    <p>Pick a preset or build your own layout. Use "add child" to nest divs inside other divs.</p>
  </div>

  <div class="lb-presets" id="lb-presets"></div>

  <div class="lb-workspace">
    <div class="lb-panel">
      <div class="lb-panel-label">blocks</div>
      <div class="lb-tree" id="lb-tree"></div>
      <button class="lb-btn-add" onclick="lbAddRoot()">
        <i class="ti ti-plus" aria-hidden="true"></i> add block
      </button>
    </div>
    <div class="lb-panel">
      <div class="lb-panel-label">live preview</div>
      <div class="lb-preview" id="lb-preview"></div>
    </div>
  </div>

  <div class="lb-code-panel">
    <div class="lb-panel-label">generated code</div>
    <div class="lb-code-inner"><pre id="lb-code"></pre></div>
  </div>

  <div class="lb-insight" id="lb-insight"></div>

</div>

<script>
(function() {

/* ── colour palette ─────────────────────────────────────────── */
const DEPTH_COLORS = [
  ['#B5D4F4','#85B7EB','#378ADD'],  // blue  – depth 0
  ['#9FE1CB','#5DCAA5','#1D9E75'],  // teal  – depth 1
  ['#FAC775','#EF9F27','#BA7517'],  // amber – depth 2
  ['#F4C0D1','#ED93B1','#D4537E'],  // pink  – depth 3
  ['#CECBF6','#AFA9EC','#7F77DD'],  // purple– depth 4
  ['#F0997B','#D85A30','#993C1D'],  // coral – depth 5
];
function depthColor(depth, siblingIndex) {
  const ramp = DEPTH_COLORS[depth % DEPTH_COLORS.length];
  return ramp[siblingIndex % ramp.length];
}

/* ── data model ─────────────────────────────────────────────── */
let uid = 0;
function makeNode(float='left', width='50%', children=[]) {
  return { id: uid++, float, width, children };
}

let tree = [makeNode('left','50%'), makeNode('left','50%')];
let activePreset = 1;

/* ── presets ────────────────────────────────────────────────── */
const PRESETS = [
  { name: 'full width',
    make: () => [makeNode('none','100%'), makeNode('none','100%')] },
  { name: 'two columns',
    make: () => [makeNode('left','50%'), makeNode('left','50%')] },
  { name: 'sidebar left',
    make: () => [makeNode('left','30%'), makeNode('left','70%')] },
  { name: 'sidebar right',
    make: () => [makeNode('left','70%'), makeNode('right','30%')] },
  { name: 'three cols',
    make: () => [makeNode('left','33.33%'), makeNode('left','33.33%'), makeNode('left','33.33%')] },
  { name: 'holy grail',
    make: () => [
      makeNode('none','100%'),
      makeNode('left','20%'),
      makeNode('left','60%'),
      makeNode('right','20%'),
      makeNode('none','100%'),
    ]},
  { name: 'nested columns',
    make: () => {
      const inner1 = makeNode('left','50%');
      const inner2 = makeNode('left','50%');
      const outer  = makeNode('left','60%', [inner1, inner2]);
      const side   = makeNode('left','40%');
      return [outer, side];
    }},
];

function loadPreset(idx) {
  activePreset = idx;
  uid = 0;
  tree = PRESETS[idx].make();
  render();
}

/* ── tree mutation ──────────────────────────────────────────── */
function findNode(nodes, id) {
  for (const n of nodes) {
    if (n.id === id) return { node: n, siblings: nodes };
    const found = findNode(n.children, id);
    if (found) return found;
  }
  return null;
}

function lbAddRoot() {
  tree.push(makeNode('left','50%'));
  activePreset = -1;
  render();
}

window.lbAddChild = function(parentId) {
  const res = findNode(tree, parentId);
  if (res) { res.node.children.push(makeNode('left','50%')); activePreset = -1; render(); }
};

window.lbRemove = function(id) {
  function remove(nodes) {
    const i = nodes.findIndex(n => n.id === id);
    if (i !== -1) { nodes.splice(i, 1); return true; }
    return nodes.some(n => remove(n.children));
  }
  remove(tree);
  activePreset = -1;
  render();
};

window.lbSetFloat = function(id, v) {
  const res = findNode(tree, id);
  if (res) { res.node.float = v; activePreset = -1; render(); }
};

window.lbSetWidth = function(id, v) {
  const res = findNode(tree, id);
  if (res) { res.node.width = v; activePreset = -1; render(); }
};

/* ── label generator (A, B, …, Z, AA, AB, …) ───────────────── */
let labelCounter = 0;
function nextLabel() {
  let n = labelCounter++, s = '';
  do { s = String.fromCharCode(65 + (n % 26)) + s; n = Math.floor(n / 26) - 1; } while (n >= 0);
  return s;
}

/* ── render tree editor ─────────────────────────────────────── */
function renderTree(nodes, depth, parentSiblingIndex) {
  return nodes.map((node, sibIdx) => {
    const label = nextLabel();
    const color = depthColor(depth, typeof parentSiblingIndex === 'number' ? parentSiblingIndex : sibIdx);
    const childrenHtml = node.children.length
      ? `<div class="lb-node-children">${renderTree(node.children, depth + 1, sibIdx)}</div>`
      : '';
    const canRemove = !(depth === 0 && tree.length <= 1);
    return `
      <div class="lb-node" id="node-${node.id}">
        <div class="lb-node-row">
          <div class="lb-dot" style="background:${color}"></div>
          <span class="lb-lbl">div ${label}</span>
          <div class="lb-ctl">
            <label>float</label>
            <select onchange="lbSetFloat(${node.id},this.value)">
              ${['none','left','right'].map(f=>`<option${node.float===f?' selected':''}>${f}</option>`).join('')}
            </select>
            <label>width</label>
            <input type="text" value="${node.width}"
              onchange="lbSetWidth(${node.id},this.value)"
              onblur="lbSetWidth(${node.id},this.value)" />
          </div>
          <button class="lb-btn-child" onclick="lbAddChild(${node.id})">+ child</button>
          ${canRemove ? `<button class="lb-btn-rm" onclick="lbRemove(${node.id})" title="remove">✕</button>` : ''}
        </div>
        ${childrenHtml}
      </div>`;
  }).join('');
}

/* ── render preview ─────────────────────────────────────────── */
function renderPreview(nodes, depth, parentSiblingIndex) {
  return nodes.map((node, sibIdx) => {
    const color = depthColor(depth, typeof parentSiblingIndex === 'number' ? parentSiblingIndex : sibIdx);
    const label = ''; // labels handled by counter; skip in preview for brevity
    const inner = node.children.length
      ? `<div style="overflow:hidden;width:100%;">${renderPreview(node.children, depth+1, sibIdx)}</div>`
      : '';
    const tag = node.children.length
      ? `<span class="lb-pblock-label" style="font-size:9px;opacity:0.55">${node.float !== 'none' ? 'float:'+node.float+' · ' : ''}width:${node.width}</span>${inner}`
      : `<span class="lb-pblock-label">${node.float !== 'none' ? 'float:'+node.float+' · ' : ''}width:${node.width}</span>`;
    return `<div class="lb-pblock" style="float:${node.float};width:${node.width};background:${color};">${tag}</div>`;
  }).join('') + '<div style="clear:both"></div>';
}

/* ── render code ────────────────────────────────────────────── */
let cssRules = [];
let htmlLines = [];
let classCounter = 0;

function nextClass() {
  let n = classCounter++, s = '';
  do { s = String.fromCharCode(97 + (n % 26)) + s; n = Math.floor(n / 26) - 1; } while (n >= 0);
  return 'div-' + s;
}

function buildCode(nodes, indentLevel) {
  const indent = '  '.repeat(indentLevel);
  nodes.forEach(node => {
    const cls = nextClass();
    const cssLines = [];
    if (node.float !== 'none') cssLines.push(`  <span class="prop">float</span>: <span class="val">${node.float}</span>;`);
    cssLines.push(`  <span class="prop">width</span>: <span class="val">${node.width}</span>;`);
    if (node.children.length) cssLines.push(`  <span class="prop">overflow</span>: <span class="val">hidden</span>; <span class="cm">/* clearfix */</span>`);
    cssRules.push(`<span class="sel">.${cls}</span> {\n${cssLines.join('\n')}\n}`);

    if (node.children.length) {
      htmlLines.push(`${indent}<span class="kw">&lt;div</span> <span class="prop">class</span>=<span class="val">"${cls}"</span><span class="kw">&gt;</span>`);
      buildCode(node.children, indentLevel + 1);
      htmlLines.push(`${indent}<span class="kw">&lt;/div&gt;</span>`);
    } else {
      htmlLines.push(`${indent}<span class="kw">&lt;div</span> <span class="prop">class</span>=<span class="val">"${cls}"</span><span class="kw">&gt;</span>...<span class="kw">&lt;/div&gt;</span>`);
    }
  });
}

/* ── insight ────────────────────────────────────────────────── */
function getInsight(nodes) {
  function flatten(ns) { return ns.flatMap(n => [n, ...flatten(n.children)]); }
  const all = flatten(nodes);
  const hasNested = all.some(n => n.children.length > 0);
  const allNone = all.every(n => n.float === 'none');
  const hasRight = all.some(n => n.float === 'right');
  const topFloated = nodes.filter(n => n.float !== 'none');
  const topTotal = topFloated.reduce((s,n) => s + (parseFloat(n.width)||0), 0);

  if (hasNested)
    return '<strong>nested divs:</strong> a div inside another div is only as wide as its parent — percentages are relative to the parent, not the page. That\'s why a child with <code>width: 50%</code> takes up half of its parent, not half of the screen. Each level creates its own containing block.';
  if (allNone)
    return '<strong>no floats:</strong> every div behaves as a block element — it claims the full width and stacks vertically, one after another, like paragraphs of text.';
  if (nodes.length === 2 && topFloated.length === 2 && Math.abs(topTotal - 100) < 1)
    return '<strong>two floated divs summing to 100%:</strong> they sit perfectly side by side. Bump either width so the total exceeds 100% and the second div wraps to the next line — try it!';
  if (hasRight)
    return '<strong>float: right</strong> pulls a div to the right edge of its container. Pair it with a left-floated div and you get columns without them needing to be adjacent in your HTML.';
  if (topFloated.length >= 3 && topTotal <= 100)
    return `<strong>${topFloated.length} floated divs, total width ${Math.round(topTotal)}%:</strong> they line up in a row because the widths fit. Increase any width so the total exceeds 100% and the overflowing div drops to the next row.`;
  if (topTotal > 100)
    return `<strong>widths exceed 100% (total: ${Math.round(topTotal)}%):</strong> the floated divs no longer fit — the last one wraps down. Reduce widths until they sum to ≤ 100%.`;
  return '<strong>tip:</strong> floated divs stack horizontally until they run out of room. A parent containing floated children must use <code>overflow: hidden</code> or a clearfix — otherwise it collapses to zero height.';
}

/* ── main render ────────────────────────────────────────────── */
function render() {
  // tree editor
  labelCounter = 0;
  document.getElementById('lb-tree').innerHTML = renderTree(tree, 0, null);

  // preview
  labelCounter = 0;
  document.getElementById('lb-preview').innerHTML = renderPreview(tree, 0, null);

  // code
  cssRules = []; htmlLines = []; classCounter = 0;
  buildCode(tree, 0);
  const code = [
    `<span class="cm">/* CSS */</span>`,
    `<span class="sel">.container</span> {\n  <span class="prop">overflow</span>: <span class="val">hidden</span>;\n}`,
    '',
    ...cssRules,
    '',
    `<span class="cm">/* HTML */</span>`,
    `<span class="kw">&lt;div</span> <span class="prop">class</span>=<span class="val">"container"</span><span class="kw">&gt;</span>`,
    ...htmlLines,
    `<span class="kw">&lt;/div&gt;</span>`,
  ].join('\n');
  document.getElementById('lb-code').innerHTML = code;

  // insight
  document.getElementById('lb-insight').innerHTML = getInsight(tree);

  // preset buttons
  document.querySelectorAll('.lb-preset-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === activePreset);
  });
}

/* ── boot ───────────────────────────────────────────────────── */
const presetsEl = document.getElementById('lb-presets');
PRESETS.forEach((p, i) => {
  const btn = document.createElement('button');
  btn.className = 'lb-preset-btn';
  btn.textContent = p.name;
  btn.onclick = () => loadPreset(i);
  presetsEl.appendChild(btn);
});

loadPreset(1);

})();
</script>
{{< /rawhtml >}}
