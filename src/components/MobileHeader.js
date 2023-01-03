import React from 'react';
import MenuIcon from '../menu.png';

export default function Header ({setSection}) {

  const [open, setOpen] = React.useState(false)
  return (
    <header className='header'>
      <div className='header-container'>
        <div className=''>
          <p className='header-name'>Ryan Kahing Lee
          </p>
        </div>
        <div>
          <img className='menu-icon' 
            src={MenuIcon} 
            alt='Menu Icon' 
            onClick={() => {
              if (open === true) {
                setOpen(false);
              } else {
                setOpen(true);
              }
            }}
          />
          {open && (
            <div className='menu-dropdown'>
              <div className='menu'>
                <div className='menu-item' onClick={() => {
                  setOpen(false);
                  setSection('Home')
                }}>
                  Home
                </div>
                <div className='menu-item' onClick={() => {
                  setOpen(false);
                  setSection('About');
                }}>
                  About
                </div>
                <div className='menu-item' onClick={() => {
                  setOpen(false);
                  setSection('Projects')
                }}>
                  Projects
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}