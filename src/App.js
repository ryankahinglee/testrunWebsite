import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';

function App() {
  return (
    <div>      
      <Header />
      <Home />
      <About />
      <Projects />
      <footer>

      </footer>
    </div>
  );
}

export default App;
