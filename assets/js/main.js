(() => {
  const body = document.body;
  const toggle = document.querySelector('.menu-toggle');
  const close = document.querySelector('.menu-close');
  const backdrop = document.querySelector('.menu-backdrop');
  const navLinks = document.querySelectorAll('#site-nav a');

  const closeMenu = () => {
    body.classList.remove('menu-open');
    toggle?.setAttribute('aria-expanded', 'false');
  };
  const openMenu = () => {
    body.classList.add('menu-open');
    toggle?.setAttribute('aria-expanded', 'true');
  };

  toggle?.addEventListener('click', () => body.classList.contains('menu-open') ? closeMenu() : openMenu());
  close?.addEventListener('click', closeMenu);
  backdrop?.addEventListener('click', closeMenu);
  navLinks.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
})();
