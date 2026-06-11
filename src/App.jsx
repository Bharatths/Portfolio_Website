import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './index.css';

/**
 * Main App Component
 * This component assembles all the sections of the portfolio.
 * It uses React functional components for each section.
 */
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div id="home"><Home /></div>
        <div id="about"><About /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <div id="certifications"><Certifications /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
