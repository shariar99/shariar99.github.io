// js/main.js


class PortfolioManager {
    constructor() {
        console.log('PortfolioManager constructor called');
        console.log('portfolioContent available:', typeof portfolioContent !== 'undefined');
        
        // Initialize immediately, assuming content.js is loaded first
        this.init();
    }

    init() {
        try {
            console.log('Initializing portfolio...');
            this.populateContent();
            console.log('Content populated');
            this.initializeComponents();
            console.log('Components initialized');
            this.setupEventListeners();
            console.log('Event listeners set up');
            // Animate hero buttons after a short delay to ensure DOM is ready
            setTimeout(() => {
                this.animateHeroButtons();
            }, 500);
        } catch (error) {
            console.error('Error initializing portfolio:', error);
        }
    }

    populateContent() {
        console.log('Populating content...');
        this.populateNavigation();
        console.log('Navigation populated');
        this.populateHero();
        console.log('Hero populated');
        this.populateAbout();
        console.log('About populated');
        this.populateSkills();
        console.log('Skills populated');
        this.populateExperience();
        console.log('Experience populated');
        this.populateProjects();
        console.log('Projects populated');
        this.populateContact();
        console.log('Contact populated');
        this.populateFooter();
        console.log('Footer populated');
    }

    populateNavigation() {
        console.log('Populating navigation...');
        const navMenu = document.getElementById('nav-menu');
        if (!navMenu) {
            console.log('nav-menu element not found');
            return;
        }

        portfolioContent.navigation.forEach(item => {
            const li = document.createElement('li');
            li.className = 'nav-item';
            li.innerHTML = `<a class="nav-link" href="${item.href}">${item.text}</a>`;
            navMenu.appendChild(li);
        });
        console.log('Navigation populated successfully');
    }

    populateHero() {
        console.log('Populating hero section...');
        const { hero } = portfolioContent;
        
        // Title
        const titleElement = document.getElementById('hero-title');
        console.log('Hero title element:', titleElement);
        if (titleElement) titleElement.textContent = hero.title;

        // Subtitle
        const subtitleElement = document.getElementById('hero-subtitle');
        console.log('Hero subtitle element:', subtitleElement);
        if (subtitleElement) subtitleElement.textContent = hero.subtitle;

        // Description
        const descriptionElement = document.getElementById('hero-description');
        console.log('Hero description element:', descriptionElement);
        if (descriptionElement) descriptionElement.textContent = hero.description;

        // Buttons
        const buttonsContainer = document.getElementById('hero-buttons');
        console.log('Hero buttons container:', buttonsContainer);
        if (buttonsContainer) {
            hero.buttons.forEach((button) => {
                const a = document.createElement('a');
                a.href = button.href;
                a.className = `btn ${button.class}`;
                a.innerHTML = `<i class="${button.icon}"></i> ${button.text}`;
                buttonsContainer.appendChild(a);
            });
            
            // Ensure hero buttons have proper href attributes for smooth scrolling
            // The general smooth scroll functionality will handle these
            const heroButtons = buttonsContainer.querySelectorAll('a[href^="#"]');
            heroButtons.forEach((anchor) => {
                // Make sure the href attribute is properly set
                const href = anchor.getAttribute('href');
                if (href) {
                    anchor.setAttribute('href', href);
                }
            });
        }

        
        // Allow for custom hero image
        const heroImage = document.getElementById('hero-image');
        console.log('Hero image element:', heroImage);
        if (heroImage) {
            // Set up error handling for the image
            heroImage.onerror = function() {
                console.warn('Custom hero image not found, using default');
                this.src = 'images/hero/profile.jpg';
            };
            
            // Set the image source if custom image is provided, otherwise use default
            if (hero.customImage) {
                heroImage.src = hero.customImage;
            } else {
                heroImage.src = 'images/hero/profile.jpg';
            }
        }
        
        // Floating Cards
        this.populateFloatingCards(hero.floatingCards);
        console.log('Hero section populated successfully');
    }
    
    populateFloatingCards(floatingCards) {
        const floatingCardsContainer = document.getElementById('floating-cards');
        if (floatingCardsContainer && floatingCards) {
            floatingCards.forEach((card, index) => {
                const div = document.createElement('div');
                div.className = 'floating-card';
                div.innerHTML = `
                    <div class="floating-card-content">
                        <i class="${card.icon}"></i>
                        <span>${card.text}</span>
                    </div>
                `;
                // Add animation delay based on index
                div.style.animationDelay = `${index * 0.2}s`;
                floatingCardsContainer.appendChild(div);
            });
        }
    }

    populateAbout() {
        const { about } = portfolioContent;

        // Title and subtitle
        this.setTextContent('about-title', about.title);
        this.setTextContent('about-subtitle', about.subtitle);
        this.setTextContent('about-heading', about.heading);

        // Paragraphs
        const paragraphsContainer = document.getElementById('about-paragraphs');
        if (paragraphsContainer) {
            about.paragraphs.forEach(paragraph => {
                const p = document.createElement('p');
                p.className = 'mb-3';
                p.textContent = paragraph;
                paragraphsContainer.appendChild(p);
            });
        }

        // Stats
        const statsContainer = document.getElementById('stats-container');
        if (statsContainer) {
            about.stats.forEach(stat => {
                const div = document.createElement('div');
                div.className = 'col-md-4';
                div.innerHTML = `
                    <div class="stat-card">
                        <span class="stat-number">${stat.number}</span>
                        <span class="stat-label">${stat.label}</span>
                    </div>
                `;
                statsContainer.appendChild(div);
            });
        }
    }

    populateSkills() {
        const { skills } = portfolioContent;

        this.setTextContent('skills-title', skills.title);
        this.setTextContent('skills-subtitle', skills.subtitle);

        const skillsContainer = document.getElementById('skills-container');
        if (skillsContainer) {
            skills.categories.forEach(category => {
                const div = document.createElement('div');
                div.className = 'col-lg-6 col-md-6';
                div.setAttribute('data-aos', 'fade-up');
                
                // Create progress bars for each technology
                const progressBars = category.technologies.map(tech =>
                    `<div class="skill-progress mb-3">
                        <div class="d-flex justify-content-between mb-1">
                            <span class="skill-name">${tech.name}</span>
                            <span class="skill-level">${tech.level}%</span>
                        </div>
                        <div class="progress" style="height: 8px;">
                            <div class="progress-bar"
                                 role="progressbar"
                                 style="width: 0%; background: var(--gradient);"
                                 aria-valuenow="0"
                                 aria-valuemin="0"
                                 aria-valuemax="100"
                                 data-target-width="${tech.level}">
                            </div>
                        </div>
                    </div>`
                ).join('');

                div.innerHTML = `
                    <div class="skill-card">
                        <div class="skill-icon">
                            <i class="${category.icon}"></i>
                        </div>
                        <h4>${category.title}</h4>
                        <div class="skill-progress-container">
                            ${progressBars}
                        </div>
                    </div>
                `;
                skillsContainer.appendChild(div);
            });
        }
        
        // Populate skill filters
        this.populateSkillFilters(skills.categories);
        
        // Setup filter event listeners
        this.setupSkillFilterListeners();
        
        // Animate progress bars after a delay
        setTimeout(() => {
            this.animateProgressBars();
        }, 500);
    }
    
    populateSkillFilters(categories) {
        const filtersContainer = document.getElementById('skill-filters');
        if (!filtersContainer) return;
        
        // Get unique categories
        const categoryNames = categories.map(category => category.title);
        
        // Create filter buttons
        let filterButtons = '<button class="btn btn-outline-primary btn-sm me-2 mb-2 active" data-filter="all">All</button>';
        categoryNames.forEach(category => {
            const normalizedCategory = category.toLowerCase().replace(/\s+/g, '-');
            filterButtons += `<button class="btn btn-outline-primary btn-sm me-2 mb-2" data-filter="${normalizedCategory}">${category}</button>`;
        });
        
        filtersContainer.innerHTML = filterButtons;
    }
    
    setupSkillFilterListeners() {
        const filterContainer = document.getElementById('skill-filters');
        if (!filterContainer) return;
        
        // Use event delegation to handle button clicks
        filterContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const filter = e.target.getAttribute('data-filter');
                
                // Update active button
                const buttons = filterContainer.querySelectorAll('button');
                buttons.forEach(btn => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');
                
                // Filter skills
                this.filterSkills(filter);
            }
        });
    }
    
    filterSkills(filter) {
        const skillCards = document.querySelectorAll('#skills-container .col-lg-6');
        skillCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else {
                const categoryTitle = card.querySelector('h4').textContent;
                const normalizedCategory = categoryTitle.toLowerCase().replace(/\s+/g, '-');
                if (normalizedCategory === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    }

    populateExperience() {
        const { experience } = portfolioContent;

        this.setTextContent('experience-title', experience.title);
        this.setTextContent('experience-subtitle', experience.subtitle);

        const timelineContainer = document.getElementById('experience-timeline');
        if (timelineContainer) {
            experience.timeline.forEach(item => {
                const highlights = item.highlights.map(highlight =>
                    `<li>${highlight}</li>`
                ).join('');

                const div = document.createElement('div');
                div.className = 'timeline-item';
                div.setAttribute('data-aos', 'fade-up');
                div.innerHTML = `
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="timeline-date">${item.date}</div>
                        <h3 class="timeline-title">${item.title}</h3>
                        <div class="timeline-company">${item.company}</div>
                        <p>${item.description}</p>
                        <div class="timeline-details">
                            <ul class="mb-0">
                                ${highlights}
                            </ul>
                        </div>
                        <a href="#" class="timeline-toggle">
                            <i class="fas fa-chevron-down"></i> Show Details
                        </a>
                    </div>
                `;
                timelineContainer.appendChild(div);
            });
            
            // Setup timeline interactivity after a short delay to ensure DOM is updated
            setTimeout(() => {
                this.setupTimelineInteractivity();
            }, 100);
        }
    }
    
    setupTimelineInteractivity() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            const toggleButton = item.querySelector('.timeline-toggle');
            if (toggleButton) {
                // Remove any existing event listeners to prevent duplicates
                const newToggleButton = toggleButton.cloneNode(true);
                toggleButton.parentNode.replaceChild(newToggleButton, toggleButton);
                
                newToggleButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Toggle expanded class
                    item.classList.toggle('expanded');
                    
                    // Update button text and icon
                    const icon = newToggleButton.querySelector('i');
                    if (item.classList.contains('expanded')) {
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-up');
                        newToggleButton.innerHTML = `
                            <i class="${icon.className}"></i> Hide Details
                        `;
                    } else {
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                        newToggleButton.innerHTML = `
                            <i class="${icon.className}"></i> Show Details
                        `;
                    }
                });
            }
            
            // Also make the entire timeline content clickable to show details
            const timelineContent = item.querySelector('.timeline-content');
            if (timelineContent) {
                // Remove any existing event listeners to prevent duplicates
                const newTimelineContent = timelineContent.cloneNode(true);
                timelineContent.parentNode.replaceChild(newTimelineContent, timelineContent);
                
                newTimelineContent.addEventListener('click', (e) => {
                    // Only toggle if not clicking on the toggle button itself
                    if (!e.target.closest('.timeline-toggle')) {
                        e.preventDefault();
                        e.stopPropagation();
                        
                        // Toggle expanded class
                        item.classList.toggle('expanded');
                        
                        // Update button text and icon
                        const toggleBtn = item.querySelector('.timeline-toggle');
                        if (toggleBtn) {
                            const icon = toggleBtn.querySelector('i');
                            if (item.classList.contains('expanded')) {
                                icon.classList.remove('fa-chevron-down');
                                icon.classList.add('fa-chevron-up');
                                toggleBtn.innerHTML = `
                                    <i class="${icon.className}"></i> Hide Details
                                `;
                            } else {
                                icon.classList.remove('fa-chevron-up');
                                icon.classList.add('fa-chevron-down');
                                toggleBtn.innerHTML = `
                                    <i class="${icon.className}"></i> Show Details
                                `;
                            }
                        }
                    }
                });
            }
        });
    }

    populateProjects() {
        const { projects } = portfolioContent;

        this.setTextContent('projects-title', projects.title);
        this.setTextContent('projects-subtitle', projects.subtitle);

        // Populate project filters
        this.populateProjectFilters(projects.list);

        const projectsContainer = document.getElementById('projects-container');
        if (projectsContainer) {
            projects.list.forEach((project, projectIndex) => {
                const techTags = project.technologies.map(tech =>
                    `<span class="tech-tag">${tech}</span>`
                ).join('');

                const links = project.links.map(link =>
                    `<a href="${link.url}" class="project-link" target="_blank">
                        <i class="${link.icon}"></i>
                    </a>`
                ).join('');

                const div = document.createElement('div');
                div.className = 'col-lg-4 col-md-6';
                div.setAttribute('data-aos', 'fade-up');
                div.setAttribute('data-categories', project.categories.join(','));
                div.innerHTML = `
                    <div class="project-card" data-project-index="${projectIndex}">
                        <div class="project-image">
                            <img src="${project.image}" alt="${project.title}" class="img-fluid" onerror="this.src='images/projects/placeholder.jpg'">
                            <div class="project-overlay">
                                ${links}
                            </div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">${project.title}</h3>
                            <div class="project-category">${project.category}</div>
                            <p class="project-description">${project.description}</p>
                            <div class="project-tech">
                                ${techTags}
                            </div>
                        </div>
                    </div>
                `;
                projectsContainer.appendChild(div);
            });
        }
        
        // Setup filter event listeners
        this.setupProjectFilterListeners();
        
        // Setup project preview buttons
        this.setupProjectPreviewButtons();
    }
    
    setupProjectPreviewButtons() {
        // Add click event to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            // Remove existing event listeners to prevent duplicates
            const newCard = card.cloneNode(true);
            card.parentNode.replaceChild(newCard, card);
            
            newCard.addEventListener('click', (e) => {
                // Only trigger if not clicking on a link
                if (!e.target.closest('a')) {
                    e.preventDefault();
                    e.stopPropagation();
                    const projectIndex = newCard.getAttribute('data-project-index');
                    this.showProjectModal(projectIndex);
                }
            });
        });
    }
    
    showProjectModal(projectIndex) {
        const project = portfolioContent.projects.list[projectIndex];
        const modal = document.getElementById('projectModal');
        if (!modal) return;
        
        const modalContent = modal.querySelector('.project-modal-content');
        if (!modalContent) return;
        
        // Create tech tags
        const techTags = project.technologies.map(tech =>
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        // Create links
        const links = project.links.map(link =>
            `<a href="${link.url}" class="project-modal-link" target="_blank">
                <i class="${link.icon}"></i> ${link.icon.includes('google-play') ? 'Google Play' : link.icon.includes('app-store') ? 'App Store' : link.icon.includes('github') ? 'GitHub' : 'View Project'}
            </a>`
        ).join('');
        
        modalContent.innerHTML = `
            <div class="row">
                <div class="col-12">
                    <img src="${project.image}" alt="${project.title}" class="project-modal-image img-fluid" onerror="this.src='images/projects/placeholder.jpg'">
                </div>
                <div class="col-12">
                    <h3 class="mt-3">${project.title}</h3>
                    <div class="project-category">${project.category}</div>
                    <p class="mt-3">${project.description}</p>
                    <div class="project-modal-tech">
                        ${techTags}
                    </div>
                    <div class="project-modal-links">
                        ${links}
                    </div>
                </div>
            </div>
        `;
        
        // Show the modal
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
        
        // Add event listener to ensure modal is properly closed
        modal.addEventListener('hidden.bs.modal', function () {
            modalContent.innerHTML = '';
        }, { once: true });
    }
    
    populateProjectFilters(projects) {
        const filtersContainer = document.getElementById('project-filters');
        if (!filtersContainer) return;
        
        // Get unique categories
        const categories = [...new Set(projects.flatMap(project => project.categories))];
        
        // Create filter buttons
        let filterButtons = '<button class="btn btn-outline-primary btn-sm me-2 mb-2 active" data-filter="all">All</button>';
        categories.forEach(category => {
            filterButtons += `<button class="btn btn-outline-primary btn-sm me-2 mb-2" data-filter="${category}">${category.charAt(0).toUpperCase() + category.slice(1)}</button>`;
        });
        
        filtersContainer.innerHTML = filterButtons;
    }
    
    setupProjectFilterListeners() {
        const filterContainer = document.getElementById('project-filters');
        if (!filterContainer) return;
        
        // Use event delegation to handle button clicks
        filterContainer.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const filter = e.target.getAttribute('data-filter');
                
                // Update active button
                const buttons = filterContainer.querySelectorAll('button');
                buttons.forEach(btn => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');
                
                // Filter projects
                this.filterProjects(filter);
            }
        });
    }
    
    filterProjects(filter) {
        const projectCards = document.querySelectorAll('#projects-container .col-lg-4');
        projectCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else {
                const categories = card.getAttribute('data-categories').split(',');
                if (categories.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    }

    populateContact() {
        const { contact } = portfolioContent;

        this.setTextContent('contact-title', contact.title);
        this.setTextContent('contact-subtitle', contact.subtitle);

        // Contact Info
        const contactInfoContainer = document.getElementById('contact-info');
        if (contactInfoContainer) {
            contact.info.forEach(item => {
                const div = document.createElement('div');
                div.className = 'contact-item';
                div.style.cursor = 'pointer';
                div.addEventListener('click', () => {
                    if (item.title === 'Email') {
                        window.location.href = `mailto:${item.details}`;
                    } else if (item.title === 'CV download' || item.title === 'Portfolio') {
                        window.open(item.details, '_blank');
                    }
                });

                div.innerHTML = `
                    <div class="contact-icon">
                        <i class="${item.icon}"></i>
                    </div>
                    <div class="contact-details">
                        <h5>${item.title}</h5>
                        <p>${item.details}</p>
                    </div>
                `;
                contactInfoContainer.appendChild(div);
            });
        }

        // Social Links
        const socialLinksContainer = document.getElementById('social-links');
        if (socialLinksContainer) {
            contact.social.forEach(social => {
                const a = document.createElement('a');
                a.href = social.url;
                a.className = 'social-link';
                a.target = '_blank';
                a.innerHTML = `<i class="${social.icon}"></i>`;
                socialLinksContainer.appendChild(a);
            });
        }
    }

    populateFooter() {
        this.setTextContent('footer-text', portfolioContent.footer.text);
    }

    setTextContent(elementId, text) {
        const element = document.getElementById(elementId);
        if (element) element.textContent = text;
    }

    initializeComponents() {
        // Initialize AOS (Animate On Scroll)
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100
            });
        }
        
        // Add a small delay to ensure AOS is properly initialized
        setTimeout(() => {
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        }, 100);

        // Initialize navbar scroll effect
        this.initNavbarScroll();
        
        // Initialize smooth scrolling with a small delay to ensure DOM is fully loaded
        setTimeout(() => {
            this.initSmoothScroll();
        }, 100);
        
        // Initialize active nav link highlighting
        this.initActiveNavLinks();

        // Initialize typing animation
        this.initTypingAnimation();
        
        // Listen for dark mode toggle events
        this.initDarkModeListener();
    }
    
    initDarkModeListener() {
        document.addEventListener('darkModeToggle', (e) => {
            const { isDarkMode } = e.detail;
            // Update any elements that need to change with dark mode
            this.updateElementsForDarkMode(isDarkMode);
        });
        
        // Set initial state
        const isDarkMode = document.documentElement.classList.contains('dark-mode');
        this.updateElementsForDarkMode(isDarkMode);
    }
    
    updateElementsForDarkMode(isDarkMode) {
        // Update any elements that need to change with dark mode
        // For example, you might want to change the AOS animation colors
        const aosElements = document.querySelectorAll('[data-aos]');
        aosElements.forEach(element => {
            if (isDarkMode) {
                // Add dark mode specific classes or styles
                element.classList.add('dark-mode-aos');
            } else {
                // Remove dark mode specific classes or styles
                element.classList.remove('dark-mode-aos');
            }
        });
        
        // Update navbar scroll effect
        this.initNavbarScroll();
    }

    setupEventListeners() {
        // Contact form submission
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleContactForm.bind(this));
        }

        // Mobile menu toggle
        this.initMobileMenu();

        // Add scroll to top functionality
        this.initScrollToTop();
    }

    initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        // Throttle scroll event
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const isDarkMode = document.documentElement.classList.contains('dark-mode');
                    if (window.scrollY > 50) {
                        navbar.classList.add('scrolled');
                        if (isDarkMode) {
                            navbar.classList.add('dark-scrolled');
                        } else {
                            navbar.classList.remove('dark-scrolled');
                        }
                    } else {
                        navbar.classList.remove('scrolled');
                        navbar.classList.remove('dark-scrolled');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        // Set initial state
        const isDarkMode = document.documentElement.classList.contains('dark-mode');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            if (isDarkMode) {
                navbar.classList.add('dark-scrolled');
            } else {
                navbar.classList.remove('dark-scrolled');
            }
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.remove('dark-scrolled');
        }
    }

    initSmoothScroll() {
        // Use event delegation on the document body
        document.body.addEventListener('click', (e) => {
            // Check if the clicked element or its parent is an anchor link with href starting with "#"
            let targetElement = e.target;
            while (targetElement && targetElement !== document) {
                if (targetElement.tagName === 'A' && targetElement.getAttribute('href') && targetElement.getAttribute('href').startsWith('#')) {
                    e.preventDefault();
                    e.stopPropagation();
                    const targetId = targetElement.getAttribute('href').substring(1);
                    const target = document.getElementById(targetId);
                    if (target) {
                        // Get navbar height for offset calculation
                        const navbar = document.querySelector('.navbar');
                        const navbarHeight = navbar ? navbar.offsetHeight : 0;
                        const offsetTop = target.offsetTop - navbarHeight;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                        
                        // Trigger hero button animation when a nav link is clicked
                        this.triggerHeroButtonAnimation();
                    }
                    break;
                }
                targetElement = targetElement.parentElement;
            }
        });
    }

    initActiveNavLinks() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        // Throttle scroll event
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    let current = '';
                    sections.forEach(section => {
                        const sectionTop = section.offsetTop - 100;
                        const sectionHeight = section.clientHeight;
                        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                            current = section.getAttribute('id');
                        }
                    });

                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${current}`) {
                            link.classList.add('active');
                            // Trigger hero button animation when a nav link becomes active
                            if (current !== 'home') {
                                this.triggerHeroButtonAnimation();
                            }
                        }
                    });
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        // Set initial active link
        window.dispatchEvent(new Event('scroll'));
        
        // Animate hero buttons on initial load
        this.animateHeroButtons();
    }
    
    animateHeroButtons() {
        const heroButtons = document.querySelectorAll('.hero-buttons .btn');
        heroButtons.forEach((button, index) => {
            // Add a delay for each button to create a staggered effect
            setTimeout(() => {
                button.classList.add('animate-in');
            }, 300 + (index * 200));
        });
    }
    
    // Add method to trigger hero button animation when nav buttons are clicked
    triggerHeroButtonAnimation() {
        const heroButtons = document.querySelectorAll('.hero-buttons .btn');
        heroButtons.forEach((button, index) => {
            // Reset animation
            button.classList.remove('animate-in');
            // Trigger reflow
            void button.offsetWidth;
            // Add animation with delay
            setTimeout(() => {
                button.classList.add('animate-in');
            }, index * 200);
        });
    }

    initTypingAnimation() {
        const titleElement = document.getElementById('hero-title');
        if (!titleElement) return;

        // Store the original text from the portfolioContent
        const originalText = portfolioContent.hero.title;
        titleElement.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                titleElement.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        // Start typing animation after a delay
        setTimeout(typeWriter, 1000);
    }

    initMobileMenu() {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarToggler && navbarCollapse) {
            // Close mobile menu when clicking on nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                // Remove existing event listeners to prevent duplicates
                const newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);
                
                newLink.addEventListener('click', () => {
                    if (navbarCollapse.classList.contains('show')) {
                        navbarToggler.click();
                    }
                    // Trigger hero button animation when mobile nav link is clicked
                    this.triggerHeroButtonAnimation();
                });
            });
        }
    }

    initScrollToTop() {
        // Get scroll to top button
        const scrollTopBtn = document.getElementById('scrollToTopBtn');
        if (!scrollTopBtn) return;
        
        // Throttle scroll event
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    if (window.pageYOffset > 300) {
                        scrollTopBtn.classList.add('show');
                    } else {
                        scrollTopBtn.classList.remove('show');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        // Scroll to top functionality
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Set initial state
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }

    handleContactForm(e) {
        e.preventDefault();

        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        if (!submitBtn) return;

        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
        submitBtn.disabled = true;

        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Validate form data
        if (!name || !email || !subject || !message) {
            // Show error state
            submitBtn.innerHTML = '<i class="fas fa-exclamation-circle me-2"></i>Please fill all fields';
            submitBtn.className = 'btn btn-danger btn-lg w-100';

            // Reset button after delay
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.className = 'btn btn-light btn-lg w-100';
                submitBtn.disabled = false;
            }, 2000);
            return;
        }

        // Additional email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            // Show error state
            submitBtn.innerHTML = '<i class="fas fa-exclamation-circle me-2"></i>Please enter a valid email';
            submitBtn.className = 'btn btn-danger btn-lg w-100';

            // Reset button after delay
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.className = 'btn btn-light btn-lg w-100';
                submitBtn.disabled = false;
            }, 2000);
            return;
        }

        // Send email using EmailJS
        // Note: You need to set up EmailJS service at https://www.emailjs.com/
        // Replace the service ID, template ID, and public key with your own
        const serviceID = 'your_service_id'; // Replace with your EmailJS service ID
        const templateID = 'your_template_id'; // Replace with your EmailJS template ID
        const publicKey = 'your_public_key'; // Replace with your EmailJS public key

        const templateParams = {
            from_name: name,
            from_email: email,
            to_email: 'contact.shariar.cse@gmail.com',
            subject: subject,
            message: message,
            reply_to: email
        };

        // Check if EmailJS is loaded
        if (typeof emailjs !== 'undefined') {
            emailjs.init(publicKey);

            emailjs.send(serviceID, templateID, templateParams)
                .then((response) => {
                    console.log('Email sent successfully:', response);
                    // Show success state
                    submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!';
                    submitBtn.className = 'btn btn-success btn-lg w-100';

                    // Add aria-live for screen readers
                    const successMessage = document.createElement('div');
                    successMessage.className = 'sr-only';
                    successMessage.setAttribute('aria-live', 'polite');
                    successMessage.textContent = 'Your message has been sent successfully.';
                    form.appendChild(successMessage);

                    // Reset form after delay
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.className = 'btn btn-light btn-lg w-100';
                        submitBtn.disabled = false;
                        form.reset();
                        // Remove success message for screen readers
                        if (successMessage.parentNode) {
                            successMessage.parentNode.removeChild(successMessage);
                        }
                    }, 2000);
                })
                .catch((error) => {
                    console.error('Email sending failed:', error);
                    // Show error state
                    submitBtn.innerHTML = '<i class="fas fa-exclamation-circle me-2"></i>Failed to send message';
                    submitBtn.className = 'btn btn-danger btn-lg w-100';

                    // Reset button after delay
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.className = 'btn btn-light btn-lg w-100';
                        submitBtn.disabled = false;
                    }, 3000);
                });
        } else {
            // Fallback: Open mail client
            const mailtoLink = `mailto:contact.shariar.cse@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
            window.location.href = mailtoLink;

            // Show success state
            submitBtn.innerHTML = '<i class="fas fa-check me-2"></i>Opening email client...';
            submitBtn.className = 'btn btn-success btn-lg w-100';

            // Reset form after delay
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.className = 'btn btn-light btn-lg w-100';
                submitBtn.disabled = false;
                form.reset();
            }, 2000);
        }
    }

    // Utility method to animate progress bars
    animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-target-width');
            if (targetWidth) {
                // Animate the width
                let currentWidth = 0;
                const interval = setInterval(() => {
                    if (currentWidth < targetWidth) {
                        currentWidth++;
                        bar.style.width = `${currentWidth}%`;
                        bar.setAttribute('aria-valuenow', currentWidth);
                    } else {
                        clearInterval(interval);
                    }
                }, 10);
            }
        });
    }

    // Utility method to add new projects dynamically
    addProject(project) {
        portfolioContent.projects.list.push(project);
        this.populateProjects();
    }

    // Utility method to add new skills dynamically
    addSkillCategory(category) {
        portfolioContent.skills.categories.push(category);
        this.populateSkills();
    }

    // Utility method to add new experience
    addExperience(experience) {
        portfolioContent.experience.timeline.unshift(experience);
        this.populateExperience();
    }
}

// Initialize the portfolio
const portfolio = new PortfolioManager();