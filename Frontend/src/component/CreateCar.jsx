import React, { useState } from "react";

export default function CreateCar() {
  const [formData, setFormData] = useState({
    price: "",
    eco: "",
    year: "",
    km: "",
    model: "",
    city: "",
    date: ""
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    data.append("image", image);

    try {
      const res = await fetch("https://chirag-tech-backend.onrender.com/cars", {
        method: "POST",
        body: data
      });

      if (!res.ok) throw new Error("Upload failed");

      const result = await res.json();
      console.log("Success:", result);
      alert("Car created successfully!");
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to create car");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Car</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Eco */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Eco</label>
          <input
            type="number"
            name="eco"
            value={formData.eco}
            onChange={handleChange}
            placeholder="Enter eco rating"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Year */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Year</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="Enter manufacturing year"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* KM */}
        <div>
          <label className="block text-sm font-medium text-gray-700">KM</label>
          <input
            type="number"
            name="km"
            value={formData.km}
            onChange={handleChange}
            placeholder="Enter total kilometers"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Model */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Model</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            placeholder="Enter car model"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* City */}
        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Car Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="mt-1 block w-full text-sm text-gray-500"
          />
          {preview && (
            <img
              src={preview}
              alt="Car Preview"
              className="mt-3 w-32 h-32 object-cover rounded-md border"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Create Car
        </button>
      </form>
    </div>
  );
}
