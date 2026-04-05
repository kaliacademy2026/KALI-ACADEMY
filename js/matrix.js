// ===== MATRIX RAIN EFFECT (PERFORMANCE OPTIMIZED) =====
(function () {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;

  const lowEndDevice =
    (navigator.deviceMemory && navigator.deviceMemory <= 2) ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
    (navigator.connection && navigator.connection.saveData);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const smallScreen = window.innerWidth < 992;

  // إيقاف التأثير على الأجهزة الضعيفة والشاشات الصغيرة لتسريع التصفح
  if (lowEndDevice || reduceMotion || smallScreen) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>/\\';
  let width = 0;
  let height = 0;
  let fontSize = 16;
  let columns = 0;
  let drops = [];

  function setupCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    fontSize = width > 1600 ? 18 : 16;
    columns = Math.floor(width / fontSize);
    drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -40));
  }

  let lastFrame = 0;
  const fpsInterval = 1000 / 18; // 18 FPS بدل interval ثابت
  let animationId = null;

  function draw(timestamp) {
    if (document.hidden) {
      animationId = requestAnimationFrame(draw);
      return;
    }

    if (timestamp - lastFrame < fpsInterval) {
      animationId = requestAnimationFrame(draw);
      return;
    }
    lastFrame = timestamp;

    ctx.fillStyle = 'rgba(2, 11, 20, 0.1)';
    ctx.fillRect(0, 0, width, height);

    ctx.font = `${fontSize}px "Share Tech Mono", monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillStyle = i % 8 === 0 ? '#00e6ff' : '#00ff41';
      ctx.fillText(char, x, y);

      if (y > height && Math.random() > 0.975) {
        drops[i] = 0;
      } else {
        drops[i] += 1;
      }
    }

    animationId = requestAnimationFrame(draw);
  }

  setupCanvas();
  animationId = requestAnimationFrame(draw);

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setupCanvas, 180);
  }, { passive: true });

  window.addEventListener('pagehide', () => {
    if (animationId) cancelAnimationFrame(animationId);
  });
})();
