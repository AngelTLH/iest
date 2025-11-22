const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Scroll suave para anclas internas
const links = document.querySelectorAll('a[href^="#"]');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href')?.substring(1);
    const target = targetId ? document.getElementById(targetId) : null;

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      navList?.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

const themeToggle = document.querySelector('[data-theme-toggle]');
const root = document.documentElement;

const setTheme = (theme) => {
  root.setAttribute('data-theme', theme);
  themeToggle?.setAttribute('aria-pressed', String(theme === 'light'));
};

const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light' || storedTheme === 'dark') {
  setTheme(storedTheme);
}

themeToggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') || 'dark';
  const next = current === 'light' ? 'dark' : 'light';
  setTheme(next);
  localStorage.setItem('theme', next);
});

// Marca el año actual en el footer si se requiere en el futuro
// document.querySelector('[data-year]').textContent = new Date().getFullYear();
