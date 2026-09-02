// Scroll-reveal animation for cards, sections, etc.
document.addEventListener('DOMContentLoaded', function () {
  var revealTargets = document.querySelectorAll('.reveal');
  if (revealTargets.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    // No IntersectionObserver support (or nothing to reveal) — just show everything
    revealTargets.forEach(function (el) { el.classList.add('reveal--visible'); });
  }
});

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }

  // Contact form submission (Web3Forms)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      var submitBtn = form.querySelector('button[type="submit"]');
      var accessKey = form.querySelector('input[name="access_key"]').value;

      if (!accessKey || accessKey.indexOf('YOUR_WEB3FORMS') !== -1) {
        status.textContent = 'Form is not connected yet — add your Web3Forms access key in contact.html (see README).';
        status.className = 'form-status error';
        return;
      }

      var data = new FormData(form);
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data
      })
        .then(function (res) { return res.json(); })
        .then(function (json) {
          if (json.success) {
            status.textContent = 'Thanks — your message has been sent. We’ll be in touch soon.';
            status.className = 'form-status success';
            form.reset();
          } else {
            status.textContent = 'Something went wrong. Please try again or email us directly.';
            status.className = 'form-status error';
          }
        })
        .catch(function () {
          status.textContent = 'Something went wrong. Please try again or email us directly.';
          status.className = 'form-status error';
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        });
    });
  }
});
