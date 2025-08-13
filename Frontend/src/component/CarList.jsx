import React, { useState, useEffect } from "react";
import Card from "./Card";

const CarList = () => {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    fetch("https://chirag-tech-backend.onrender.com/cars")
      .then((res) => res.json())
      .then((data) => setCarsData(data))
      .catch((err) => console.error("Error fetching cars:", err));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-6">
      {carsData.length > 0 ? (
        carsData.map((car, index) => <Card key={index} car={car} />)
      ) : (
        <p>Loading cars...</p>
      )}
    </div>
  );
};

export default CarList;
