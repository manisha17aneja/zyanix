/* ============================================================
   theme.js — SHARED file used by every Zyanix page.
   Handles: dark/light mode (persisted across pages via
   localStorage), mobile nav toggle, scroll-reveal animation,
   FAQ accordions, and filter/category tab switching.
   Edit this ONE file to change behaviour site-wide.
   ============================================================ */
(function(){
  // ---------- Theme: apply saved preference immediately ----------
  var saved = null;
  try { saved = localStorage.getItem('zyanix-theme'); } catch(e){}
  if(saved === 'dark' || saved === 'light'){
    document.body.setAttribute('data-theme', saved);
  }

  function setupThemeToggle(){
    var toggle = document.getElementById('themeToggle');
    if(!toggle) return;
    toggle.addEventListener('click', function(){
      var current = document.body.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', next);
      try { localStorage.setItem('zyanix-theme', next); } catch(e){}
    });
  }

  // ---------- Mobile nav toggle ----------
  function setupMobileNav(){
    var menuBtn = document.querySelector('.menu-toggle');
    var navLinks = document.querySelector('.nav-links');
    if(!menuBtn || !navLinks) return;
    menuBtn.addEventListener('click', function(){
      navLinks.classList.toggle('mobile-open');
      menuBtn.classList.toggle('open');
    });
    // close menu when a link is tapped
    navLinks.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){
        navLinks.classList.remove('mobile-open');
        menuBtn.classList.remove('open');
      });
    });
  }

  // ---------- FAQ accordion (works on any page with .faq-item) ----------
  function setupFaqAccordion(){
    var items = document.querySelectorAll('.faq-item');
    if(!items.length) return;
    items.forEach(function(item){
      var q = item.querySelector('.faq-q');
      if(!q) return;
      q.addEventListener('click', function(){
        var isOpen = item.classList.contains('open');
        items.forEach(function(i){ i.classList.remove('open'); });
        if(!isOpen) item.classList.add('open');
      });
    });
  }

  // ---------- Filter / category tabs (.filter-tab, .cat-tab) ----------
  function setupTabs(){
    var groups = [document.querySelectorAll('.filter-tab'), document.querySelectorAll('.cat-tab')];
    groups.forEach(function(tabs){
      if(!tabs.length) return;
      tabs.forEach(function(tab){
        tab.addEventListener('click', function(){
          tabs.forEach(function(t){ t.classList.remove('active'); });
          tab.classList.add('active');
        });
      });
    });
  }

  // ---------- Stats count-up (elements with data-count) ----------
  function animateCount(el){
    var target = parseInt(el.getAttribute('data-count'), 10);
    if(isNaN(target)) return;
    var suffixEl = el.querySelector('span');
    var suffix = suffixEl ? suffixEl.outerHTML : '';
    var current = 0;
    var step = Math.max(1, Math.ceil(target / 60));
    (function tick(){
      current += step;
      if(current >= target){ el.innerHTML = target + suffix; }
      else { el.innerHTML = current + suffix; requestAnimationFrame(tick); }
    })();
  }
  function setupCounters(){
    var counters = document.querySelectorAll('[data-count]');
    if(!counters.length || !('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){ animateCount(entry.target); obs.unobserve(entry.target); }
      });
    }, {threshold:0.4});
    counters.forEach(function(c){ obs.observe(c); });
  }

  // ---------- Scroll reveal ----------
  function setupReveal(){
    var selector = '.service-card, .dservice-card, .project-card, .portfolio-card, ' +
      '.team-card, .value-card, .tech-item, .layer-card, .price-card, ' +
      '.test-card, .stat-item, .office-card, .faq-item, .hs-item, ' +
      '.hero-copy, .hero-visual, .section-head, .story-image, .story-copy, ' +
      '.fc-image, .fc-copy, .contact-info-card, .contact-form-card, ' +
      '.spotlight-card, .why-copy, .why-image, .approach-copy, .approach-image';
    var els = document.querySelectorAll(selector);
    if(!els.length) return;
    if('IntersectionObserver' in window){
      var obs = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      }, {threshold:0.12});
      els.forEach(function(el){ obs.observe(el); });
    }
    // Safety net: if something goes wrong, never leave content invisible
    setTimeout(function(){
      els.forEach(function(el){ el.classList.add('in-view'); });
    }, 2500);
  }

  document.addEventListener('DOMContentLoaded', function(){
    setupThemeToggle();
    setupMobileNav();
    setupFaqAccordion();
    setupTabs();
    setupCounters();
    setupReveal();
  });
})();
