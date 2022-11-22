import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './sections/Home';

function App() {
  return (
    <div>      
      <Header />
      <Home />
      <section className='about'>
        <h2 className='section-heading'>
          About
        </h2>
      </section>
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
