import React from 'react';
import Skill from '../components/Skill';

export default function About () {
  return (
    <section className='about-container'>
      <h2 className='section-heading flicker-slowest neon-green'>
        About me  
      </h2>
      <div className='about-details'>
        <div className='about-description'>
          <h3 className='about-details-title neon-light-red'>
            Get to know me!
          </h3>
          <p className='about-description-text'>
            I’m a <span className='neon-text-light-blue'>Third Year</span> university student pursuing a bachelor's degree in <span className='neon-text-light-blue'>Computer Science</span> at UNSW.
            I recently developed an interest in frontend development and am looking for opportunities to learn and improve my skills.
            <br /><br />
            Currently, two of my biggest passions are <span className='neon-text-light-blue'>dance</span> and <span className='neon-text-light-blue'>games</span>. 
            Check out my projects and see how I've incorporated them in my journey to becoming a full-fledged programmer. 

            <br /><br />
            <span className='about-text-ps'>PS: This is my first solo website, designing it really pushed my limits!</span>
          </p>
        </div>
        <div className='about-skills'>
          <h3 className='about-details-title neon-light-red'>
            My skills
          </h3>
            <div className='about-skills-container'>
              <Skill text='C'/>
              <Skill text='HTML'/>
              <Skill text='CSS'/>
              <Skill text='React'/>
              <Skill text='Python'/>
              <Skill text='Java'/>
              <Skill text='JavaScript'/>
            </div>
        </div>
      </div>
    </section>
  )
}