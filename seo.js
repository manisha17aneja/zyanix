/* ============================================================
   seo.js — one place for all SEO settings + helpers.

   >>> BEFORE YOU GO LIVE: change SITE_URL below to your real domain
       (no trailing slash), then ask for the pages to be rebuilt, or
       do a find-and-replace of  https://www.zyanix.com  across all
       files (html, js, sitemap.xml, robots.txt).

   What this file does
   - Dynamic pages (service / industry / project / blog) call
     ZyanixSEO.set({...}) to write the <title>, meta description,
     canonical URL, Open Graph / Twitter tags and JSON-LD structured
     data for whichever item is being shown.
   - Pages stay 100% dynamic: add / edit / remove an item in services.js,
     industries.js, projects.js or posts.js and its page, menu entry and
     SEO tags all update automatically. Nothing needs rebuilding.
   - List pages (services.html, case-studies.html, blog.html) add their
     ItemList structured data from the same data, and contact.html builds
     its FAQ structured data from the FAQ items on the page.
   - Only sitemap.xml is a static file: re-generate it by opening
     tools/sitemap-generator.html in a browser (see that file).
   ============================================================ */
(function(){
  var SITE_URL  = 'https://www.zyanix.com';
  var SITE_NAME = 'Zyanix';
  var ORG_ID    = SITE_URL + '/#organization';
  var DEFAULT_IMAGE = 'images/og-default.jpg';

  /* Static file name for each dynamic item */
  var PATH = {
    service:  function(s){ return 'service.html?service='    + encodeURIComponent(s); },
    industry: function(s){ return 'industries.html?industry=' + encodeURIComponent(s); },
    project:  function(s){ return 'project.html?project='     + encodeURIComponent(s); },
    post:     function(s){ return 'post.html?post='           + encodeURIComponent(s); },
    industriesHub: 'industries.html'
  };

  function abs(u){ return /^https?:\/\//.test(u) ? u : SITE_URL + '/' + String(u).replace(/^\//, ''); }
  function clean(s){ return String(s == null ? '' : s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim(); }
  function trunc(s, n){
    s = clean(s);
    if(s.length <= n) return s;
    var c = s.slice(0, n - 1);
    return c.slice(0, Math.max(c.lastIndexOf(' '), n - 25)).replace(/[,;:\-–—\s]+$/, '') + '…';
  }
  function meta(attr, name, content){
    var el = document.head.querySelector('meta[' + attr + '="' + name + '"]');
    if(!el){ el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
    el.setAttribute('content', content);
  }
  function linkTag(rel, href){
    var el = document.head.querySelector('link[rel="' + rel + '"]');
    if(!el){ el = document.createElement('link'); el.setAttribute('rel', rel); document.head.appendChild(el); }
    el.setAttribute('href', href);
  }
  function jsonld(id, obj){
    var el = document.getElementById('zx-ld-' + id);
    if(!el){ el = document.createElement('script'); el.type = 'application/ld+json'; el.id = 'zx-ld-' + id; document.head.appendChild(el); }
    el.textContent = JSON.stringify(obj);
  }

  /* Shared building blocks */
  function organization(){
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE_NAME,
      url: SITE_URL + '/',
      logo: { '@type': 'ImageObject', url: SITE_URL + '/images/logo.png', width: 512, height: 512 },
      image: SITE_URL + '/' + DEFAULT_IMAGE,
      description: 'Zyanix is an IT services company that designs and builds web apps, mobile apps, cloud platforms and AI-powered software for startups and enterprises.',
      foundingDate: '2018',
      email: 'hello@zyanix.com',
      telephone: '+91 98765 43210',
      address: [
        { '@type': 'PostalAddress', streetAddress: 'DLF Cyber City, Sector 24', addressLocality: 'Gurugram', addressCountry: 'IN' },
        { '@type': 'PostalAddress', streetAddress: 'Business Bay, Sheikh Zayed Road', addressLocality: 'Dubai', addressCountry: 'AE' },
        { '@type': 'PostalAddress', streetAddress: 'Shoreditch High Street', addressLocality: 'London', addressCountry: 'GB' }
      ],
      contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', email: 'hello@zyanix.com', telephone: '+91 98765 43210', availableLanguage: ['English'] }]
      /* add  sameAs: ['https://www.linkedin.com/company/…', 'https://twitter.com/…']  once your social URLs are final */
    };
  }
  function website(){
    return { '@context': 'https://schema.org', '@type': 'WebSite', '@id': SITE_URL + '/#website', url: SITE_URL + '/', name: SITE_NAME, publisher: { '@id': ORG_ID }, inLanguage: 'en' };
  }
  function breadcrumbs(items){
    return {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: items.map(function(it, i){
        return { '@type': 'ListItem', position: i + 1, name: it[0], item: abs(it[1]) };
      })
    };
  }

  /* Main entry point.
     opts: { title, description, path, image, type, robots, ld:[objects] } */
  function set(opts){
    var url = abs(opts.path || '');
    var title = clean(opts.title);
    var desc = trunc(opts.description || '', 158);
    var image = abs(opts.image || DEFAULT_IMAGE);
    document.title = title;
    meta('name', 'description', desc);
    meta('name', 'robots', opts.robots || 'index,follow,max-image-preview:large,max-snippet:-1');
    linkTag('canonical', url);
    meta('property', 'og:site_name', SITE_NAME);
    meta('property', 'og:type', opts.type || 'website');
    meta('property', 'og:title', title);
    meta('property', 'og:description', desc);
    meta('property', 'og:url', url);
    meta('property', 'og:image', image);
    meta('property', 'og:image:alt', title);
    meta('property', 'og:locale', 'en_US');
    meta('name', 'twitter:card', 'summary_large_image');
    meta('name', 'twitter:title', title);
    meta('name', 'twitter:description', desc);
    meta('name', 'twitter:image', image);
    (opts.ld || []).forEach(function(o, i){ jsonld(String(i), o); });
  }
  function noindex(title){
    document.title = title;
    meta('name', 'robots', 'noindex,follow');
  }

  /* ---------- auto structured data for list pages & FAQ ----------
     <html data-seo-list="services|projects|posts">  -> ItemList JSON-LD
     <html data-seo-faq>                             -> FAQPage JSON-LD */
  function itemList(id, name, items){
    jsonld(id, {
      '@context': 'https://schema.org', '@type': 'ItemList', name: name,
      itemListElement: items.map(function(it, i){ return { '@type': 'ListItem', position: i + 1, name: it[0], url: abs(it[1]) }; })
    });
  }
  function autoStructuredData(){
    var root = document.documentElement;
    var list = root.getAttribute('data-seo-list');
    if(list === 'services' && window.ZYANIX_SERVICES){
      itemList('list', 'Zyanix IT services', window.ZYANIX_SERVICES.map(function(x){ return [x.name, PATH.service(x.slug)]; }));
    } else if(list === 'projects' && window.ZYANIX_PROJECTS){
      itemList('list', 'Zyanix case studies', window.ZYANIX_PROJECTS.map(function(x){ return [x.name, PATH.project(x.slug)]; }));
    } else if(list === 'posts' && window.ZYANIX_POSTS){
      itemList('list', 'Zyanix blog articles', window.ZYANIX_POSTS.map(function(x){ return [x.title, PATH.post(x.slug)]; }));
    }
    if(root.hasAttribute('data-seo-faq')){
      var qa = [];
      document.querySelectorAll('.faq-item').forEach(function(el){
        var q = el.querySelector('.faq-q span'), a = el.querySelector('.faq-a');
        if(q && a) qa.push({ '@type': 'Question', name: clean(q.textContent), acceptedAnswer: { '@type': 'Answer', text: clean(a.textContent) } });
      });
      if(qa.length) jsonld('faq', { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: qa });
    }
  }
  if(document.readyState === 'loading'){ document.addEventListener('DOMContentLoaded', autoStructuredData); } else { autoStructuredData(); }

  window.ZyanixSEO = {
    SITE_URL: SITE_URL, SITE_NAME: SITE_NAME, ORG_ID: ORG_ID, DEFAULT_IMAGE: DEFAULT_IMAGE, PATH: PATH,
    abs: abs, clean: clean, trunc: trunc,
    set: set, noindex: noindex,
    organization: organization, website: website, breadcrumbs: breadcrumbs
  };
})();
