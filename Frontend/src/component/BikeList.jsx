import React, { useState, useEffect } from "react";
import Card from "./Card";

const BikeList = () => {
  const [bikeData, setBikeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/bikes")
      .then((res) => res.json())
      .then((data) => {
        setBikeData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bikes:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-6">
      {loading ? (
        <p>Loading bikes...</p>
      ) : bikeData.length > 0 ? (
        bikeData.map((bike, index) => <Card key={index} car={bike} />)
      ) : (
        <p>No bikes available</p>
      )}
    </div>
  );
};

export default BikeList;
