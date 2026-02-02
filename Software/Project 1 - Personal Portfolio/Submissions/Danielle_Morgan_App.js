import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ position: 'relative', padding: '2rem 1rem 1rem 1rem' }}>
        {/* Section links at the very top */}
        <nav
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginBottom: '1rem',
            marginTop: 0,
          }}
        >
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </nav>
        {/* Name and contact info below links */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ margin: 0 }}>Danielle Morgan</h1>
          <div style={{ marginTop: '0.5rem', fontSize: '1rem' }}>
            <span>
              <strong>Email:</strong>{' '}
              <a href="mailto:morgan.d@ufl.edu">morgan.d@ufl.edu</a>
            </span>
            {' | '}
            <span>
              <strong>Phone:</strong> (727) 488-7196
            </span>
            {' | '}
            <span>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="linkedin.com/in/danielle-morgan28"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/danielle-morgan28

              </a>
            </span>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I am a passionate computer science major with experience in collaborative spaces, high preassure situations and leadership development. I enjoy learning about new ways to apply medical techlnology to improve patient outcomes and streamline healthcare processes.
          </p>
        </section>

        <section id="resume" className="section">
          <h2>Resume</h2>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            View My Resume (PDF)
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
