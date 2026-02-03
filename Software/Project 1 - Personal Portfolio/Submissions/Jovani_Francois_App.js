import React from 'react';
import './App.css';
import Home from './components/Home';

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-top">
          <div className="avatar">JF</div>
          <div className="title-block">
            <div className="title-name">Jovani Francois</div>
            <div className="title-sub muted">Computer Science • University of Florida</div>
          </div>
        </div>

        <nav className="nav">
          <button className="tab" onClick={() => scrollToId('home')}>Home</button>
          <button className="tab" onClick={() => scrollToId('about')}>About</button>
          <button className="tab" onClick={() => scrollToId('education')}>Education</button>
          <button className="tab" onClick={() => scrollToId('projects')}>Projects</button>
          <button className="tab" onClick={() => scrollToId('contact')}>Contact</button>
        </nav>

        <main className="content">
          <Home />
        </main>
      </header>
    </div>
  );
}
