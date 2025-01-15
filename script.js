// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
          });
      }
  });
});

// Navbar Toggle for Mobile
const toggleButton = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
