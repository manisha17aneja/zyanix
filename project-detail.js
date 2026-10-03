/* ============================================================
   project-detail.js — powers the Project Detail page
   (zyanix-project-detail-page.html).

   Which case study shows is decided by the URL, e.g.:
     zyanix-project-detail-page.html?project=auto-marketplace-platform

   Every "Read Full Case Study" / portfolio card link across the
   site already links with the right ?project= slug — add new
   projects to projects.js and they become reachable automatically.

   Reads projects as a plain <script> variable (window.ZYANIX_PROJECTS
   from projects.js), not fetch — works even opened directly by
   double-clicking the HTML file, no local server needed.
   ============================================================ */
(function(){
  function getSlugFromUrl(){
    var params = new URLSearchParams(window.location.search);
    return params.get('project');
  }

  function renderContentBlock(block){
    switch(block.type){
      case 'heading':
        return '<h2 id="' + (block.id || '') + '">' + block.text + '</h2>';
      case 'paragraph':
        return '<p>' + block.text + '</p>';
      case 'list':
        return '<ul>' + block.items.map(function(i){ return '<li>' + i + '</li>'; }).join('') + '</ul>';
      case 'quote':
        return '<div class="pull-quote">' + block.text + '</div>';
      case 'image':
        return '<img src="' + block.src + '" alt="' + (block.alt || '') + '" loading="lazy">';
      default:
        return '';
    }
  }

  function renderHeader(project){
    var container = document.getElementById('projectHeaderContainer');
    if(!container) return;
    container.innerHTML =
      '<div class="crumb-row"><a href="index.html">Home</a><span>/</span><a href="zyanix-case-studies-page.html">Case Studies</a><span>/</span><span>' + project.category + '</span></div>' +
      '<div class="tag-row"><span class="tag">Featured Case Study</span>' + project.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join('') + '</div>' +
      '<h1>How We Helped ' + project.client + ' Launch ' + project.name + '</h1>' +
      '<div class="client-name">Client: ' + project.client + ' · ' + project.category + '</div>' +
      '<div class="article-cover"><img src="' + project.cover + '" alt="' + project.name + '"></div>';
    document.title = project.name + ' Case Study — Zyanix';
  }

  function renderResults(project){
    var container = document.getElementById('resultsContainer');
    if(!container) return;
    container.innerHTML = project.results.map(function(r){
      return '<div class="result-item"><div class="num">' + r.value + '</div><div class="lbl">' + r.label + '</div></div>';
    }).join('');
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
      '<a href="zyanix-project-detail-page.html?project=' + encodeURIComponent(project.slug) + '" class="blog-card">' +
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
    var header = document.getElementById('projectHeaderContainer');
    if(header){
      header.innerHTML =
        '<div style="text-align:center; padding:40px 0;">' +
          '<h1 style="font-size:1.8rem; margin-bottom:14px;">Case study not found</h1>' +
          '<p style="color:var(--text-secondary); margin-bottom:24px;">This project may have been moved or the link is missing its <code>?project=</code> slug.</p>' +
          '<a href="zyanix-case-studies-page.html" class="btn btn-primary">Back to Case Studies</a>' +
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

  function init(){
    var header = document.getElementById('projectHeaderContainer');
    if(!header) return; // not the detail page

    var projects = window.ZYANIX_PROJECTS;
    if(!projects || !projects.length){ renderLoadError(); return; }

    var slug = getSlugFromUrl();
    var project = slug ? projects.find(function(p){ return p.slug === slug; }) : projects.find(function(p){ return p.featured; });
    if(!project){ renderNotFound(); return; }

    renderHeader(project);
    renderResults(project);
    renderBody(project);
    renderSpotlight(project);
    renderRelated(project, projects);

    if(window.ZyanixTheme && typeof window.ZyanixTheme.refreshReveal === 'function'){
      window.ZyanixTheme.refreshReveal();
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
