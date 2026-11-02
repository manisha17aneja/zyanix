/* ============================================================
   project-detail.js — powers the Project Detail page (project.html).

   Supports 9 unique layout archetypes:
     - 'saas-os' (AutoFlow CRM)
     - 'ecommerce-store' (LuxeStore E-Commerce)
     - 'edtech-funnel' (EduLead CRM)
     - 'marketplace' (Auto Marketplace Platform)
     - 'mobile-app' (Fitness Mobile App)
     - 'data-dashboard' (Business Analytics Dashboard)
     - 'fintech-security' (Fintech Payments App)
     - 'logistics-fleet' (Logistics Tracking Platform)
     - 'healthtech' (Telehealth Booking App)
   ============================================================ */
(function(){
  function getSlugFromUrl(){
    if(window.ZX_FIXED && window.ZX_FIXED.project) return window.ZX_FIXED.project;
    var params = new URLSearchParams(window.location.search);
    return params.get('project');
  }

  function renderContentBlock(block){
    switch(block.type){
      case 'heading':
        return '<h2 id="' + (block.id || '') + '">' + block.text + '</h2>';
      case 'subheading':
        return '<h3 id="' + (block.id || '') + '">' + block.text + '</h3>';
      case 'paragraph':
        return '<p>' + block.text + '</p>';
      case 'list':
        return '<ul>' + block.items.map(function(i){ return '<li>' + i + '</li>'; }).join('') + '</ul>';
      case 'quote':
        return '<div class="pull-quote">' + block.text + '</div>';
      case 'image':
        return '<figure style="margin:26px 0; width:100%; max-width:100%; overflow:hidden;"><img src="' + block.src + '" alt="' + (block.alt || '') + '" loading="lazy" style="width:100%; height:auto; display:block; border-radius:14px; object-fit:contain; background:var(--icon-bg);">' +
               (block.caption ? '<figcaption style="text-align:center; font-size:0.82rem; color:var(--text-muted); margin-top:10px; font-style:italic; padding:0 6px; word-break:break-word;">' + block.caption + '</figcaption>' : '') +
               '</figure>';
      case 'callout':
        return '<div class="project-callout">' +
                 (block.title ? '<h4>' + block.title + '</h4>' : '') +
                 '<p>' + block.text + '</p>' +
               '</div>';
      case 'timeline':
        return '<div class="project-timeline-grid">' +
                 block.steps.map(function(s){
                   return '<div>' +
                            '<span>' + s.phase + '</span>' +
                            '<div><strong>' + s.title + '</strong><p>' + s.desc + '</p></div>' +
                          '</div>';
                 }).join('') +
               '</div>';
      case 'tech-stack':
        return '<div class="project-tech-grid">' +
                 block.items.map(function(item){
                   return '<div>' +
                            '<span>' + item.category + '</span>' +
                            '<strong>' + item.name + '</strong>' +
                            '<span>' + item.detail + '</span>' +
                          '</div>';
                 }).join('') +
               '</div>';
      case 'table':
        return '<div class="project-table-wrapper">' +
                 '<table>' +
                   (block.headers ? '<thead><tr>' +
                     block.headers.map(function(h){ return '<th>' + h + '</th>'; }).join('') +
                   '</tr></thead>' : '') +
                   '<tbody>' +
                     block.rows.map(function(row){
                       return '<tr>' +
                         row.map(function(col, idx){
                           return '<td' + (idx === 0 ? ' style="font-weight:700; color:var(--text-primary);"' : '') + '>' + col + '</td>';
                         }).join('') +
                       '</tr>';
                     }).join('') +
                   '</tbody>' +
                 '</table>' +
               '</div>';
      default:
        return '';
    }
  }

  function renderHeader(project){
    var container = document.getElementById('projectHeaderContainer');
    if(!container) return;

    var breadcrumbHTML =
      '<div class="crumb-row">' +
        '<a href="index.html">Home</a><span>/</span>' +
        '<a href="case-studies.html">Case Studies</a><span>/</span>' +
        '<span>' + project.category + '</span>' +
      '</div>';

    var headerHTML = '';

    if(project.layout === 'saas-os'){
      headerHTML =
        breadcrumbHTML +
        '<div class="layout-badge-row">' +
          '<span class="badge-live-pulse">' + (project.statusBadge || 'Live in Production') + '</span>' +
          '<span class="badge-tag-special">' + (project.highlightBadge || 'Automotive Dealership OS') + '</span>' +
          project.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join('') +
        '</div>' +
        '<h1>How We Built & Scaled ' + project.name + '</h1>' +
        '<div class="client-name">Client: ' + project.client + ' · Architecture: Enterprise Automotive OS</div>' +
        '<div class="live-action-buttons">' +
          '<a href="' + (project.liveDemoUrl || 'https://crm-autoflow.netlify.app/') + '" target="_blank" rel="noopener" class="btn-live-ext">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
            'Launch AutoFlow CRM Live' +
          '</a>' +
          '<a href="' + (project.dashboardUrl || 'https://crm-autoflow.netlify.app/dashboard') + '" target="_blank" rel="noopener" class="btn-secondary-ext">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>' +
            'Explore Dashboard Workspace' +
          '</a>' +
        '</div>' +
        '<div class="saas-os-tabs">' +
          '<button type="button" class="saas-tab-btn active" data-img="' + (project.gallery && project.gallery[0] ? project.gallery[0].src : project.cover) + '">Showroom Lead Matrix</button>' +
          '<button type="button" class="saas-tab-btn" data-img="' + (project.gallery && project.gallery[1] ? project.gallery[1].src : project.cover) + '">Service Bay Workshop</button>' +
          '<button type="button" class="saas-tab-btn" data-img="' + (project.gallery && project.gallery[2] ? project.gallery[2].src : project.cover) + '">Mobile Sales Handset</button>' +
        '</div>' +
        '<div class="saas-preview-frame">' +
          '<div class="saas-browser-bar">' +
            '<div class="saas-browser-dots"><span class="saas-dot r"></span><span class="saas-dot y"></span><span class="saas-dot g"></span></div>' +
            '<div class="saas-browser-url">https://crm-autoflow.netlify.app/dashboard</div>' +
          '</div>' +
          '<img id="saasPreviewImg" src="' + (project.gallery && project.gallery[0] ? project.gallery[0].src : project.cover) + '" alt="' + project.name + '">' +
        '</div>';
    } else if(project.layout === 'ecommerce-store'){
      headerHTML =
        breadcrumbHTML +
        '<div class="layout-badge-row">' +
          '<span class="badge-live-pulse">' + (project.statusBadge || 'Sub-Second Edge') + '</span>' +
          '<span class="badge-tag-special">' + (project.highlightBadge || 'Headless Luxury Commerce') + '</span>' +
          '<span class="badge-tag-special">Core Web Vitals 99/100</span>' +
          project.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join('') +
        '</div>' +
        '<h1>How We Re-Architected ' + project.client + '’s ' + project.name + '</h1>' +
        '<div class="client-name">Client: ' + project.client + ' · ' + project.category + '</div>' +
        '<div class="article-cover"><img src="' + project.cover + '" alt="' + project.name + '"></div>';
    } else if(project.layout === 'edtech-funnel'){
      headerHTML =
        breadcrumbHTML +
        '<div class="layout-badge-row">' +
          '<span class="badge-live-pulse">' + (project.statusBadge || '<5 Min First Touch') + '</span>' +
          '<span class="badge-tag-special">' + (project.highlightBadge || 'Admissions Funnel Engine') + '</span>' +
          project.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join('') +
        '</div>' +
        '<h1>Scaling Admissions: How We Built ' + project.name + '</h1>' +
        '<div class="client-name">Client: ' + project.client + ' · Multi-Campus Funnel Architecture</div>' +
        '<div class="funnel-hero-banner">' +
          '<div class="funnel-hero-left">' +
            '<h4>High-Speed Counselor Allocation</h4>' +
            '<p>50,000+ student leads routed with sub-5-minute round-robin distribution</p>' +
          '</div>' +
          '<span class="funnel-hero-badge">Avg First-Touch: 4m 12s</span>' +
        '</div>' +
        '<div class="article-cover"><img src="' + project.cover + '" alt="' + project.name + '"></div>';
    } else if(project.layout === 'marketplace'){
      headerHTML =
        breadcrumbHTML +
        '<div class="layout-badge-row">' +
          '<span class="badge-live-pulse">' + (project.statusBadge || 'Sub-200ms Search') + '</span>' +
          '<span class="badge-tag-special">' + (project.highlightBadge || 'Two-Sided Automotive Market') + '</span>' +
          project.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join('') +
        '</div>' +
        '<h1>Engineering NextGen Motors’ High-Volume ' + project.name + '</h1>' +
        '<div class="client-name">Client: ' + project.client + ' · Two-Sided Platform Infrastructure</div>' +
        '<div class="article-cover"><img src="' + project.cover + '" alt="' + project.name + '"></div>';
    } else if(project.layout === 'mobile-app'){
      headerHTML =
        breadcrumbHTML +
        '<div class="layout-badge-row">' +
          '<span class="badge-live-pulse">' + (project.statusBadge || '4.8★ App Store') + '</span>' +
          '<span class="badge-tag-special">' + (project.highlightBadge || 'Offline-First Native App') + '</span>' +
          '<span class="badge-tag-special">60,000+ Downloads</span>' +
          project.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join('') +
        '</div>' +
        '<h1>Building PulseFit: High-Performance ' + project.name + '</h1>' +
        '<div class="client-name">Client: ' + project.client + ' · Offline-First React Native Architecture</div>' +
        '<div class="mobile-hero-frame">' +
          '<div class="mobile-notch"></div>' +
          '<img src="' + (project.content.find(function(c){ return c.type === 'image'; }) ? project.content.find(function(c){ return c.type === 'image'; }).src : project.cover) + '" alt="' + project.name + '">' +
        '</div>';
    } else if(project.layout === 'data-dashboard'){
      headerHTML =
        breadcrumbHTML +
        '<div class="layout-badge-row">' +
          '<span class="badge-live-pulse">' + (project.statusBadge || '<85ms Query Speed') + '</span>' +
          '<span class="badge-tag-special">' + (project.highlightBadge || 'Executive BI Command Center') + '</span>' +
          '<span class="badge-tag-special">12 Disparate Pipelines Unified</span>' +
          project.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join('') +
        '</div>' +
        '<h1>Architecting BrightPath’s ' + project.name + '</h1>' +
        '<div class="client-name">Client: ' + project.client + ' · Enterprise OLAP & Data Pipeline</div>' +
        '<div class="article-cover"><img src="' + project.cover + '" alt="' + project.name + '"></div>';
    } else if(project.layout === 'fintech-security'){
      headerHTML =
        breadcrumbHTML +
        '<div class="layout-badge-row">' +
          '<span class="badge-live-pulse">' + (project.statusBadge || 'PCI-DSS Level 1') + '</span>' +
          '<span class="badge-tag-special">' + (project.highlightBadge || 'Bank-Grade Financial Protocol') + '</span>' +
          '<span class="badge-tag-special">0.02% Fraud Rate</span>' +
          project.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join('') +
        '</div>' +
        '<h1>Zero-Trust Financial Architecture for PayLoop ' + project.name + '</h1>' +
        '<div class="client-name">Client: ' + project.client + ' · High-Security Payment Gateway</div>' +
        '<div class="article-cover"><img src="' + project.cover + '" alt="' + project.name + '"></div>';
    } else if(project.layout === 'logistics-fleet'){
      headerHTML =
        breadcrumbHTML +
        '<div class="layout-badge-row">' +
          '<span class="badge-live-pulse">' + (project.statusBadge || '500+ Active GPS Units') + '</span>' +
          '<span class="badge-tag-special">' + (project.highlightBadge || 'Real-Time Telematics Fleet') + '</span>' +
          '<span class="badge-tag-special"><1.5s Ingestion Ping</span>' +
          project.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join('') +
        '</div>' +
        '<h1>Live Telematics & Dispatch for RouteWise ' + project.name + '</h1>' +
        '<div class="client-name">Client: ' + project.client + ' · AWS IoT & Real-Time Event Pipeline</div>' +
        '<div class="article-cover"><img src="' + project.cover + '" alt="' + project.name + '"></div>';
    } else if(project.layout === 'healthtech'){
      headerHTML =
        breadcrumbHTML +
        '<div class="layout-badge-row">' +
          '<span class="badge-live-pulse">' + (project.statusBadge || '4.7★ Patient Score') + '</span>' +
          '<span class="badge-tag-special">' + (project.highlightBadge || 'HIPAA-Compliant Virtual Care') + '</span>' +
          '<span class="badge-tag-special">1-Click WebRTC Consultation</span>' +
          project.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join('') +
        '</div>' +
        '<h1>Designing CareConnect’s Frictionless ' + project.name + '</h1>' +
        '<div class="client-name">Client: ' + project.client + ' · HIPAA Video & Clinical Workflow</div>' +
        '<div class="article-cover"><img src="' + project.cover + '" alt="' + project.name + '"></div>';
    } else {
      headerHTML =
        breadcrumbHTML +
        '<div class="tag-row"><span class="tag">Featured Case Study</span>' + project.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join('') + '</div>' +
        '<h1>How We Helped ' + project.client + ' Launch ' + project.name + '</h1>' +
        '<div class="client-name">Client: ' + project.client + ' · ' + project.category + '</div>' +
        '<div class="article-cover"><img src="' + project.cover + '" alt="' + project.name + '"></div>';
    }

    container.innerHTML = headerHTML;

    // Attach tab click events for SaaS-OS preview
    if(project.layout === 'saas-os'){
      var tabBtns = container.querySelectorAll('.saas-tab-btn');
      var previewImg = container.querySelector('#saasPreviewImg');
      tabBtns.forEach(function(btn){
        btn.addEventListener('click', function(){
          tabBtns.forEach(function(b){ b.classList.remove('active'); });
          btn.classList.add('active');
          if(previewImg){
            previewImg.src = btn.getAttribute('data-img');
          }
        });
      });
    }

    // SEO updates
    var SEO = window.ZyanixSEO;
    if(SEO){
      var u = SEO.PATH.project(project.slug);
      var res = (project.results || []).map(function(r){ return r.value + ' ' + r.label; }).join(', ');
      SEO.set({
        title: project.name + ' Case Study | Zyanix',
        description: project.excerpt + (res ? ' Results: ' + res + '.' : ''),
        path: u, type: 'article', image: project.cover,
        ld: [
          { '@context':'https://schema.org', '@type':'Article', headline: SEO.clean('How We Helped ' + project.client + ' Launch ' + project.name),
            description: SEO.clean(project.excerpt), image: SEO.abs(project.cover), mainEntityOfPage: SEO.abs(u), url: SEO.abs(u),
            articleSection: project.category, keywords: (project.tags || []).join(', '),
            author: { '@id': SEO.ORG_ID }, publisher: { '@id': SEO.ORG_ID } },
          SEO.breadcrumbs([['Home','index.html'],['Case Studies','case-studies.html'],[project.name, u]])
        ]
      });
    } else { document.title = project.name + ' Case Study — Zyanix'; }
  }

  function renderResults(project){
    var container = document.getElementById('resultsContainer');
    if(!container) return;

    if(project.layout === 'saas-os'){
      container.className = 'saas-results-grid';
      container.innerHTML = project.results.map(function(r){
        return '<div class="saas-result-card">' +
          (r.delta ? '<span class="delta-badge">' + r.delta + '</span>' : '') +
          '<div class="value">' + r.value + '</div>' +
          '<div class="label">' + r.label + '</div>' +
          (r.sub ? '<div class="sub">' + r.sub + '</div>' : '') +
        '</div>';
      }).join('');
    } else if(project.layout === 'ecommerce-store' && project.comparison){
      container.className = '';
      container.innerHTML =
        '<div class="results-grid" style="margin-bottom:28px;">' +
          project.results.map(function(r){
            return '<div class="result-item">' +
              '<div class="num">' + r.value + '</div>' +
              '<div class="lbl">' + r.label + '</div>' +
              (r.delta ? '<div style="font-size:0.75rem; color:var(--orange); font-weight:700; margin-top:4px;">' + r.delta + '</div>' : '') +
            '</div>';
          }).join('') +
        '</div>' +
        '<div class="ecom-comparison-box">' +
          '<div class="ecom-comp-head">' +
            '<h3>Performance Transformation: Monolithic vs Headless Next.js</h3>' +
            '<span class="gain">Core Web Vitals Pass</span>' +
          '</div>' +
          '<div style="overflow-x:auto; -webkit-overflow-scrolling:touch; width:100%;">' +
            '<table class="ecom-comp-table">' +
              '<thead><tr><th>Key Metric</th><th>Legacy Monolith</th><th>Headless Next.js</th><th>Impact</th></tr></thead>' +
              '<tbody>' +
                project.comparison.map(function(c){
                  return '<tr>' +
                    '<td><strong>' + c.metric + '</strong></td>' +
                    '<td class="bad">' + c.before + '</td>' +
                    '<td class="good">' + c.after + '</td>' +
                    '<td><span class="gain">' + c.improvement + '</span></td>' +
                  '</tr>';
                }).join('') +
              '</tbody>' +
            '</table>' +
          '</div>' +
        '</div>';
    } else if(project.layout === 'edtech-funnel' && project.funnelSteps){
      container.className = '';
      container.innerHTML =
        '<div class="results-grid" style="margin-bottom:28px;">' +
          project.results.map(function(r){
            return '<div class="result-item">' +
              '<div class="num">' + r.value + '</div>' +
              '<div class="lbl">' + r.label + '</div>' +
              (r.delta ? '<div style="font-size:0.75rem; color:var(--orange); font-weight:700; margin-top:4px;">' + r.delta + '</div>' : '') +
            '</div>';
          }).join('') +
        '</div>' +
        '<div class="funnel-steps-container">' +
          '<h3 class="funnel-steps-title">5-Stage Visual Admissions Funnel</h3>' +
          '<div class="funnel-steps-grid">' +
            project.funnelSteps.map(function(s){
              return '<div class="funnel-step-card">' +
                '<div class="num-badge">' + s.step + '</div>' +
                '<div class="name">' + s.name + '</div>' +
                '<div class="metric">' + s.metric + '</div>' +
                '<div class="desc">' + s.desc + '</div>' +
              '</div>';
            }).join('') +
          '</div>' +
        '</div>';
    } else {
      container.className = 'results-grid';
      container.innerHTML = project.results.map(function(r){
        return '<div class="result-item">' +
          '<div class="num">' + r.value + '</div>' +
          '<div class="lbl">' + r.label + '</div>' +
          (r.delta ? '<div style="font-size:0.75rem; color:var(--orange); font-weight:700; margin-top:4px;">' + r.delta + '</div>' : '') +
        '</div>';
      }).join('');
    }
  }

  function renderDomainModule(project){
    var section = document.getElementById('projectDomainSection');
    var container = document.getElementById('projectDomainContainer');
    if(!section || !container) return;

    var moduleHTML = '';

    if(project.layout === 'saas-os' && project.specs){
      moduleHTML =
        '<div class="saas-matrix-section">' +
          '<h3 class="saas-matrix-title">' +
            '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>' +
            'Dealership Operating System Matrix & PostgreSQL RLS Kernel' +
          '</h3>' +
          '<div class="saas-matrix-grid">' +
            project.specs.map(function(s){
              return '<div class="saas-matrix-item">' +
                '<h4>' + s.title + '</h4>' +
                '<p>' + s.desc + '</p>' +
              '</div>';
            }).join('') +
          '</div>' +
        '</div>';
    } else if(project.layout === 'ecommerce-store' && project.specs){
      moduleHTML =
        '<div class="saas-matrix-section">' +
          '<h3 class="saas-matrix-title">' +
            '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' +
            'Headless Commerce Architecture & Edge Stack' +
          '</h3>' +
          '<div class="saas-matrix-grid">' +
            project.specs.map(function(s){
              return '<div class="saas-matrix-item">' +
                '<h4>' + s.title + '</h4>' +
                '<p>' + s.desc + '</p>' +
              '</div>';
            }).join('') +
          '</div>' +
        '</div>';
    } else if(project.layout === 'edtech-funnel' && project.specs){
      moduleHTML =
        '<div class="saas-matrix-section">' +
          '<h3 class="saas-matrix-title">' +
            '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
            'Omnichannel Admissions Hub & Lead Routing Specs' +
          '</h3>' +
          '<div class="saas-matrix-grid">' +
            project.specs.map(function(s){
              return '<div class="saas-matrix-item">' +
                '<h4>' + s.title + '</h4>' +
                '<p>' + s.desc + '</p>' +
              '</div>';
            }).join('') +
          '</div>' +
        '</div>';
    } else if(project.layout === 'marketplace' && project.twoSided){
      moduleHTML =
        '<div class="twoside-section">' +
          '<div class="twoside-card">' +
            '<div class="twoside-card-head">' +
              '<div class="twoside-icon">👤</div>' +
              '<h3>For Car Buyers</h3>' +
            '</div>' +
            '<ul class="twoside-list">' +
              project.twoSided.buyerSide.map(function(i){ return '<li>' + i + '</li>'; }).join('') +
            '</ul>' +
          '</div>' +
          '<div class="twoside-card">' +
            '<div class="twoside-card-head">' +
              '<div class="twoside-icon">🏢</div>' +
              '<h3>For Dealerships</h3>' +
            '</div>' +
            '<ul class="twoside-list">' +
              project.twoSided.dealerSide.map(function(i){ return '<li>' + i + '</li>'; }).join('') +
            '</ul>' +
          '</div>' +
        '</div>';
    } else if(project.layout === 'mobile-app' && project.mobileHighlights){
      moduleHTML =
        '<div class="mobile-features-grid">' +
          project.mobileHighlights.map(function(h){
            return '<div class="mobile-feature-box">' +
              '<h4>' + h.title + '</h4>' +
              '<p>' + h.desc + '</p>' +
            '</div>';
          }).join('') +
        '</div>';
    } else if(project.layout === 'data-dashboard' && project.dataMatrix){
      moduleHTML =
        '<div class="data-sources-matrix">' +
          '<div class="data-sources-title">' +
            '<h3>12-Source Data Ingestion Cloud</h3>' +
            '<span style="font-size:0.8rem; color:#10B981; font-weight:700;">● Real-Time Active Pipelines</span>' +
          '</div>' +
          '<div class="data-sources-grid">' +
            project.dataMatrix.map(function(d){
              return '<div class="data-source-pill">' +
                '<div class="head">' +
                  '<span class="name">' + d.name + '</span>' +
                  '<span class="status">' + d.status + '</span>' +
                '</div>' +
                '<div class="tools">' + d.tools + '</div>' +
                '<div class="cadence">Ingestion: ' + d.cadence + '</div>' +
              '</div>';
            }).join('') +
          '</div>' +
        '</div>';
    } else if(project.layout === 'fintech-security' && project.securityArchitecture){
      moduleHTML =
        '<div class="security-tiers-container">' +
          '<h3 style="font-size:1.25rem; font-weight:800; text-align:center; margin-bottom:10px;">Multi-Layer Zero-Trust Security Protocol</h3>' +
          project.securityArchitecture.map(function(t){
            return '<div class="security-tier-card">' +
              '<div>' +
                '<div class="security-tier-name">' + t.tier + '</div>' +
                '<div class="security-tier-tech">' + t.tech + '</div>' +
              '</div>' +
              '<div class="security-tier-desc">' + t.desc + '</div>' +
            '</div>';
          }).join('') +
        '</div>';
    } else if(project.layout === 'logistics-fleet' && project.telematicsPipeline){
      moduleHTML =
        '<div class="telematics-timeline">' +
          '<h3 class="telematics-timeline-title">Real-Time Telematics & Geofence Pipeline</h3>' +
          '<div class="telematics-steps-row">' +
            project.telematicsPipeline.map(function(p){
              return '<div class="telematics-step-box">' +
                '<span class="telematics-step-num">Step ' + p.step + '</span>' +
                '<div class="telematics-phase">' + p.phase + '</div>' +
                '<div class="telematics-detail">' + p.detail + '</div>' +
              '</div>';
            }).join('') +
          '</div>' +
        '</div>';
    } else if(project.layout === 'healthtech' && project.patientJourney){
      moduleHTML =
        '<div class="patient-journey-section">' +
          '<h3 class="patient-journey-title">Frictionless 3-Step Patient Care Journey</h3>' +
          '<div class="patient-journey-grid">' +
            project.patientJourney.map(function(j){
              return '<div class="patient-journey-card">' +
                '<div class="step-badge">' + j.step + '</div>' +
                '<div class="stage">' + j.stage + '</div>' +
                '<div class="desc">' + j.desc + '</div>' +
              '</div>';
            }).join('') +
          '</div>' +
        '</div>';
    }

    if(moduleHTML){
      container.innerHTML = moduleHTML;
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  }

  function renderBody(project){
    var container = document.getElementById('articleBodyContainer');
    if(!container) return;
    var toc = project.content.filter(function(b){ return b.type === 'heading'; });
    var tocHTML = '<aside class="article-toc"><h5>In This Case Study</h5><ul>' +
      toc.map(function(h){ return '<li><a href="#' + h.id + '">' + h.text + '</a></li>'; }).join('') +
      '</ul></aside>';
    var contentHTML = '<article class="article-content">' +
      project.content.map(renderContentBlock).join('') +
      '<div class="share-row">' +
        '<span>Share this case study:</span>' +
        '<a href="#" aria-label="Share on LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>' +
        '<a href="#" aria-label="Share on Twitter"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>' +
        '<a href="#" aria-label="Copy link" onclick="navigator.clipboard && navigator.clipboard.writeText(window.location.href); this.querySelector(\'svg\').style.stroke=\'var(--orange)\'; return false;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></a>' +
      '</div>' +
    '</article>';
    container.innerHTML = tocHTML + contentHTML;
  }

  function renderSpotlight(project){
    var container = document.getElementById('spotlightContainer');
    if(!container) return;
    var t = project.testimonial;
    if(!t) return;
    container.innerHTML =
      '<span class="spotlight-quote">"</span>' +
      '<p>' + t.quote + '</p>' +
      '<div class="spotlight-author">' +
        '<img src="' + t.avatar + '" alt="' + t.name + '">' +
        '<div style="text-align:left;">' +
          '<div class="sa-name">' + t.name + '</div>' +
          '<div class="sa-role">' + t.role + '</div>' +
        '</div>' +
      '</div>';
  }

  function relatedCardHTML(project){
    return (
      '<a href="project.html?project=' + project.slug + '" class="blog-card">' +
        '<div class="blog-thumb"><img src="' + project.thumb + '" alt="' + project.name + '" loading="lazy"></div>' +
        '<div class="blog-body">' +
          '<div class="tag-row"><span class="tag">' + project.category + '</span></div>' +
          '<h4>' + project.name + '</h4>' +
        '</div>' +
      '</a>'
    );
  }

  function renderRelated(current, allProjects){
    var container = document.getElementById('relatedProjectsContainer');
    if(!container) return;
    var sameCategory = allProjects.filter(function(p){ return p.slug !== current.slug && p.category === current.category; });
    var others = allProjects.filter(function(p){ return p.slug !== current.slug && p.category !== current.category; });
    var related = sameCategory.concat(others).slice(0, 3);
    container.innerHTML = related.map(relatedCardHTML).join('');
  }

  function renderNotFound(){
    if(window.ZyanixSEO) window.ZyanixSEO.noindex('Case study not found — Zyanix');
    var header = document.getElementById('projectHeaderContainer');
    if(header){
      header.innerHTML =
        '<div style="text-align:center; padding:40px 0;">' +
          '<h1 style="font-size:1.8rem; margin-bottom:14px;">Case study not found</h1>' +
          '<p style="color:var(--text-secondary); margin-bottom:24px;">This project may have been moved or the link is missing its <code>?project=</code> slug.</p>' +
          '<a href="case-studies.html" class="btn btn-primary">Back to Case Studies</a>' +
        '</div>';
    }
  }

  function renderLoadError(){
    var header = document.getElementById('projectHeaderContainer');
    if(header){
      header.innerHTML =
        '<div style="text-align:center; padding:40px 0; color:var(--text-secondary);">' +
          '<p style="font-weight:700; margin-bottom:8px;">Couldn\'t load this case study.</p>' +
          '<p style="font-size:.88rem;">Make sure <code>projects.js</code> is in the same folder as this page and is linked with a <code>&lt;script src="projects.js"&gt;</code> tag before <code>project-detail.js</code>.</p>' +
        '</div>';
    }
  }

  function findProject(slug, projects){
    if(!slug || !slug.trim()){
      return projects.find(function(p){ return p.featured; }) || projects[0];
    }
    var s = slug.trim().toLowerCase();

    // 1. Exact slug match
    var exact = projects.find(function(p){ return p.slug.toLowerCase() === s; });
    if(exact) return exact;

    // 2. Direct alias mapping
    var aliases = {
      'a': 'autoflow-automation-platform',
      'autoflow': 'autoflow-automation-platform',
      'crm': 'autoflow-automation-platform',
      'dealership': 'autoflow-automation-platform',
      'ecom': 'ecommerce-store-platform',
      'ecommerce': 'ecommerce-store-platform',
      'luxe': 'ecommerce-store-platform',
      'luxestore': 'ecommerce-store-platform',
      'store': 'ecommerce-store-platform',
      'edu': 'edulead-crm-platform',
      'edulead': 'edulead-crm-platform',
      'edtech': 'edulead-crm-platform',
      'market': 'auto-marketplace-platform',
      'marketplace': 'auto-marketplace-platform',
      'auto-market': 'auto-marketplace-platform',
      'nextgen': 'auto-marketplace-platform',
      'fit': 'fitness-mobile-app',
      'fitness': 'fitness-mobile-app',
      'pulsefit': 'fitness-mobile-app',
      'gym': 'fitness-mobile-app',
      'analytics': 'business-analytics-dashboard',
      'dashboard': 'business-analytics-dashboard',
      'bi': 'business-analytics-dashboard',
      'brightpath': 'business-analytics-dashboard',
      'fintech': 'fintech-payments-app',
      'pay': 'fintech-payments-app',
      'payloop': 'fintech-payments-app',
      'payments': 'fintech-payments-app',
      'logistics': 'logistics-tracking-platform',
      'fleet': 'logistics-tracking-platform',
      'routewise': 'logistics-tracking-platform',
      'tracking': 'logistics-tracking-platform',
      'telehealth': 'telehealth-booking-app',
      'health': 'telehealth-booking-app',
      'careconnect': 'telehealth-booking-app',
      'clinic': 'telehealth-booking-app'
    };
    if(aliases[s]){
      var byAlias = projects.find(function(p){ return p.slug === aliases[s]; });
      if(byAlias) return byAlias;
    }

    // 3. Prefix match (e.g. starts with 'a' or 'auto')
    var prefix = projects.find(function(p){ return p.slug.toLowerCase().indexOf(s) === 0; });
    if(prefix) return prefix;

    // 4. Substring match
    var sub = projects.find(function(p){ return p.slug.toLowerCase().indexOf(s) !== -1; });
    if(sub) return sub;

    // 5. Fallback gracefully
    return projects[0];
  }

  function init(){
    var header = document.getElementById('projectHeaderContainer');
    if(!header) return;

    var projects = window.ZYANIX_PROJECTS;
    if(!projects || !projects.length){ renderLoadError(); return; }

    var slug = getSlugFromUrl();
    var project = findProject(slug, projects);
    if(!project){ renderNotFound(); return; }

    renderHeader(project);
    renderResults(project);
    renderDomainModule(project);
    renderBody(project);
    renderSpotlight(project);
    renderRelated(project, projects);

    if(window.ZyanixTheme && typeof window.ZyanixTheme.refreshReveal === 'function'){
      window.ZyanixTheme.refreshReveal();
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
