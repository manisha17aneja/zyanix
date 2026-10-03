/* ============================================================
   blog-detail.js — powers the BLOG DETAIL page
   (zyanix-blog-detail-page.html).

   Which article shows is decided by the URL, e.g.:
     zyanix-blog-detail-page.html?post=onboarding-process

   Every "Read Article" / blog card link across the site already
   links with the right ?post= slug — you only need to add new
   posts to posts.js and they'll be reachable automatically.

   This reads posts as a plain <script> variable (window.ZYANIX_POSTS
   from posts.js), not fetch — so it works even when you open the
   HTML file directly by double-clicking it, no local server needed.
   ============================================================ */
(function(){
  function formatDate(iso){
    var d = new Date(iso + 'T00:00:00');
    return d.toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });
  }

  function getSlugFromUrl(){
    var params = new URLSearchParams(window.location.search);
    return params.get('post');
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

  function renderHeader(post){
    var container = document.getElementById('articleHeaderContainer');
    if(!container) return;
    container.innerHTML =
      '<div class="crumb-row"><a href="index.html">Home</a><span>/</span><a href="zyanix-blog-page.html">Blog</a><span>/</span><span>' + post.category + '</span></div>' +
      '<div class="tag-row">' + post.tags.map(function(t){ return '<span class="tag">' + t + '</span>'; }).join('') + '</div>' +
      '<h1>' + post.title + '</h1>' +
      '<div class="article-meta">' +
        '<img src="' + post.author.avatar + '" alt="' + post.author.name + '">' +
        '<div style="text-align:left;">' +
          '<div class="am-name">' + post.author.name + '</div>' +
          '<div class="am-sub">' + post.author.role + ' · ' + formatDate(post.date) + ' · ' + post.readTime + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="article-cover"><img src="' + post.cover + '" alt="' + post.title + '"></div>';
    document.title = post.title + ' — Zyanix Blog';
  }

  function renderBody(post){
    var container = document.getElementById('articleBodyContainer');
    if(!container) return;
    var toc = post.content.filter(function(b){ return b.type === 'heading'; });
    var tocHTML = '<aside class="article-toc"><h5>In This Article</h5><ul>' +
      toc.map(function(h){ return '<li><a href="#' + h.id + '">' + h.text + '</a></li>'; }).join('') +
      '</ul></aside>';
    var contentHTML = '<article class="article-content">' +
      post.content.map(renderContentBlock).join('') +
      '<div class="share-row">' +
        '<span>Share this article:</span>' +
        '<a href="#" aria-label="Share on LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>' +
        '<a href="#" aria-label="Share on Twitter"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>' +
        '<a href="#" aria-label="Copy link" onclick="navigator.clipboard && navigator.clipboard.writeText(window.location.href); this.querySelector(\'svg\').style.stroke=\'var(--orange)\'; return false;"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></a>' +
      '</div>' +
    '</article>';
    container.innerHTML = tocHTML + contentHTML;
  }

  function renderBio(post){
    var container = document.getElementById('authorBioContainer');
    if(!container) return;
    container.innerHTML =
      '<div class="bio-card">' +
        '<img src="' + post.author.avatar + '" alt="' + post.author.name + '">' +
        '<div>' +
          '<h4>' + post.author.name + '</h4>' +
          '<p>' + post.author.bio + '</p>' +
          '<div class="bio-social">' +
            '<a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>' +
            '<a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function relatedCardHTML(post){
    return (
      '<a href="zyanix-blog-detail-page.html?post=' + encodeURIComponent(post.slug) + '" class="blog-card">' +
        '<div class="blog-thumb"><img src="' + post.thumb + '" alt="' + post.title + '" loading="lazy"></div>' +
        '<div class="blog-body">' +
          '<div class="tag-row"><span class="tag">' + post.category + '</span></div>' +
          '<h4>' + post.title + '</h4>' +
        '</div>' +
      '</a>'
    );
  }

  function renderRelated(current, allPosts){
    var container = document.getElementById('relatedPostsContainer');
    if(!container) return;
    var sameCategory = allPosts.filter(function(p){ return p.slug !== current.slug && p.category === current.category; });
    var others = allPosts.filter(function(p){ return p.slug !== current.slug && p.category !== current.category; });
    var related = sameCategory.concat(others).slice(0, 3);
    container.innerHTML = related.map(relatedCardHTML).join('');
  }

  function renderNotFound(){
    var header = document.getElementById('articleHeaderContainer');
    if(header){
      header.innerHTML =
        '<div style="text-align:center; padding:40px 0;">' +
          '<h1 style="font-size:1.8rem; margin-bottom:14px;">Article not found</h1>' +
          '<p style="color:var(--text-secondary); margin-bottom:24px;">This post may have been moved or the link is missing its <code>?post=</code> slug.</p>' +
          '<a href="zyanix-blog-page.html" class="btn btn-primary">Back to Blog</a>' +
        '</div>';
    }
  }

  function renderLoadError(){
    var header = document.getElementById('articleHeaderContainer');
    if(header){
      header.innerHTML =
        '<div style="text-align:center; padding:40px 0; color:var(--text-secondary);">' +
          '<p style="font-weight:700; margin-bottom:8px;">Couldn\'t load this article.</p>' +
          '<p style="font-size:.88rem;">Make sure <code>posts.js</code> is in the same folder as this page and is linked with a <code>&lt;script src="posts.js"&gt;</code> tag before <code>blog-detail.js</code>.</p>' +
        '</div>';
    }
  }

  function init(){
    var header = document.getElementById('articleHeaderContainer');
    if(!header) return; // not the detail page

    var posts = window.ZYANIX_POSTS;
    if(!posts || !posts.length){ renderLoadError(); return; }

    var slug = getSlugFromUrl();
    var post = slug ? posts.find(function(p){ return p.slug === slug; }) : posts.find(function(p){ return p.featured; });
    if(!post){ renderNotFound(); return; }

    renderHeader(post);
    renderBody(post);
    renderBio(post);
    renderRelated(post, posts);

    if(window.ZyanixTheme && typeof window.ZyanixTheme.refreshReveal === 'function'){
      window.ZyanixTheme.refreshReveal();
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
