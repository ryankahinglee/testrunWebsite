import React from 'react';
import { Swappable } from '@shopify/draggable';

export default function LaptopHome () {
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
    <section className='home-background'>
      <div className='home-container visible-slow'>
        <div className='home-greet neon-green flicker-slow laptop-padding home-hi'>
          <span style={{fontSize: '100px'}}>Hi</span>, my name is
        </div>
        <div className='home-greet visible-slow neon-green laptop-padding home-name'>
          Ryan
        </div>
        <br/>
        <div className='home-greet visible-slow neon-pink flicker-slower home-detail'>
          I'm a Frontend Developer and Backend Engineer
        </div>
      </div>
    </section>
  )
}