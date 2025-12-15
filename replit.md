# InBravo's WorkStation - Personal Wiki

## Overview
This is a personal wiki/knowledge base website belonging to Amit Dixit. It serves as a reference matrix for various technical and personal topics.

## Project Structure
- `index.html` - Main entry point
- `html/` - Various topic pages (Java, Scala, AWS, Databricks, Design, etc.)
- `css/` - Stylesheets (inbravo.css, lightbox.css)
- `js/` - JavaScript files (jQuery, Lightbox, custom scripts)
- `images/` - Image assets organized by topic
- `docs/` - Documents including PDFs, resumes, certificates
- `radar/` and `cde-radar/` - Technology Radar visualizations (inspired by ThoughtWorks Tech Radar)
- `plans/` - Planning documents

## Technologies Used
- HTML5, CSS3, JavaScript
- jQuery 1.11.3
- Lightbox for image galleries
- Protovis 3.2 for Technology Radar SVG visualizations
- Jasmine 1.0.1 for JavaScript testing

## Running Locally
This is a static website served with Python's built-in HTTP server:
```
python -m http.server 5000 --bind 0.0.0.0
```

## Deployment
Configured as a static site deployment serving from the root directory.

## Recent Changes
- December 2025: Programmer-focused dark theme redesign
  - Dark theme with cyan/purple/pink neon accents
  - JetBrains Mono monospace font for code aesthetic
  - Terminal-style hero with animated typing cursor
  - Glassmorphism cards with hover glow effects
  - Gradient text effects and subtle grid background
  - "Available for collaboration" badge with pulsing animation
  - Stats section showing experience metrics
  - Mobile-responsive design with breakpoints at 768px and 480px
  - Enhanced header with:
    - Animated gradient logo with color shifting
    - Rotating programming quotes in top bar
    - Keyboard shortcuts hint (Ctrl+K to search)
    - Online/Away status indicator
    - Dropdown menus for Code and Data categories
    - Tech Radar link with spinning icon
    - Search overlay with quick links
    - Theme toggle button (dark/light)
    - Resume download button
    - "Let's Connect" CTA button
    - Shrinking header on scroll
    - Mobile hamburger menu with slide-in panel
- December 2025: Migrated to Replit environment
- Fixed lightbox.min.css reference to lightbox.css
