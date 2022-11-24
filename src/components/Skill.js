import React from 'react';
export default function Skill (props) {
  return (
    <div className='skill-container'>
      <span className='skill-text'>
        {props.text}
      </span>
    </div>
  )
}