// icons
    lucide.createIcons();

    // Dark mode persistence
    const root = document.documentElement;
    const THEME_KEY = 'prefers-dark';
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light') root.classList.remove('dark');
    if (saved === 'dark') root.classList.add('dark');

    document.getElementById('themeToggle').addEventListener('click', () => {
      const isDark = root.classList.toggle('dark');
      localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
      lucide.createIcons();
    });

    // year
    document.getElementById('year').textContent = new Date().getFullYear();