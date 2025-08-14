import React, { useState, useEffect } from "react";
import Card from "./Card";
import { nanoid } from "nanoid";

const CarList = () => {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    async function carData() {
      try {
        const response = await fetch("https://chirag-tech-backend.onrender.com/cars");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        setCarsData(
          data.map(car => ({
            ...car,
            image: typeof car.image === 'string'
              ? car.image
              : String.fromCharCode(...car.image.data),
            localId: nanoid()
          }))
        );
      } catch (error) {
        console.error("Failed to fetch car data:", error);
      }
    }

    carData();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-6">
      {carsData.length > 0 ? (
        carsData.map(car => <Card key={car.localId} car={car} />)
      ) : (
        <p>Loading cars...</p>
      )}
    </div>
  );
};

export default CarList;
