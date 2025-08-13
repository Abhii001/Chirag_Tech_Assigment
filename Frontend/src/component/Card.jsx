import React from "react";
import { FaHeart } from "react-icons/fa";

const Card = ({ car }) => {
  return (
    <div className="border rounded-xl shadow-sm p-4 relative max-w-sm bg-white">
      {/* Favorite Icon */}
      <button className="absolute top-4 right-4 text-gray-400 hover:text-red-500">
        <FaHeart />
      </button>

      {/* Car Image */}
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-40 object-contain rounded-lg mb-4"
      />

      {/* Price and Eco */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-xl font-bold">${car.price}</span>
        <span className="text-sm font-medium text-gray-600">
          Eco: {car.eco}/100
        </span>
      </div>

      {/* Car Details */}
      <p className="text-gray-600 text-sm mb-1">
        {car.year} - {car.km}km
      </p>
      <p className="text-gray-600 text-sm mb-1">{car.model}</p>
      <p className="text-gray-600 text-sm mb-1">{car.city}</p>
      <p className="text-gray-600 text-sm">{car.date}</p>
    </div>
  );
};

export default Card;
