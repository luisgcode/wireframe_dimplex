// Menu Toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const dropdowns = document.querySelectorAll('.dropdown');

    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            // Enhanced Menu - Enable enhanced dropdowns
            dropdowns.forEach(dropdown => {
                dropdown.classList.add('dropdown-enabled');
            });
        } else {
            // Simple Menu - Enable simple dropdown
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('dropdown-enabled');
            });
        }
    });

    // Initialize based on checkbox state
    if (menuToggle.checked) {
        dropdowns.forEach(dropdown => {
            dropdown.classList.add('dropdown-enabled');
        });
    }
});

// Slider functionality
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

console.log('Script loaded successfully.');