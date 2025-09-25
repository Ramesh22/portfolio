// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    initializeLoading();
    initializeScrollProgress();
    initializeProjectAnimations();
    initializeFAB();
});

// Loading Animation
function initializeLoading() {
    const loader = document.querySelector('.loading-animation');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 1500);
    }
}

// Scroll Progress
function initializeScrollProgress() {
    const progressBar = document.querySelector('.progress-bar');
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        if (progressBar) {
            progressBar.style.width = scrolled + '%';
        }
    });
}

// Project Cards Animation
function initializeProjectAnimations() {
    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });
}

// Floating Action Button
function initializeFAB() {
    const fab = document.querySelector('.fab');
    if (fab) {
        fab.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Show/Hide FAB based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                fab.classList.add('show');
            } else {
                fab.classList.remove('show');
            }
        });
    }
}

// Smooth Scroll for Navigation Links
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