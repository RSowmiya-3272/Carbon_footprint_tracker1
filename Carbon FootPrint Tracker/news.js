document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================
    // 1. MOBILE NAVIGATION TOGGLE LOGIC
    //    (Assumes 'nav-toggle' button and 'main-nav' ID on the <nav>)
    // ==========================================================
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.querySelector('nav'); 
    
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            // Toggle the 'open' class which the CSS uses to show/hide the menu
            mainNav.classList.toggle('open');
            
            // Change the hamburger icon to a close icon
            const icon = navToggle.querySelector('i');
            if (mainNav.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); 
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // ==========================================================
    // 2. STAGGERED NEWS CARD ENTRANCE ANIMATION
    // ==========================================================
    const newsCards = document.querySelectorAll('.news-card');
    const ANIMATION_DURATION = 0.8; // seconds
    const STAGGER_DELAY = 0.15; // seconds delay between each card

    newsCards.forEach((card, index) => {
        // Apply the base entrance animation (fadeInSlide from styles.css)
        card.style.animationName = 'fadeInSlide';
        card.style.animationDuration = `${ANIMATION_DURATION}s`;
        card.style.animationFillMode = 'both';
        
        // Stagger the start time
        card.style.animationDelay = `${index * STAGGER_DELAY}s`;
    });
    
    // Note: The 'fadeInSlide' keyframe must be defined in your main styles.css.
});