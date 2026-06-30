/**
 * Physics Sandbox Universe - Shared Theme Engine
 * Handles theme switching, persistence, and cross-page sync.
 */

(function() {
  'use strict';

  const THEME_KEY = 'psu-theme-v1';
  const VALID_THEMES = ['academic', 'glass', 'cartoon', 'cyber'];
  const DEFAULT_THEME = 'academic';

  // --- Core Theme Functions ---

  function getCurrentTheme() {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved && VALID_THEMES.includes(saved)) return saved;
    } catch (e) {
      // localStorage may be blocked in sandboxed iframe
    }
    // Check URL param as fallback (for iframe communication)
    const params = new URLSearchParams(window.location.search);
    const urlTheme = params.get('theme');
    if (urlTheme && VALID_THEMES.includes(urlTheme)) return urlTheme;
    return DEFAULT_THEME;
  }

  function setTheme(themeName) {
    if (!VALID_THEMES.includes(themeName)) themeName = DEFAULT_THEME;
    document.documentElement.setAttribute('data-theme', themeName);
    try {
      localStorage.setItem(THEME_KEY, themeName);
    } catch (e) {}
    updateThemeSwitcherUI(themeName);
    // Notify parent window if inside iframe
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'theme-change', theme: themeName }, '*');
    }
  }

  function cycleTheme() {
    const current = getCurrentTheme();
    const idx = VALID_THEMES.indexOf(current);
    const next = VALID_THEMES[(idx + 1) % VALID_THEMES.length];
    setTheme(next);
    return next;
  }

  // --- UI Builders ---

  function createThemeSwitcher() {
    // Don't create if already exists
    if (document.getElementById('theme-switcher')) return;

    const container = document.createElement('div');
    container.id = 'theme-switcher';
    container.className = 'theme-switcher';

    const themes = [
      { key: 'academic', label: '📐 学术' },
      { key: 'glass', label: '🧊 玻璃' },
      { key: 'cartoon', label: '🎨 卡通' },
      { key: 'cyber', label: '👾 赛博' }
    ];

    const current = getCurrentTheme();

    themes.forEach(t => {
      const btn = document.createElement('button');
      btn.textContent = t.label;
      btn.dataset.theme = t.key;
      if (t.key === current) btn.classList.add('active');
      btn.addEventListener('click', () => {
        setTheme(t.key);
        // Update active states
        container.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.theme === t.key));
      });
      container.appendChild(btn);
    });

    document.body.appendChild(container);
  }

  function updateThemeSwitcherUI(themeName) {
    const container = document.getElementById('theme-switcher');
    if (!container) return;
    container.querySelectorAll('button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === themeName);
    });
  }

  function createBackButton(href = 'index.html') {
    if (document.getElementById('back-btn')) return;
    const a = document.createElement('a');
    a.id = 'back-btn';
    a.className = 'back-btn';
    a.href = href;
    a.innerHTML = '← 返回空间站';
    document.body.appendChild(a);
  }

  // --- Cross-frame Sync ---

  function listenToParentTheme() {
    window.addEventListener('message', (e) => {
      if (e.data && e.data.type === 'theme-change' && VALID_THEMES.includes(e.data.theme)) {
        setTheme(e.data.theme);
      }
    });
  }

  // --- Public API ---

  window.PSUTheme = {
    get: getCurrentTheme,
    set: setTheme,
    cycle: cycleTheme,
    createSwitcher: createThemeSwitcher,
    createBackButton: createBackButton,
    listenToParent: listenToParentTheme,
    themes: VALID_THEMES
  };

  // --- Auto-init ---

  document.addEventListener('DOMContentLoaded', () => {
    const theme = getCurrentTheme();
    document.documentElement.setAttribute('data-theme', theme);
    // If inside iframe, listen to parent
    if (window.parent !== window) {
      listenToParentTheme();
    }
  });

})();
