import React from 'react';
import Cube from '../components/Cube'
import { Swappable } from '@shopify/draggable';

export default function Home () {
  const [isCorrect, setCorrect] = React.useState(false);
  React.useEffect(() => {
    const swappable = new Swappable(document.querySelectorAll('div'), {
      draggable: '.cube-three-side'
    });
  
    swappable.on('swappable:start', () => console.log('swappable:start'));
    swappable.on('swappable:swapped', () => console.log('swappable:swapped'));
    swappable.on('swappable:stop', () => console.log('swappable:stop')); 
    return () => {
      swappable.destroy();
    }
  }, []);

  const hiddenError = function() {
    const error = document.querySelector(".home-error")
    if (error !== null) {
      error.classList.add('hidden');
    }
  }

  const cubeCheck = function() {
    const cubes = document.querySelectorAll(".home-cube");
    const tops = [];
    cubes.forEach((cube) => {
      tops.push(cube.querySelectorAll("div")[2]);
    })
    let name = '';
    tops.forEach((top) => {
      if (!name.includes(top.textContent)) {
        name += top.textContent;
      }
    });

    console.log(name);
    if (name ==='RYAN ') {
      setCorrect(true);
    }
  }
  return (
    <section className='home-background'>
      <div className='home-container visible-slow'>
        <div className='home-greet neon-green flicker-slow' style={{fontSize: '160px'}}>
          Hi,
        </div>
        <div className='home-greet neon-green flicker-slower'>
          my name is
        </div>
        <div className='home-cubes' 
          onMouseDown={hiddenError}
          onTouchStart={hiddenError}
          onMouseUp={cubeCheck}
          onTouchEnd={cubeCheck}
        >
          <Cube front='K' side='A' top='R'/>
          <Cube front='H' side='I' top='Y'/>
          <Cube front='N' side='G' top='A'/>
          <Cube front='E' side='E' top=' '/>
          <Cube front=' ' side='L' top='N'/>
        </div>
        {!isCorrect && (
          <div className='home-greet neon-green home-error' style={{fontSize: '50px'}}>
            Oh no, my name is spelt wrong! Can you swap the last two cubes around?
          </div>  
        )}
        {isCorrect && (
          <div className='home-greet visible-slow neon-pink' style={{ width: '60vw' }}>
            Frontend Developer and Backend Engineer
          </div>
        )}
      </div>
    </section>
  )
}