/* ============================================================
   blog.js — powers the BLOG LISTING page (zyanix-blog-page.html).
   All post data comes from posts.js (window.ZYANIX_POSTS) — add,
   edit, or remove posts there and this page updates
   automatically, no HTML editing needed.

   This reads posts as a plain <script> variable (not fetch), so
   it works even when you open the HTML file directly by
   double-clicking it — no local server required.
   ============================================================ */
(function(){
  function formatDate(iso){
    var d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
  }

  function blogCardHTML(post){
    return (
      '<a href="zyanix-blog-detail-page.html?post=' + encodeURIComponent(post.slug) + '" class="blog-card" data-category="' + post.category + '">' +
        '<div class="blog-thumb"><img src="' + post.thumb + '" alt="' + post.title + '" loading="lazy"></div>' +
        '<div class="blog-body">' +
          '<div class="tag-row"><span class="tag">' + post.category + '</span></div>' +
          '<h4>' + post.title + '</h4>' +
          '<p>' + post.excerpt + '</p>' +
          '<div class="blog-footer-row">' +
            '<div class="m-info"><img src="' + post.author.avatar + '" alt="' + post.author.name + '"><span class="m-name">' + post.author.name + '</span></div>' +
            '<span class="read-time">' + post.readTime + '</span>' +
          '</div>' +
        '</div>' +
      '</a>'
    );
  }

  function featuredHTML(post){
    return (
      '<a href="zyanix-blog-detail-page.html?post=' + encodeURIComponent(post.slug) + '" class="featured-card">' +
        '<div class="featured-thumb"><img src="' + post.cover + '" alt="' + post.title + '"></div>' +
        '<div class="featured-body">' +
          '<div class="tag-row">' + post.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join('') + '</div>' +
          '<h3>' + post.title + '</h3>' +
          '<p>' + post.excerpt + '</p>' +
          '<div class="post-meta">' +
            '<img src="' + post.author.avatar + '" alt="' + post.author.name + '">' +
            '<div><div class="m-name">' + post.author.name + '</div><div class="m-sub">' + formatDate(post.date) + ' · ' + post.readTime + '</div></div>' +
          '</div>' +
          '<span class="btn btn-primary">Read Article ' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
          '</span>' +
        '</div>' +
      '</a>'
    );
  }

  function renderError(container){
    container.innerHTML =
      '<div style="text-align:center; padding:30px; color:var(--text-secondary); grid-column:1/-1;">' +
        '<p style="font-weight:700; margin-bottom:8px;">Couldn\'t load blog posts.</p>' +
        '<p style="font-size:.88rem;">Make sure <code>posts.js</code> is in the same folder as this page and is linked with a <code>&lt;script src="posts.js"&gt;</code> tag before <code>blog.js</code>.</p>' +
      '</div>';
  }

  function init(){
    var featuredContainer = document.getElementById('featuredPostContainer');
    var gridContainer = document.getElementById('blogGridContainer');
    if(!featuredContainer && !gridContainer) return;

    var posts = window.ZYANIX_POSTS;
    if(!posts || !posts.length){
      if(featuredContainer) renderError(featuredContainer);
      if(gridContainer) renderError(gridContainer);
      return;
    }

    var featured = posts.find(function(p){ return p.featured; }) || posts[0];
    var rest = posts.filter(function(p){ return p.slug !== featured.slug; });

    if(featuredContainer){ featuredContainer.innerHTML = featuredHTML(featured); }
    if(gridContainer){
      gridContainer.innerHTML = rest.map(blogCardHTML).join('');

      // Wire up category filters against the freshly rendered cards
      var tabs = document.querySelectorAll('.filter-tab');
      var cards = gridContainer.querySelectorAll('.blog-card');
      tabs.forEach(function(tab){
        tab.addEventListener('click', function(){
          tabs.forEach(function(t){ t.classList.remove('active'); });
          tab.classList.add('active');
          var filter = tab.getAttribute('data-filter');
          cards.forEach(function(card){
            var show = (filter === 'All Posts') || (card.getAttribute('data-category') === filter);
            card.style.display = show ? '' : 'none';
          });
        });
      });
    }

    if(window.ZyanixTheme && typeof window.ZyanixTheme.refreshReveal === 'function'){
      window.ZyanixTheme.refreshReveal();
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
