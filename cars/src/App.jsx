import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import carsData from './data/cars.json'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home  cars={carsData} />} />
          <Route path="/page/:page" element={<Home  cars={carsData}/>} />
        </Routes>
      </Router>
    </>
  );
  
}

export default App
