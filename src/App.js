import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';

function App() {
  const [mobileView, setMobileView] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth < 1200 || window.innerHeight < 1050) {
      setMobileView(true);
    }
  }, [])

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200 || window.innerHeight < 1050) {
        setMobileView(true);
      } else if (window.innerWidth >= 1200 && window.innerHeight >= 1050) {
        setMobileView(false);
      }
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])
  return (
    <div>    
      {!mobileView && (
        <div>
          <Header />
          <Home />
          <About />
          <Projects />
          <footer>
          </footer>
        </div>
      )}  
      {mobileView && (
        <div></div>
      )}
    </div>
  );
}

export default App;
