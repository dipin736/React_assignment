import React,{ useState, useEffect } from "react";
// import './App.css'
import Button from './component/Button';
import Newyork from './pages/Newyork';
import Mumbai from './pages/Mumbai';
import Paris from './pages/Paris';
import London from './pages/London';
import PropertyDetails from './pages/PropertyDetails';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from './data/data.json';

function App() {
  const [property, setProperty] = useState("New York");
  const [propertyData, setPropertyData] = useState(data[property] || {});

  useEffect(() => {
    const storedProperty = localStorage.getItem("selectedProperty");
    if (storedProperty) {
      setProperty(storedProperty);
    }
  }, []);

  // Save selected city to local storage and update city data when it changes
  useEffect(() => {
    localStorage.setItem("selectedProperty", property);
    if (data[property]) {
      setPropertyData(data[property]);
    }
  }, [property]);

  // Function to handle city selection
  const handleSelectProperty = (property) => {
    setProperty(property);
  }

  return (
    <>
  
    <Router>
      <div className="App bg-[#F4F5FD] h-screen flex flex-col items-center px-[120px] !overflow-x-hidden ">
        <div className="w-[340px] flex flex-col items-center text-gray-700 ">
          <h1 className="text-[28px] font-bold">Featured Listed Property</h1>
          <p className="text-[10px] text-center font-semibold">
            Real estate can be bought, sold, leased or rented, and can be a valuable investment opportunity.
            The value of real estate can be...
          </p>
        </div>

        <div className="w-full mt-10 flex justify-between ">
          <div className="space-x-5">
            <Link to='/'>
              <Button
                name="New York"
                handleClick={handleSelectProperty}
                selectedProperty={property}
              />
            </Link>
            <Link to='/mumbai'>
              <Button
                name="Mumbai"
                handleClick={handleSelectProperty}
                selectedProperty={property}
              />
            </Link>
            <Link to='/paris'>
              <Button
                name="Paris"
                handleClick={handleSelectProperty}
                selectedProperty={property}
              />
            </Link>
            <Link to='/london'>
              <Button
                name="London"
                handleClick={handleSelectProperty}
                selectedProperty={property}
              />
            </Link>
          </div>
          <button className="bg-[#ECECFB] rounded-full text-xs font-bold 
            px-4 py-2 text-[#3639E4] border-[#3639E4] border-[1px] space-x-1">
            <span>View All</span>
            <FontAwesomeIcon icon={faArrowRight} size='xs' color='#3639E4' />
          </button>
        </div>
        <div className='w-full flex flex-col items-center gap-5 my-5'>
          <Routes>
            <Route path="/" element={<Newyork propertyData={propertyData} />} />
            <Route path="/mumbai" element={<Mumbai propertyData={propertyData} />} />
            <Route path="/paris" element={<Paris propertyData={propertyData} />} />
            <Route path="/london" element={<London propertyData={propertyData} />} />
            <Route path="/property/:id" element={<PropertyDetails propertyData={propertyData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  
    </>
  )
}

export default App
