# Building Your Personal Website with React: A Beginner's Guide

This guide will teach you how to customize your React app to create a professional personal website. We'll focus on editing `App.js` and `App.css` to build a one-page site with all the sections you need.

## Table of Contents
1. [Understanding the Basics](#understanding-the-basics)
2. [Understanding HTML, CSS, and JavaScript](#understanding-html-css-and-javascript)
3. [Your First Edit: Changing the Content](#your-first-edit-changing-the-content)
4. [Changing the Website Logo](#changing-the-website-logo)
5. [Building Your Personal Website Structure](#building-your-personal-website-structure)
6. [Styling Your Website](#styling-your-website)
7. [Adding Links and Images](#adding-links-and-images)
8. [Complete Example: Full Personal Website](#complete-example-full-personal-website)

---

## Understanding the Basics

### What is React?

React is a JavaScript library for building websites. Think of it like building with LEGO blocks - you create small pieces (called "components") and combine them to make a complete website.

### The Files You'll Work With

In your React project, you'll mainly edit two files:

- **`src/App.js`** - This contains the structure and content of your website (what appears on the page)
- **`src/App.css`** - This controls how your website looks (colors, spacing, fonts, layout)

### How React Works

When you write code in `App.js`, you're writing a mix of JavaScript and HTML-like syntax called JSX. React takes this code and creates the actual webpage that people see in their browser.

---

## Understanding HTML, CSS, and JavaScript

Before we dive into React, let's quickly understand the three languages that make websites work:

### HTML (Structure)

HTML defines the structure and content of your webpage using "tags". Tags are enclosed in angle brackets `< >`.

**Common HTML tags you'll use:**

```html
<div>A container for other elements</div>
<h1>A large heading</h1>
<h2>A smaller heading</h2>
<p>A paragraph of text</p>
<a href="url">A link</a>
<img src="image.jpg" alt="description" />
<button>A clickable button</button>
<header>Top section of the page</header>
<footer>Bottom section of the page</footer>
<section>A section of content</section>
```

**How tags work:**
- Most tags have an opening tag `<div>` and closing tag `</div>`
- Self-closing tags like `<img />` don't need a separate closing tag
- Tags can have "attributes" like `href` or `src` that provide extra information
- Tags can be nested inside each other

**Example:**
```html
<div>
  <h1>Welcome</h1>
  <p>This is a paragraph inside a div.</p>
</div>
```

### CSS (Styling)

CSS (Cascading Style Sheets) controls how your HTML elements look. CSS uses "selectors" to target elements and "properties" to style them.

**CSS Syntax:**
```css
selector {
  property: value;
  another-property: value;
}
```

**Common CSS properties:**
```css
.my-class {
  color: blue;                  /* Text color */
  background-color: white;       /* Background color */
  font-size: 18px;              /* Text size */
  font-weight: bold;            /* Text weight */
  margin: 20px;                 /* Space outside element */
  padding: 10px;                /* Space inside element */
  border: 1px solid black;      /* Border around element */
  text-align: center;           /* Align text */
  display: flex;                /* Flexible layout */
  width: 100%;                  /* Element width */
  height: 200px;                /* Element height */
}
```

**How to target elements:**
- **Class selector:** `.className` targets elements with that class
- **ID selector:** `#idName` targets elements with that ID
- **Element selector:** `div` targets all div elements

**Example:**
```css
/* Targets all h1 elements */
h1 {
  color: navy;
  font-size: 36px;
}

/* Targets elements with class="header" */
.header {
  background-color: lightblue;
  padding: 20px;
}
```

### JavaScript (Behavior & Logic)

JavaScript makes your website interactive and handles logic. In React, you'll use JavaScript to:
- Store data in variables
- Create functions that run when something happens
- Determine what content to show

**JavaScript basics you'll use:**

```javascript
// Variables (storing data)
const name = "John";           // String (text)
const age = 25;                // Number
const isStudent = true;        // Boolean (true/false)
const hobbies = ["coding", "reading"];  // Array (list)

// Functions (reusable code)
function greet() {
  return "Hello!";
}

// Arrow functions (shorter syntax, common in React)
const greet = () => {
  return "Hello!";
}

// Objects (grouping related data)
const person = {
  name: "John",
  age: 25,
  email: "john@email.com"
};

// Accessing object properties
console.log(person.name);  // Prints "John"

// Template literals (combining strings with variables)
const message = `My name is ${name} and I am ${age} years old`;
```

### How They Work Together in React

In `App.js`, you'll see all three languages working together:

```javascript
// JavaScript - defining data
const name = "Your Name";

// JavaScript function that returns JSX (HTML-like structure)
function App() {
  return (
    // JSX - looks like HTML
    <div className="App">
      <h1>Hello, {name}!</h1>
      <p className="intro">Welcome to my website</p>
    </div>
  );
}
```

Then in `App.css`:
```css
/* CSS - styling those elements */
.App {
  text-align: center;
}

.intro {
  color: gray;
  font-size: 18px;
}
```

**Important JSX differences from HTML:**
- Use `className` instead of `class` (because `class` is a JavaScript keyword)
- Use `{}` to insert JavaScript expressions
- Self-closing tags must end with `/>`  (like `<img />`)
- Style attribute uses objects: `style={{color: 'red'}}`

---

## Your First Edit: Changing the Content

Let's start by making a simple change to see how React works.

### Step 1: Open App.js

1. Open VS Code
2. In the file explorer (left side), expand the `src` folder
3. Click on `App.js`

You'll see code that looks like this:

```javascript
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

### Step 2: Understanding the Code

Let's break down what you're seeing:

- **`import`** statements at the top bring in files you'll use
- **`function App()`** is your main component (the entire webpage)
- **`return (`** starts the JSX - the structure of your page
- **`<div>`, `<header>`, `<p>`, etc.** are HTML elements that create the structure
- **`className`** is how you assign CSS classes to elements (used for styling)
- **`export default App`** makes this component available to the rest of your app

### Step 3: Make Your First Change

Let's change the text to make it your own:

1. Find the line with `<p>Edit <code>src/App.js</code>...</p>`
2. Replace it with:
```javascript
<p>Welcome to My Personal Website</p>
```
3. Find the line with `Learn React` link text
4. Change it to your name:
```javascript
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  John Smith
</a>
```
5. Save the file (`Ctrl+S` on Windows, `Cmd+S` on Mac)
6. In the terminal, run `npm start` if the dev server isn't already running
7. Your browser will automatically refresh and show your changes!

---

## Changing the Website Logo

The spinning React logo is nice, but you'll want your own!

### Step 1: Prepare Your Logo

1. Find or create an image you want to use as your logo
2. **Rename it** to something simple like `logo.png` or `mylogo.jpg`
3. **Move it** into the `src` folder of your project
   - You can drag and drop it in VS Code's file explorer

### Step 2: Update App.js

1. At the top of `App.js`, find this line:
```javascript
import logo from './logo.svg';
```

2. Change it to match your image filename:
```javascript
import logo from './logo.png';
```
   - If your file is named differently, use that name
   - Make sure to include the file extension (.png, .jpg, etc.)

3. Save the file

Your new logo should now appear! The logo is already being used in the `<img>` tag, so you don't need to change anything else.

### Step 3: Adjust the Logo Style (Optional)

If your logo is too big or spinning (which might not suit your image), edit `App.css`:

1. Open `App.css`
2. Find `.App-logo` (around line 8)
3. Modify it:

```css
.App-logo {
  height: 150px;  /* Change this to adjust size */
  /* Remove or comment out the animation line if you don't want it to spin */
  /* animation: App-logo-spin infinite 20s linear; */
}
```

4. Save the file and check your website

---

## Building Your Personal Website Structure

Now let's build a proper personal website! We'll create sections for different parts of your portfolio.

### Understanding the Structure

A typical personal website has:
- **Header** - Your name and navigation (at the top)
- **About** - Introduction and photo
- **Projects** - Showcase your work
- **Experience** - Your work history or education
- **Involvement** - Clubs, organizations, volunteer work
- **Footer** - Contact info and social links (at the bottom)

### Step 1: Clear the Template Code

Let's start fresh. Replace everything in your `App.js` with this basic structure:

```javascript
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Your Name</h1>
        <p>Software Developer | Student | Creator</p>
      </header>

      <main className="main-content">
        <section className="about" id="about">
          <h2>About Me</h2>
          <p>Write a brief introduction about yourself here.</p>
        </section>

        <section className="projects" id="projects">
          <h2>Projects</h2>
          <p>Your projects will go here.</p>
        </section>

        <section className="experience" id="experience">
          <h2>Experience</h2>
          <p>Your work experience will go here.</p>
        </section>

        <section className="involvement" id="involvement">
          <h2>Involvement</h2>
          <p>Your activities and organizations will go here.</p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
```

**What's happening here:**
- `<header>` contains your name and title
- `<main>` wraps all your content sections
- Each `<section>` represents a different part of your portfolio
- `id="about"` allows you to link directly to sections (we'll use this later)
- `<footer>` contains copyright info and will hold social links

### Step 2: Add Real Content

Now replace the placeholder text with your actual information:

```javascript
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Jane Doe</h1>
        <p>Computer Science Student | Web Developer | Problem Solver</p>
      </header>

      <main className="main-content">
        <section className="about" id="about">
          <h2>About Me</h2>
          <p>
            Hi! I'm a junior studying Computer Science at State University. 
            I'm passionate about creating web applications that solve real-world 
            problems. In my free time, I enjoy hiking, reading sci-fi novels, 
            and contributing to open-source projects.
          </p>
        </section>

        <section className="projects" id="projects">
          <h2>Projects</h2>
          <div className="project-item">
            <h3>Weather Dashboard</h3>
            <p>
              A React application that displays real-time weather data for 
              multiple cities. Uses OpenWeather API and includes 5-day forecasts.
            </p>
          </div>
          <div className="project-item">
            <h3>Task Manager</h3>
            <p>
              A full-stack to-do list application built with React and Node.js. 
              Features include user authentication and cloud storage.
            </p>
          </div>
        </section>

        <section className="experience" id="experience">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Software Engineering Intern</h3>
            <p className="company">Tech Company Inc. | Summer 2024</p>
            <p>
              Developed new features for the company's web platform using React 
              and Python. Collaborated with a team of 5 engineers using Agile methodology.
            </p>
          </div>
          <div className="experience-item">
            <h3>Teaching Assistant</h3>
            <p className="company">State University | Fall 2023 - Present</p>
            <p>
              Assist in teaching Introduction to Programming. Hold office hours 
              and grade assignments for a class of 50 students.
            </p>
          </div>
        </section>

        <section className="involvement" id="involvement">
          <h2>Involvement</h2>
          <div className="involvement-item">
            <h3>President, Computer Science Club</h3>
            <p>
              Lead a team organizing workshops and hackathons. Grew membership 
              from 20 to 80 students in one year.
            </p>
          </div>
          <div className="involvement-item">
            <h3>Volunteer, Code for Good</h3>
            <p>
              Teach basic programming to high school students from underserved 
              communities. Dedicate 4 hours per week.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Jane Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
```

**Key Points:**
- Use `<h2>` for section titles, `<h3>` for item titles
- Wrap each project/experience/involvement in a `<div>` with a class name
- This structure will make styling easier later
- Replace all the example text with your own information!

---

## Styling Your Website

Now that we have content, let's make it look professional. Open `App.css` and replace everything with this:

```css
/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.App {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header Styles */
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.header h1 {
  font-size: 48px;
  margin-bottom: 10px;
  font-weight: 700;
}

.header p {
  font-size: 20px;
  font-weight: 300;
}

/* Main Content Area */
.main-content {
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  width: 100%;
}

/* Section Styles */
section {
  margin-bottom: 60px;
}

section h2 {
  font-size: 32px;
  margin-bottom: 25px;
  color: #667eea;
  border-bottom: 3px solid #667eea;
  padding-bottom: 10px;
}

section h3 {
  font-size: 22px;
  margin-bottom: 10px;
  color: #333;
}

section p {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
}

/* Project Items */
.project-item {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 20px;
  border-left: 4px solid #667eea;
  transition: transform 0.2s, box-shadow 0.2s;
}

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Experience Items */
.experience-item {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
}

.experience-item:last-child {
  border-bottom: none;
}

.company {
  color: #667eea;
  font-weight: 600;
  font-style: italic;
  margin-bottom: 10px;
}

/* Involvement Items */
.involvement-item {
  margin-bottom: 25px;
}

/* Footer Styles */
.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 30px 20px;
  margin-top: auto;
}

.footer p {
  margin: 0;
  color: white;
}

/* Responsive Design - Makes it look good on phones */
@media (max-width: 768px) {
  .header h1 {
    font-size: 36px;
  }
  
  .header p {
    font-size: 18px;
  }
  
  section h2 {
    font-size: 28px;
  }
}
```

**What this CSS does:**
- Sets a purple gradient header
- Centers content with max width of 900px
- Adds hover effects to projects
- Creates visual separation between sections
- Makes the site responsive (looks good on phones)
- Adds color and spacing to make it professional

**Customizing Colors:**

To change the color scheme, find these parts and modify:
- `.header` background: Change `#667eea` and `#764ba2` to your colors
- Section headings: Change `color: #667eea;`
- Project left border: Change `border-left: 4px solid #667eea;`

**Try these color combinations:**
- Blue: `#2196F3` and `#21CBF3`
- Green: `#11998e` and `#38ef7d`
- Red: `#eb3349` and `#f45c43`
- Orange: `#f46b45` and `#eea849`

---

## Adding Links and Images

### Adding Social Media Links

Let's add LinkedIn and GitHub links to your footer:

**Step 1:** Update your footer in `App.js`:

```javascript
<footer className="footer">
  <div className="social-links">
    <a 
      href="https://linkedin.com/in/yourprofile" 
      target="_blank" 
      rel="noopener noreferrer"
      className="social-link"
    >
      LinkedIn
    </a>
    <a 
      href="https://github.com/yourusername" 
      target="_blank" 
      rel="noopener noreferrer"
      className="social-link"
    >
      GitHub
    </a>
    <a 
      href="mailto:your.email@example.com"
      className="social-link"
    >
      Email
    </a>
  </div>
  <p>&copy; 2024 Jane Doe. All rights reserved.</p>
</footer>
```

**Important parts:**
- `href="..."` is where the link goes
- `target="_blank"` opens the link in a new tab
- `rel="noopener noreferrer"` is for security
- `mailto:` creates an email link
- Replace the URLs with your actual profiles!

**Step 2:** Style the links in `App.css`:

Add this to your CSS file (before the media query):

```css
.social-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
}

.social-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.social-link:hover {
  background-color: white;
  color: #333;
}
```

### Adding Your Photo

Let's add a profile photo to your About section:

**Step 1:** Add your photo to the project:
1. Put your photo in the `src` folder (e.g., `profile.jpg`)
2. Recommended: use a square image, around 500x500 pixels

**Step 2:** Import it in `App.js`:

At the top of the file with the other imports:
```javascript
import './App.css';
import profilePhoto from './profile.jpg';
```

**Step 3:** Add the image to your About section:

```javascript
<section className="about" id="about">
  <h2>About Me</h2>
  <div className="about-content">
    <img src={profilePhoto} alt="Jane Doe" className="profile-photo" />
    <p>
      Hi! I'm a junior studying Computer Science at State University. 
      I'm passionate about creating web applications that solve real-world 
      problems. In my free time, I enjoy hiking, reading sci-fi novels, 
      and contributing to open-source projects.
    </p>
  </div>
</section>
```

**Step 4:** Style the photo in `App.css`:

Add this CSS:

```css
.about-content {
  display: flex;
  gap: 30px;
  align-items: center;
}

.profile-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #667eea;
  flex-shrink: 0;
}

/* Make it stack on mobile */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    text-align: center;
  }
}
```

This creates a circular profile photo next to your bio text!

### Adding Links to Projects

Make your project titles clickable:

```javascript
<div className="project-item">
  <h3>
    <a 
      href="https://github.com/yourusername/weather-dashboard" 
      target="_blank" 
      rel="noopener noreferrer"
      className="project-link"
    >
      Weather Dashboard
    </a>
  </h3>
  <p>
    A React application that displays real-time weather data for 
    multiple cities. Uses OpenWeather API and includes 5-day forecasts.
  </p>
</div>
```

Style the project links in CSS:

```css
.project-link {
  color: #667eea;
  text-decoration: none;
  transition: color 0.3s;
}

.project-link:hover {
  color: #764ba2;
  text-decoration: underline;
}
```

---

## Complete Example: Full Personal Website

Here's a complete example putting everything together:

### App.js - Complete Version

```javascript
import './App.css';
import profilePhoto from './profile.jpg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Jane Doe</h1>
        <p>Computer Science Student | Web Developer | Problem Solver</p>
      </header>

      <main className="main-content">
        <section className="about" id="about">
          <h2>About Me</h2>
          <div className="about-content">
            <img src={profilePhoto} alt="Jane Doe" className="profile-photo" />
            <p>
              Hi! I'm a junior studying Computer Science at State University. 
              I'm passionate about creating web applications that solve real-world 
              problems. In my free time, I enjoy hiking, reading sci-fi novels, 
              and contributing to open-source projects.
            </p>
          </div>
        </section>

        <section className="projects" id="projects">
          <h2>Projects</h2>
          <div className="project-item">
            <h3>
              <a 
                href="https://github.com/yourusername/weather-dashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                Weather Dashboard
              </a>
            </h3>
            <p>
              A React application that displays real-time weather data for 
              multiple cities. Uses OpenWeather API and includes 5-day forecasts.
            </p>
          </div>
          <div className="project-item">
            <h3>
              <a 
                href="https://github.com/yourusername/task-manager" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                Task Manager
              </a>
            </h3>
            <p>
              A full-stack to-do list application built with React and Node.js. 
              Features include user authentication and cloud storage.
            </p>
          </div>
        </section>

        <section className="experience" id="experience">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Software Engineering Intern</h3>
            <p className="company">Tech Company Inc. | Summer 2024</p>
            <p>
              Developed new features for the company's web platform using React 
              and Python. Collaborated with a team of 5 engineers using Agile methodology.
            </p>
          </div>
          <div className="experience-item">
            <h3>Teaching Assistant</h3>
            <p className="company">State University | Fall 2023 - Present</p>
            <p>
              Assist in teaching Introduction to Programming. Hold office hours 
              and grade assignments for a class of 50 students.
            </p>
          </div>
        </section>

        <section className="involvement" id="involvement">
          <h2>Involvement</h2>
          <div className="involvement-item">
            <h3>President, Computer Science Club</h3>
            <p>
              Lead a team organizing workshops and hackathons. Grew membership 
              from 20 to 80 students in one year.
            </p>
          </div>
          <div className="involvement-item">
            <h3>Volunteer, Code for Good</h3>
            <p>
              Teach basic programming to high school students from underserved 
              communities. Dedicate 4 hours per week.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="social-links">
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="social-link"
          >
            Email
          </a>
        </div>
        <p>&copy; 2024 Jane Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
