/*
 * tweaks-bar.js — live design tweaks panel for prototype landing pages.
 *
 * Drop-in: <script src="tweaks-bar.js"></script> at the end of <body>.
 * No dependencies, no build step. Toggle with the floating button or Cmd/Ctrl+.
 *
 * Mechanism:
 *   The panel writes CSS custom properties onto <html> (document.documentElement).
 *   Pages built for this workflow consume them directly, e.g.
 *     h1 { font-size: calc(3.5rem * var(--tb-heading-scale, 1)); }
 *   A fallback stylesheet (injected into the page, not the shadow root) applies
 *   the variables to generic selectors with zero-specificity :where() rules, so
 *   the bar still visibly works on pages that were NOT built with the variables.
 *
 * Exposed variables (only written when they differ from their default):
 *   --tb-heading-font   --tb-body-font      --tb-heading-scale   --tb-heading-tracking
 *   --tb-heading-leading --tb-body-size     --tb-heading-weight  --tb-heading-transform
 *   --tb-accent         --tb-bg             --tb-text            --tb-muted
 *   --tb-section-pad    --tb-max-width      --tb-gap
 *   --tb-reveal-duration --tb-reveal-distance --tb-reveal-stagger --tb-ease
 *   --tb-radius         --tb-shadow         --tb-border-w        --tb-hero-overlay
 *   (plus a per-element --tb-reveal-index the script assigns to [data-reveal] nodes)
 *
 * State persists to localStorage keyed by location.pathname.
 * A small API is exposed on window.__tweaksBar
 * { toggle, open, close, reset, replay, exportCSS, exportJSON, state,
 *   keys(), get(key), set(key, value) } — set() lets agents apply tweaks
 * programmatically through the same code path as the panel controls.
 */
(function () {
  'use strict';

  if (window.__tweaksBar) return; // singleton guard

  const doc = document;
  const root = doc.documentElement;
  const STORAGE_KEY = 'tweaks-bar:' + location.pathname;

  /* ------------------------------------------------------------------ */
  /* 1. Font catalogue (loaded on demand from Google Fonts)             */
  /* ------------------------------------------------------------------ */

  const FONTS = {
    'Fraunces':            { q: 'Fraunces:opsz,wght@9..144,100..900',     stack: 'serif' },
    'Instrument Serif':    { q: 'Instrument+Serif:ital@0;1',              stack: 'serif' },
    'Libre Caslon Text':   { q: 'Libre+Caslon+Text:wght@400;700',         stack: 'serif' },
    'Newsreader':          { q: 'Newsreader:opsz,wght@6..72,200..800',    stack: 'serif' },
    'Crimson Pro':         { q: 'Crimson+Pro:wght@200..900',              stack: 'serif' },
    'Space Grotesk':       { q: 'Space+Grotesk:wght@300..700',            stack: 'sans-serif' },
    'Archivo':             { q: 'Archivo:wght@100..900',                  stack: 'sans-serif' },
    'Bricolage Grotesque': { q: 'Bricolage+Grotesque:wght@200..800',      stack: 'sans-serif' },
    'Syne':                { q: 'Syne:wght@400..800',                     stack: 'sans-serif' },
    'Unbounded':           { q: 'Unbounded:wght@200..900',                stack: 'sans-serif' },
    'Inter':               { q: 'Inter:wght@100..900',                    stack: 'sans-serif' },
    'Public Sans':         { q: 'Public+Sans:wght@100..900',              stack: 'sans-serif' },
    'IBM Plex Mono':       { q: 'IBM+Plex+Mono:wght@300;400;500;600;700', stack: 'monospace' },
    'JetBrains Mono':      { q: 'JetBrains+Mono:wght@100..800',           stack: 'monospace' }
  };

  const HEADING_FONTS = [
    'Fraunces', 'Instrument Serif', 'Libre Caslon Text', 'Newsreader', 'Crimson Pro',
    'Space Grotesk', 'Archivo', 'Bricolage Grotesque', 'Syne', 'Unbounded',
    'IBM Plex Mono', 'JetBrains Mono'
  ];

  const BODY_FONTS = [
    'Inter', 'Public Sans', 'Archivo', 'Space Grotesk',
    'Newsreader', 'Crimson Pro', 'IBM Plex Mono'
  ];

  const EASINGS = [
    { v: 'cubic-bezier(0.22, 1, 0.36, 1)',    l: 'Quint out (default)' },
    { v: 'ease',                              l: 'Ease (browser)' },
    { v: 'ease-in-out',                       l: 'Ease in-out' },
    { v: 'linear',                            l: 'Linear' },
    { v: 'cubic-bezier(0.16, 1, 0.3, 1)',     l: 'Expo out' },
    { v: 'cubic-bezier(0.83, 0, 0.17, 1)',    l: 'Dramatic in-out' },
    { v: 'cubic-bezier(0.34, 1.56, 0.64, 1)', l: 'Overshoot' }
  ];

  /* ------------------------------------------------------------------ */
  /* 2. Control schema                                                  */
  /*    Each control maps one UI input to one CSS variable.             */
  /*    `gate` = html attribute toggled alongside the variable, used by */
  /*    fallback rules that would disturb page defaults if always on.   */
  /* ------------------------------------------------------------------ */

  const SECTIONS = [
    { title: 'Typography', controls: [
      { key: 'headingFont',      label: 'Heading font',        var: '--tb-heading-font',      type: 'font',   options: HEADING_FONTS, def: '' },
      { key: 'bodyFont',         label: 'Body font',           var: '--tb-body-font',         type: 'font',   options: BODY_FONTS,    def: '' },
      { key: 'headingScale',     label: 'Heading size',        var: '--tb-heading-scale',     type: 'range',  min: 0.7, max: 1.6, step: 0.01,  def: 1,    suffix: 'x' },
      { key: 'headingTracking',  label: 'Heading tracking',    var: '--tb-heading-tracking',  type: 'range',  min: -0.05, max: 0.1, step: 0.005, def: 0,  unit: 'em' },
      { key: 'headingLeading',   label: 'Heading line-height', var: '--tb-heading-leading',   type: 'range',  min: 0.9, max: 1.8, step: 0.05,  def: 1.15 },
      { key: 'bodySize',         label: 'Body size',           var: '--tb-body-size',         type: 'range',  min: 14, max: 20, step: 0.5,     def: 16,   unit: 'px' },
      { key: 'headingWeight',    label: 'Heading weight',      var: '--tb-heading-weight',    type: 'select', options: ['300', '400', '500', '600', '700', '800', '900'], def: '700' },
      { key: 'headingTransform', label: 'Uppercase headings',  var: '--tb-heading-transform', type: 'toggle', on: 'uppercase', off: 'none', def: 'none' }
    ]},
    { title: 'Color', controls: [
      { key: 'accent', label: 'Accent',     var: '--tb-accent', type: 'color', def: '#4f46e5', gate: 'data-tb-accent' },
      { key: 'bg',     label: 'Background', var: '--tb-bg',     type: 'color', def: '#ffffff' },
      { key: 'text',   label: 'Text',       var: '--tb-text',   type: 'color', def: '#1a1a1a' },
      { key: 'muted',  label: 'Muted text', var: '--tb-muted',  type: 'color', def: '#6b7280' }
    ]},
    { title: 'Spacing & Layout', controls: [
      { key: 'sectionPad', label: 'Section padding',   var: '--tb-section-pad', type: 'range', min: 0.4, max: 2, step: 0.05,  def: 1,    suffix: 'x', gate: 'data-tb-pad' },
      { key: 'maxWidth',   label: 'Content max-width', var: '--tb-max-width',   type: 'range', min: 600, max: 1600, step: 10, def: 1100, unit: 'px',  gate: 'data-tb-width' },
      { key: 'gap',        label: 'Grid gap',          var: '--tb-gap',         type: 'range', min: 0.4, max: 2, step: 0.05,  def: 1,    suffix: 'x', gate: 'data-tb-gap' }
    ]},
    { title: 'Motion', controls: [
      { key: 'revealDuration', label: 'Reveal duration', var: '--tb-reveal-duration', type: 'range', min: 0, max: 1500, step: 10, def: 700, unit: 'ms' },
      { key: 'revealDistance', label: 'Reveal distance', var: '--tb-reveal-distance', type: 'range', min: 0, max: 80,   step: 1,  def: 24,  unit: 'px' },
      { key: 'revealStagger',  label: 'Reveal stagger',  var: '--tb-reveal-stagger',  type: 'range', min: 0, max: 300,  step: 5,  def: 80,  unit: 'ms' },
      { key: 'ease',           label: 'Easing',          var: '--tb-ease',            type: 'select', options: EASINGS, def: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      { key: 'replay',         label: 'Replay reveal animations', type: 'action', run: replayReveals }
    ]},
    { title: 'Surface', controls: [
      { key: 'radius',      label: 'Border radius',        var: '--tb-radius',       type: 'range', min: 0, max: 32, step: 1,    def: 10,  unit: 'px', gate: 'data-tb-radius' },
      { key: 'shadow',      label: 'Shadow intensity',     var: '--tb-shadow',       type: 'range', min: 0, max: 2,  step: 0.05, def: 1,   suffix: 'x', gate: 'data-tb-shadow' },
      { key: 'borderW',     label: 'Border width',         var: '--tb-border-w',     type: 'range', min: 0, max: 4,  step: 0.5,  def: 1,   unit: 'px', gate: 'data-tb-border' },
      { key: 'heroOverlay', label: 'Hero overlay opacity', var: '--tb-hero-overlay', type: 'range', min: 0, max: 1,  step: 0.05, def: 0.5, gate: 'data-tb-overlay' }
    ]}
  ];

  // Value-bearing controls (everything except action buttons).
  const ALL = SECTIONS.reduce((acc, s) => acc.concat(s.controls), []).filter((c) => c.var);
  const BY_KEY = {};
  ALL.forEach((c) => { BY_KEY[c.key] = c; });

  /* ------------------------------------------------------------------ */
  /* 3. State + persistence                                             */
  /* ------------------------------------------------------------------ */

  const state = {};
  ALL.forEach((c) => { state[c.key] = c.def; });

  function isDefault(c, v) {
    return String(v) === String(c.def);
  }

  function restore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      ALL.forEach((c) => {
        if (saved && Object.prototype.hasOwnProperty.call(saved, c.key)) state[c.key] = saved[c.key];
      });
    } catch (_) { /* storage unavailable — live without persistence */ }
  }

  function save() {
    try {
      const diff = {};
      ALL.forEach((c) => { if (!isDefault(c, state[c.key])) diff[c.key] = state[c.key]; });
      if (Object.keys(diff).length) localStorage.setItem(STORAGE_KEY, JSON.stringify(diff));
      else localStorage.removeItem(STORAGE_KEY);
    } catch (_) { /* ignore */ }
  }

  /* ------------------------------------------------------------------ */
  /* 4. CSS value formatting + application                              */
  /* ------------------------------------------------------------------ */

  function toCSS(c, v) {
    if (c.type === 'font') return v ? '"' + v + '", ' + FONTS[v].stack : 'inherit';
    if (c.type === 'range') return String(v) + (c.unit || '');
    return String(v); // color, select, toggle
  }

  // Human-readable value for the panel readout.
  function fmt(c, v) {
    if (c.type === 'range') return String(Math.round(v * 1000) / 1000) + (c.unit || c.suffix || '');
    if (c.type === 'font') return v || 'Default';
    if (c.type === 'toggle') return isDefault(c, v) ? 'off' : 'on';
    if (c.type === 'select') {
      const hit = c.options.find((o) => optVal(o) === String(v));
      return hit ? optLabel(hit) : String(v);
    }
    return String(v);
  }

  function optVal(o)   { return typeof o === 'string' ? o : o.v; }
  function optLabel(o) { return typeof o === 'string' ? o : o.l; }

  // Write every non-default value as a variable on <html>; remove the rest so
  // untouched controls leave the page exactly as authored.
  function applyAll() {
    ALL.forEach((c) => {
      const changed = !isDefault(c, state[c.key]);
      if (changed) root.style.setProperty(c.var, toCSS(c, state[c.key]));
      else root.style.removeProperty(c.var);
      if (c.gate) {
        if (changed) root.setAttribute(c.gate, '');
        else root.removeAttribute(c.gate);
      }
    });
    ensureFonts();
    save();
    syncUI();
  }

  /* ------------------------------------------------------------------ */
  /* 5. On-demand Google Fonts loading                                  */
  /* ------------------------------------------------------------------ */

  const loadedFonts = new Set();

  function ensureFonts() {
    ['headingFont', 'bodyFont'].forEach((key) => {
      const name = state[key];
      if (!name || !FONTS[name] || loadedFonts.has(name)) return;
      if (!doc.querySelector('link[data-tb-preconnect]')) {
        [['https://fonts.googleapis.com', false], ['https://fonts.gstatic.com', true]].forEach((p) => {
          const pre = doc.createElement('link');
          pre.rel = 'preconnect';
          pre.href = p[0];
          if (p[1]) pre.crossOrigin = '';
          pre.setAttribute('data-tb-preconnect', '');
          doc.head.appendChild(pre);
        });
      }
      const link = doc.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=' + FONTS[name].q + '&display=swap';
      link.setAttribute('data-tb-font', name);
      doc.head.appendChild(link);
      loadedFonts.add(name);
    });
  }

  /* ------------------------------------------------------------------ */
  /* 6. Reveal helpers                                                  */
  /*    Elements opt in with [data-reveal]. The script assigns each one */
  /*    a --tb-reveal-index (position among revealed siblings) so       */
  /*    CSS can compute staggered delays.                               */
  /* ------------------------------------------------------------------ */

  function indexReveals() {
    const counts = new Map();
    doc.querySelectorAll('[data-reveal]').forEach((el) => {
      const parent = el.parentElement || doc.body;
      const i = counts.get(parent) || 0;
      el.style.setProperty('--tb-reveal-index', i);
      counts.set(parent, i + 1);
    });
  }

  function replayReveals() {
    indexReveals();
    const els = doc.querySelectorAll('[data-reveal]');
    els.forEach((el) => { el.style.animation = 'none'; });
    void doc.body.offsetWidth; // force reflow so animations restart
    els.forEach((el) => { el.style.animation = ''; });
  }

  /* ------------------------------------------------------------------ */
  /* 7. Fallback stylesheet (injected into the PAGE, not the shadow)    */
  /*    Zero-specificity :where() rules: they beat UA defaults but lose */
  /*    to any author rule, so styled pages keep their own look unless  */
  /*    they consume the variables. Fallback values match UA defaults,  */
  /*    so nothing shifts until a control is actually moved. Rules that */
  /*    have no safe "matches UA" form are gated behind html[data-tb-*] */
  /*    attributes that applyAll() toggles.                             */
  /* ------------------------------------------------------------------ */

  const FALLBACK_CSS = [
    '/* tweaks-bar fallback styles */',
    ':where(h1, h2, h3, h4, [data-heading]) {',
    '  font-family: var(--tb-heading-font, inherit);',
    '  font-weight: var(--tb-heading-weight, bold);',
    '  letter-spacing: var(--tb-heading-tracking, normal);',
    '  line-height: var(--tb-heading-leading, inherit);',
    '  text-transform: var(--tb-heading-transform, none);',
    '}',
    ':where(h1) { font-size: calc(2em    * var(--tb-heading-scale, 1)); }',
    ':where(h2) { font-size: calc(1.5em  * var(--tb-heading-scale, 1)); }',
    ':where(h3) { font-size: calc(1.17em * var(--tb-heading-scale, 1)); }',
    ':where(h4) { font-size: calc(1em    * var(--tb-heading-scale, 1)); }',
    ':where(body) {',
    '  font-family: var(--tb-body-font, inherit);',
    '  font-size: var(--tb-body-size, inherit);',
    '  background-color: var(--tb-bg, transparent);',
    '  color: var(--tb-text, inherit);',
    '}',
    ':where(small, figcaption, .muted, [data-muted]) { color: var(--tb-muted, inherit); }',
    '',
    '/* reveal animation — opt-in via [data-reveal] */',
    ':where([data-reveal]) {',
    '  animation-name: tb-reveal;',
    '  animation-duration: var(--tb-reveal-duration, 700ms);',
    '  animation-timing-function: var(--tb-ease, cubic-bezier(0.22, 1, 0.36, 1));',
    '  animation-delay: calc(var(--tb-reveal-stagger, 80ms) * var(--tb-reveal-index, 0));',
    '  animation-fill-mode: both;',
    '}',
    '@keyframes tb-reveal {',
    '  from { opacity: 0; transform: translateY(var(--tb-reveal-distance, 24px)); }',
    '  to   { opacity: 1; transform: translateY(0); }',
    '}',
    '',
    '/* gated rules — active only while the matching control is non-default */',
    ':where(html[data-tb-accent]) { accent-color: var(--tb-accent); }',
    ':where(html[data-tb-accent]) :where(a) { color: var(--tb-accent); }',
    ':where(html[data-tb-accent]) :where(button, .btn, [data-btn]) {',
    '  background-color: var(--tb-accent); border-color: var(--tb-accent); color: #fff;',
    '}',
    ':where(html[data-tb-pad]) :where(section, [data-section]) { padding-block: calc(4rem * var(--tb-section-pad, 1)); }',
    ':where(html[data-tb-width]) :where(main, .container, [data-container]) { max-width: var(--tb-max-width, 1100px); margin-inline: auto; }',
    ':where(html[data-tb-gap]) :where(.grid, [data-grid]) { gap: calc(1.25rem * var(--tb-gap, 1)); }',
    ':where(html[data-tb-radius]) :where(button, .btn, [data-btn], .card, [data-card], img, input, select, textarea) { border-radius: var(--tb-radius, 10px); }',
    ':where(html[data-tb-shadow]) :where(.card, [data-card]) {',
    '  box-shadow: 0 6px calc(24px * var(--tb-shadow, 1)) rgba(0, 0, 0, calc(0.16 * var(--tb-shadow, 1)));',
    '}',
    ':where(html[data-tb-border]) :where(.card, [data-card]) { border-width: var(--tb-border-w, 1px); border-style: solid; }',
    ':where(html[data-tb-overlay]) :where(.hero-overlay, [data-hero-overlay]) { opacity: var(--tb-hero-overlay, 0.5); }'
  ].join('\n');

  function injectFallbackStyles() {
    if (doc.getElementById('tb-fallback-styles')) return;
    const style = doc.createElement('style');
    style.id = 'tb-fallback-styles';
    style.textContent = FALLBACK_CSS;
    doc.head.appendChild(style);
  }

  /* ------------------------------------------------------------------ */
  /* 8. Export (Copy CSS / Copy JSON) + clipboard                       */
  /* ------------------------------------------------------------------ */

  // Only the values changed from defaults, as a paste-ready :root block.
  function cssExport() {
    const lines = ALL
      .filter((c) => !isDefault(c, state[c.key]))
      .map((c) => '  ' + c.var + ': ' + toCSS(c, state[c.key]) + ';');
    return lines.length
      ? ':root {\n' + lines.join('\n') + '\n}'
      : '/* tweaks-bar: no changes from defaults */';
  }

  // Every variable with its current (default-resolved) value.
  function jsonExport() {
    const out = {};
    ALL.forEach((c) => { out[c.var] = toCSS(c, state[c.key]); });
    return JSON.stringify(out, null, 2);
  }

  function legacyCopy(text) {
    const ta = doc.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    doc.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = doc.execCommand('copy'); } catch (_) { /* ignore */ }
    ta.remove();
    return ok;
  }

  function copyText(text, btn) {
    const done = (ok) => flash(btn, ok ? 'Copied ✓' : 'Copy failed');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => done(true), () => done(legacyCopy(text)));
    } else {
      done(legacyCopy(text));
    }
  }

  function flash(btn, msg) {
    if (btn.dataset.flashing) return;
    btn.dataset.flashing = '1';
    const original = btn.textContent;
    btn.textContent = msg;
    setTimeout(() => {
      btn.textContent = original;
      delete btn.dataset.flashing;
    }, 1200);
  }

  /* ------------------------------------------------------------------ */
  /* 9. Panel UI (Shadow DOM)                                           */
  /* ------------------------------------------------------------------ */

  const PANEL_CSS = [
    ':host { all: initial; }',
    '*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }',
    '.fab {',
    '  position: fixed; right: 20px; bottom: 20px; z-index: 2147483646;',
    '  width: 48px; height: 48px; border-radius: 50%;',
    '  border: 1px solid #33333d; background: #17171c; color: #e8e8f0;',
    '  display: grid; place-items: center; cursor: pointer;',
    '  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);',
    '  transition: transform 0.15s ease, background 0.15s ease;',
    '}',
    '.fab:hover { transform: scale(1.07); background: #20202a; }',
    '.panel {',
    '  position: fixed; top: 0; right: 0; z-index: 2147483647;',
    '  width: min(320px, 92vw); height: 100vh;',
    '  display: flex; flex-direction: column;',
    '  background: #131318; color: #d9d9e2;',
    '  border-left: 1px solid #26262e;',
    '  box-shadow: -16px 0 48px rgba(0, 0, 0, 0.35);',
    '  font-family: system-ui, -apple-system, "Segoe UI", sans-serif; font-size: 12px;',
    '  transform: translateX(105%);',
    '  transition: transform 0.3s cubic-bezier(0.32, 0.72, 0.28, 1);',
    '}',
    '.panel.open { transform: none; }',
    '.panel header {',
    '  display: flex; align-items: center; justify-content: space-between;',
    '  padding: 14px 16px 12px; border-bottom: 1px solid #26262e; background: #16161c;',
    '}',
    '.panel h1 { font-size: 13px; font-weight: 600; color: #f0f0f6; letter-spacing: 0.01em; }',
    '.hint { font-size: 10px; color: #74747f; margin-top: 2px; }',
    '.close {',
    '  border: 0; background: none; color: #8b8b96; font-size: 18px; line-height: 1;',
    '  cursor: pointer; padding: 4px 6px; border-radius: 6px;',
    '}',
    '.close:hover { color: #fff; background: #26262e; }',
    '.body { flex: 1; overflow-y: auto; padding: 2px 16px 16px; scrollbar-width: thin; }',
    '.section h2 {',
    '  font-size: 10px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.13em;',
    '  color: #8f8f9c; margin: 18px 0 10px; padding-top: 14px; border-top: 1px solid #1f1f26;',
    '}',
    '.section:first-child h2 { border-top: 0; padding-top: 4px; }',
    '.row { margin-bottom: 12px; }',
    '.row-head { display: flex; align-items: center; gap: 6px; margin-bottom: 5px; }',
    '.row-head label { flex: 1; color: #b9b9c4; font-size: 11.5px; }',
    '.val {',
    '  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;',
    '  font-size: 10.5px; color: #9d9de0; white-space: nowrap;',
    '}',
    '.rst {',
    '  visibility: hidden; border: 0; background: none; color: #6d6d7a;',
    '  cursor: pointer; font-size: 12px; line-height: 1; padding: 1px 3px; border-radius: 4px;',
    '}',
    '.row.changed .rst { visibility: visible; }',
    '.rst:hover { color: #fff; background: #26262e; }',
    'input[type="range"] { width: 100%; height: 18px; accent-color: #7b7bf0; cursor: pointer; background: transparent; }',
    'select {',
    '  width: 100%; padding: 5px 8px; font-size: 12px; font-family: inherit;',
    '  background: #1c1c23; color: #e2e2ea; border: 1px solid #30303a; border-radius: 6px; cursor: pointer;',
    '}',
    'input[type="color"] {',
    '  width: 100%; height: 26px; padding: 2px; cursor: pointer;',
    '  background: #1c1c23; border: 1px solid #30303a; border-radius: 6px;',
    '}',
    'input[type="checkbox"] {',
    '  appearance: none; -webkit-appearance: none; width: 32px; height: 18px; border-radius: 9px;',
    '  background: #2b2b34; position: relative; cursor: pointer; transition: background 0.15s ease;',
    '}',
    'input[type="checkbox"]::after {',
    '  content: ""; position: absolute; top: 2px; left: 2px; width: 14px; height: 14px;',
    '  border-radius: 50%; background: #9a9aa8; transition: transform 0.15s ease, background 0.15s ease;',
    '}',
    'input[type="checkbox"]:checked { background: #5b5bd6; }',
    'input[type="checkbox"]:checked::after { transform: translateX(14px); background: #fff; }',
    '.action-btn {',
    '  width: 100%; padding: 7px 10px; font-size: 11.5px; font-family: inherit;',
    '  background: #22222b; color: #dcdce6; border: 1px solid #34343f; border-radius: 6px; cursor: pointer;',
    '}',
    '.action-btn:hover { background: #2a2a35; }',
    '.panel footer {',
    '  display: flex; gap: 8px; padding: 12px 16px;',
    '  border-top: 1px solid #26262e; background: #16161c;',
    '}',
    '.act {',
    '  flex: 1; padding: 7px 0; font-size: 11px; font-family: inherit;',
    '  background: #22222b; color: #dcdce6; border: 1px solid #34343f; border-radius: 6px; cursor: pointer;',
    '}',
    '.act:hover { background: #2a2a35; }',
    '.act.danger { color: #f0a0a0; }',
    '.act.danger:hover { background: #382026; border-color: #573039; }'
  ].join('\n');

  const FAB_ICON =
    '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor"' +
    ' stroke-width="1.6" stroke-linecap="round" aria-hidden="true">' +
    '<line x1="3" y1="5" x2="17" y2="5"/><circle cx="12.5" cy="5" r="2.1" fill="#17171c"/>' +
    '<line x1="3" y1="10" x2="17" y2="10"/><circle cx="6.5" cy="10" r="2.1" fill="#17171c"/>' +
    '<line x1="3" y1="15" x2="17" y2="15"/><circle cx="13.5" cy="15" r="2.1" fill="#17171c"/>' +
    '</svg>';

  let panelEl = null;
  let panelOpen = false;
  const rowRefs = new Map(); // key -> { row, input, val }

  function togglePanel(force) {
    panelOpen = typeof force === 'boolean' ? force : !panelOpen;
    if (panelEl) panelEl.classList.toggle('open', panelOpen);
  }

  function makeSelect(c) {
    const select = doc.createElement('select');
    const opts = c.type === 'font'
      ? [{ v: '', l: 'Page default' }].concat(c.options.map((n) => ({ v: n, l: n })))
      : c.options;
    opts.forEach((o) => {
      const opt = doc.createElement('option');
      opt.value = optVal(o);
      opt.textContent = optLabel(o);
      select.appendChild(opt);
    });
    return select;
  }

  function makeRow(c) {
    const row = doc.createElement('div');
    row.className = 'row';

    if (c.type === 'action') {
      const btn = doc.createElement('button');
      btn.className = 'action-btn';
      btn.type = 'button';
      btn.textContent = c.label;
      btn.addEventListener('click', c.run);
      row.appendChild(btn);
      return row;
    }

    const head = doc.createElement('div');
    head.className = 'row-head';
    const label = doc.createElement('label');
    label.textContent = c.label;
    const val = doc.createElement('span');
    val.className = 'val';
    const rst = doc.createElement('button');
    rst.className = 'rst';
    rst.type = 'button';
    rst.title = 'Reset to default';
    rst.textContent = '↺';
    rst.addEventListener('click', () => { state[c.key] = c.def; applyAll(); });
    head.appendChild(label);
    head.appendChild(val);
    head.appendChild(rst);
    row.appendChild(head);

    let input;
    const set = (v) => { state[c.key] = v; applyAll(); };

    if (c.type === 'range') {
      input = doc.createElement('input');
      input.type = 'range';
      input.min = c.min;
      input.max = c.max;
      input.step = c.step;
      input.addEventListener('input', () => set(parseFloat(input.value)));
      row.appendChild(input);
    } else if (c.type === 'font' || c.type === 'select') {
      input = makeSelect(c);
      input.addEventListener('change', () => set(input.value));
      row.appendChild(input);
    } else if (c.type === 'color') {
      input = doc.createElement('input');
      input.type = 'color';
      input.addEventListener('input', () => set(input.value));
      row.appendChild(input);
    } else if (c.type === 'toggle') {
      input = doc.createElement('input');
      input.type = 'checkbox';
      input.addEventListener('change', () => set(input.checked ? c.on : c.off));
      head.insertBefore(input, val); // toggles live inline in the head row
    }

    rowRefs.set(c.key, { row: row, input: input, val: val });
    return row;
  }

  // Push current state into every panel control (readouts, positions, badges).
  function syncUI() {
    rowRefs.forEach((refs, key) => {
      const c = BY_KEY[key];
      const v = state[key];
      if (c.type === 'toggle') refs.input.checked = !isDefault(c, v);
      else refs.input.value = String(v);
      refs.val.textContent = fmt(c, v);
      refs.row.classList.toggle('changed', !isDefault(c, v));
    });
  }

  function resetAll() {
    ALL.forEach((c) => { state[c.key] = c.def; });
    applyAll(); // save() inside removes the (now empty) localStorage entry
  }

  function buildUI() {
    const host = doc.createElement('div');
    host.id = 'tweaks-bar-host';
    const shadow = host.attachShadow({ mode: 'open' });

    shadow.innerHTML =
      '<style>' + PANEL_CSS + '</style>' +
      '<button class="fab" type="button" title="Design tweaks (Cmd/Ctrl+.)" aria-label="Toggle design tweaks panel">' + FAB_ICON + '</button>' +
      '<aside class="panel" role="dialog" aria-label="Design tweaks">' +
      '  <header>' +
      '    <div><h1>Tweaks</h1><p class="hint">⌘ / Ctrl + . to toggle · per-page</p></div>' +
      '    <button class="close" type="button" aria-label="Close panel">×</button>' +
      '  </header>' +
      '  <div class="body"></div>' +
      '  <footer>' +
      '    <button class="act" type="button" data-act="css">Copy CSS</button>' +
      '    <button class="act" type="button" data-act="json">Copy JSON</button>' +
      '    <button class="act danger" type="button" data-act="reset">Reset</button>' +
      '  </footer>' +
      '</aside>';

    panelEl = shadow.querySelector('.panel');
    const body = shadow.querySelector('.body');

    SECTIONS.forEach((section) => {
      const wrap = doc.createElement('div');
      wrap.className = 'section';
      const h2 = doc.createElement('h2');
      h2.textContent = section.title;
      wrap.appendChild(h2);
      section.controls.forEach((c) => wrap.appendChild(makeRow(c)));
      body.appendChild(wrap);
    });

    shadow.querySelector('.fab').addEventListener('click', () => togglePanel());
    shadow.querySelector('.close').addEventListener('click', () => togglePanel(false));
    shadow.querySelector('[data-act="css"]').addEventListener('click', (e) => copyText(cssExport(), e.currentTarget));
    shadow.querySelector('[data-act="json"]').addEventListener('click', (e) => copyText(jsonExport(), e.currentTarget));
    shadow.querySelector('[data-act="reset"]').addEventListener('click', resetAll);

    doc.body.appendChild(host);
  }

  function bindKeys() {
    window.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === '.') {
        e.preventDefault();
        togglePanel();
      } else if (e.key === 'Escape' && panelOpen) {
        togglePanel(false);
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* 10. Init                                                           */
  /* ------------------------------------------------------------------ */

  function init() {
    injectFallbackStyles();
    restore();
    buildUI();
    applyAll();
    indexReveals();
    bindKeys();

    window.__tweaksBar = {
      toggle: togglePanel,
      open: () => togglePanel(true),
      close: () => togglePanel(false),
      reset: resetAll,
      replay: replayReveals,
      exportCSS: cssExport,
      exportJSON: jsonExport,
      state: state,
      // Programmatic control, so agents/tests can drive the same code path
      // as the panel (the shadow root is closed to page CSS/JS).
      keys: () => ALL.map((c) => c.key),
      get: (key) => state[key],
      set: (key, value) => {
        const c = ALL.find((x) => x.key === key);
        if (!c) throw new Error('tweaks-bar: unknown key "' + key + '" (see keys())');
        state[key] = c.type === 'range' ? Number(value) : value;
        applyAll();
      }
    };
  }

  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', init);
  else init();
})();
