import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const words = [
    "is an Engineer",
    "is a Creator",
    "is a Visionary",
    "is an Innovator",
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing characters
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        // If word is complete, pause then delete
        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting characters
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        // Once complete, move on to next word
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">MC</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#leadership">Leadership</a></li>
        </ul>
      </nav>

      {/* Header / Top Section */}
      <header className="section top-display">
        <h1 className="display-title">
          <span className="name">Moline Charles</span>{" "}
          <span className="typing">{text}</span>
        </h1>
        <p className="description">
          Computer Science Student • Full-Stack Developer <br />
          • AI Enthusiast • Future Tech Leader
        </p>
        <div className="top-buttons">
          <a
            href="https://github.com/Moline-C"
            className="btn github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="GitHub" className="icon" /> View GitHub
          </a>
          <a
            href="https://linkedin.com/in/molinecharles"
            className="btn linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.svg" alt="LinkedIn" className="icon" /> Connect on LinkedIn
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="section about" id="about">
        <div className="section-content">
          <h2>About Me</h2>
          <p>
            I am Moline Charles, a Computer Science Major at the University of Florida with a deep
            passion for software engineering, web development, and game development. I am excited
            about the potential development of these fields through the use of AI and related
            technologies. As an active member of National Society of Black Engineers (NSBE) and
            Colorstack, I am proud to be a part of communities that emphasize diversity,
            empowerment, and excellence in tech. In addition to my academic pursuits, I am always
            looking for opportunities to grow as a developer, and I am committed to using my skills
            to make a positive impact. Whether it is through collaboration or involvement in
            community-driven projects, I am passionate about giving back and supporting others on
            their journey. I am always enthusiastic about connecting with individuals, organizations,
            and innovators who are dedicated to advancing technology in ways that promote equity and
            create meaningful impact.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section experience" id="experience">
        <div className="section-content">
          <h2>Experience</h2>
          <div className="card-container">
            <div className="card">
              <div className="card-header">
                <img
                  src="/company-logo.png"
                  alt="Moe's Chiropractic and & Rehab Center"
                  className="card-logo"
                />
                <div className="card-title-info">
                  <h3 className="job-title">Web Developer</h3>
                  <p className="company-name">Moe's Chiropractic & Rehab Center</p>
                </div>
              </div>
              <p className="date-box">November 2024 - December 2024</p>
              <p className="job-description">
                Designed and launched a responsive Shopify website to enhance client access and online
                visibility, driving a 40% increase in site traffic within the first month. Registered
                and configured a custom domain with SSL to ensure secure and consistent user
                experiences. Integrated third-party booking and contact form applications to
                streamline scheduling, reducing manual administrative work by 60%. Collaborated
                closely with a five-person office team to refine content and optimize user flow,
                strengthening the clinic’s overall digital presence and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects" id="projects">
        <div className="section-content">
          <h2>Featured Projects</h2>

          <div className="project-card">
            <img src="/blackjack-preview.png" alt="Blackjack Game" className="project-image" />
            <div className="project-text">
              <h3 className="project-title">Blackjack Game</h3>
              <p className="project-description">
                Built a functional Blackjack game featuring card animations, sound effects, and
                keyboard-driven user input. Implemented game logic including random card draws, Ace
                handling, dealer AI, and win/loss conditions with real-time stat tracking. Designed
                a responsive GUI with custom card assets and score display to support 50+ rounds of
                interactive gameplay.
              </p>
              <div className="project-badges">
                <span className="badge python">Python</span>
                <span className="badge pygame">Pygame</span>
              </div>
              <a
                href="https://github.com/Moline-C/blackjack"
                className="project-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/external-link.png" className="project-btn-icon" /> View Project
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src="/nutritrack-preview.png" alt="NutriTrack" className="project-image" />
            <div className="project-text">
              <h3 className="project-title">NutriTrack</h3>
              <p className="project-description">
                Developed a Flask-based nutrition tracker at a 24-hour hackathon, processing user
                input to deliver personalized macro insights. Designed a responsive HTML/CSS
                interface that improved data readability and reduced user input friction by ~40%
                during testing.
              </p>
              <div className="project-badges">
                <span className="badge html">HTML</span>
                <span className="badge css">CSS</span>
                <span className="badge flask">Flask</span>
                <span className="badge python-light">Python</span>
              </div>
              <a
                href="https://github.com/Moline-C/NutriTrack"
                className="project-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/external-link.png" className="project-btn-icon" /> View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section leadership" id="leadership">
        <div className="section-content">
          <h2>Leadership & Involvement</h2>
          <div className="card-container">
            <div className="card">
              <div className="card-header">
                <img
                  src="/nsbe-logo.png"
                  alt="NSBE Trailblazers Initiative"
                  className="card-logo"
                />
                <div className="card-title-info">
                  <h3 className="job-title">Trailblazers Cohort Member</h3>
                  <p className="company-name">National Society of Black Engineers</p>
                </div>
              </div>
              <p className="date-box">September 2025 - Present</p>
              <p className="job-description">
                Organized and participated in academic and social development activities, fostering
                peer support, accountability, and cross-disciplinary collaboration among 30+ students.
                Developed professional and leadership skills through structured mentorship, workshops,
                and networking events with industry professionals and alumni. Represent the chapter at
                general body meetings and regional conferences, building connections and maintaining
                relationships with 200+ peers and 30+ partner student organizations.
              </p>
            </div>

            <div className="card">
              <div className="card-header">
                <img src="/colorstack-logo.png" alt="ColorStack" className="card-logo" />
                <div className="card-title-info">
                  <h3 className="job-title">General Body Member</h3>
                  <p className="company-name">ColorStack</p>
                </div>
              </div>
              <p className="date-box">September 2025 - Present</p>
              <p className="job-description">
                Attended 10+ technical workshops covering data structures, resume optimization, and
                frontend development with HTML/CSS and JavaScript. Engaged with a growing network of
                100+ peers and professionals through mentorship, office hours, and virtual meetups
                with recruiters from leading tech companies to strengthen technical skills and
                industry exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Moline Charles</p>
      </footer>
    </div>
  );
}

export default App;
