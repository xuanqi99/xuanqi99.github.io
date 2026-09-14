(function () {
  const root = document.documentElement;
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch (_) {
    // Navigation still works when browser storage is unavailable.
  }

  const themeBtn = document.querySelector('[data-theme-toggle]');
  if (themeBtn) {
    const updateThemeLabel = () => themeBtn.setAttribute('aria-label',
      root.getAttribute('data-theme') === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    updateThemeLabel();
    themeBtn.addEventListener('click', () => {
      const dark = root.getAttribute('data-theme') === 'dark';
      const next = dark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (_) {}
      updateThemeLabel();
    });
  }

  const mobileBtn = document.querySelector('[data-mobile-toggle]');
  const nav = document.querySelector('.nav-links');
  if (mobileBtn && nav) {
    const setMenuOpen = (open) => {
      nav.classList.toggle('open', open);
      mobileBtn.setAttribute('aria-expanded', String(open));
      mobileBtn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    };
    mobileBtn.addEventListener('click', () => setMenuOpen(!nav.classList.contains('open')));
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenuOpen(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav.classList.contains('open')) {
        setMenuOpen(false);
        mobileBtn.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && !mobileBtn.contains(event.target)) setMenuOpen(false);
    });
    window.matchMedia('(max-width: 860px)').addEventListener('change', () => setMenuOpen(false));
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
