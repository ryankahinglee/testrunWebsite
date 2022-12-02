import React from 'react';
import Image from '../game-screenshot.png'
export default function GamesDetails () {
  return (
    <div className='games-details invisible'>
      <div className='games-text-container'>
        <div className='games-text'>
          I worked in a group to develop a 2D dungeon crawler game in <span className='neon-text-light-blue'>Java</span>.
          The premise of the game is simple; navigate your character to the end of the dungeon and fight enemies with items.
          <br/><br/>
          We were tasked with programming the game's backend. It was my first project structured
          with <span className='neon-text-light-blue'>Agile development principles</span>, where having set milestones allowed for evaluations and debugging.
        </div>
        <div 
          className='repo-button'
          onClick={() => {window.open('https://github.com/ryankahinglee/Java-Dungeon', '_blank')}}
        >
          Github
        </div>
      </div>
      <div className='game-image-display'>
        <img className='game-image' src={Image} alt='Screenshot of Game' />
      </div>
    </div>
  )
}