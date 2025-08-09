// js/animations.js

class AnimationManager {
    constructor() {
        // Initialize immediately
        this.init();
    }

    init() {
        try {
            this.setupEntranceAnimations();
            this.setupScrollAnimations();
        } catch (error) {
            console.error('Error initializing animations:', error);
        }
    }

    setupEntranceAnimations() {
        // Add entrance animations to sections
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            // Add delay based on section order
            const delay = index * 0.1;
            section.style.animationDelay = `${delay}s`;
            section.classList.add('slide-up');
        });

        // Add entrance animations to hero content
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.classList.add('slide-up');
        }

        // Add entrance animations to about content
        const aboutImage = document.querySelector('.about-image');
        const aboutContent = document.querySelector('.about-content');
        if (aboutImage) aboutImage.classList.add('slide-up');
        if (aboutContent) aboutContent.classList.add('slide-up-delay-1');

        // Add entrance animations to skill cards
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach((card, index) => {
            const delay = index * 0.1;
            card.style.animationDelay = `${delay}s`;
            card.classList.add('slide-up');
        });

        // Add entrance animations to timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            const delay = index * 0.1;
            item.style.animationDelay = `${delay}s`;
            item.classList.add('slide-up');
        });

        // Add entrance animations to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            const delay = index * 0.1;
            card.style.animationDelay = `${delay}s`;
            card.classList.add('slide-up');
        });
    }

    setupScrollAnimations() {
        // Set up scroll-triggered animations with throttling
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.handleScrollAnimations();
                });
                ticking = true;
            }
        });

        // Reset ticking after the animation frame is executed
        const originalHandleScrollAnimations = this.handleScrollAnimations.bind(this);
        this.handleScrollAnimations = () => {
            originalHandleScrollAnimations();
            ticking = false;
        };

        // Trigger on initial load
        this.handleScrollAnimations();
    }

    handleScrollAnimations() {
        // Get all elements that should animate on scroll
        const elements = document.querySelectorAll('.stat-card, .skill-progress, .tech-tag');
        
        elements.forEach(element => {
            if (this.isInViewport(element)) {
                element.classList.add('pulse');
            }
        });
    }

    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        return (
            rect.top <= windowHeight * 0.75 &&
            rect.bottom >= 0
        );
    }
}

// Initialize the animation manager
const animationManager = new AnimationManager();