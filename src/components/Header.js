import React from 'react';

export default function Header () {
  return (
    <header className='header'>
      <div className='header-container'>
        <div>
          <p className='header-name'>Ryan Kahing Lee
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