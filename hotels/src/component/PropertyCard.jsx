import React from 'react'
import Property from './Property'

const PropertyCard = ({propertyData}) => {
    <div className='w-full flex flex-col items-center gap-5 my-5'>
    <div className='grid grid-cols-3 gap-x-[70px] gap-y-[40px]'>
    {propertyData.selectedProperty.map((propertyData, index) => (
        <div key={index}>
          <Property propertyData={propertyData} />
        </div>
      ))}
    </div>
    
  
    </div>
  
}

export default PropertyCard