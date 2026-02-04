import './App.css';
import ProjectCard from './components/ProjectCard';
import projects from './data/projects';
import Timeline from './components/Timeline';
import experience from './data/experience';

function App() {
  return (
    <div className="portfolio">
      <section className="hero">
        <div className="hero-left">
          <h1>Joel Rajah</h1>
        </div>

        <div className="hero-right">
          <h2>Computer Engineering Student @ University of Florida — Jersey City, New Jersey</h2>
          <p>
            Computer Engineering student focused on applying an engineering mindset
            to design reliable systems, lead teams, and deliver measurable real-world impact.
          </p>
          <div className="hero-buttons">
            <button type="button">View Projects</button>
            <button type="button">Contact Me</button>
          </div>
        </div>
      </section>

      <main className="container">
        <section id="about" className="section about">
          <h2>About</h2>
          <p>
            I am a Computer Engineering student from Jersey City, New Jersey.
            I apply an engineering mindset to design reliable, maintainable systems and prioritize measurable outcomes. I have led student teams and projects, driving solutions from concept to deployment with a focus on real-world impact and technical rigor.
          </p>
        </section>

        <section id="skills" className="section skills-section">
          <h2>Skills</h2>

          <div className="skills-grid">
            <div className="skills-group">
              <h4>Technical</h4>
              <div className="skill-pills">
                <span className="skill-pill">JavaScript</span>
                <span className="skill-pill">HTML</span>
                <span className="skill-pill">React</span>
              </div>
            </div>

            <div className="skills-group">
              <h4>Other</h4>
              <div className="skill-pills">
                <span className="skill-pill">Leadership</span>
                <span className="skill-pill">Public Speaking</span>
                <span className="skill-pill">Research Writing</span>
                <span className="skill-pill">Event Planning</span>
              </div>
            </div>

            <div className="skills-group">
              <h4>Languages</h4>
              <div className="skill-pills">
                <span className="skill-pill">English (Fluent)</span>
                <span className="skill-pill">Spanish</span>
              </div>
            </div>
          </div>
        </section>

        <Timeline entries={experience} />

        <section id="projects" className="section projects">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:joelrajah82@gmail.com">joelrajah82@gmail.com</a></p>
          <p>
            LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/joelrajah" target="_blank" rel="noreferrer">
              linkedin.com/in/joelrajah
            </a>
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <small>© {new Date().getFullYear()} Joel Rajah</small>
          <br />
          <small>Computer Engineering Student — University of Florida • Jersey City, New Jersey</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
