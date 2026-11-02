/* ============================================================
   detail-pages.js — renders BOTH dynamic detail pages:
     service.html?service=<slug>   (data: services.js)
     industries.html?industry=<slug> (data: industries.js)
   Open a page with no slug and it shows the full list instead.
   ============================================================ */
(function(){
  var ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
  var CHECK = '<span class="check-circle"><svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>';
  var SVG = function(inner){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + inner + '</svg>'; };

  function param(name){
    if(window.ZX_FIXED && window.ZX_FIXED[name]) return window.ZX_FIXED[name];
    return new URLSearchParams(window.location.search).get(name);
  }
  var SEO = window.ZyanixSEO;
  function $(id){ return document.getElementById(id); }
  function esc(t){ return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function list(items){ return '<ul class="check-list">' + items.map(function(i){ return '<li>' + CHECK + '<span>' + esc(i) + '</span></li>'; }).join('') + '</ul>'; }
  function chips(items){ return '<div class="chips">' + items.map(function(t){ return '<span class="chip">' + esc(t) + '</span>'; }).join('') + '</div>'; }
  function head(eyebrow, title, sub){ return '<div class="section-head"><span class="eyebrow">' + eyebrow + '</span><h2>' + title + '</h2>' + (sub ? '<p>' + sub + '</p>' : '') + '</div>'; }
  function cta(title, text, service){
    return '<div class="cta-outer"><div class="cta-band"><div class="cta-content"><span class="eyebrow">Let\'s Build Together</span><h3>' + title + '</h3><p>' + text + '</p></div>' +
      '<a href="contact.html" class="btn btn-primary" data-open-contact data-service="' + esc(service || '') + '">Talk to Our Team ' + ARROW + '</a></div></div>';
  }
  function finish(){
    if(window.ZyanixTheme){ ZyanixTheme.refreshReveal(); ZyanixTheme.refreshButtonRipple && ZyanixTheme.refreshButtonRipple(); }
    if(window.ZyanixFX && ZyanixFX.refresh){ ZyanixFX.refresh(); }
  }
  function notFound(root, what, back){
    root.innerHTML = '<section class="page-hero"><div class="wrap"><h1>' + what + ' not found</h1><p class="lead">The link may be outdated.</p><div class="hero-btns"><a class="btn btn-primary" href="' + back + '">Browse all</a></div></div></section>';
  }

  /* ---------------- SERVICE ---------------- */
  function renderService(root){
    var all = window.ZYANIX_SERVICES || [];
    var slug = param('service');
    if(!slug){
      if(SEO) SEO.noindex('All Services — Zyanix');
      else document.title = 'All Services — Zyanix';
      var groups = (window.ZYANIX_SERVICE_GROUPS || []).map(function(g){
        var items = all.filter(function(s){ return s.group === g; });
        return '<div style="margin-bottom:50px;"><h3 style="font-size:1.2rem;font-weight:800;margin-bottom:20px;">' + g + '</h3><div class="service-grid d-rel">' + items.map(serviceCard).join('') + '</div></div>';
      }).join('');
      root.innerHTML = '<section class="page-hero"><div class="wrap"><div class="crumb-row"><a href="index.html">Home</a><span>/</span><span>Services</span></div><h1>Everything We <span class="accent">Build &amp; Run</span></h1><p class="lead">Pick a service to see what we deliver, the tech we use and how we work.</p></div></section>' +
        '<section class="d-section alt"><div class="wrap">' + groups + '</div></section>' + cta('Not sure what you need?','Tell us your goal and we will recommend the right approach.');
      return finish();
    }
    var svc = all.filter(function(s){ return s.slug === slug; })[0];
    if(!svc){ if(SEO) SEO.noindex('Service not found — Zyanix'); return notFound(root, 'Service', 'services.html'); }
    if(SEO){
      var sUrl = SEO.PATH.service(svc.slug);
      SEO.set({
        title: svc.name + ' Services | Zyanix',
        description: svc.tagline + ' ' + svc.overview,
        path: sUrl, type: 'website',
        ld: [
          { '@context':'https://schema.org', '@type':'Service', '@id': SEO.abs(sUrl) + '#service', name: svc.name, serviceType: svc.name,
            description: SEO.clean(svc.overview), url: SEO.abs(sUrl), provider: { '@id': SEO.ORG_ID }, areaServed: 'Worldwide',
            category: svc.group, keywords: svc.tech.join(', ') },
          SEO.breadcrumbs([['Home','index.html'],['Services','services.html'],[svc.name, sUrl]])
        ]
      });
    } else { document.title = svc.name + ' Services — Zyanix'; }
    var related = all.filter(function(s){ return s.slug !== svc.slug && s.group === svc.group; })
      .concat(all.filter(function(s){ return s.group !== svc.group; })).slice(0,3);
    var steps = [['Discover','We learn your goals, users and constraints.'],['Design','We plan the architecture and prototype the experience.'],['Build','We develop in short sprints with weekly demos.'],['Launch & Grow','We deploy, monitor and keep improving.']];

    root.innerHTML =
      '<section class="page-hero"><div class="wrap">' +
        '<div class="crumb-row"><a href="index.html">Home</a><span>/</span><a href="services.html">Services</a><span>/</span><span>' + svc.name + '</span></div>' +
        '<div class="hero-icon">' + SVG(svc.icon) + '</div>' +
        '<h1>' + svc.name + '</h1><p class="lead">' + svc.tagline + '</p>' +
        '<div class="hero-btns"><a href="contact.html" class="btn btn-primary" data-open-contact data-service="' + esc(svc.name) + '">Get a Free Quote ' + ARROW + '</a>' +
        '<a href="case-studies.html" class="btn btn-outline">See Our Work</a></div>' +
      '</div></section>' +
      '<section class="d-section alt"><div class="wrap d-two">' +
        '<div class="hero-copy"><span class="eyebrow">Overview</span><h2>How we approach ' + svc.name + '</h2><p>' + svc.overview + '</p>' +
          '<div class="chips-label">Technologies we use</div>' + chips(svc.tech) + '</div>' +
        '<div class="hero-visual"><span class="eyebrow">What you get</span><div style="height:12px"></div>' + list(svc.features) + '</div>' +
      '</div></section>' +
      '<section class="d-section"><div class="wrap">' + head('Why It Matters','Benefits you can expect') +
        '<div class="d-grid">' + svc.benefits.map(function(b,i){ return '<div class="value-card"><div class="num">' + (i+1) + '</div><h3>' + b[0] + '</h3><p>' + b[1] + '</p></div>'; }).join('') + '</div></div></section>' +
      '<section class="d-section alt"><div class="wrap">' + head('Our Process','From idea to launch in four steps') +
        '<div class="steps-row">' + steps.map(function(s,i){ return '<div class="value-card"><div class="num">' + (i+1) + '</div><h3>' + s[0] + '</h3><p>' + s[1] + '</p></div>'; }).join('') + '</div></div></section>' +
      '<section class="d-section"><div class="wrap">' + head('Related Services','You might also need') +
        '<div class="service-grid d-rel">' + related.map(serviceCard).join('') + '</div></div></section>' +
      cta('Ready to start your ' + svc.name + ' project?','Share your idea and get a free consultation and estimate within one business day.', svc.name);
    finish();
  }
  function serviceCard(s){
    return '<a class="service-card" href="service.html?service=' + s.slug + '"><div class="service-icon">' + SVG(s.icon) + '</div><h3>' + s.name + '</h3><p>' + s.tagline + '</p><span class="more">Learn more →</span></a>';
  }

  /* ---------------- INDUSTRY ---------------- */
  function indTile(i){
    return '<a class="ind-tile service-card" href="industries.html?industry=' + i.slug + '"><span class="industry-icon">' + SVG(i.icon) + '</span><div><h3>' + i.name + '</h3><p>' + i.blurb + '</p></div></a>';
  }
  function renderIndustry(root){
    var all = window.ZYANIX_INDUSTRIES || [];
    var slug = param('industry');
    if(!slug){
      if(SEO){
        SEO.set({
          title: 'Industries We Serve: FinTech, Healthcare, Retail & More | Zyanix',
          description: 'Zyanix builds software for FinTech, healthcare, e-commerce, logistics, real estate, EdTech, automotive and travel companies. Explore our industry expertise.',
          path: SEO.PATH.industriesHub,
          ld: [
            { '@context':'https://schema.org', '@type':'CollectionPage', name:'Industries We Serve', url: SEO.abs(SEO.PATH.industriesHub), isPartOf:{ '@id': SEO.SITE_URL + '/#website' } },
            { '@context':'https://schema.org', '@type':'ItemList', itemListElement: all.map(function(i, n){ return { '@type':'ListItem', position:n+1, name:i.name, url: SEO.abs(SEO.PATH.industry(i.slug)) }; }) },
            SEO.breadcrumbs([['Home','index.html'],['Industries', SEO.PATH.industriesHub]])
          ]
        });
      } else { document.title = 'Industries We Serve — Zyanix'; }
      root.innerHTML = '<section class="page-hero"><div class="wrap"><div class="crumb-row"><a href="index.html">Home</a><span>/</span><span>Industries</span></div><h1>Industries <span class="accent">We Serve</span></h1><p class="lead">Deep domain experience across the sectors where technology moves the needle.</p></div></section>' +
        '<section class="d-section alt"><div class="wrap"><div class="ind-list">' + all.map(indTile).join('') + '</div></div></section>' + cta('Do not see your industry?','We work across sectors — tell us about your business.');
      return finish();
    }
    var ind = all.filter(function(i){ return i.slug === slug; })[0];
    if(!ind){ if(SEO) SEO.noindex('Industry not found — Zyanix'); return notFound(root, 'Industry', 'industries.html'); }
    if(SEO){
      var iUrl = SEO.PATH.industry(ind.slug);
      SEO.set({
        title: ind.name + ' Software Development | Zyanix',
        description: ind.blurb + ' ' + ind.overview,
        path: iUrl,
        ld: [
          { '@context':'https://schema.org', '@type':'Service', '@id': SEO.abs(iUrl) + '#service', name: ind.name + ' software development',
            serviceType: ind.name + ' software development', description: SEO.clean(ind.overview), url: SEO.abs(iUrl),
            provider: { '@id': SEO.ORG_ID }, areaServed: 'Worldwide', audience: { '@type':'BusinessAudience', name: ind.name } },
          SEO.breadcrumbs([['Home','index.html'],['Industries', SEO.PATH.industriesHub],[ind.name, iUrl]])
        ]
      });
    } else { document.title = ind.name + ' Solutions — Zyanix'; }
    var projects = (window.ZYANIX_PROJECTS || []).filter(function(p){ return (ind.projects || []).indexOf(p.slug) > -1; });
    var others = all.filter(function(i){ return i.slug !== ind.slug; }).slice(0,4);

    root.innerHTML =
      '<section class="page-hero"><div class="wrap">' +
        '<div class="crumb-row"><a href="index.html">Home</a><span>/</span><a href="industries.html">Industries</a><span>/</span><span>' + ind.name + '</span></div>' +
        '<div class="hero-icon">' + SVG(ind.icon) + '</div>' +
        '<h1>' + ind.name + ' <span class="accent">Solutions</span></h1><p class="lead">' + ind.blurb + '</p>' +
        '<div class="hero-btns"><a href="contact.html" class="btn btn-primary" data-open-contact data-service="' + esc(ind.name) + '">Discuss Your Project ' + ARROW + '</a>' +
        '<a href="case-studies.html" class="btn btn-outline">View Case Studies</a></div>' +
      '</div></section>' +
      '<section class="d-section alt"><div class="wrap d-two">' +
        '<div class="hero-copy"><span class="eyebrow">Overview</span><h2>Technology built for ' + ind.name + '</h2><p>' + ind.overview + '</p>' +
          '<div class="chips-label">Technologies we use</div>' + chips(ind.tech) + '</div>' +
        '<div class="hero-visual"><span class="eyebrow">What we deliver</span><div style="height:12px"></div>' + list(ind.solutions) + '</div>' +
      '</div></section>' +
      '<section class="d-section"><div class="wrap">' + head('Challenges','Problems we help you solve') +
        '<div class="d-grid">' + ind.challenges.map(function(c,i){ return '<div class="value-card"><div class="num">' + (i+1) + '</div><p style="color:var(--text-primary);font-weight:600;">' + esc(c) + '</p></div>'; }).join('') + '</div>' +
        '<div class="stat-strip" style="margin-top:40px;">' + ind.stats.map(function(s){ return '<div class="stat-box stat-item"><div class="n">' + s[0] + '</div><div class="l">' + s[1] + '</div></div>'; }).join('') + '</div>' +
      '</div></section>' +
      (projects.length ? '<section class="d-section alt"><div class="wrap">' + head('Related Work','Projects in this space') +
        '<div class="proj-grid">' + projects.map(function(p){
          return '<a class="project-card" href="project.html?project=' + p.slug + '"><div class="project-thumb"><img src="' + p.thumb + '" alt="' + esc(p.name) + '" loading="lazy"></div><div class="project-info"><h4>' + p.name + '</h4><div class="tag-row">' + p.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join('') + '</div></div></a>';
        }).join('') + '</div></div></section>' : '') +
      '<section class="d-section"><div class="wrap">' + head('Explore More','Other industries we serve') +
        '<div class="ind-list">' + others.map(indTile).join('') + '</div></div></section>' +
      cta('Building in ' + ind.name + '?','Let\'s talk about your goals — we will bring the domain experience.', ind.name);
    finish();
  }

  document.addEventListener('DOMContentLoaded', function(){
    var root = $('detail-root');
    if(!root) return;
    if(root.getAttribute('data-kind') === 'industry') renderIndustry(root); else renderService(root);
  });
})();
