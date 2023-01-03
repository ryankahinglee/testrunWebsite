import React from 'react';
import Proposal from '../DanceProposal.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import WebsiteImage from '../airbnb.screenshot.PNG';
import GameImage from '../game-screenshot.png'

export default function IpadProjects () {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = React.useState(4);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <section className='projects-container'>
      <h2 className='section-heading flicker-slower neon-green'>
        Projects
      </h2>
      <div className='project-row'>
        <div>
          <div className='neon-text-light-blue project-row-title'>
            Dance
          </div>
          <div className='project-text'>
            One of my dance projects working in the Ministry of Dance Society as a Public Relations Director. 
            <br/><br/>
            I made proposals using Canva for reaching out to
            potential dance sponsors.
          </div>
        </div>
        <div style={{width: '500px'}}> 
          <React.Fragment>
            <Document file={Proposal}
              onLoadSuccess={(e) => onDocumentLoadSuccess(e)}>
              <Page pageNumber={pageNumber} />
            </Document>
            <div className='dance-design-bottom'>
              <span className='dance-design-text'>
                {numPages && <span>Page {pageNumber} of {numPages}</span>}
              </span>
              <div>
                <span 
                  className='dance-design-button'
                  onClick={()=> {
                    if (pageNumber - 1 > 0) {
                      setPageNumber(pageNumber - 1);
                    } 
                  }}
                >
                  Back
                </span>
                <span 
                  className='dance-design-button'
                  onClick={()=> {
                    if (pageNumber + 1 <= numPages) {
                      setPageNumber(pageNumber + 1);
                    } 
                  }}
                >
                  Next
                </span>
              </div>
            </div>
          </React.Fragment>
        </div>
      </div>
      <div className='project-row'>
        <div>
          <img className='website-image' src={WebsiteImage} alt='screenshot of Airbnb website'></img>
          <div 
            className='repo-button'
            onClick={() => {window.open('https://github.com/ryankahinglee/Frontend-AirBnB', '_blank')}}
          >
            Github
          </div>
        </div>
        <div>
          <div className='neon-text-light-blue project-row-title'>
            Website
          </div>
          <div className='project-text'>
            A small AirBnb application I created in a pair project. It makes use of fetch and routes for handling user accounts, reviews and bookings.
            <br/><br/>
            It is based off the official Airbnb website.
          </div>
        </div>
      </div>
      <div className='project-row'>
        <div>
          <div className='neon-text-light-blue project-row-title'>
            Games
          </div>
          <div className='project-text'>
            A dungeon-crawler 2D game in Java. Players experiences several core attributes of dungeon games such as finding items, 
            fighting monsters and collecting coins.
          </div>
        </div>
        <div className='game-image-display'>
          <img className='game-image' src={GameImage} alt='Screenshot of Game' />
        </div>
      </div>
    </section>
  )
}