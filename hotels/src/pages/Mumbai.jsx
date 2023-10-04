import React, { useState } from 'react'
import Property from '../component/Property';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-regular-svg-icons';


const Mumbai = (props) => {
  const [visibleCards, setVisibleCards] = useState(6); 
  const cardsToLoad = 3; 

  const loadMoreCards = () => {
    const newVisibleCards = visibleCards + cardsToLoad;

    setVisibleCards(newVisibleCards);
  };

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='grid grid-cols-3 gap-x-[70px] gap-y-[40px]'>
        {props.propertyData.slice(0, visibleCards).map((propertyData, index) => (
          <div key={index}>
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
    </div>
  );
}

export default Mumbai