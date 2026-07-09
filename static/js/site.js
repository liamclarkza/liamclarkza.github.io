(function () {
  var root = document.documentElement;
  var themeButton = document.querySelector('.theme-toggle');
  var menuButton = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.site-nav');

  function updateThemeLabel() {
    if (!themeButton) return;
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    themeButton.setAttribute('aria-label', 'Switch to ' + next + ' theme');
  }

  if (themeButton) {
    updateThemeLabel();
    themeButton.addEventListener('click', function () {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', root.dataset.theme);
      updateThemeLabel();
    });
  }

  if (menuButton && nav) {
    menuButton.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.querySelector('.sr-only').textContent = open ? 'Close navigation' : 'Open navigation';
    });

    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }
}());
