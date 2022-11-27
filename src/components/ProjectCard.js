import React from 'react';
import { CardContext } from './CardContext';
export default function ProjectCard (props) {
  const [isClicked, setClicked] = React.useState(false);
  const [clickBuffer, setClickBuffer] = React.useState(false);

  const {getters, setters} = React.useContext(CardContext);
  return (
    <div className='project-card'
      onClick = {() => {
        let currentCard = null;
        let otherCards = [];
        const cards = document.querySelectorAll(".project-card");
        cards.forEach((projectCard) => {
          if(projectCard.children[0].textContent === props.text) {
            currentCard = projectCard;
          } else {
            otherCards.push(projectCard);
          }
        })
        let valid = getters.card.includes('Clicked') || getters.card === '';
        if (getters.card === props.text) {
          valid = true;
        }
        if (clickBuffer === true || currentCard.classList.contains('invisible') || !valid) {
          return;
        }
        setClickBuffer(true);
        if (isClicked) {
          const clickedCard = `${getters.card} Clicked`;
          setters.setCard(clickedCard);
          setClicked(false);
          otherCards.forEach((c) => {
            c.classList.remove('fade-out', 'invisible');
            setTimeout(() => {
              c.classList.add('visible-slow');

            }, 1);
            setTimeout(() => {
              c.classList.remove('visible-slow');

            }, 1600);
          })
        } else {;
          setters.setCard(currentCard.children[0].textContent);
          setClicked(true);
          
          otherCards.forEach((c) => {
            c.classList.remove('visible-slow');
            setTimeout(() => {
              c.classList.add('fade-out')
            }, 1);
            setTimeout(() => {
              c.classList.add('invisible');
            }, 1100)
          })
          
        }
        currentCard.classList.add('card-spin-horizontal');
        setTimeout(() => {
          currentCard.classList.remove('card-spin-horizontal');
          setClickBuffer(false);
        }, 1500)
      }}
    >
      <h3 className='project-card-title project-card-corners neon-light-red'>
        {props.text} 
      </h3>
    </div>
  )
}