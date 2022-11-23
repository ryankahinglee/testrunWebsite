import React from 'react';
export default function Cube (props) {
  return (
    <div>
      <div className='cube-three-side home-cube' style={{ height: '235px', width: '222px', position: 'relative', margin: '11px 0 0 0'}}>
        <div className='face face-front neon-pink'
          style={{
            position: 'absolute',
            left: '0%',
            top: '25%',
            paddingTop: '10px',
            height: '90px',
            width: '104.3px',
            fontSize: '70px',
            fontWeight: 'bold',
            textAlign: 'center',
            border:'3.5px solid #fd8fff',
            borderRadius: '4px 2px 2px 2px',
            transformStyle: 'preserve-3d',
            backgroundColor: props.frontColor,
            boxShadow: '0 0 20px #fd8fff',
            transform: 'skew(0deg, 30deg)'
          }}
        >{props.front}
        </div>
        <div className='face face-side neon-pink'
          style={{
            position: 'absolute',
            left: '50%',
            top: '25%',
            paddingTop: '10px',
            height: '90px',
            width: '104.3px',
            fontSize: '70px',
            fontWeight: 'bold',
            textAlign: 'center',
            border:'3.5px solid #fd8fff',
            borderRadius: '2px 4px 2px 2px',
            backgroundColor: props.sideColor,
            boxShadow: '0 0 20px #fd8fff',
            transformStyle: 'preserve-3d',
            transform: 'skew(0deg, -30deg)'
          }}
        >{props.side}
        </div>
        <div className='face face-top neon-pink'
          style={{
            position: 'absolute',
            left: '14%',
            top: '-22%',
            paddingTop: '20px',
            height: '135px',
            width: '152px',
            fontSize: '95px',
            fontWeight: 'bold',
            textAlign: 'center',
            border:'3.5px solid #fd8fff',
            borderRadius: '2px 5px 2px 5px',
            boxShadow: '0 0 20px #fd8fff',
            transformStyle: 'preserve-3d',
            backgroundColor: props.topColor,
            transform: 'rotateX(55deg) rotateZ(45deg)'
          }}
        >{props.top}
        </div>
      </div>
    </div>
  );
}
