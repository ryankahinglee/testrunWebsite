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

  // Reference to an output container, use 'pre' styling for JSON output
  var output = document.createElement('pre');
  document.body.appendChild(output);

  // Reference to native method(s)
  var oldLog = console.log;

  console.log = function( ...items ) {

      // Call native method first
      oldLog.apply(this,items);

      // Use JSON to transform objects, all others display normally
      items.forEach( (item,i)=>{
          items[i] = (typeof item === 'object' ? JSON.stringify(item,null,4) : item);
      });
      output.innerHTML += items.join(' ') + '<br />';

  };


  return (
    <div>    
      {viewportSize >= 1470 && (
        <div>
          <Header />
          <Home />
          <About />
          <LaptopProjects />
          <footer>
          </footer>
        </div>
      )}  
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
