import './App.css';
import React from 'react';
import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';
import LaptopProjects from './sections/LaptopProjects';
import LaptopHome from './sections/LaptopHome';
import IpadProjects from './sections/IpadProjects';
import MobileHeader from './components/MobileHeader';
import MobileHome from './sections/MobileHome';
import MobileProjects from './sections/MobileProjects';

function App() {
  const [viewportSize, setviewportSize] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setviewportSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const [section, setSection] = React.useState('Home');

  return (
    <div>    
      {/* {viewportSize >= 1470 && (
        <div>
          <Header />
          <Home />
          <About />
          <LaptopProjects />
          <footer>
          </footer>
        </div>
      )}   */}
      {viewportSize >= 1060 && viewportSize < 1470 && (
        <div>
          <Header />
          <LaptopHome />
          <About />
          <IpadProjects />
          <footer>
          </footer>
        </div>
      )}
      {viewportSize < 1060 && (
        <div>
          <MobileHeader setSection={setSection}/>
          {section === 'Home' && (
            <MobileHome />
          )}
          {section === 'About' && (
            <About />
          )}
          {section === 'Projects' && (
            <MobileProjects />
          )}
          <footer>
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
