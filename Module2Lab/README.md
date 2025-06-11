# Module 2 Lab Exercises

This repository contains lab exercises for Module 2, covering fundamental web development concepts including semantic HTML, CSS styling, responsive design, and modern layout techniques with Flexbox.

## Overview

The Module 2 lab exercises progress from basic HTML structure to building responsive websites. Each exercise builds upon previous concepts while introducing new skills essential for modern web development.

## Skills Developed

- **Semantic HTML5:** Document structure, forms, multimedia elements, accessibility
- **CSS Fundamentals:** Selectors, box model, positioning, typography
- **Layout Systems:** Flexbox for modern responsive layouts
- **Web Forms:** Input types, validation, form submission
- **Responsive Design:** Media queries, mobile-first approach
- **Development Workflow:** Live Server, browser inspection tools
- **Professional Web Development:** Building complete websites from scratch

## Software Engineering
### Module 2 - Lab Exercises

Welcome to Module 2 of the IOD Software Engineering course!

This is a handy guide to help students make sure their lab work is easily understood and completed. Make sure to ask your trainers if you have any questions about how to complete these exercises.

Trainers will release answers once everyone has had a chance to complete them, but often there are many possible answers so don't worry if yours are different. The extensions are there for students who have extra time after completing the main exercises - they are not required.

---

## Lab Exercise 1: HTML Fundamentals
**Slide 50**

**Files:** `lab-1-html/src/` containing:
- `index.html` - Main HTML page with semantic structure
- `form.html` - Interactive form page
- `db.json` - JSON server data for form submission
- `assets/` - Media files (images, audio, video)

**Goal:** To practise using common HTML tags and become familiar with best practice usage for building a modern web page.

**What it showcases:** Semantic HTML5 structure, multimedia integration, form handling, and accessibility best practices

### Instructions:
Download the lab-1-html folder from Google Drive (same place as this document). Use the files in the src folder as a starter for completing the instructions in instructions.docx.

### Key Features Implemented:
- **Semantic HTML Structure:** Proper use of `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`
- **Comprehensive Element Coverage:** Divs, spans, paragraphs, pre-formatted text, lists, and tables
- **Advanced Table Features:** Complex tables with `colspan`, `rowspan`, `<thead>`, `<tbody>`
- **Multimedia Integration:** Images, video, and audio with proper fallback content
- **Interactive Forms:** Complete form with text inputs, radio buttons, checkboxes, and dropdowns
- **Meta Tags & SEO:** Proper meta tags for description, keywords, author, and viewport
- **Accessibility Features:** Alt attributes, proper form labels, and semantic markup

### Template Structure:
```html
<!doctype html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="description" content="A sample website demonstrating basic HTML structure." />
        <meta name="keywords" content="HTML, meta tags, sample, website, beginner" />
        <meta name="author" content="Your Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Sample Website</title>
    </head>
    <body>
        <header>
            <nav>
                <a href="index.html">Home</a>
                <a href="form.html">Form</a>
            </nav>
        </header>
        <main>
            <!-- Content sections -->
        </main>
        <footer>Copyright &copy; 2024</footer>
    </body>
</html>
```

### Submission:
Create a new folder for Module 2 that you can include in a GitHub repository. You may wish to re-use the same private repo from Module 1 and include a new folder in there, or create a separate private repo. Group all Module 2 exercises in the same folder, with separate subfolders for each exercise, and commit your changes once complete. Ensure your trainers have access.

### Extension:
Follow the instructions in instructions-2-optional.docx to set up a mock testing back-end server, and link it to your form to receive the submitted data.

#### Setting up JSON Server:
1. Open a new terminal tab in VS Code
2. Start the server: `npx json-server@0.17.4 db.json`
3. Update form action: `<form method="POST" action="http://localhost:3000/profile">`
4. Test form submission and view results at `http://localhost:3000/profile`

### Resources & Extra Learning:
- https://developer.mozilla.org/en-US/docs/Learn/HTML
- https://developer.mozilla.org/en-US/docs/Learn/Forms
- https://web.dev/learn/html/welcome
- https://html.com/
- https://developer.mozilla.org/en-US/curriculum/core/semantic-html/

---

## Lab Exercise 2: CSS Fundamentals
**Slide 69**

**Files:** `lab-2-css/src/` containing:
- `index.html` - HTML structure with CSS classes and IDs
- `index.css` - Comprehensive CSS styling
- `assets/` - Images and media files

**Goal:** To practise using common CSS selectors and rules and become familiar with best practice usage for styling a responsive web page.

**What it showcases:** CSS selectors, box model mastery, positioning techniques, typography, and modern CSS features

### Key Concepts Covered:

#### I. Selectors and Combinators
- **Type Selectors:** Styling all elements of a specific type
- **Class Selectors:** Targeting elements with specific classes
- **ID Selectors:** Styling unique elements
- **Descendant Combinators:** Styling nested elements
- **Child Combinators:** Targeting direct children only

#### II. Box Model and Common Properties
- **Margin & Padding:** Different syntax variations (4-value, 2-value, 1-value)
- **Width & Height:** Various units (px, rem, vh, vw, %)
- **Borders:** Styling, thickness, and visual effects
- **Box-sizing:** Understanding content-box vs border-box
- **Overflow:** Managing content that doesn't fit
- **Border-radius:** Creating rounded corners and circles
- **Background Images:** Positioning, sizing, and repeat options

#### III. Positioning
- **Absolute Positioning:** Fixed positioning relative to viewport or parent
- **Relative Positioning:** Creating positioning contexts
- **Sticky Positioning:** Elements that stick during scroll

#### IV. Typography & Web Fonts
- **Google Fonts Integration:** Loading and using web fonts
- **Text Properties:** Color, size, weight, alignment, spacing
- **Text Transformation:** Uppercase, lowercase, capitalize
- **Text Decoration:** Underlines, overlines, line-through

#### V. Link Styling
- **Pseudo-classes:** :link, :visited, :hover, :active, :focus
- **State Management:** Different styles for different link states

#### VI. Modern CSS Features
- **calc() Function:** Dynamic calculations for layouts
- **Viewport Units:** vw, vh for responsive design
- **Flexible Layouts:** Creating fluid and fixed-width columns

### Advanced CSS Example:
```css
.fluid-col {
    display: inline-block;
    width: calc(100% - 350px); /* Dynamic width calculation */
    background-color: #90ee90;
    vertical-align: top;
}

.text-style {
    font-family: "Fredericka the Great", serif; /* Google Font */
    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
    letter-spacing: 1px;
}
```

### Submission:
Create a new folder for Exercise 2 in your Module 2 folder/repo. Store and commit your completed code there and ensure your trainers have access.

### Extension:
Test your knowledge with the CSS Selector Game: https://toolness.github.io/css-selector-game/ and practice by trying to style a biography page: https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Styling_a_biography_page

### Resources & Extra Learning:
- https://developer.mozilla.org/en-US/docs/Learn/CSS
- https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms
- https://web.dev/learn/css
- https://blog.hubspot.com/website/css-tutorial
- https://www.htmldog.com/guides/css/beginner/
- https://developer.mozilla.org/en-US/curriculum/core/css-fundamentals/

---

## Lab Exercise 3: Flexbox Layout System
**Slide 80**

**Files:** `lab-3-flexbox/src/` containing:
- `index.html` - HTML structure with flexbox containers
- `index.css` - Flexbox styling and layout rules

**Goal:** To become familiar with using flexbox as a layout model to style responsive web pages.

**What it showcases:** Modern CSS layout with Flexbox, responsive design patterns, and navigation systems

### Key Flexbox Concepts:

#### 1. Basic Flexbox
- **Flex Container:** `display: flex`
- **Flex Items:** Using `flex` property for proportional sizing
- **Flex Ratios:** Understanding flex: 1, flex: 2, etc.

#### 2. Centering with Flexbox
- **Horizontal Centering:** `justify-content: center`
- **Vertical Centering:** `align-items: center`
- **Perfect Centering:** Both properties combined

#### 3. Space Distribution
- **Space Between:** `justify-content: space-between`
- **Space Around:** `justify-content: space-around`
- **Space Evenly:** `justify-content: space-evenly`

#### 4. Wrapping and Direction
- **Flex Wrap:** `flex-wrap: wrap`, `wrap-reverse`
- **Flex Direction:** `row`, `column`, `row-reverse`, `column-reverse`
- **Flex Basis:** Setting initial size before growing/shrinking

#### 5. Advanced Flexbox
- **Order Property:** Reordering items without changing HTML
- **Flex Grow:** Distributing available space
- **Navigation Systems:** Professional horizontal menus

### Professional Navigation Example:
```css
.flex-menu {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 10px;
    justify-content: space-between;
}

.flex-menu li {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Reorder items without changing HTML */
.fourth-item {
    order: 5;
}
```

### Functional CSS Approach:
This lab uses functional CSS naming conventions:
- `.m-20` - 20px margin
- `.h-80` - 80px height
- `.background-1` - Color scheme 1
- `.flex-center` - Centering utilities

### Submission:
Create a new folder for Exercise 3 in your Module 2 folder/repo. Store and commit your completed code there and ensure your trainers have access.

### Extension:
Choose a project from https://www.frontendmentor.io/challenges?difficulty=1&languages=CSS&type=free to try and implement.

### Resources & Extra Learning:
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
- https://www.codecademy.com/courses/learn-css-flexbox-and-grid/lessons/learn-flexbox/exercises/what-is-flexbox
- https://v2.scrimba.com/learn-flexbox-c0k
- https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
- https://web.dev/learn/css/flexbox

---

## Lab Exercise 4: Build Your Own Website
**Slide 81**

**Files:** `lab-4-build-your-own-website/README.md`

**Goal:** To practise using HTML and CSS to build a real-world simple one-page resume website.

**What it showcases:** Complete website development from scratch, practical application of all learned concepts

### Instructions:
Follow the instructions in the lab-4-build-your-own-website folder from Google Drive (same place as this document). Start from scratch and don't use a template. It may help to sketch a quick design first or find a style you want to copy, then build the HTML structure and style it with CSS (stored in separate files).

### Skills to Apply:
- **Semantic HTML:** Proper document structure
- **CSS Layouts:** Flexbox for positioning and alignment
- **Visual Design:** Colors, typography, spacing
- **Responsive Elements:** Images and content scaling
- **Professional Presentation:** Clean, modern design

### Recommended Structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Resume</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Your Name</h1>
        <p>Your Professional Title</p>
    </header>
    <main>
        <section class="about">
            <!-- About section -->
        </section>
        <section class="experience">
            <!-- Work experience -->
        </section>
        <section class="skills">
            <!-- Skills and technologies -->
        </section>
        <section class="contact">
            <!-- Contact information -->
        </section>
    </main>
</body>
</html>
```

### Personal Implementation:
The completed lab references a personal website hosted at: https://github.com/tatoslover/tatoslover.github.io

This demonstrates the practical application of learned skills in a real-world project using GitHub Pages for hosting.

### Submission:
Create a new folder for Exercise 4 in your Module 2 folder/repo. Store and commit your completed code there and ensure your trainers have access.

### Extension:
Add some more advanced features to your site, by copying and personalising elements from other professional resume websites (some examples here: https://www.wix.com/blog/resume-website-examples or find your own).

### Resources & Extra Learning:
- https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML
- https://www.browserstack.com/guide/build-a-website-using-html-css
- https://www.w3schools.com/howto/howto_website_create_resume.asp

---

## Lab Exercise 5: Responsive Website Design
**Slide 92**

**Files:** `lab-5-responsive-website/README.md`

**Goal:** To practise using responsive HTML and CSS to build a real-world simple one-page resume website.

**What it showcases:** Mobile-first responsive design, media queries, and cross-device compatibility

### Instructions:
Follow the instructions in the lab-5-responsive-website folder from Google Drive (same place as this document). Start with the same HTML and CSS from Exercise 4 and add media queries to adjust your site to look good on all devices (use the device toolbar in the Dev Inspector to view on phone-sized screens).

### Responsive Design Principles:
- **Mobile-First Approach:** Design for mobile, then enhance for larger screens
- **Flexible Layouts:** Use percentages and flexible units
- **Media Queries:** Breakpoints for different screen sizes
- **Flexible Images:** Ensure images scale properly
- **Touch-Friendly Navigation:** Larger touch targets for mobile

### Common Media Query Breakpoints:
```css
/* Mobile styles (default) */
.container {
    flex-direction: column;
    padding: 10px;
}

/* Tablet styles */
@media (min-width: 768px) {
    .container {
        flex-direction: row;
        padding: 20px;
    }
}

/* Desktop styles */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px;
    }
}
```

### Testing Responsive Design:
1. Use Chrome DevTools Device Toolbar
2. Test various screen sizes (mobile, tablet, desktop)
3. Ensure no horizontal scrolling on mobile
4. Verify touch targets are appropriately sized
5. Check font sizes are readable on small screens

### Personal Implementation:
The completed lab references the same personal website as Lab 4, now enhanced with responsive design: https://github.com/tatoslover/tatoslover.github.io

### Submission:
Create a new folder for Exercise 5 in your Module 2 folder/repo. Store and commit your completed code there and ensure your trainers have access.

### Extension:
Choose a project from https://www.frontendmentor.io/challenges?difficulty=1&languages=CSS&type=free to try and implement.

### Resources & Extra Learning:
- https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
- https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries
- https://www.w3schools.com/css/css_rwd_intro.asp
- https://web.dev/learn/design/welcome

---

## Assessment Criteria

Each lab exercise is evaluated on:

### Technical Implementation
- **Code Quality:** Clean, semantic, and well-structured code
- **Best Practices:** Following modern web development standards
- **Functionality:** All features working as intended
- **Cross-browser Compatibility:** Consistent appearance across browsers

### Design & User Experience
- **Visual Design:** Professional and aesthetically pleasing
- **Responsiveness:** Proper adaptation to different screen sizes
- **Accessibility:** Semantic markup and proper contrast
- **Usability:** Intuitive navigation and interaction

### Professional Development
- **Documentation:** Clear README files and code comments
- **Version Control:** Proper Git workflow and commit messages
- **Project Structure:** Organized file structure and naming conventions
- **Problem Solving:** Effective use of resources and debugging skills

## Getting Started

1. **Setup Development Environment:**
   - Install VS Code with Live Server extension
   - Set up your Module 2 repository structure
   - Ensure Git is configured for version control

2. **Lab Progression:**
   - Complete labs in order (1-5)
   - Each lab builds upon previous concepts
   - Extensions are optional but recommended for additional practice

3. **Resources:**
   - Use browser Developer Tools for debugging
   - Reference MDN documentation for HTML/CSS properties
   - Practice with online tools and games when suggested

4. **Submission:**
   - Commit code regularly with descriptive messages
   - Ensure trainers have repository access
   - Include README files for lab 4 and 5 projects

## Troubleshooting

### Common Issues:
- **Live Server not working:** Check file paths and ensure index.html is in root
- **CSS not loading:** Verify link tag href attribute is correct
- **Flexbox not working:** Ensure parent has `display: flex`
- **Media queries not working:** Check syntax and screen size breakpoints
- **Form submission issues:** Verify JSON server is running on correct port

### Best Practices:
- Use semantic HTML5 elements
- Follow CSS naming conventions
- Comment complex code sections
- Test in multiple browsers and devices
- Validate HTML and CSS regularly

---

**Note:** This module provides the foundation for modern web development. Master these concepts before moving to advanced frameworks and libraries in future modules.