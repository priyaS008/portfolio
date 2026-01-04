// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow on scroll
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all section content
document.querySelectorAll('.about, .education, .skills, .projects, .certifications, .contact').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add hover effects to cards
const cards = document.querySelectorAll('.timeline-item, .skill-category, .project-card, .cert-item, .contact-info');
cards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s ease';
    });
});

// Mobile menu toggle (for future mobile nav implementation)
const setupResponsiveNav = () => {
    const navbar = document.querySelector('.navbar');
    if (window.innerWidth <= 768) {
        navbar.style.flexWrap = 'wrap';
    }
};

window.addEventListener('resize', setupResponsiveNav);
setupResponsiveNav();

// Prevent default link behavior for external links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function (e) {
        // Allow normal behavior
    });
});

// Console message
console.log('%c Welcome to Priyanka Bharti\'s Portfolio!', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%c Built with modern web technologies and cybersecurity passion', 'font-size: 14px; color: #764ba2;');
