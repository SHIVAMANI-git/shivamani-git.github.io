// ----------------------------------------------------
// Theme Toggle Logic
// ----------------------------------------------------
// NOTE TO PREVENT FLICKER (FOUC):
// An inline script is placed immediately at the beginning of <body> 
// to apply the 'light-theme' class before the rest of the page is parsed and rendered.
// Example for index.html:
// <script>
//   (function() {
//     var savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'light' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)) {
//       document.body.classList.add('light-theme');
//     }
//   })();
// </script>

const themeToggleBtn = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

// Safe check: Apply theme class on load if not already set by the inline head/body script
if (savedTheme === 'light' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)) {
  if (document.body) {
    document.body.classList.add('light-theme');
  }
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    if (document.body) {
      document.body.classList.toggle('light-theme');
      if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light');
      } else {
        localStorage.setItem('theme', 'dark');
      }
    }
  });
}
