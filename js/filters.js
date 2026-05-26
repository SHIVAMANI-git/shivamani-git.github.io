// ----------------------------------------------------
// Skills Filter Logic
// ----------------------------------------------------
function filterSkills(type) {
  const buttons = document.querySelectorAll('.skills-tab-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('onclick').includes(type)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const tags = document.querySelectorAll('.skill-tag');
  tags.forEach(tag => {
    if (type === 'all' || tag.getAttribute('data-type') === type) {
      tag.style.display = 'flex';
      tag.style.animation = 'fadeIn 0.3s ease forwards';
    } else {
      tag.style.display = 'none';
    }
  });
}

// ----------------------------------------------------
// Projects Filter Logic
// ----------------------------------------------------
function filterProjects(category) {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    if (btn.getAttribute('onclick').includes(category)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const cardCats = card.getAttribute('data-category');
    if (category === 'all' || (cardCats && cardCats.includes(category))) {
      card.style.display = 'flex';
      card.style.animation = 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
    } else {
      card.style.display = 'none';
    }
  });
}

// Explicitly bind helper functions to window object for inline HTML event handling
window.filterSkills = filterSkills;
window.filterProjects = filterProjects;
