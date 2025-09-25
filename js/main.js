// Intersection Observer for scroll animations
const createIntersectionObserver = () => {
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, options);

    document.querySelectorAll('.section-fade').forEach(section => {
        observer.observe(section);
    });
};

// Debounce function for better performance
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const initializePortfolio = () => {
    // Initialize scroll animations
    createIntersectionObserver();

    // Get DOM elements
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    // Setup menu toggle accessibility
    const handleMenuToggle = () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
    };

    // Setup keyboard navigation
    const handleEscapeKey = (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.focus();
        }
    };

    // Add event listeners
    menuToggle.addEventListener('click', handleMenuToggle);
    document.addEventListener('keydown', handleEscapeKey);
    // Mobile Menu Functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Update active link based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    // Optimize scroll event with debounce
    window.addEventListener('scroll', debounce(() => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    }, 100));

    // Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    const formGroups = contactForm.querySelectorAll('.form-group');

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

    const showError = (input, message) => {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        formGroup.classList.add('error');
        errorMessage.textContent = message;
    };

    const removeError = (input) => {
        const formGroup = input.parentElement;
        formGroup.classList.remove('error');
    };

    const validateInput = (input) => {
        if (input.value.trim() === '') {
            showError(input, `${input.name} is required`);
            return false;
        }

        if (input.type === 'email' && !validateEmail(input.value)) {
            showError(input, 'Please enter a valid email address');
            return false;
        }

        removeError(input);
        return true;
    };

    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        input.addEventListener('input', () => validateInput(input));
        input.addEventListener('blur', () => validateInput(input));
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea');
            if (!validateInput(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            // Here you would typically send the form data to a server
            alert('Message sent successfully!');
            contactForm.reset();
        }
    });
});