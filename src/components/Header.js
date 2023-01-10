import React from 'react';
import Resume from '../Resume.pdf';

export default function Header () {
  function onResumeClick() {
    window.open(Resume);
  }

  return (
    <header className='header'>
      <div className='header-container'>
        <div>
          <p className='header-name'
            onClick ={onResumeClick}
          >{Resume}
          </p>
        </div>
        <ul className='header-list'>
          <li 
            className='header-item'
            onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'});}}
          >Home</li>
          <li 
            className='header-item'
            onClick={() => {window.scrollTo({
              top: document.getElementsByClassName('about-container')[0].scrollHeight,
              behavior: 'smooth'
            })
            }}
          >
            About me</li>
          <li 
            className='header-item'
            onClick={() => {
              console.log(document.getElementsByClassName('projects-container')[0]);
              window.scrollTo({
              top: 2300,
              behavior: 'smooth'
            })
            }}
          >Projects</li>
        </ul>
      </div>
    </header>
  )
}