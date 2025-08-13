import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { nanoid } from "nanoid";

function ExploreCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <p className="p-4">Loading categories...</p>;
  }

  return (
    <div className="relative w-full p-4">
      <h2 className="text-2xl font-bold mb-6">Explore Categories</h2>

      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 p-3 bg-white rounded-full shadow-md border hover:bg-gray-100"
        >
          <FaArrowLeft />
        </button>

        {/* Scrollable Categories */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-12"
        >
          {categories.map((cat) => (
            <div
              key={nanoid()}
              className="flex flex-col items-center min-w-[8rem]"
            >
              <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-md">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-30 h-30 object-contain"
                />
              </div>
              <p className="mt-2 text-sm font-medium">{cat.name}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 p-3 bg-white rounded-full shadow-md border hover:bg-gray-100"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default ExploreCategories;
