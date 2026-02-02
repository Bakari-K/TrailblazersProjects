import React, { useState } from 'react';
import './Emily_Forestier_App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      <header className="App-header">
        <div className="brand">Emily Forestier</div>
        <nav className="nav">
          <button onClick={() => setPage('home')} className={page === 'home' ? 'active' : ''}>Home</button>
          <button onClick={() => setPage('projects')} className={page === 'projects' ? 'active' : ''}>Projects</button>
          <button onClick={() => setPage('contact')} className={page === 'contact' ? 'active' : ''}>Contact</button>
        </nav>
      </header>

      <main className="page-container">
        {page === 'home' && <Home />}
        {page === 'projects' && <Projects />}
        {page === 'contact' && <Contact />}
      </main>

      <footer className="footer">© {new Date().getFullYear()} Emily Forestier</footer>
    </div>
  );
}

export default App;
