import React from 'react';

export default function MobileHome () {
  const [viewportSize, setviewportSize] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setviewportSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <section className='home-background'>
      <div className='home-container visible-slow'>
        {viewportSize >= 600 && (
          <div className='home-greet neon-green flicker-slow mobile-padding home-hi'>
            Hi there,
          </div>
        )}
        {viewportSize < 600 && (
          <div className='home-greet neon-green flicker-slow mobile-padding home-hi'>
            Hi,
          </div>
        )}
        <div className='home-greet neon-green flicker-slowest mobile-padding home-name'>
          my name's Ryan,
        </div>
        <div className='home-greet visible-slow neon-pink mobile-padding flicker-slower home-detail'>
          frontend developer and backend engineer.
        </div>
        <div className='home-greet neon-pink home-detail'>
          Take a look around and learn who I am!
        </div>
      </div>
    </section>
  )
}