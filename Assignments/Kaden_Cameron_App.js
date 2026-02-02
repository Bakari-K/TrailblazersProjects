import React, { useEffect, useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Chip,
  Container as MuiContainer,
  Box,
  LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoadingRepos(true);
        const res = await fetch('https://api.github.com/users/kaden-cameron/repos?sort=updated');
        if (!res.ok) return;
        const data = await res.json();
        setRepos(data);
      } catch (e) {
        // fail silently – section is optional
      } finally {
        setLoadingRepos(false);
      }
    };

    fetchRepos();
  }, []);

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#6366f1' },
      secondary: { main: '#ec4899' },
      background: { default: '#020617', paper: '#020617' },
    },
    shape: { borderRadius: 18 },
    typography: {
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <header className="site-header">
          <div className="container header-content">
            <a href="#home" className="logo">
              <span className="logo-mark">KC</span>
              <span className="logo-text">Kaden Cameron</span>
            </a>
            <nav className="nav">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main>
          {/* Hero */}
          <section id="home" className="section hero-section">
            <MuiContainer className="hero-content">
              <motion.div
                className="hero-text"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p className="eyebrow">Hi, I&apos;m Kaden 👋</p>
                <h1>Computer Engineering Student &amp; Developer</h1>
                <p className="hero-subtitle">
                  Currently pursuing a Bachelor of Science in Computer Engineering at the University of Florida.
                  I build practical solutions using Python, C++, and web technologies, with experience in
                  embedded systems, image processing, and full-stack development.
                </p>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Python" color="primary" size="small" />
                  <Chip label="C++" color="primary" size="small" variant="outlined" />
                  <Chip label="Flask" color="secondary" size="small" />
                  <Chip label="OpenCV" color="secondary" size="small" variant="outlined" />
                  <Chip label="Embedded Systems" size="small" />
                </Box>
                <div className="hero-actions">
                  <a href="#projects" className="btn primary-btn">
                    View my work
                  </a>
                  <a href="#contact" className="btn ghost-btn">
                    Let&apos;s connect
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="hero-card"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <div className="hero-avatar">KC</div>
                <ul className="hero-meta">
                  <li>
                    <span className="meta-label">Location</span>
                    <span className="meta-value">Gainesville, FL</span>
                  </li>
                  <li>
                    <span className="meta-label">Education</span>
                    <span className="meta-value">BS Computer Engineering, UF</span>
                  </li>
                  <li>
                    <span className="meta-label">Graduation</span>
                    <span className="meta-value">Expected May 2029</span>
                  </li>
                </ul>
                <Box sx={{ display: 'flex', gap: 1.5, mt: 2 }}>
                  <a
                    href="https://github.com/kaden-cameron"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kaden-cameron"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="mailto:kadencharlescameron@gmail.com" aria-label="Email">
                    <FaEnvelope />
                  </a>
                </Box>
              </motion.div>
            </MuiContainer>
          </section>

          {/* About */}
          <section id="about" className="section">
            <div className="container split">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="section-eyebrow">About</p>
                <h2>Who I am</h2>
                <p>
                  I&apos;m a Computer Engineering student at the University of Florida, passionate about
                  building practical solutions that solve real-world problems. From automating data entry
                  with barcode scanning to processing images at the pixel level, I enjoy working across
                  different domains and technologies.
                </p>
                <p>
                  Beyond coding, I&apos;m actively involved in leadership programs, embedded systems development
                  with the Space Systems Design Club, and managing social media for community organizations.
                  I thrive on collaboration and continuous learning.
                </p>
              </motion.div>
              <motion.div
                className="about-highlights"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="stat">
                  <span className="stat-number">BS</span>
                  <span className="stat-label">Computer Engineering</span>
                </div>
                <div className="stat">
                  <span className="stat-number">2029</span>
                  <span className="stat-label">Expected graduation</span>
                </div>
                <div className="stat">
                  <span className="stat-number">UF</span>
                  <span className="stat-label">University of Florida</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="section section-alt">
            <div className="container">
              <p className="section-eyebrow">Experience</p>
              <h2>Where I&apos;ve worked</h2>
              <motion.div
                className="experience-list"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <article className="experience-item">
                  <div className="experience-header">
                    <h3>Cohort Member</h3>
                    <span className="experience-org">UF Trailblazers First-Year Leadership Program</span>
                    <span className="experience-date">Aug. 2025 – Present</span>
                  </div>
                  <p className="experience-location">Gainesville, FL</p>
                  <ul className="experience-bullets">
                    <li>
                      Expand professional network by engaging with 10+ industry professionals and alumni
                      through structured mentorship and targeted career workshops
                    </li>
                    <li>
                      Organize and participate in academic and social development activities, fostering
                      peer support, accountability, and cross-disciplinary collaboration among 33 students
                    </li>
                    <li>
                      Facilitate community engagement by partnering with 10+ campus organizations to plan
                      and execute service initiatives impacting the greater Gainesville community
                    </li>
                  </ul>
                </article>

                <article className="experience-item">
                  <div className="experience-header">
                    <h3>Social Media Manager</h3>
                    <span className="experience-org">YMCA DeVos-Blum</span>
                    <span className="experience-date">July 2023 – Present</span>
                  </div>
                  <p className="experience-location">Boynton Beach, FL</p>
                  <ul className="experience-bullets">
                    <li>
                      Managed and grew YMCA social media accounts by creating engaging posts and promoting
                      programs and community initiatives
                    </li>
                    <li>
                      Planned and coordinated events to increase member engagement and community involvement
                    </li>
                    <li>
                      Collaborated with staff to develop marketing strategies and ensure consistent branding
                      across digital and in-person outreach
                    </li>
                  </ul>
                </article>

                <article className="experience-item">
                  <div className="experience-header">
                    <h3>Electronics and Firmware Team Member</h3>
                    <span className="experience-org">Space Systems Design Club</span>
                    <span className="experience-date">Aug. 2025 – Present</span>
                  </div>
                  <p className="experience-location">Gainesville, FL</p>
                  <ul className="experience-bullets">
                    <li>
                      Learning the fundamentals of embedded systems and microcontroller programming for
                      sensor data collection and telemetry
                    </li>
                    <li>
                      Gaining experience with circuit design, soldering, and integrating sensors such as
                      GPS, accelerometers, and pressure sensors into the CanSat payload
                    </li>
                    <li>
                      Exploring wireless communication and firmware development to understand how real-time
                      data is transmitted between the CanSat and the ground station
                    </li>
                  </ul>
                </article>
              </motion.div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="section">
            <div className="container">
              <p className="section-eyebrow">Projects</p>
              <h2>Selected work</h2>
              <motion.div
                className="projects-grid"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <article className="project-card">
                  <h3>KadScanner</h3>
                  <p>
                    Built a real-time barcode scanning solution using Python, Flask, and OpenCV to automate
                    driver&apos;s license data extraction, reducing manual data entry time by 95%. Integrated
                    multiple barcode recognition libraries and implemented adaptive image preprocessing for
                    reliable PDF417 decoding across various license formats.
                  </p>
                  <ul className="tag-list">
                    <li>Python</li>
                    <li>Flask</li>
                    <li>OpenCV</li>
                    <li>JavaScript</li>
                    <li>HTML/CSS</li>
                  </ul>
                  <div className="project-links">
                    <a href="https://github.com/kaden-cameron" target="_blank" rel="noreferrer">
                      View on GitHub
                    </a>
                  </div>
                </article>

                <article className="project-card">
                  <h3>TGA Image Processor</h3>
                  <p>
                    Developed a C++ program to read, manipulate, and write binary TGA image files, implementing
                    pixel-level operations such as multiply, subtract, screen, overlay, and rotation. Built a
                    command-line interface for dynamic image transformations and created a Makefile for
                    automated builds across Unix-based environments.
                  </p>
                  <ul className="tag-list">
                    <li>C++</li>
                    <li>CLI</li>
                    <li>Makefile</li>
                    <li>Unix/Linux</li>
                  </ul>
                  <div className="project-links">
                    <a href="https://github.com/kaden-cameron" target="_blank" rel="noreferrer">
                      View on GitHub
                    </a>
                  </div>
                </article>
              </motion.div>

              {/* Live GitHub data via REST API */}
              <Box sx={{ mt: 4 }}>
                <p className="section-eyebrow">From GitHub</p>
                <h3 style={{ marginTop: 0 }}>Latest repositories</h3>
                {loadingRepos && (
                  <Box sx={{ maxWidth: 360 }}>
                    <LinearProgress color="primary" />
                  </Box>
                )}
                {!loadingRepos && repos && repos.length > 0 && (
                  <div className="projects-grid">
                    {repos.slice(0, 3).map((repo) => (
                      <article key={repo.id} className="project-card">
                        <h3>{repo.name}</h3>
                        <p>{repo.description || 'GitHub project.'}</p>
                        <ul className="tag-list">
                          {repo.language && <li>{repo.language}</li>}
                          <li>Stars: {repo.stargazers_count}</li>
                        </ul>
                        <div className="project-links">
                          <a href={repo.html_url} target="_blank" rel="noreferrer">
                            View repo
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </Box>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="section">
            <div className="container">
              <p className="section-eyebrow">Skills</p>
              <h2>What I work with</h2>
              <div className="skills-grid">
                <div>
                  <h3>Languages</h3>
                  <ul>
                    <li>Java</li>
                    <li>C++</li>
                    <li>SQL</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>HTML &amp; CSS</li>
                  </ul>
                </div>
                <div>
                  <h3>Frameworks &amp; libraries</h3>
                  <ul>
                    <li>Flask</li>
                    <li>FastAPI</li>
                    <li>Pandas</li>
                    <li>NumPy</li>
                    <li>OpenCV</li>
                    <li>pyzxing / ZXing</li>
                  </ul>
                </div>
                <div>
                  <h3>Developer tools</h3>
                  <ul>
                    <li>Git &amp; GitHub</li>
                    <li>VS Code</li>
                    <li>Visual Studio</li>
                    <li>PyCharm</li>
                    <li>IntelliJ</li>
                    <li>CLion</li>
                    <li>G++</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="section section-alt">
            <div className="container">
              <p className="section-eyebrow">Contact</p>
              <h2>Let&apos;s build something</h2>
              <p>
                I&apos;m always interested in new opportunities, collaborations, or just talking about
                ideas. Feel free to reach out.
              </p>
              <div className="contact-layout">
                <form
                  className="contact-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target;
                    const data = new FormData(form);
                    const name = data.get('name');
                    const subject = `Portfolio contact from ${name || 'someone'}`;
                    const body = encodeURIComponent(
                      `Name: ${name}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
                    );
                    window.location.href = `mailto:kadencharlescameron@gmail.com?subject=${encodeURIComponent(
                      subject
                    )}&body=${body}`;
                  }}
                >
                  <label>
                    Name
                    <input name="name" type="text" placeholder="Your name" required />
                  </label>
                  <label>
                    Email
                    <input
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                  <label>
                    Message
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="What would you like to work on together?"
                      required
                    />
                  </label>
                  <button type="submit" className="btn primary-btn full-width">
                    Send email
                  </button>
                </form>

                <div className="contact-details">
                  <h3>Elsewhere</h3>
                  <ul>
                    <li>
                      <a
                        href="https://github.com/kaden-cameron"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/kaden-cameron"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="mailto:kadencharlescameron@gmail.com">
                        kadencharlescameron@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:561-888-3580">561-888-3580</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <div className="container footer-content">
            <span>© {new Date().getFullYear()} Kaden Cameron. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
