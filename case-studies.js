/* ============================================================
   case-studies.js — powers the Case Studies listing page
   (zyanix-case-studies-page.html).

   All project data comes from projects.js (window.ZYANIX_PROJECTS)
   — add, edit, or remove a project there and this page updates
   automatically, no HTML editing needed. Same pattern as
   blog.js/posts.js — reads a plain <script> variable, so it
   works even opened directly by double-clicking the HTML file.
   ============================================================ */
(function(){
  function portfolioCardHTML(project){
    return (
      '<a href="zyanix-project-detail-page.html?project=' + encodeURIComponent(project.slug) + '" class="portfolio-card" data-category="' + project.category + '">' +
        '<div class="portfolio-thumb"><img src="' + project.thumb + '" alt="' + project.name + '" loading="lazy"></div>' +
        '<div class="portfolio-info">' +
          '<h4>' + project.name + '</h4>' +
          '<p>' + project.excerpt + '</p>' +
          '<div class="tag-row">' + project.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join('') + '</div>' +
        '</div>' +
      '</a>'
    );
  }

  function featuredCaseHTML(project){
    return (
      '<div class="fc-image"><img src="' + project.cover + '" alt="' + project.name + '"></div>' +
      '<div class="fc-copy">' +
        '<div class="tag-row"><span class="tag">Featured Case Study</span></div>' +
        '<h2>How We Helped ' + project.client + ' Launch ' + project.name + '</h2>' +
        '<p>' + project.excerpt + ' ' + (project.content[1] ? project.content[1].text : '') + '</p>' +
        '<div class="fc-results">' +
          project.results.map(function(r){ return '<div class="fc-result"><div class="num">' + r.value + '</div><div class="lbl">' + r.label + '</div></div>'; }).join('') +
        '</div>' +
        '<a href="zyanix-project-detail-page.html?project=' + encodeURIComponent(project.slug) + '" class="btn btn-primary">Read Full Case Study ' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
        '</a>' +
      '</div>'
    );
  }

  function spotlightHTML(project){
    var t = project.testimonial;
    return (
      '<span class="spotlight-quote">"</span>' +
      '<p>' + t.quote + '</p>' +
      '<div class="spotlight-author">' +
        '<img src="' + t.avatar + '" alt="' + t.name + '">' +
        '<div style="text-align:left;">' +
          '<div class="sa-name">' + t.name + '</div>' +
          '<div class="sa-role">' + t.role + '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderError(container){
    container.innerHTML =
      '<div style="text-align:center; padding:30px; color:var(--text-secondary); grid-column:1/-1;">' +
        '<p style="font-weight:700; margin-bottom:8px;">Couldn\'t load projects.</p>' +
        '<p style="font-size:.88rem;">Make sure <code>projects.js</code> is in the same folder as this page and is linked with a <code>&lt;script src="projects.js"&gt;</code> tag before <code>case-studies.js</code>.</p>' +
      '</div>';
  }

  function init(){
    var gridContainer = document.getElementById('portfolioGridContainer');
    var featuredContainer = document.getElementById('featuredCaseContainer');
    var spotlightContainer = document.getElementById('spotlightContainer');
    if(!gridContainer && !featuredContainer && !spotlightContainer) return;

    var projects = window.ZYANIX_PROJECTS;
    if(!projects || !projects.length){
      if(gridContainer) renderError(gridContainer);
      return;
    }

    var featured = projects.find(function(p){ return p.featured; }) || projects[0];
    var rest = projects.filter(function(p){ return p.slug !== featured.slug; });

    if(gridContainer){
      gridContainer.innerHTML = rest.map(portfolioCardHTML).join('');
      var tabs = document.querySelectorAll('.filter-tab');
      var cards = gridContainer.querySelectorAll('.portfolio-card');
      tabs.forEach(function(tab){
        tab.addEventListener('click', function(){
          tabs.forEach(function(t){ t.classList.remove('active'); });
          tab.classList.add('active');
          var filter = tab.getAttribute('data-filter');
          cards.forEach(function(card){
            var show = (filter === 'All Projects') || (card.getAttribute('data-category') === filter);
            card.style.display = show ? '' : 'none';
          });
        });
      });
    }

    if(featuredContainer){ featuredContainer.innerHTML = featuredCaseHTML(featured); }
    if(spotlightContainer){ spotlightContainer.innerHTML = spotlightHTML(featured); }

    // Newly-injected cards start at opacity:0 (see theme.css reveal rules) —
    // this makes them actually animate into view instead of staying invisible.
    if(window.ZyanixTheme && typeof window.ZyanixTheme.refreshReveal === 'function'){
      window.ZyanixTheme.refreshReveal();
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
