import React from 'react';

export default function Header () {
  return (
    <header className='header'>
      <div className='header-container'>
        <div className=''>
          <p className='header-name'>Ryan Kahing Lee
          </p>
        </div>
        <ul className='header-list'>
          <li className='header-item'>Home</li>
          <li className='header-item'>About me</li>
          <li className='header-item'>Projects</li>
          <li className='header-item'>Contact</li>
        </ul>
      </div>
    </header>
  )
}