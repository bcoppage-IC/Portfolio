(function () {
  var d = document, rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hdr = d.querySelector('header.site');
  d.documentElement.classList.add('nav-js');

  // Phone menu
  var btn = d.querySelector('.menu-btn'), list = d.getElementById('nav-links');
  if (btn && list) {
    var setOpen = function (open) {
      btn.setAttribute('aria-expanded', open);
      list.classList.toggle('open', open);
    };
    btn.addEventListener('click', function () { setOpen(btn.getAttribute('aria-expanded') !== 'true'); });
    list.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  }

  // Border under the top bar once the page scrolls
  if (hdr) {
    var onScroll = function () { hdr.classList.toggle('scrolled', window.pageYOffset > 0); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Land on #card links below the fixed bar, after images load
  window.addEventListener('load', function () {
    var id = location.hash.slice(1) || new URLSearchParams(location.search).get('card');
    var t = id && d.getElementById(id);
    if (t) window.scrollTo(0, t.getBoundingClientRect().top + window.pageYOffset - (hdr ? hdr.offsetHeight : 0) - 16);
  });

  function count(el) {
    var t = +el.dataset.to, s = null;
    (function step(ts) {
      s = s || ts;
      var p = Math.min((ts - s) / 900, 1);
      el.textContent = (el.dataset.pre || '') + Math.round(t * p).toLocaleString('en-US') + (el.dataset.suf || '');
      if (p < 1) requestAnimationFrame(step);
    })(performance.now());
  }

  // Reveal on scroll
  if (!('IntersectionObserver' in window) || rm) return;
  d.documentElement.classList.add('js');
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      e.target.querySelectorAll('[data-to]').forEach(count);
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  d.querySelectorAll('.reveal').forEach(function (s) { io.observe(s); });
})();
