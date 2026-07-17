/**
 * Physics Sandbox Universe - Shared Theme Engine
 * Handles theme switching, persistence, and cross-page sync.
 */

(function() {
  'use strict';

  const THEME_KEY = 'psu-theme-v1';
  const VALID_THEMES = ['academic', 'glass', 'cartoon', 'cyber', 'soviet'];
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
      { key: 'cyber', label: '👾 赛博' },
      { key: 'soviet', label: '☭ 苏维埃' }
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

  function createTopNav() {
    if (document.getElementById('top-nav')) return;
    const nav = document.createElement('nav');
    nav.id = 'top-nav';
    nav.className = 'top-nav';

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Home
    const homeLink = document.createElement('a');
    homeLink.href = 'index.html';
    homeLink.textContent = '首页';
    if (currentPage === 'index.html' || currentPage === '') homeLink.classList.add('active');
    nav.appendChild(homeLink);

    // Knowledge Graph
    const kgLink = document.createElement('a');
    kgLink.href = 'knowledge-graph.html';
    kgLink.textContent = '知识图谱';
    if (currentPage === 'knowledge-graph.html') kgLink.classList.add('active');
    nav.appendChild(kgLink);

    // Taxonomy
    const taxLink = document.createElement('a');
    taxLink.href = 'taxonomy.html';
    taxLink.textContent = '知识追踪';
    if (currentPage === 'taxonomy.html') taxLink.classList.add('active');
    nav.appendChild(taxLink);

    // Teacher prep
    const teachLink = document.createElement('a');
    teachLink.href = 'teacher-prep.html';
    teachLink.textContent = '教师备课';
    if (currentPage === 'teacher-prep.html') teachLink.classList.add('active');
    nav.appendChild(teachLink);

    // Library dropdown
    const libDropdown = document.createElement('div');
    libDropdown.className = 'nav-dropdown';
    const libLink = document.createElement('a');
    libLink.href = '#';
    libLink.textContent = '图书馆 ▾';
    libDropdown.appendChild(libLink);

    const libMenu = document.createElement('div');
    libMenu.className = 'nav-dropdown-menu';
    const libItems = [
      { text: 'arXiv', href: 'https://arxiv.org/', target: '_blank' },
      { text: 'ChinaXiv', href: 'http://chinaxiv.org/home.htm', target: '_blank' },
      { text: 'Sci-Hub', href: 'https://sci-hub.sg/', target: '_blank' },
      { text: 'bioRxiv', href: 'https://www.biorxiv.org/', target: '_blank' },
      { text: 'medRxiv', href: 'https://www.medrxiv.org/', target: '_blank' },
      { text: '中科院物理所论文', href: 'https://www.iop.cas.cn/kycg/bslw/', target: '_blank' },
      { text: '物理学报', href: 'https://wulixb.iphy.ac.cn/', target: '_blank' },
      { text: '中国科技论文在线', href: 'https://www.paper.edu.cn/', target: '_blank' },
      { text: 'NSTL国家科技图书文献中心', href: 'https://www.nstl.gov.cn/', target: '_blank' },
      { text: '中国物理学会', href: 'http://www.cps-net.org.cn/', target: '_blank' },
      { text: '中科院高能物理所', href: 'http://www.ihep.cas.cn/', target: '_blank' },
      { text: '中科院理论物理所', href: 'http://www.itp.cas.cn/', target: '_blank' },
      { text: '中国知网', href: 'https://www.cnki.net/', target: '_blank' }
    ];
    libItems.forEach(item => {
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.text;
      if (item.target) a.target = item.target;
      libMenu.appendChild(a);
    });
    libDropdown.appendChild(libMenu);
    nav.appendChild(libDropdown);

    // About dropdown
    const aboutDropdown = document.createElement('div');
    aboutDropdown.className = 'nav-dropdown';
    const aboutLink = document.createElement('a');
    aboutLink.href = '#';
    aboutLink.textContent = '关于 ▾';
    aboutDropdown.appendChild(aboutLink);

    const aboutMenu = document.createElement('div');
    aboutMenu.className = 'nav-dropdown-menu';
    const aboutItems = [
      { text: '📷 Instagram', href: 'https://www.instagram.com/zf_zhuang/', target: '_blank' },
      { text: '💼 LinkedIn', href: 'https://www.linkedin.com/in/zefeng-zhuang-266a9b204/', target: '_blank' },
      { text: '🚀 飞书', href: 'https://www.feishu.cn/invitation/page/add_contact/?token=f9bg037f-c9e4-4455-9dc0-724176121788&unique_id=XuGE2TPEcoSXmTb6i3Q9Gg==', target: '_blank' },
      { text: '🐙 GitHub', href: 'https://github.com/hszzhua2', target: '_blank' }
    ];
    aboutItems.forEach(item => {
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.text;
      if (item.target) a.target = item.target;
      aboutMenu.appendChild(a);
    });
    aboutDropdown.appendChild(aboutMenu);
    nav.appendChild(aboutDropdown);

    document.body.insertBefore(nav, document.body.firstChild);
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
    createTopNav: createTopNav,
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
    // Auto-create top nav on all pages
    if (window.parent === window) {
      createTopNav();
    }
  });

})();
