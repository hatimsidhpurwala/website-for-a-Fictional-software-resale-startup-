// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navList.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navList.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Simple testimonial slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

// Auto-advance testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Initialize
showTestimonial(0);

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real implementation, you would send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}