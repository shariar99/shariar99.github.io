// js/dark-mode.js

class DarkModeManager {
    constructor() {
        // Initialize immediately
        this.init();
    }

    init() {
        try {
            this.setupDarkModeToggle();
            this.loadDarkModePreference();
        } catch (error) {
            console.error('Error initializing dark mode:', error);
        }
    }

    setupDarkModeToggle() {
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (!darkModeToggle) return;

        darkModeToggle.addEventListener('click', () => {
            this.toggleDarkMode();
        });

        // Add keyboard support
        darkModeToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleDarkMode();
            }
        });
    }

    toggleDarkMode() {
        const isDarkMode = document.documentElement.classList.toggle('dark-mode');
        this.updateDarkModeIcon(isDarkMode);
        this.saveDarkModePreference(isDarkMode);
        
        // Dispatch custom event for other components to listen to
        const event = new CustomEvent('darkModeToggle', { detail: { isDarkMode } });
        document.dispatchEvent(event);
        
        // Add a small delay to ensure all elements are updated
        setTimeout(() => {
            // Force reflow to ensure all elements update
            document.body.offsetHeight;
        }, 50);
    }

    updateDarkModeIcon(isDarkMode) {
        const icon = document.querySelector('#darkModeToggle i');
        if (icon) {
            if (isDarkMode) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    }

    loadDarkModePreference() {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            document.documentElement.classList.add('dark-mode');
            this.updateDarkModeIcon(true);
        }
    }

    saveDarkModePreference(isDarkMode) {
        localStorage.setItem('darkMode', isDarkMode);
    }
}

// Initialize the dark mode manager
const darkModeManager = new DarkModeManager();