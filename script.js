document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const headerLinks = document.querySelectorAll('.site-header .nav-link');
    const footerLinks = document.querySelectorAll('.site-footer .footer-nav-link');

    const toggleMenu = () => {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.classList.toggle('is-active');
        mainNav.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', !isExpanded);
        document.body.style.overflow = isExpanded ? '' : 'hidden';
    };

    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    headerLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav && mainNav.classList.contains('is-open')) {
                toggleMenu();
            }
        });
    });

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    headerLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    footerLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});