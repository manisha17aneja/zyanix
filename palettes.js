/* ============================================================
   palettes.js — Zyanix colour palettes (loaded in <head> on every page)

   HOW TO USE
   1. Open any page and click the round "Palette" button at the
      bottom-left. Click a palette to preview it on the whole site
      (works in light AND dark mode). Your pick is remembered.
   2. When you've decided, set DEFAULT_PALETTE below to that key
      (e.g. 'ocean') and set SHOW_PICKER to false. Done.

   TO EDIT A COLOUR: change the hex values inside PALETTES below.
   TO ADD A PALETTE: copy one block, give it a new key + name.

   NOTE ON IMAGES: the illustrations are PNG files, which can't be
   recoloured by CSS. While previewing, they are hue-shifted to
   match (the `hue` value). Once you finalise a palette, ask for the
   images to be re-exported in the exact colours.
   ============================================================ */
(function(){
  var DEFAULT_PALETTE = 'sunset';
  var SHOW_PICKER = true;

  var PALETTES = {
    sunset: {
      name: 'Sunset Orange', tagline: 'Warm & energetic — your current look', hue: 0,
      swatch: ['#F1652A', '#F7F3EC', '#1B1815'],
      common: { '--accent-rgb': '241,101,42', '--accent-light': '#F5A579' },
      light: {}, dark: {}
    },
    ocean: {
      name: 'Ocean Blue', tagline: 'Trustworthy, clean & corporate', hue: 204,
      swatch: ['#2563EB', '#F4F7FB', '#0F172A'],
      common: { '--accent-rgb': '37,99,235', '--accent-light': '#93B4F8' },
      light: {
        '--orange': '#2563EB', '--orange-dark': '#1D4ED8', '--orange-soft': '#DBEAFE', '--icon-bg': '#E0EAFB',
        '--bg': '#F4F7FB', '--bg-alt': '#EAF0F8', '--border': '#DCE5F2',
        '--text-primary': '#0F172A', '--text-secondary': '#475569', '--text-muted': '#7B8AA0',
        '--nav-bg': 'rgba(244,247,251,0.9)', '--shadow': '0 10px 30px rgba(15,23,42,0.07)',
        '--footer-bg': '#0F172A', '--footer-text': '#C3CCDB', '--dark-panel': '#0B1220'
      },
      dark: {
        '--bg': '#0A0F1C', '--bg-alt': '#0E1526', '--card-bg': '#111A2E', '--border': '#1E2A44',
        '--text-primary': '#F1F5FB', '--text-secondary': '#AEB9CD', '--text-muted': '#7685A0',
        '--nav-bg': 'rgba(10,15,28,0.85)', '--icon-bg': '#142447',
        '--footer-bg': '#070B14', '--footer-text': '#AEB9CD', '--dark-panel': '#070B14'
      }
    },
    emerald: {
      name: 'Emerald Green', tagline: 'Fresh, growth-focused & calm', hue: 143,
      swatch: ['#04825E', '#F3F8F5', '#0F1D17'],
      common: { '--accent-rgb': '4,130,94', '--accent-light': '#6EE7B7' },
      light: {
        '--orange': '#04825E', '--orange-dark': '#036648', '--orange-soft': '#D1FAE5', '--icon-bg': '#DDF4E8',
        '--bg': '#F3F8F5', '--bg-alt': '#E8F1EC', '--border': '#D8E7DE',
        '--text-primary': '#10211A', '--text-secondary': '#4B5F55', '--text-muted': '#7C9186',
        '--nav-bg': 'rgba(243,248,245,0.9)', '--shadow': '0 10px 30px rgba(16,33,26,0.07)',
        '--footer-bg': '#0F1D17', '--footer-text': '#BFD0C6', '--dark-panel': '#0A1510'
      },
      dark: {
        '--bg': '#08100C', '--bg-alt': '#0C1712', '--card-bg': '#101D17', '--border': '#1B2D24',
        '--text-primary': '#EFF7F2', '--text-secondary': '#A9BDB1', '--text-muted': '#6F8A7B',
        '--nav-bg': 'rgba(8,16,12,0.85)', '--icon-bg': '#12301F',
        '--footer-bg': '#060C09', '--footer-text': '#A9BDB1', '--dark-panel': '#060C09'
      }
    },
    violet: {
      name: 'Royal Violet', tagline: 'Creative, modern & premium', hue: 245,
      swatch: ['#7C3AED', '#F7F5FB', '#17122A'],
      common: { '--accent-rgb': '124,58,237', '--accent-light': '#C4B5FD' },
      light: {
        '--orange': '#7C3AED', '--orange-dark': '#6D28D9', '--orange-soft': '#EDE9FE', '--icon-bg': '#EEE8FD',
        '--bg': '#F7F5FB', '--bg-alt': '#EFEBF7', '--border': '#E3DDF0',
        '--text-primary': '#1A1530', '--text-secondary': '#574F6E', '--text-muted': '#8A82A0',
        '--nav-bg': 'rgba(247,245,251,0.9)', '--shadow': '0 10px 30px rgba(26,21,48,0.07)',
        '--footer-bg': '#17122A', '--footer-text': '#CBC4DE', '--dark-panel': '#100C20'
      },
      dark: {
        '--bg': '#0C0914', '--bg-alt': '#110C1C', '--card-bg': '#171124', '--border': '#281F3D',
        '--text-primary': '#F4F1FA', '--text-secondary': '#B5ADC9', '--text-muted': '#80779A',
        '--nav-bg': 'rgba(12,9,20,0.85)', '--icon-bg': '#241A3E',
        '--footer-bg': '#08060F', '--footer-text': '#B5ADC9', '--dark-panel': '#08060F'
      }
    },
    crimson: {
      name: 'Crimson Rose', tagline: 'Bold, confident & high-impact', hue: 330,
      swatch: ['#E11D48', '#FAF5F6', '#1C1114'],
      common: { '--accent-rgb': '225,29,72', '--accent-light': '#FDA4AF' },
      light: {
        '--orange': '#E11D48', '--orange-dark': '#BE123C', '--orange-soft': '#FFE4E6', '--icon-bg': '#FDE4E8',
        '--bg': '#FAF5F6', '--bg-alt': '#F4ECEE', '--border': '#EBDDE0',
        '--text-primary': '#1F1316', '--text-secondary': '#5E4E53', '--text-muted': '#8F7C82',
        '--nav-bg': 'rgba(250,245,246,0.9)', '--shadow': '0 10px 30px rgba(31,19,22,0.07)',
        '--footer-bg': '#1C1114', '--footer-text': '#D4C6CA', '--dark-panel': '#150C0F'
      },
      dark: {
        '--bg': '#0E080A', '--bg-alt': '#140B0E', '--card-bg': '#1B1014', '--border': '#2E1C21',
        '--text-primary': '#F8F1F3', '--text-secondary': '#BFAFB4', '--text-muted': '#8B7279',
        '--nav-bg': 'rgba(14,8,10,0.85)', '--icon-bg': '#351822',
        '--footer-bg': '#090506', '--footer-text': '#BFAFB4', '--dark-panel': '#090506'
      }
    }
  };

  var KEY = 'zyanix-palette';
  function pick(){
    var q = null;
    try { q = new URLSearchParams(location.search).get('palette'); } catch(e){}
    var s = null;
    try { s = localStorage.getItem(KEY); } catch(e){}
    var k = q || s || DEFAULT_PALETTE;
    return PALETTES[k] ? k : DEFAULT_PALETTE;
  }
  function decl(obj){ return Object.keys(obj).map(function(k){ return k + ':' + obj[k] + ';'; }).join(''); }

  function apply(key){
    var p = PALETTES[key];
    var css = 'html:root{' + decl(p.common) + decl(p.light) + '}';
    if(Object.keys(p.dark).length){ css += 'body[data-theme="dark"]{' + decl(p.dark) + '}'; }
    if(p.hue){
      css += 'img[src*="/illustrations/"]{filter:hue-rotate(' + p.hue + 'deg);}' +
             'body[data-theme="dark"] img[src*="/illustrations/"]{filter:hue-rotate(' + p.hue + 'deg) saturate(.9) brightness(.9);}';
    }
    var el = document.getElementById('zx-palette-style');
    if(!el){ el = document.createElement('style'); el.id = 'zx-palette-style'; document.head.appendChild(el); }
    el.textContent = css;
    document.documentElement.setAttribute('data-palette', key);
  }

  var current = pick();
  apply(current);

  /* ---------------- Picker UI ---------------- */
  function buildPicker(){
    if(!SHOW_PICKER || document.getElementById('zx-palette-fab')) return;
    var st = document.createElement('style');
    st.textContent =
      '#zx-palette-fab{position:fixed;left:16px;bottom:16px;z-index:160;display:flex;align-items:center;gap:8px;padding:11px 16px 11px 12px;border-radius:30px;border:1px solid var(--border);background:var(--card-bg);color:var(--text-primary);font:600 .85rem Inter,sans-serif;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.18);transition:transform .15s ease,border-color .2s ease}' +
      '#zx-palette-fab:hover{transform:translateY(-2px);border-color:var(--orange)}' +
      '#zx-palette-fab svg{width:18px;height:18px;stroke:var(--orange)}' +
      '#zx-palette-panel{position:fixed;left:16px;bottom:68px;z-index:160;width:min(330px,calc(100vw - 32px));max-height:calc(100vh - 100px);overflow:auto;background:var(--card-bg);color:var(--text-primary);border:1px solid var(--border);border-radius:16px;padding:16px;box-shadow:0 24px 60px rgba(0,0,0,.28);opacity:0;visibility:hidden;transform:translateY(10px);transition:opacity .2s ease,transform .2s ease,visibility .2s ease}' +
      '#zx-palette-panel.open{opacity:1;visibility:visible;transform:none}' +
      '#zx-palette-panel h4{font:800 .98rem Inter,sans-serif;margin:0 0 4px}' +
      '#zx-palette-panel .zp-sub{font:400 .78rem/1.5 Inter,sans-serif;color:var(--text-secondary);margin:0 0 12px}' +
      '.zp-opt{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:10px;border-radius:12px;border:1.5px solid var(--border);background:var(--bg);color:var(--text-primary);cursor:pointer;margin-bottom:8px;font-family:Inter,sans-serif;transition:border-color .2s ease,transform .15s ease}' +
      '.zp-opt:hover{border-color:var(--orange);transform:translateX(2px)}' +
      '.zp-opt.active{border-color:var(--orange);background:var(--icon-bg)}' +
      '.zp-sw{display:flex;flex-shrink:0}' +
      '.zp-sw i{width:22px;height:34px;display:block;border:1px solid rgba(0,0,0,.12)}' +
      '.zp-sw i:first-child{border-radius:8px 0 0 8px}.zp-sw i:last-child{border-radius:0 8px 8px 0}' +
      '.zp-txt{flex:1;min-width:0}.zp-txt b{display:block;font-size:.88rem;font-weight:700}.zp-txt span{display:block;font-size:.74rem;color:var(--text-secondary);margin-top:1px}' +
      '.zp-tick{width:18px;height:18px;border-radius:50%;background:var(--orange);color:#fff;font-size:.7rem;display:none;align-items:center;justify-content:center;flex-shrink:0}' +
      '.zp-opt.active .zp-tick{display:flex}' +
      '.zp-note{font:400 .72rem/1.55 Inter,sans-serif;color:var(--text-muted);margin:6px 2px 0}';
    document.head.appendChild(st);

    var fab = document.createElement('button');
    fab.id = 'zx-palette-fab'; fab.type = 'button'; fab.setAttribute('aria-label','Choose colour palette');
    fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.75 1.5-1.5 0-.4-.15-.74-.39-1.04-.23-.29-.38-.63-.38-1.02 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-4.96-4.48-9-10-9z"/></svg>Palette';

    var panel = document.createElement('div');
    panel.id = 'zx-palette-panel'; panel.setAttribute('role','dialog'); panel.setAttribute('aria-label','Colour palettes');
    var opts = Object.keys(PALETTES).map(function(k){
      var p = PALETTES[k];
      return '<button type="button" class="zp-opt" data-key="' + k + '"><span class="zp-sw">' +
        p.swatch.map(function(c){ return '<i style="background:' + c + '"></i>'; }).join('') +
        '</span><span class="zp-txt"><b>' + p.name + '</b><span>' + p.tagline + '</span></span><span class="zp-tick">✓</span></button>';
    }).join('');
    panel.innerHTML = '<h4>Colour palettes</h4><p class="zp-sub">Click one to preview it on the whole site. Use the moon icon to check dark mode too.</p>' + opts +
      '<p class="zp-note">Preview only. Tell me the palette name you like and I will make it permanent (or set DEFAULT_PALETTE in palettes.js and SHOW_PICKER = false).</p>';

    document.body.appendChild(panel);
    document.body.appendChild(fab);

    function mark(){
      panel.querySelectorAll('.zp-opt').forEach(function(b){ b.classList.toggle('active', b.getAttribute('data-key') === current); });
    }
    mark();
    fab.addEventListener('click', function(e){ e.stopPropagation(); panel.classList.toggle('open'); });
    panel.addEventListener('click', function(e){
      e.stopPropagation();
      var b = e.target.closest('.zp-opt'); if(!b) return;
      current = b.getAttribute('data-key');
      apply(current); mark();
      try { localStorage.setItem(KEY, current); } catch(err){}
    });
    document.addEventListener('click', function(){ panel.classList.remove('open'); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') panel.classList.remove('open'); });
  }
  if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', buildPicker); } else { buildPicker(); }
})();
