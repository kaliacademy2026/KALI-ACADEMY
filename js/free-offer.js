// ============================================================
// FREE NOTICE BAR - شريط هادئ أسفل شريط التنقل
// ============================================================

(function () {
  'use strict';

  const STORAGE_KEY = 'kali_free_notice_hidden_v1';
  if (localStorage.getItem(STORAGE_KEY) === '1') return;

  function closeBanner() {
    const bar = document.getElementById('kali-free-notice');
    if (!bar) return;
    bar.classList.add('is-hidden');
    setTimeout(() => bar.remove(), 220);
    localStorage.setItem(STORAGE_KEY, '1');
  }

  function createBanner() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const bar = document.createElement('div');
    bar.id = 'kali-free-notice';
    bar.className = 'site-free-banner';
    bar.setAttribute('role', 'status');
    bar.innerHTML = `
      <div class="site-free-banner-inner">
        <span class="site-free-pill"><span class="dot"></span>مجاني</span>
        <p class="site-free-text">جميع محتوى المنصة متاح حالياً <strong>مجاناً بالكامل</strong> للتعلم والتطبيق.</p>
        <a class="site-free-cta" href="tutorials.html">ابدأ التعلم</a>
        <button type="button" class="site-free-close" aria-label="إغلاق التنبيه">✕</button>
      </div>
    `;

    header.insertAdjacentElement('afterend', bar);
    const closeBtn = bar.querySelector('.site-free-close');
    if (closeBtn) closeBtn.addEventListener('click', closeBanner);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createBanner, { once: true });
  } else {
    createBanner();
  }
})();
