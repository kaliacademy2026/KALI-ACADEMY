// ============================================================
// SITE INIT - تحسينات الموقع الأساسية
// - تحسين الشعار
// - تنقل سريع بين الصفحات
// - إخفاء رابط التسجيل من القائمة
// - تثبيت اللغة العربية وإزالة أي تبديل لغة
// ============================================================

(function () {
  'use strict';

  // تثبيت اللغة العربية فقط
  function applyArabicOnly() {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
    if (document.body) {
      document.body.setAttribute('dir', 'rtl');
      document.body.classList.remove('lang-en');
    }
    try {
      localStorage.setItem('kali_lang', 'ar');
    } catch (_) { /* ignore */ }
  }

  // توافق مع أي سكربتات تعتمد على هذه الدوال
  window.kaliGetCurrentLang = function () {
    return 'ar';
  };

  window.kaliSetLanguage = function () {
    applyArabicOnly();
  };

  // تحسينات CSS عامة
  const css = document.createElement('style');
  css.textContent = `
    .site-header .logo,
    header .logo { gap: 12px !important; }

    .site-header .logo .logo-icon,
    header .logo .logo-icon,
    header .logo span.logo-icon {
      width: 56px !important;
      height: 56px !important;
      min-width: 56px !important;
      background: transparent !important;
      border: none !important;
      box-shadow: none !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 0 !important;
    }

    .site-header .logo .logo-icon img,
    header .logo .logo-icon img,
    header .logo img {
      width: 54px !important;
      height: 54px !important;
      object-fit: contain !important;
      border-radius: 0 !important;
      filter: drop-shadow(0 0 10px rgba(0,255,65,0.5)) drop-shadow(0 0 20px rgba(0,255,65,0.25)) !important;
      transition: filter 0.3s ease !important;
    }

    .site-header .logo:hover .logo-icon img,
    header .logo:hover img {
      filter: drop-shadow(0 0 14px rgba(0,255,65,0.8)) drop-shadow(0 0 28px rgba(0,255,65,0.4)) !important;
    }

    .logo-text {
      font-size: 1.15rem !important;
      letter-spacing: 2px !important;
      font-weight: 900 !important;
    }

    .logo-sub {
      font-size: 0.65rem !important;
      letter-spacing: 1.5px !important;
      opacity: 0.75 !important;
    }

    body {
      transition: opacity 0.12s ease !important;
      will-change: opacity;
    }

    body.page-leaving { opacity: 0 !important; }

    .nav-link.active,
    .nav-link:hover {
      transition: all 0.2s ease !important;
    }

    .site-header { min-height: 68px !important; }

    @media (max-width: 768px) {
      .site-header .logo .logo-icon img,
      header .logo .logo-icon img,
      header .logo img {
        width: 46px !important;
        height: 46px !important;
      }
      .site-header .logo .logo-icon,
      header .logo .logo-icon {
        width: 46px !important;
        height: 46px !important;
        min-width: 46px !important;
      }
      .logo-text { font-size: 1rem !important; }
    }

    #page-loader {
      position: fixed;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, #00ff41, #0cf, #00ff41);
      background-size: 200% 100%;
      animation: loaderBar 0.45s linear forwards;
      z-index: 999999;
      transform-origin: left;
      pointer-events: none;
    }

    @keyframes loaderBar {
      0%   { transform: scaleX(0); opacity: 1; }
      80%  { transform: scaleX(0.92); opacity: 1; }
      100% { transform: scaleX(1); opacity: 0; }
    }
  `;
  document.head.appendChild(css);

  // إخفاء روابط التسجيل
  function removeRegisterLinks() {
    const selectors = [
      'a[href="register.html"]',
      'a[href*="register"]',
      '#navUserLink'
    ];

    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        const li = el.closest('li');
        if (li) li.style.display = 'none';
        else el.style.display = 'none';
      });
    });
  }

  // التنقل السريع
  function fastNav() {
    const preloaded = new Set();
    const sameOrigin = window.location.origin;

    function shouldHandleLink(a) {
      if (!a) return false;
      const href = a.getAttribute('href');
      if (!href) return false;
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
      if (a.target === '_blank' || a.hasAttribute('download')) return false;
      if (a.getAttribute('rel') === 'external') return false;
      if (a.dataset.noFastNav === 'true') return false;
      return /\.html($|[?#])/.test(href) || href === '/';
    }

    function toAbsolute(href) {
      try {
        return new URL(href, window.location.href);
      } catch (_) {
        return null;
      }
    }

    function preloadPage(href) {
      const abs = toAbsolute(href);
      if (!abs || abs.origin !== sameOrigin) return;

      const cacheKey = abs.href;
      if (preloaded.has(cacheKey)) return;
      preloaded.add(cacheKey);

      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = abs.href;
      link.as = 'document';
      document.head.appendChild(link);

      // fetch منخفض الأولوية لرفع فرصة وجود الصفحة في الكاش
      try {
        fetch(abs.href, { mode: 'same-origin', credentials: 'same-origin', cache: 'force-cache' }).catch(() => {});
      } catch (_) { /* ignore */ }
    }

    function navigateFast(href) {
      const abs = toAbsolute(href);
      if (!abs) return;

      if (abs.href === window.location.href) return;

      if (!document.getElementById('page-loader')) {
        const loader = document.createElement('div');
        loader.id = 'page-loader';
        document.body.appendChild(loader);
      }

      document.body.classList.add('page-leaving');

      requestAnimationFrame(() => {
        window.location.assign(abs.href);
      });
    }

    // prefetch روابط التنقل الأساسية مباشرة بعد الجاهزية
    document.querySelectorAll('a[href]').forEach((a) => {
      if (shouldHandleLink(a)) preloadPage(a.getAttribute('href'));
    });

    document.addEventListener('pointerenter', function (e) {
      const a = e.target.closest('a[href]');
      if (!shouldHandleLink(a)) return;
      preloadPage(a.getAttribute('href'));
    }, true);

    document.addEventListener('touchstart', function (e) {
      const a = e.target.closest('a[href]');
      if (!shouldHandleLink(a)) return;
      preloadPage(a.getAttribute('href'));
    }, { passive: true, capture: true });

    document.addEventListener('click', function (e) {
      const a = e.target.closest('a[href]');
      if (!shouldHandleLink(a)) return;

      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }

      e.preventDefault();
      navigateFast(a.getAttribute('href'));
    }, true);
  }

  function init() {
    applyArabicOnly();
    removeRegisterLinks();
    fastNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
