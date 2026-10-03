/* ============================================================
   contact.js — handles the Contact page form submission.

   ⚠️ REQUIRED SETUP — pick ONE method below and fill in your
   own endpoint. Without this, the form only shows a demo alert
   and nothing is actually saved or emailed anywhere.

   METHOD 1 — Email via Formspree (easiest, ~2 minutes):
     1. Go to https://formspree.io and sign up free.
     2. Create a new form, copy the endpoint it gives you
        (looks like https://formspree.io/f/abcdwxyz).
     3. Paste it below as CONFIG.formspreeEndpoint.
     4. Set CONFIG.method = 'formspree'.
     Every submission lands in your inbox automatically.

   METHOD 2 — Save to a Google Sheet (via Apps Script):
     1. Create a new Google Sheet.
     2. Extensions → Apps Script, paste the code from
        google-apps-script.txt (included alongside this file).
     3. Deploy → New deployment → type "Web app" →
        Execute as "Me", Who has access "Anyone".
     4. Copy the deployment URL it gives you.
     5. Paste it below as CONFIG.googleScriptUrl.
     6. Set CONFIG.method = 'googleSheet'.
     Every submission becomes a new row in your Sheet.

   You can also wire up both and switch anytime by changing
   CONFIG.method — no other code needs to change.
   ============================================================ */
(function(){
  var CONFIG = {
    method: 'formspree', // 'formspree' or 'googleSheet'
    formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',   // <-- replace with your real Formspree endpoint
    googleScriptUrl: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec' // <-- replace with your deployed Apps Script URL
  };

  function showStatus(form, message, isError){
    var status = form.querySelector('.form-status');
    if(!status){
      status = document.createElement('div');
      status.className = 'form-status';
      status.style.marginTop = '16px';
      status.style.padding = '12px 16px';
      status.style.borderRadius = '8px';
      status.style.fontSize = '.88rem';
      status.style.fontWeight = '600';
      form.appendChild(status);
    }
    status.textContent = message;
    status.style.background = isError ? 'rgba(220,53,69,0.12)' : 'rgba(34,197,94,0.12)';
    status.style.color = isError ? '#dc3545' : '#16a34a';
  }

  function setLoading(btn, loading){
    if(loading){
      btn.dataset.originalText = btn.innerHTML;
      btn.innerHTML = 'Sending…';
      btn.disabled = true;
      btn.style.opacity = '.7';
    } else {
      btn.innerHTML = btn.dataset.originalText || 'Send Message';
      btn.disabled = false;
      btn.style.opacity = '1';
    }
  }

  function isConfigured(){
    if(CONFIG.method === 'formspree'){
      return CONFIG.formspreeEndpoint && CONFIG.formspreeEndpoint.indexOf('YOUR_FORM_ID') === -1;
    }
    if(CONFIG.method === 'googleSheet'){
      return CONFIG.googleScriptUrl && CONFIG.googleScriptUrl.indexOf('YOUR_SCRIPT_ID') === -1;
    }
    return false;
  }

  // Shared sender — used by this page's form AND the site-wide popup (layout.js)
  function send(data){
    if(CONFIG.method === 'formspree'){
      return fetch(CONFIG.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      }).then(function(r){ if(!r.ok) throw new Error('HTTP ' + r.status); return r; });
    }
    return fetch(CONFIG.googleScriptUrl, {
      method: 'POST', mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data)
    });
  }
  window.ZyanixContact = { send: send, isConfigured: isConfigured };

  function handleSubmit(e){
    e.preventDefault();
    var form = e.target;
    var btn = form.querySelector('button[type="submit"]');

    if(!isConfigured()){
      showStatus(form, 'Form not connected yet — open contact.js and add your Formspree or Google Sheet endpoint (see the setup notes at the top of that file).', true);
      return;
    }

    var data = {
      name: form.querySelector('#fname') ? form.querySelector('#fname').value : '',
      email: form.querySelector('#femail') ? form.querySelector('#femail').value : '',
      phone: form.querySelector('#fphone') ? form.querySelector('#fphone').value : '',
      service: form.querySelector('#fservice') ? form.querySelector('#fservice').value : '',
      message: form.querySelector('#fmessage') ? form.querySelector('#fmessage').value : '',
      submittedAt: new Date().toISOString()
    };

    setLoading(btn, true);

    var request;
    if(CONFIG.method === 'formspree'){
      request = fetch(CONFIG.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      });
    } else {
      // Google Apps Script web apps expect a simple POST; no-cors keeps this
      // working even though the response can't be read back in JS.
      request = fetch(CONFIG.googleScriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(data)
      });
    }

    request
      .then(function(){
        setLoading(btn, false);
        showStatus(form, "Thanks! Your message has been sent — we'll get back to you within one business day.", false);
        form.reset();
      })
      .catch(function(err){
        setLoading(btn, false);
        showStatus(form, "Something went wrong sending your message. Please try again or email us directly.", true);
        console.error('Contact form submit failed:', err);
      });
  }

  document.addEventListener('DOMContentLoaded', function(){
    var form = document.querySelector('#contact-form form');
    if(form){ form.addEventListener('submit', handleSubmit); }
  });
})();
