// ----------------------------------------------------
// Floating Dock Active Highlighting on Scroll
// ----------------------------------------------------
const navLinks = document.querySelectorAll('.nav-dock a');
const sections = document.querySelectorAll('section');

let scrollTimeout;
window.addEventListener('scroll', () => {
  if (scrollTimeout) {
    cancelAnimationFrame(scrollTimeout);
  }

  scrollTimeout = requestAnimationFrame(() => {
    let current = 'about'; // Default active anchor when scrolled to top
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= (sectionTop - 150)) {
        const id = section.getAttribute('id');
        if (id && id !== 'hero') { // Skip hero to keep 'about' highlighted at top
          current = id;
        }
      }
    });

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
      current = 'contact';
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
