# Ramesh Kumar - Portfolio Website

A clean, responsive, and modern personal portfolio website built with Bootstrap 4 and HTML5. This portfolio showcases professional skills, projects, resume, and contact information.

## Features

- ✨ **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean and minimal design with smooth animations
- 🎯 **Bootstrap 4** - Built on the popular Bootstrap framework
- 🔄 **Smooth Scrolling** - Navigation with scroll spy for seamless section transitions
- 🎭 **Animated Sections** - AOS (Animate On Scroll) library for engaging animations
- 🖼️ **Image Gallery** - Project portfolio with Owl Carousel
- 📝 **Blog Section** - Showcase your latest articles and insights
- 📞 **Contact Form** - Functional contact form for visitor inquiries
- 🎪 **Icon Libraries** - Flaticon, Ionicons, and Icomoon icon sets included
- ⚡ **Fast Loading** - Optimized assets and lazy loading support

## Project Structure

```
clark-master/
├── index.html           # Main portfolio page
├── single.html          # Blog post detail page
├── server.py            # Local development server (Python)
├── css/                 # Stylesheets
│   ├── style.css        # Main custom styles
│   ├── bootstrap.min.css
│   ├── flaticon.css
│   ├── ionicons.min.css
│   └── ...other libraries
├── js/                  # JavaScript files
│   ├── main.js          # Custom scripts
│   ├── jquery.min.js
│   ├── bootstrap.min.js
│   └── ...plugins
├── fonts/               # Font files
│   ├── flaticon/        # Flaticon icon font
│   ├── ionicons/        # Ionicons font
│   └── ...other fonts
├── images/              # Portfolio images
├── scss/                # SCSS source files (if compiling)
└── README.md            # This file
```

## Libraries & Dependencies

### CSS Frameworks
- **Bootstrap 4** - Responsive grid and components
- **Animate.css** - CSS animations
- **AOS.js** - Animate on scroll library

### JavaScript Libraries
- **jQuery 3.2.1** - DOM manipulation
- **Bootstrap JS** - Bootstrap components interaction
- **Owl Carousel** - Image carousel/slider
- **Magnific Popup** - Lightbox for images
- **jQuery Waypoints** - Trigger animations on scroll
- **jQuery Stellar** - Parallax scrolling effects
- **jQuery animateNumber** - Animated counter numbers

### Icon Libraries
- **Flaticon** - Custom icon font (analysis, ideas, flasks, etc.)
- **Ionicons** - Modern icon set
- **Icomoon** - Additional icon set
- **Open Iconic** - Bootstrap icon set

## Getting Started

### Prerequisites
- Python 3.x (for local development server)
- A modern web browser

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ramesh22/new-portfolio.git
   cd new-portfolio
   ```

2. **Start the local development server:**
   ```bash
   py server.py
   ```

3. **Open in browser:**
   - Navigate to `http://localhost:8001` in your web browser
   - The server will serve files with proper MIME types for all assets

### Without Python Server

You can also open `index.html` directly in your browser, or use any HTTP server:

```bash
# Using Node.js http-server
npx http-server -p 8001

# Using Python 3
python -m http.server 8001

# Using Live Server (VS Code Extension)
# Right-click index.html → Open with Live Server
```

## Customization Guide

### Update Personal Information

Edit `index.html` and replace:

- **Name & Title**: Line ~50 - Replace "Ramesh Kumar" with your name
- **About Section**: Line ~115 - Add your bio and personal details
- **Skills**: Line ~300 - Update your skills and proficiency percentages
- **Projects**: Line ~280 - Replace with your portfolio projects
- **Contact Info**: Line ~520 - Update email, phone, address
- **Resume Link**: Line ~145 - Update CV download link

### Modify Styles

Edit `css/style.css` for custom colors, fonts, and spacing. Key sections:

```css
/* Primary color */
.btn-primary { background-color: #your-color; }

/* Font customization */
body { font-family: 'Your Font', sans-serif; }

/* Spacing & layout */
section { padding: 80px 0; }
```

### Change Flaticon Icons

The template includes these Flaticon icons:
- `.flaticon-ideas` - Light bulb icon
- `.flaticon-flasks` - Flask/chemistry icon
- `.flaticon-analysis` - Analytics icon
- `.flaticon-ux-design` - UX design icon
- `.flaticon-web-design` - Web design icon
- `.flaticon-idea` - Creative icon
- `.flaticon-innovation` - Innovation icon

To use different icons from Flaticon:
1. Visit [flaticon.com](https://www.flaticon.com)
2. Download your desired icons as a font set
3. Replace the files in `fonts/flaticon/font/`
4. Update class names in HTML accordingly

## Sections Overview

### Home Section
Carousel with hero images and call-to-action buttons

### About Section
Personal introduction with key information and project counter

### Resume Section
Education and work experience timeline

### Services Section
Skills and services you offer (Web Design, App Development, etc.)

### Skills Section
Progress bars showing proficiency in different technologies

### Projects Section
Portfolio grid showcasing your best work

### Blog Section
Latest articles and insights

### Counter Section
Statistics (Awards, Completed Projects, Happy Clients, etc.)

### Contact Section
Contact information and inquiry form

## Font Loading Fix

If Flaticon icons don't load, the `server.py` script automatically registers proper MIME types for font files:

- `.woff2` → `font/woff2`
- `.woff` → `font/woff`
- `.ttf` → `font/ttf`
- `.eot` → `application/vnd.ms-fontobject`
- `.svg` → `image/svg+xml`

This ensures browsers can properly load and use the fonts.

## Deployment

### GitHub Pages
1. Ensure your repository is public
2. Go to repository **Settings** → **Pages**
3. Select `main` branch as source
4. Your site will be available at `https://github.com-username.github.io/new-portfolio`

### Other Hosting
- Upload files to any web hosting service
- Ensure all paths are relative (they are by default)
- No build process required - it's pure HTML/CSS/JavaScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE 11 (limited support)

## Performance Tips

1. **Optimize Images** - Compress images using tools like TinyPNG before adding
2. **Lazy Loading** - Already implemented for images via AOS
3. **Minification** - CSS and JS files are already minified
4. **Caching** - Browser caching is configured for static assets

## Troubleshooting

### Icons Not Showing
- Ensure you're running the Python server (`py server.py`)
- Check browser console (F12) for 404 errors on font files
- Verify font files exist in `fonts/flaticon/font/`

### Styles Not Loading
- Clear browser cache (Ctrl+Shift+Delete)
- Reload page (Ctrl+F5)
- Check that CSS files are in the correct path

### Smooth Scrolling Not Working
- Ensure JavaScript files are loaded (check console)
- Verify jQuery and Bootstrap JS are included
- Check that anchor links use correct section IDs

## License

This template is based on the **Clark** template from [Colorlib](https://colorlib.com). Used and modified for personal portfolio purposes.

### Attribution
- Original template: [Colorlib - Clark Template](https://themewagon.com/themes/free-one-page-bootstrap-4-html5-personal-portfolio-website-template-clark/)
- Font icons from [Flaticon](https://www.flaticon.com), [Ionicons](https://ionicons.com), and [Icomoon](https://icomoon.io)
- Bootstrap framework: [getbootstrap.com](https://getbootstrap.com)

## Contributing

Feel free to fork this repository and customize it for your needs!

## Contact

For questions or suggestions about this portfolio:
- Email: rameshsrk22@gmail.com
- GitHub: [@Ramesh22](https://github.com/Ramesh22)
- LinkedIn: [Ramesh Kumar](https://linkedin.com/in/ramesh-kumar)

---

**Last Updated:** November 2025