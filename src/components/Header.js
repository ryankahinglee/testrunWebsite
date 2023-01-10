import React from 'react';

export default function Header () {
  function onResumeClick() {
    window.open("https://docs.google.com/document/d/1lNup195tNhaTB8jpgf-9Ztg6U2jkthyK/edit?usp=sharing&ouid=112638218753683549426&rtpof=true&sd=true");
  }

  return (
    <header className='header'>
      <div className='header-container'>
        <div>
          <p className='header-name flicker-slowest'  
            onClick ={onResumeClick}
          >Ryan Kahing Lee
          </p>
        </div>
        <ul className='header-list'>
          <li 
            className='header-item header-button'
            onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'});}}
          >Home</li>
          <li 
            className='header-item header-button'
            onClick={() => {window.scrollTo({
              top: document.getElementsByClassName('about-container')[0].scrollHeight,
              behavior: 'smooth'
            })
            }}
          >
            About me</li>
          <li 
            className='header-item header-button'
            onClick={() => {
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