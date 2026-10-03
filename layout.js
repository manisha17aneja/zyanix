/* ============================================================
   layout.js — SINGLE SOURCE for the header and footer used on
   every Zyanix page. Edit the markup in this file once and it
   updates on all 9 pages — no need to copy-paste header/footer
   changes into each HTML file separately.

   HOW EACH PAGE USES IT:
     <div id="site-header"></div>
     <script>ZyanixLayout.renderHeader('services');</script>
     ... page content ...
     <div id="site-footer"></div>
     <script>ZyanixLayout.renderFooter();</script>

   'services' above is the nav key for that page — it decides
   which nav link gets the active/orange underline. Valid keys:
   home, services, technologies, case-studies, blog, about, contact
   ============================================================ */
(function(){

  var NAV_ITEMS = [
    { key: 'home', label: 'Home', href: 'index.html' },
    { key: 'services', label: 'Services', href: 'zyanix-services-page.html', megaMenu: 'services' },
    { key: 'industries', label: 'Industries', href: 'zyanix-industry-detail-page.html', megaMenu: 'industries' },
    { key: 'technologies', label: 'Technologies', href: 'zyanix-technologies-page.html' },
    { key: 'case-studies', label: 'Case Studies', href: 'zyanix-case-studies-page.html' },
    { key: 'blog', label: 'Blog', href: 'zyanix-blog-page.html' },
    { key: 'about', label: 'About', href: 'zyanix-about-page.html' },
    { key: 'contact', label: 'Contact', href: 'zyanix-contact-page.html' }
  ];

  // Services mega-menu content now comes from services.js (window.ZYANIX_SERVICES).
  // Add a service there and it appears here AND gets its own detail page.
  function buildMegaColumns(){
    var services = window.ZYANIX_SERVICES || [];
    var groups = window.ZYANIX_SERVICE_GROUPS || [];
    return groups.map(function(g){
      return {
        title: g,
        links: services.filter(function(sv){ return sv.group === g; }).map(function(sv){
          return { label: sv.name, href: 'zyanix-service-detail-page.html?service=' + sv.slug };
        })
      };
    });
  }

  function megaMenuHTML(){
    var columnsHTML = buildMegaColumns().map(function(col){
      var linksHTML = col.links.map(function(l){
        return '<li><a href="' + l.href + '">' + l.label + '</a></li>';
      }).join('');
      return '<div class="mega-col"><h5>' + col.title + '</h5><ul>' + linksHTML + '</ul></div>';
    }).join('');

    return (
      '<div class="mega-menu">' +
        '<div class="mega-menu-inner">' +
          '<div class="mega-promo">' +
            '<h4>Hire The Best-In-Class Developers!</h4>' +
            '<p>Our team uses the most advanced technical skills to build fast, scalable and user-friendly digital products.</p>' +
            '<a href="zyanix-contact-page.html" class="btn btn-primary" data-open-contact>Contact Us Now!</a>' +
          '</div>' +
          '<div class="mega-links">' + columnsHTML + '</div>' +
        '</div>' +
      '</div>'
    );
  }

  // Industries mega-menu — visually different from the Services one on
  // purpose: no dark promo panel, instead an icon-grid of industry cards.
  // Data comes from window.ZYANIX_INDUSTRIES (industries.js) so adding a
  // new industry only means editing that file.
  function industriesMegaMenuHTML(){
    var industries = window.ZYANIX_INDUSTRIES || [];
    var cardsHTML = industries.map(function(ind){
      return (
        '<a href="' + ind.href + '" class="industry-card">' +
          '<span class="industry-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + ind.icon + '</svg></span>' +
          '<span class="industry-text"><strong>' + ind.name + '</strong><span>' + ind.blurb + '</span></span>' +
        '</a>'
      );
    }).join('');

    return (
      '<div class="mega-menu mega-menu--industries">' +
        '<div class="mega-menu-inner mega-menu-inner--industries">' +
          '<div class="industries-head">' +
            '<h5>Industries We Serve</h5>' +
            '<a href="zyanix-industry-detail-page.html">View all industries →</a>' +
          '</div>' +
          '<div class="industries-grid">' + cardsHTML + '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderHeader(activeKey, ctaHref){
    ctaHref = ctaHref || 'zyanix-contact-page.html';
    var navLinksHTML = NAV_ITEMS.map(function(item){
      var activeClass = item.key === activeKey ? ' class="active"' : '';
      if(item.megaMenu === 'services'){
        return '<li class="has-mega">' +
                 '<a href="' + item.href + '"' + activeClass + '>' + item.label +
                   '<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
                 '</a>' +
                 megaMenuHTML() +
               '</li>';
      }
      if(item.megaMenu === 'industries'){
        return '<li class="has-mega has-mega-industries">' +
                 '<a href="' + item.href + '"' + activeClass + '>' + item.label +
                   '<svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
                 '</a>' +
                 industriesMegaMenuHTML() +
               '</li>';
      }
      return '<li><a href="' + item.href + '"' + activeClass + '>' + item.label + '</a></li>';
    }).join('');
    navLinksHTML += '<li class="nav-cta-mobile"><a href="' + ctaHref + '" class="btn btn-primary">Get Started</a></li>';

    var html =
      '<nav class="nav wrap">' +
        '<a href="index.html" class="logo"><span class="logo-mark">Z</span> Zyanix</a>' +
        '<ul class="nav-links">' + navLinksHTML + '</ul>' +
        '<div class="nav-right">' +
          '<button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">' +
            '<svg class="moon" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>' +
            '<svg class="sun" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>' +
          '</button>' +
          '<a href="' + ctaHref + '" class="btn btn-primary">Get Started ' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
          '</a>' +
          '<button class="menu-toggle" aria-label="Menu">' +
            '<svg class="icon-menu" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>' +
            '<svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
          '</button>' +
        '</div>' +
      '</nav>';

    var container = document.getElementById('site-header');
    if(container){
      var header = document.createElement('header');
      header.innerHTML = html;
      container.replaceWith(header);
      setupMegaMenuToggle(header);
      setupHeaderResponsive(header);
    }
  }

  // Desktop mouse users get each mega-menu on :hover (pure CSS, see theme.css).
  // Touch/tablet users can't hover, so tapping a chevron toggles that menu
  // instead — tapping the nav label text itself still navigates normally.
  function setupMegaMenuToggle(header){
    var items = header.querySelectorAll('li.has-mega');
    if(!items.length) return;
    var CLOSE_DELAY = 220; // ms — forgives a quick slip off the edge while moving the mouse

    items.forEach(function(item){
      var timer = null;
      function closeOthers(){ items.forEach(function(i){ if(i !== item){ i.classList.remove('mega-hover','mega-open'); } }); }

      // Hover with "intent": opens instantly, closes only after a short delay,
      // and re-entering the item OR its menu (a child) cancels the close.
      item.addEventListener('mouseenter', function(){
        if(window.innerWidth <= 1100) return; // mobile uses tap-to-expand only
        clearTimeout(timer);
        closeOthers();
        item.classList.add('mega-hover');
      });
      item.addEventListener('mouseleave', function(){
        clearTimeout(timer);
        timer = setTimeout(function(){ item.classList.remove('mega-hover'); }, CLOSE_DELAY);
      });

      // Touch / keyboard: tapping the chevron toggles the menu
      var chevron = item.querySelector('.chevron');
      if(chevron){
        chevron.addEventListener('click', function(e){
          e.preventDefault();
          e.stopPropagation();
          var wasOpen = item.classList.contains('mega-open');
          items.forEach(function(i){ i.classList.remove('mega-open'); });
          if(!wasOpen){ item.classList.add('mega-open'); }
        });
      }

      // Clicking any link inside the menu closes it right away (no flicker while the page loads)
      item.querySelectorAll('.mega-menu a').forEach(function(a){
        a.addEventListener('click', function(){
          clearTimeout(timer);
          item.classList.remove('mega-hover','mega-open');
        });
      });
    });

    document.addEventListener('click', function(e){
      items.forEach(function(item){
        if(!item.contains(e.target)){ item.classList.remove('mega-open'); }
      });
    });

    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){
        items.forEach(function(item){ item.classList.remove('mega-open','mega-hover'); });
      }
    });
  }

  // Keeps the mobile dropdown positioned right under the header, closes it on
  // resize-to-desktop / outside tap / Escape, and keeps aria-expanded in sync.
  function setupHeaderResponsive(header){
    var root = document.documentElement;
    function setH(){ root.style.setProperty('--header-h', header.offsetHeight + 'px'); }
    setH();
    window.addEventListener('resize', function(){
      setH();
      if(window.innerWidth > 1100) closeMobile();
    });
    window.addEventListener('scroll', setH, { passive: true });
    window.addEventListener('load', setH);

    var btn = header.querySelector('.menu-toggle');
    var links = header.querySelector('.nav-links');
    if(!btn || !links) return;
    function closeMobile(){
      links.classList.remove('mobile-open'); btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      header.querySelectorAll('li.has-mega').forEach(function(i){ i.classList.remove('mega-open'); });
      document.body.classList.remove('zx-nav-open');
    }
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function(){
      setTimeout(function(){
        var open = links.classList.contains('mobile-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.classList.toggle('zx-nav-open', open);
        setH();
      }, 0);
    });
    document.addEventListener('click', function(e){
      if(links.classList.contains('mobile-open') && !header.contains(e.target)) closeMobile();
    });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeMobile(); });
  }

  /* ============================================================
     Floating "Contact Us" tab (right side, every page) + popup form.
     Any element with a data-open-contact attribute also opens it,
     e.g. <a href="..." data-open-contact data-service="Web Development">
     ============================================================ */
  var SERVICE_OPTIONS_FALLBACK = ['Web Development','Mobile App Development','Cloud & DevOps','UI/UX Design','Digital Transformation','Other'];

  function ensureContactScript(cb){
    if(window.ZyanixContact){ cb(); return; }
    var sc = document.createElement('script');
    sc.src = 'contact.js';
    sc.onload = cb;
    sc.onerror = function(){ cb(); };
    document.head.appendChild(sc);
  }

  function renderContactWidget(){
    if(document.getElementById('zx-contact-tab')) return;
    var services = (window.ZYANIX_SERVICES || []).map(function(x){ return x.name; });
    if(!services.length) services = SERVICE_OPTIONS_FALLBACK.slice(0,5);
    services.push('Other');
    var options = '<option value="">Select a service</option>' + services.map(function(n){ return '<option>' + n.replace(/&/g,'&amp;') + '</option>'; }).join('');

    var tab = document.createElement('button');
    tab.id = 'zx-contact-tab';
    tab.type = 'button';
    tab.className = 'zx-contact-tab';
    tab.setAttribute('aria-label', 'Contact us');
    tab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Contact Us</span>';

    var modal = document.createElement('div');
    modal.id = 'zx-contact-modal';
    modal.className = 'zx-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'zx-modal-title');
    modal.innerHTML =
      '<div class="zx-modal-backdrop" data-zx-close></div>' +
      '<div class="zx-modal-card">' +
        '<button type="button" class="zx-modal-close" aria-label="Close" data-zx-close>&times;</button>' +
        '<h3 id="zx-modal-title">Let\'s talk about your project</h3>' +
        '<p class="zx-modal-sub">Fill in the form and our team will reply within one business day.</p>' +
        '<form id="zx-contact-form" novalidate>' +
          '<div class="zx-row">' +
            '<label>Full Name<input type="text" name="name" placeholder="John Doe" required></label>' +
            '<label>Email<input type="email" name="email" placeholder="john@company.com" required></label>' +
          '</div>' +
          '<div class="zx-row">' +
            '<label>Phone<input type="tel" name="phone" placeholder="+91 98765 43210"></label>' +
            '<label>Service Needed<select name="service">' + options + '</select></label>' +
          '</div>' +
          '<label>Tell Us About Your Project<textarea name="message" rows="4" placeholder="A few lines about what you are building, timeline and budget..." required></textarea></label>' +
          '<button type="submit" class="btn btn-primary">Send Message</button>' +
          '<div class="zx-status" aria-live="polite"></div>' +
        '</form>' +
      '</div>';

    document.body.appendChild(tab);
    document.body.appendChild(modal);

    var form = modal.querySelector('form');
    var status = modal.querySelector('.zx-status');
    var lastFocus = null;

    function open(service){
      lastFocus = document.activeElement;
      if(service){
        var sel = form.elements.service, found = false;
        for(var i = 0; i < sel.options.length; i++){
          if(sel.options[i].text === service){ sel.selectedIndex = i; found = true; break; }
        }
        if(!found){ var o = document.createElement('option'); o.text = service; sel.add(o, sel.options[1]); sel.value = service; }
      }
      status.textContent = ''; status.className = 'zx-status';
      modal.classList.add('open');
      document.body.classList.add('zx-modal-open');
      setTimeout(function(){ form.elements.name.focus(); }, 60);
    }
    function close(){
      modal.classList.remove('open');
      document.body.classList.remove('zx-modal-open');
      if(lastFocus && lastFocus.focus){ lastFocus.focus(); }
    }

    tab.addEventListener('click', function(){ open(); });
    modal.addEventListener('click', function(e){ if(e.target.hasAttribute('data-zx-close')) close(); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && modal.classList.contains('open')) close(); });

    // Any element with data-open-contact opens the popup instead of navigating
    document.addEventListener('click', function(e){
      var trigger = e.target.closest ? e.target.closest('[data-open-contact]') : null;
      if(!trigger) return;
      e.preventDefault();
      open(trigger.getAttribute('data-service') || '');
    });

    form.addEventListener('submit', function(e){
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      function show(msg, err){ status.textContent = msg; status.className = 'zx-status ' + (err ? 'err' : 'ok'); }
      if(!form.elements.name.value.trim() || !/^\S+@\S+\.\S+$/.test(form.elements.email.value) || !form.elements.message.value.trim()){
        show('Please enter your name, a valid email and a short message.', true); return;
      }
      var data = {
        name: form.elements.name.value, email: form.elements.email.value,
        phone: form.elements.phone.value, service: form.elements.service.value,
        message: form.elements.message.value, source: 'popup:' + location.pathname.split('/').pop(),
        submittedAt: new Date().toISOString()
      };
      btn.disabled = true; btn.textContent = 'Sending…';
      ensureContactScript(function(){
        var done = function(){ btn.disabled = false; btn.textContent = 'Send Message'; };
        if(!window.ZyanixContact){ done(); show('Could not load the form handler. Please try again.', true); return; }
        if(!window.ZyanixContact.isConfigured()){ done(); show('Form not connected yet — add your Formspree / Google Sheet endpoint in contact.js.', true); return; }
        window.ZyanixContact.send(data).then(function(){
          done(); show("Thanks! Your message has been sent — we'll reply within one business day.", false); form.reset();
          setTimeout(close, 2600);
        }).catch(function(){ done(); show('Something went wrong. Please try again.', true); });
      });
    });
  }

  function renderFooter(){
    var navLinksHTML = NAV_ITEMS.map(function(item){
      return '<li><a href="' + item.href + '">' + item.label + '</a></li>';
    }).join('');

    var html =
      '<div class="wrap">' +
        '<div class="footer-inner">' +
          '<a href="index.html" class="footer-logo"><span class="logo-mark">Z</span> Zyanix</a>' +
          '<ul class="footer-links">' + navLinksHTML + '</ul>' +
          '<div class="footer-social">' +
            '<a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>' +
            '<a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg></a>' +
            '<a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>' +
            '<a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<span>© 2025 Zyanix. All rights reserved.</span>' +
          '<span>Better Technology. A Brighter Future.</span>' +
        '</div>' +
      '</div>';

    var container = document.getElementById('site-footer');
    if(container){
      var footer = document.createElement('footer');
      footer.innerHTML = html;
      container.replaceWith(footer);
    }
    renderContactWidget();
  }

  window.ZyanixLayout = {
    renderHeader: renderHeader,
    renderFooter: renderFooter
  };
})();
