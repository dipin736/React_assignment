import React from "react";
import { useParams } from "react-router-dom";
import Property from "../component/Property";

const PropertyDetails = ({propertyData}) => {
  const { id } = useParams();

  const selectedCardData = propertyData.find((property) => property.id === id);

  return (
    <div className="w-full flex flex-col items-center">
      <Property propertyData={selectedCardData} />
    </div>
  );
};

export default PropertyDetails;
