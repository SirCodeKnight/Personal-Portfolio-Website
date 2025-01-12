import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Analysis from './components/Analysis';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Hero />
      <Skills />
      <Analysis />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
