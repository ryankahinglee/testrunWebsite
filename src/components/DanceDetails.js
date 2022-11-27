import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Proposal from '../DanceProposal.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export default function DanceDetails () {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = React.useState(4);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }
  return (
    <div className='dance-details invisible'>
      <div className='dance-text'>
        I started dancing in 2021 and joined the <span className='neon-text-light-blue'>Ministry of Dance Society</span> executive team
        as the <span className='neon-text-light-blue'>Public Relations Director</span>. Part of my job was to find sponsors for our largest
        annual event, <span className='neon-text-light-blue'> PartyMode</span>, dedicated to connecting uni-dancers to dancers in the Greater Sydney dance scene.
        <br />
        <br />
        I created proposals  with <span className='neon-text-light-blue'>Canva</span> when reaching out to potential sponsors.
        I kept my design minimalistic with an orange/purple color palette representative of MODSOC's colours along with triangles for layout and spacing.
      </div>
      <div className='dance-design'>
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
  )
}