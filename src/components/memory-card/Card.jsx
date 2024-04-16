import Tilt from 'react-parallax-tilt';
import { CardStyle } from '../../styles/memory-card/style';

export default function Card({card, isFlipped, handleCardClick}) {
  return (
    <CardStyle 
      className={`card-container${isFlipped ? ' flipped' : ''}`}
      onClick={() => {handleCardClick(card)}}
    >
      <Tilt 
        glareEnable={true}
        glareMaxOpacity={0.6}
        glareColor='#ffffff'
        glarePosition='bottom'
        glareBorderRadius='20px'
        className='card-inner'>
        <button className='card-front'>
          <img
            src={card.image}
            alt={card.name}
            className='card-image'
          />
          <p className='card-name'>
            <span className='name'>{card.name}</span>
          </p>
      </button>
        <div className='card-back'>
          <img
            src='OdinProjectWork/src/assets/imgs/card-back.png'
            alt='card back'
            className='back'
          />
        </div>
      </Tilt>
    </CardStyle>
  );
}