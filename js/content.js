// js/content.js

const portfolioContent = {
    // Navigation Menu
    navigation: [
        { text: "Home", href: "#home" },
        { text: "About", href: "#about" },
        { text: "Skills", href: "#skills" },
        { text: "Experience", href: "#experience" },
        { text: "Projects", href: "#projects" },
        { text: "Contact", href: "#contact" }
    ],

    // Hero Section
    hero: {
        title: "Shariar Hossain",
        subtitle: "Assistant Software Engineer & Mobile App Developer",
        description: "Passionate mobile app developer specializing in Flutter, Android SDK, and creating innovative solutions. Published plugin developer with 4K+ YouTube subscribers teaching mobile development.",
        customImage: "images/hero/profile.jpg", // Can be changed to any custom PNG image
        buttons: [
            { text: "View My Work", href: "#projects", class: "btn-hero-primary", icon: "fas fa-rocket" },
            { text: "Get In Touch", href: "#contact", class: "btn-hero-secondary", icon: "fas fa-envelope" }
        ],
        floatingCards: [
            { text: "Flutter", icon: "fab fa-flutter" },
            { text: "4K+ Subs", icon: "fab fa-youtube" },
            { text: "Android", icon: "fab fa-android" }
        ]
    },

    // About Section
    about: {
        title: "About Me",
        subtitle: "Passionate developer with expertise in mobile application development and a love for creating innovative solutions",
        heading: "Building the Future, One App at a Time",
        paragraphs: [
            "With 1.5+ years of experience in mobile application development, I specialize in creating high-performance, scalable solutions using Flutter and Android SDK. My journey in tech has been driven by a passion for innovation and a commitment to excellence.",
            "As a published Flutter plugin developer, I've contributed to the community with packages for screen security and QR scanning. My YouTube channel 'CodeProBro' has grown to 4K+ subscribers, where I share knowledge about mobile development.",
            "I believe in clean code architecture, best practices, and creating applications that not only function flawlessly but also provide exceptional user experiences."
        ],
        stats: [
            { number: "1.5+", label: "Years Experience" },
            { number: "15+", label: "Projects Completed" },
            { number: "4.1K+", label: "YouTube Subscribers" }
        ]
    },

    // Skills Section
    skills: {
        title: "Technical Skills",
        subtitle: "A comprehensive toolkit for building modern, scalable applications",
        categories: [
            {
                title: "Programming Languages",
                icon: "fas fa-code",
                technologies: [
                    { name: "Dart", level: 95 },
                    { name: "Java", level: 90 },
                    { name: "Kotlin", level: 85 },
                    { name: "Go", level: 70 },
                    { name: "Swift", level: 75 },
                    { name: "HTML", level: 90 },
                    { name: "CSS", level: 85 },
                ]
            },
            {
                title: "Frameworks & Technologies",
                icon: "fas fa-mobile-alt",
                technologies: [
                    { name: "Flutter", level: 95 },
                    { name: "Android SDK", level: 85 },
                    { name: "WordPress", level: 80 },
                    { name: "Firebase", level: 85 },
                    { name: "SwiftUI", level: 70 },
                    { name: "Flutter Plugin", level: 57 },

                ]
            },
            {
                title: "Databases & APIs",
                icon: "fas fa-database",
                technologies: [
                    { name: "SQLite", level: 85 },
                    { name: "SQFlite", level: 90 },
                    { name: "Hive", level: 80 },
                    { name: "OCI8", level: 80 },
                    { name: "RESTful APIs", level: 85 },
                    { name: "Google Maps API", level: 80 }
                ]
            },
            {
                title: "Tools & Services",
                icon: "fas fa-tools",
                technologies: [
                    { name: "PayPal Integration", level: 80 },
                    { name: "Push Notifications", level: 85 },
                    { name: "MVVM Architecture", level: 90 },
                    { name: "Git", level: 85 },
                    { name: "PHP Mailer", level: 75 },
                    { name: "AWS", level: 30 }
                ]
            }
        ]
    },

    // Experience Section
    experience: {
        title: "Professional Experience",
        subtitle: "My journey through various roles and responsibilities in the tech industry",
        timeline: [
            {
                date: "March 2024 – Present",
                title: "Assistant Software Engineer",
                company: "Alphabyte Technology Ltd.",
                description: "Leading mobile application development projects with focus on Flutter and Android SDK technologies.",
                highlights: [
                    "Develop and maintain high-performance mobile applications",
                    "Design and implement RESTful APIs using OCI8 for Oracle database connectivity",
                    "Apply clean code architecture and state management patterns",
                    "Integrate payment systems including PayPal subscriptions and payouts"
                ]
            },
            {
                date: "2022 – Present",
                title: "Content Creator & Flutter Plugin Developer",
                company: "CodeProBro YouTube Channel",
                description: "Creating educational content and contributing to the Flutter ecosystem through plugin development.",
                highlights: [
                    "Published 2 Flutter plugins on pub.dev with thousands of downloads",
                    "Built a YouTube community of 4K+ subscribers",
                    "Create comprehensive tutorials on mobile development",
                    "Contribute to open-source Flutter ecosystem"
                ]
            },
            {
                date: "June 2023 – March 2024",
                title: "Junior Developer",
                company: "Shanto-Mariam University of Creative Technology",
                description: "Developed various applications and websites for university management systems.",
                highlights: [
                    "Developed Android applications using Java and Kotlin",
                    "Built responsive WordPress websites",
                    "Maintained university management systems",
                    "Collaborated with cross-functional teams"
                ]
            }
        ]
    },

    // Projects Section
    projects: {
        title: "Featured Projects",
        subtitle: "Showcasing my best work in mobile application development and plugin creation",
        list: [
            {
                title: "UK Driving Theory Exam App",
                category: "Cross-Platform Mobile App",
                description: "A comprehensive driving exam preparation app with offline study materials, custom video player for hazard detection, and unlimited mock tests.",
                image: "images/projects/unnamed.webp",
                technologies: ["Flutter", "SQLite", "Video Player", "Local Notifications", "Cross-Platform"],
                links: [
                    { url: "https://play.google.com/store/apps/details?id=com.drwsl.drivingtheoryexam&hl=en_US", icon: "fab fa-google-play" },
                    { url: "https://apps.apple.com/us/app/driving-theory-test-kit-uk/id6744889319", icon: "fab fa-app-store-ios" }
                ],
                categories: ["mobile", "flutter"]
            },
            {
                title: "ADIBOOK - Driving School Management",
                category: "Enterprise Management System",
                description: "Complete driving school management platform with separate apps for instructors and students, featuring payment integration and real-time communication.",
                image: "images/projects/unnamed (1).webp",
                technologies: ["Flutter", "OCI8", "PayPal", "Firebase", "Push Notifications", "PL/SQL"],
                links: [
                    { url: "https://play.google.com/store/apps/details?id=com.adibook.instructor", icon: "fab fa-google-play" },
                     { url: "https://apps.apple.com/us/app/adi-book-instructor/id6743073433", icon: "fab fa-app-store-ios" },
                    { url: "https://play.google.com/store/apps/details?id=com.adibook.student", icon: "fab fa-google-play" },
        
                    { url: "https://apps.apple.com/us/app/adi-book-student/id6743047444", icon: "fab fa-app-store-ios" }


                ],
                categories: ["mobile", "enterprise", "flutter"]
            },
            {
                title: "Screen Secure Plugin 🔐",
                category: "Flutter Plugin",
                description: "Comprehensive screen security plugin for Flutter applications with cross-platform protection against screenshots and screen recordings.",
                image: "images/projects/1754387299503.png",
                technologies: ["Flutter", "Native Android", "Native iOS", "Security", "Plugin Development"],
                links: [
                    { url: "https://pub.dev/packages/screen_secure", icon: "fas fa-globe" },
                    { url: "https://github.com/shariaralphabyte/screen_secure", icon: "fab fa-github" }
                ],
                categories: ["plugin", "flutter", "security"]
            },
            {
                title: "Ultra QR Scanner ⚡",
                category: "Flutter Plugin",
                description: "Ultra-fast, low-latency QR code scanner with native camera preview, preload functionality, and comprehensive error handling.",
                image: "images/projects/1754387299503.png",
                technologies: ["Flutter", "CameraX", "AVCapture", "QR Scanning", "Performance Optimization"],
                links: [
                    { url: "https://pub.dev/packages/ultra_qr_scanner", icon: "fas fa-globe" },
                    { url: "https://github.com/shariaralphabyte/ultra_qr_scanner", icon: "fab fa-github" }
                ],
                categories: ["plugin", "flutter", "performance"]
            },
            {
                title: "University Bus Tracking System",
                category: "Real-time Tracking App",
                description: "Real-time bus tracking application with Google Maps integration, Firebase real-time database, and MVVM architecture with dependency injection.",
                image: "images/projects/portfolio1.7735e8b1339c77597f22.jpg",
                technologies: ["Android", "Google Maps", "Firebase", "MVVM", "Dagger2", "Real-time"],
                links: [
                    { url: "#", icon: "fas fa-eye" },
                    { url: "#", icon: "fab fa-github" }
                ],
                categories: ["mobile", "android", "tracking"]
            },
            {
                title: "SMUCT University Websites",
                category: "Web Development",
                description: "Responsive university websites with dynamic content management, SEO optimization, and multi-site setup using WordPress and Elementor.",
                image: "images/projects/SMUCT-Logo.jpg",
                technologies: ["WordPress", "Elementor", "SEO", "Responsive Design", "Multi-site", "CMS"],
                links: [
                    { url: "https://smuct.ac.bd", icon: "fas fa-external-link-alt" },
                    { url: "https://iqac.smuct.ac.bd", icon: "fas fa-external-link-alt" }
                ],
                categories: ["web", "wordpress", "cms"]
            }
        ]
    },

    // Contact Section
    contact: {
        title: "Get In Touch",
        subtitle: "Let's discuss your next project or collaboration opportunity",
        info: [
            {
                icon: "fas fa-envelope",
                title: "Email",
                details: "shariarhossin99@gmail.com"
            },
            {
                icon: "fas fa-file-alt", 
                title: "CV download",
                details: "https://shariar99.github.io/cv/"
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Location",
                details: "Chayabithi, Savar, Dhaka, Bangladesh"
            },
            {
                icon: "fas fa-globe",
                title: "Portfolio",
                details: "https://shariar99.github.io"
            }
        ],
        social: [
            { url: "https://www.linkedin.com/in/shariar99/", icon: "fab fa-linkedin-in" },
            { url: "https://youtube.com/@codeprobro", icon: "fab fa-youtube" },
            { url: "https://github.com/shariar99", icon: "fab fa-github" },
            { url: "https://pub.dev/publishers/codeprobro.dev/packages", icon: "fas fa-globe" },
            { url: "mailto:shariarhossin99@gmail.com", icon: "fas fa-envelope" }
        ]
    },

    // Footer
    footer: {
        text: "© 2025 Shariar Hossain. All rights reserved. Built with passion and dedication."
    }
};
