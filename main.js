const hamburger = document.getElementById('hamburger');
const drawer = document.querySelector('.drawer');

// Toggle drawer open/close
hamburger.addEventListener('click', () => {
  const isOpen = drawer.classList.toggle('open');
  hamburger.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Auto-close when a nav link is clicked
document.querySelectorAll('.drawer nav a').forEach(link => {
  link.addEventListener('click', () => {
    drawer.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});



const topButton = document.getElementById('to-top');
function displayTopButton() {
    if (window.scrollY >= 550) {
        topButton.classList.add('visible');
    } else {
        topButton.classList.remove('visible');
    }
}
document.addEventListener('scroll', displayTopButton);

const currentYear = new Date().getFullYear();
const credit = document.querySelector('.credit');
credit.textContent = `Particular Baptist Publications 2023-${currentYear}.`