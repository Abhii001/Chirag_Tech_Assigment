import React, { useState } from "react";
import ManStone from "../assets/Man+Stone.png";
import { FaSearch, FaMicrophone, FaCamera, FaSlidersH } from "react-icons/fa";

function SmartSellSection() {
    const [searchTerm, setSearchTerm] = useState("");
    const [recentSearches, setRecentSearches] = useState([
        "I phone",
        "Fz v3 bikes",
        "Tata cars",
        "Books",
        "Networking Jobs",
    ]);

    // Add new search
    const handleSearch = (e) => {
        if (e.key === "Enter" && searchTerm.trim() !== "") {
            setRecentSearches((prev) => {
                const updated = [searchTerm.trim(), ...prev];
                return [...new Set(updated)].slice(0, 5);
            });
            setSearchTerm("");
        }
    };

    // Remove search item
    const removeSearch = (item) => {
        setRecentSearches((prev) => prev.filter((i) => i !== item));
    };

    return (
        <div className="bg-blue-600 m-8 rounded-2xl p-10 flex flex-col md:flex-row items-center md:items-start justify-between text-white gap-12">
            {/* Left Section */}
            <div className="flex-1 max-w-lg space-y-6">
                <h1 className="text-4xl font-bold leading-snug">
                    The Smartest Way to Sell Anything,
                    <br /> Instantly.
                </h1>

                {/* Search Bar */}
                <div className="flex items-center bg-white rounded-full px-4 py-3 shadow-lg">
                    <FaSearch className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleSearch}
                        placeholder="Search for Products and Categories"
                        className="flex-1 outline-none text-gray-700 text-sm"
                    />
                    <FaMicrophone className="text-gray-500 mx-2 cursor-pointer" />
                    <FaCamera className="text-gray-500 mx-2 cursor-pointer" />
                    <FaSlidersH className="text-gray-500 mx-2 cursor-pointer" />
                </div>

                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                    <div>
                        <p className="font-semibold text-sm mb-2">Recent Searches</p>
                        <div className="flex flex-wrap gap-3">
                            {recentSearches.map((item, idx) => (
                                <span
                                    key={idx}
                                    className="bg-white text-gray-800 px-3 py-1.5 rounded-full text-xs flex items-center gap-2 shadow-sm hover:shadow-md transition"
                                >
                                    {item}
                                    <span
                                        className="text-gray-500 hover:text-red-500 cursor-pointer"
                                        onClick={() => removeSearch(item)}
                                    >
                                        ✕
                                    </span>
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center">
                <img
                    src={ManStone}
                    alt="Illustration"
                    className="max-w-xs md:max-w-sm lg:max-w-md h-auto drop-shadow-lg"
                />
            </div>
        </div>
    );
}

export default SmartSellSection;
