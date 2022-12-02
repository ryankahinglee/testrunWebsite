import React from 'react';
import Image from '../airbnb.screenshot.PNG';
export default function WebsiteDetails () {
  return (
    <div className='website-details invisible'>
      <div>
        <img className='website-image' src={Image} alt='screenshot of Airbnb website'></img>
      </div>
      <div>
        <div className='website-text'>
          My first project in <span className='neon-text-light-blue'>React</span> was a pair assignment. We were tasked with designing
          a replica of the AirBnB site. Users could host listings, create bookings and leave reviews after registering their own account.
          <br /> <br />
          I used CSS frameworks such as <span className='neon-text-light-blue'>Material UI</span> to keep components consistently themed
          across the website. Its based on a <span className='neon-text-light-blue'>responsive design</span>, handling both mobile and computer
          viewports.
        </div>
        <div 
          className='repo-button'
          onClick={() => {window.open('https://github.com/ryankahinglee/Frontend-AirBnB', '_blank')}}
        >
          Github
        </div>
      </div>
    </div>
  )
}