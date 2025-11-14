// 主题切换功能
(function() {
  const THEME_KEY = 'blog-theme';
  const LIGHT_THEME = 'light';
  const DARK_THEME = 'dark';

  // 获取元素
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // 获取保存的主题或系统偏好
  function getSavedTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    
    // 检查系统偏好
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK_THEME;
    }
    
    return LIGHT_THEME;
  }

  // 应用主题
  function applyTheme(theme) {
    if (theme === DARK_THEME) {
      htmlElement.setAttribute('data-theme', 'dark');
      themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
      themeToggleBtn.setAttribute('title', '切换到浅色模式');
    } else {
      htmlElement.setAttribute('data-theme', 'light');
      themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
      themeToggleBtn.setAttribute('title', '切换到深色模式');
    }
    localStorage.setItem(THEME_KEY, theme);
  }

  // 切换主题
  function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
    applyTheme(newTheme);
  }

  // 初始化主题
  const initialTheme = getSavedTheme();
  applyTheme(initialTheme);

  // 绑定点击事件
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // 监听系统主题变化
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? DARK_THEME : LIGHT_THEME);
      }
    });
  }
})();

