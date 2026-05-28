// ----------------------------------------------------
// Skills Filter Logic
// ----------------------------------------------------
function filterSkills(type) {
  const buttons = document.querySelectorAll('.skills-tab-btn');
  buttons.forEach(btn => {
    const filterVal = btn.getAttribute('data-skill-filter');
    if (filterVal === type) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const tags = document.querySelectorAll('.skill-tag');
  tags.forEach(tag => {
    const tagType = tag.getAttribute('data-type');
    if (type === 'all' || tagType === type) {
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
    const filterVal = btn.getAttribute('data-project-filter');
    if (filterVal === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    const cardCatsAttr = card.getAttribute('data-category');
    // Split into individual category tags if space-separated for exact matching
    const categories = cardCatsAttr ? cardCatsAttr.split(/\s+/) : [];
    if (category === 'all' || categories.includes(category)) {
      card.style.display = 'flex';
      card.style.animation = 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
    } else {
      card.style.display = 'none';
    }
  });
}

// Bind event listeners on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  // Bind skills tab buttons
  const skillBtns = document.querySelectorAll('.skills-tab-btn');
  skillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-skill-filter');
      if (type) {
        filterSkills(type);
      }
    });
  });

  // Bind project tab buttons
  const projectBtns = document.querySelectorAll('.filter-btn');
  projectBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-project-filter');
      if (category) {
        filterProjects(category);
      }
    });
  });
});

// Explicitly bind helper functions to window object for backwards compatibility
window.filterSkills = filterSkills;
window.filterProjects = filterProjects;
