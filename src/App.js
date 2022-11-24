import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';

function App() {
  return (
    <div>      
      <Header />
      <Home />
      <About />
      <section className='projects'>
        <h2 className='section-heading'>
          Projects
        </h2>
      </section>
      <section className='contact'>
        <h2 className='section-heading'>
          Contact
        </h2>
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
