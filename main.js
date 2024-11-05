

let topButton = document.getElementById('to-top');
function displayTopButton() {
    if (window.scrollY >= 550) {
        topButton.classList.add('visible');
    } else {
        topButton.classList.remove('visible');
    }
}
document.addEventListener('scroll', displayTopButton);

const searchButton = document.getElementById('search-button');
const dialog = document.querySelector('.dialog-overview');
const closeButton = dialog.querySelector('sl-button[slot="footer"]');

searchButton.addEventListener('click', () => dialog.show());

let currentYear = new Date().getFullYear();
let credit = document.querySelector('.credit');
credit.textContent = `Particular Baptist Publishing House 2023-${currentYear}.`