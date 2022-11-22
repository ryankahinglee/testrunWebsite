import React from 'react';
import Cube from '../components/Cube'
import { Swappable } from '@shopify/draggable';

export default function Home () {
  const [correct, setCorrect] = React.useState(false);
  console.log(correct);
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
  return (
    <div className='home'>
      <div className='home-greet flicker-slow' style={{fontSize: '160px'}}>
        Hi,
      </div>
      <div className='home-greet flicker-slower'>
        my name is
      </div>
      <div className='home-cubes' 
        onMouseDown={() => {
          const error = document.querySelector(".home-error")
          error.classList.add('hidden');
        }}
        onMouseUp={() => {
          const cubes = document.querySelectorAll(".home-cube");
          const tops = [];
          cubes.forEach((cube) => {
            tops.push(cube.querySelectorAll("div")[2]);
          })
          let name = 'RYAN ';
          tops.forEach((top) => {
            if (name.length === 0) {
              setCorrect(true);
            } else if (top.textContent === name.slice(0,1)) {
              name = name.slice(1);
            } else {
              return;
            }
          })
        }}
      >
        <Cube front='K' side='A' top='R'/>
        <Cube front='H' side='I' top='Y'/>
        <Cube front='N' side='G' top='A'/>
        <Cube front='E' side='E' top=' '/>
        <Cube front=' ' side='L' top='N'/>
      </div>
      <div className='home-greet home-error' style={{fontSize: '50px'}}>
        Oh no, my name is spelt wrong! Can you swap the last two cubes around?
      </div>
    </div>
  )
}