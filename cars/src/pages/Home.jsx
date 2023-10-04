import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CarDetails from "../component/CarDetails";

const Home = ({ cars }) => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const carsPerPage = 6;
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;

  const filteredCars = cars?.filter((car) =>
    car.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);
  return (
    <div className=" py-3 homecontainer">
      <div className="container mx-auto ">
        <Header setSearchText={setSearchText} searchText={searchText} />
        <CarDetails cars={currentCars} />
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default Home;
