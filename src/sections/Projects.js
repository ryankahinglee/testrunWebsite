import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { CardContext } from '../components/CardContext';
import DanceDetails from '../components/DanceDetails';
import GamesDetails from '../components/GamesDetails';
import WebsiteDetails from '../components/WebsiteDetails';

export default function Projects () {

  const [card, setCard] = React.useState('');
  const getters = {
    card
  }
  const setters = {
    setCard
  }
  if (!card.includes('Clicked') && card !== '') {
    const className = `${card.toLowerCase()}-details`;
    const details = document.getElementsByClassName(className)[0];
    if (details.classList.contains('invisible')) {
      details.classList.remove('invisible');
    }
    details.classList.add('visible-slow');
    setTimeout(() => {
      details.classList.remove('invisible');
    }, 1);
  } else if (card.includes('Clicked') && card !== '') {
    const name = (card.split(/\s+/))[0];
    const className = `${name.toLowerCase()}-details`;
    const details = document.getElementsByClassName(className)[0];
    details.classList.remove('visible-slow');
    setTimeout(() => {
      details.classList.add('fade-out');
    }, 1);
    setTimeout(() => {
      details.classList.add('invisible');
      details.classList.remove('fade-out');
    }, 1500);
  }
  return (
    <CardContext.Provider value = {{getters, setters}}>
      <section className='projects-container'>
          <h2 className='section-heading flicker-slower neon-green'>
            Projects
          </h2>
          <div className='projects-display'>
            <ProjectCard text='Dance'/>
            <ProjectCard text='Website'/>
            <ProjectCard text='Games'/>
            <DanceDetails />
            <GamesDetails />
            <WebsiteDetails />
          </div>  
      </section>
    </CardContext.Provider>
  )
}