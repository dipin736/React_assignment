import React, { useState } from 'react'
import Property from '../component/Property';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-regular-svg-icons';


const London = (props) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [visibleCards, setVisibleCards] = useState(6); // Initial number of cards to display
  const cardsToLoad = 3; // Number of cards to load each time the button is clicked

  const loadMoreCards = () => {
    // Calculate the new number of visible cards
    const newVisibleCards = visibleCards + cardsToLoad;

    // Update the state to trigger a re-render
    setVisibleCards(newVisibleCards);
  };

  const handleCardClick = (propertyData) => {
    setSelectedCard(propertyData);
  };

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='grid grid-cols-3 gap-x-[70px] gap-y-[40px]'>
        {props.propertyData.slice(0, visibleCards).map((propertyData, index) => (
          <div key={index} onClick={() => handleCardClick(propertyData)}>
            <Property propertyData={propertyData} />
          </div>
        ))}
      </div>

      {visibleCards < props.propertyData.length && (
        <div className='text-center my-5'>
          <button
            className="bg-[#3639E4] rounded-full
            px-4 py-2 text-white font-bold text-[14px] space-x-1"
            onClick={loadMoreCards}
          >
            <FontAwesomeIcon icon={faHourglass} size='lg' color='#fff' />
            <span>Show More</span>
          </button>
        </div>
      )}

      {selectedCard && (
        <Link to={`/property/${selectedCard.id}`}>
          <div className='text-center my-5'>
            <Property propertyData={selectedCard} />
          </div>
        </Link>
      )}
    </div>
  );
};

export default London