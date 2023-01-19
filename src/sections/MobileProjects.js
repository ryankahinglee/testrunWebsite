import React from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import WebsiteImage from '../airbnb.screenshot.PNG';
import GameImage from '../game-screenshot.png'
import DanceImage from '../Dance proposal snippet.PNG';

export default function MobileProjects () {

  return (
    <section className='projects-container'>
      <h2 className='section-heading flicker-slower neon-green'>
        Projects
      </h2>
      <div>
        <div className='neon-text-light-blue project-row-title'>
          Dance
        </div>
        <div className='project-text'>
          One of my dance projects working in the Ministry of Dance Society as a Public Relations Director. 
          <br/><br/>
          I made proposals using Canva for reaching out to
          potential dance sponsors.
        </div>
      </div>
      <div>
        <img className='dance-image' src={DanceImage} alt='Screenshot of Dance proposal'></img>
      </div>
      <div>
        <div className='neon-text-light-blue project-row-title'>
          Website
        </div>
        <div className='project-text'>
          A small AirBnb application I created in a pair project. It makes use of fetch and routes for handling user accounts, reviews and bookings.
          <br/><br/>
          It is based off the official Airbnb website.
        </div>
      </div>
      <div>
        <img className='website-image' src={WebsiteImage} alt='screenshot of Airbnb website'></img>
      </div>
      <div 
          className='repo-button'
          onClick={() => {window.open('https://github.com/ryankahinglee/Frontend-AirBnB', '_blank')}}
        >
          Github
        </div>
      <div>
        <div className='neon-text-light-blue project-row-title'>
          Games
        </div>
        <div className='project-text'>
          A dungeon-crawler 2D game in Java. Players experiences several core attributes of dungeon games such as finding items, 
          fighting monsters and collecting coins.
        </div>
      </div>
      <div className='game-image-display'>
        <img className='game-image' src={GameImage} alt='Screenshot of Game' />
      </div>
      <div 
          className='repo-button'
          onClick={() => {window.open('https://github.com/ryankahinglee/Java-Dungeon', '_blank')}}
        >
          Github
        </div>
    </section>
  )
}