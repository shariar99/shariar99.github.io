# Professional Portfolio Website

A modern, clean, and professional portfolio website built with Bootstrap 5 and vanilla JavaScript. Features dynamic content management, responsive design, and smooth animations.

## 🚀 Features

- **Clean & Professional Design**: Modern UI with glassmorphism effects
- **Dynamic Content Management**: All content managed through `js/content.js`
- **Fully Responsive**: Works perfectly on all devices
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Bootstrap 5**: Latest Bootstrap framework for styling
- **Modular Structure**: Organized file structure for easy maintenance
- **Easy Customization**: Add projects, skills, and experience dynamically

## 📁 Folder Structure

```
portfolio-website/
├── index.html                 # Main HTML file
├── README.md                 # Documentation
├── css/
│   └── main.css              # Custom styles
├── js/
│   ├── content.js            # All content configuration
│   └── main.js               # Main JavaScript functionality
├── images/
│   ├── hero/
│   │   └── profile.jpg       # Hero section profile image
│   ├── about/
│   │   └── about.jpg         # About section image
│   ├── projects/
│   │   ├── driving-app.jpg   # Project screenshots
│   │   ├── adibook.jpg
│   │   ├── screen-secure.jpg
│   │   ├── qr-scanner.jpg
│   │   ├── bus-tracking.jpg
│   │   └── university-web.jpg
│   └── icons/
│       └── favicon.ico       # Website favicon
└── contact/
    └── form-handler.php      # Contact form backend (optional)
```

## 🎨 Content Management

### Adding New Projects

Edit `js/content.js` and add to the `projects.list` array:

```javascript
{
    title: "Your Project Name",
    category: "Project Category",
    description: "Project description here...",
    image: "images/projects/your-project.jpg",
    technologies: ["Flutter", "Firebase", "API"],
    links: [
        { url: "https://github.com/yourrepo", icon: "fab fa-github" },
        { url: "https://yourapp.com", icon: "fas fa-external-link-alt" }
    ]
}
```

### Adding New Skills

Add to `skills.categories` array:

```javascript
{
    title: "New Skill Category",
    icon: "fas fa-code",
    technologies: ["Skill 1", "Skill 2", "Skill 3"]
}
```

### Adding New Experience

Add to `experience.timeline` array:

```javascript
{
    date: "Start Date – End Date",
    title: "Your Job Title",
    company: "Company Name",
    description: "Brief description...",
    highlights: [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3"
    ]
}
```

### Updating Personal Information

Edit the relevant sections in `js/content.js`:

- `hero` - Name, title, description
- `about` - About text, stats
- `contact` - Email, phone, location, social links

## 🖼️ Image Setup

### Required Images

Place these images in the respective folders:

1. **Hero Section**: `images/hero/profile.jpg` (400x400px recommended)
2. **About Section**: `images/about/about.jpg` (500x600px recommended)
3. **Projects**: `images/projects/[project-name].jpg` (800x600px recommended)

### Image Optimization Tips

- Use WebP format for better compression
- Optimize images for web (compress to 80-90% quality)
- Use consistent aspect ratios for project images
- Profile images should be square (1:1 ratio)

## 🚀 Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" → main branch
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Netlify

1. Drag and drop the project folder to [Netlify](https://netlify.com)
2. Your site will be live instantly with a random URL
3. You can customize the domain in Netlify settings

### Vercel

1. Import your GitHub repository to [Vercel](https://vercel.com)
2. Deploy with default settings
3. Your site will be live with automatic deployments

## ⚙️ Customization

### Color Scheme

Edit CSS variables in `css/main.css`:

```css
:root {
    --primary: #6366f1;        /* Primary color */
    --secondary: #8b5cf6;      /* Secondary color */
    --accent: #06b6d4;         /* Accent color */
    --dark: #1e293b;           /* Dark text */
    --light: #f8fafc;          /* Light background */
}
```

### Adding New Sections

1. Add HTML structure to `index.html`
2. Add content configuration to `js/content.js`
3. Add population method to `js/main.js`
4. Add custom styles to `css/main.css`

### Font Changes

Replace the Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Update the font family in `css/main.css`:

```css
body {
    font-family: 'YourFont', sans-serif;
}
```

## 📧 Contact Form Setup

### PHP Backend (Optional)

Create `contact/form-handler.php`:

```php
<?php
if ($_POST) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $to = "your-email@example.com";
    $headers = "From: " . $email;
    
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }
}
?>
```

### Third-Party Services

- **Formspree**: Add `action="https://formspree.io/f/YOUR_FORM_ID"` to the form
- **Netlify Forms**: Add `netlify` attribute to the form
- **EmailJS**: Integrate EmailJS for client-side email sending

## 🎯 SEO Optimization

### Meta Tags

Add to `<head>` section in `index.html`:

```html
<meta name="description" content="Shariar Hossain - Mobile App Developer specializing in Flutter and Android development">
<meta name="keywords" content="Flutter Developer, Android Developer, Mobile App Development">
<meta name="author" content="Shariar Hossain">

<!-- Open Graph -->
<meta property="og:title" content="Shariar Hossain - Mobile App Developer">
<meta property="og:description" content="Professional mobile app developer with expertise in Flutter and Android SDK">
<meta property="og:image" content="images/hero/profile.jpg">
<meta property="og:url" content="https://yourwebsite.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Shariar Hossain - Mobile App Developer">
<meta name="twitter:description" content="Professional mobile app developer with expertise in Flutter and Android SDK">
<meta name="twitter:image" content="images/hero/profile.jpg">
```

### Sitemap

Create `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://yourwebsite.com/</loc>
        <lastmod>2025-01-01</lastmod>
        <priority>1.0</priority>
    </url>
</urlset>
```

## 🛠️ Development Tips

### Local Development

1. Use a local server (VS Code Live Server, Python `http.server`, etc.)
2. Test on multiple devices and browsers
3. Use browser dev tools for responsive testing

### Performance Optimization

- Compress images before uploading
- Minify CSS and JavaScript for production
- Use CDN for external libraries
- Enable gzip compression on server

### Browser Compatibility

- Tested on Chrome, Firefox, Safari, Edge
- Mobile responsive design
- CSS Grid and Flexbox fallbacks included

## 📱 Mobile Optimization

- Touch-friendly navigation
- Optimized button sizes
- Fast loading times
- Readable font sizes
- Proper viewport configuration

## 🎨 Animation Details

### AOS (Animate On Scroll)

Animations are configured in `js/main.js`:

```javascript
AOS.init({
    duration: 1000,    // Animation duration
    once: true,        // Animate only once
    offset: 100        // Trigger point
});
```

### Custom Animations

- Typing animation for hero title
- Floating cards animation
- Hover effects on cards
- Smooth scrolling between sections

## 🔧 Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and ensure images exist
2. **Animations not working**: Verify AOS library is loaded
3. **Mobile menu not closing**: Check Bootstrap JavaScript is included
4. **Contact form not working**: Set up backend or use form service

### Debug Mode

Add this to `js/main.js` for debugging:

```javascript
console.log('Portfolio initialized');
console.log('Content loaded:', portfolioContent);
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support:
- Email: shariarhossin99@gmail.com
- LinkedIn: [linkedin.com/in/shariar99](https://linkedin.com/in/shariar99)
- YouTube: [youtube.com/@codeprobro](https://youtube.com/@codeprobro)

---

**Built with ❤️ by Shariar Hossain**