import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import {
  FaMapMarkerAlt,
  FaBell,
  FaRegHeart,
  FaRegCommentDots,
} from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineBolt, MdOutlineWork } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { Link } from "react-router-dom";

function Nav() {
  const [user, setUser] = useState("");
  console.log(user)
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedFirstName = sessionStorage.getItem("userId");
    if (storedFirstName) {
      setUser(storedFirstName)
      ;
    }
  }, []);


  const firstLetter = (user ? user[0] : "?").toUpperCase();
  console.log(firstLetter)

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-sm sticky top-0 z-50">
      {/* Left - Logo */}
      <Link to='/dashboard'>
      <div className="flex flex-col items-center gap-2">
        <img src={Logo} alt="Bidai Logo" className="w-20 h-auto" />
        <p className="text-xs text-gray-500">Buy. Inspect. Deal</p>
      </div>
      </Link>

      {/* Location */}
      <div className="flex items-center border rounded-full px-3 py-1 text-gray-700 text-sm w-96">
        <FaMapMarkerAlt className="mr-2 text-black" />
        <input
          type="text"
          placeholder="Taj Garden Retreat, Bengaluru"
          className="flex-1 outline-none bg-transparent text-sm"
        />
      </div>

      {/* Sell Buttons */}
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 border-2 border-blue-800 px-4 py-1 rounded-full text-sm text-black hover:bg-blue-50">
          <AiOutlinePlus /> Sell
        </button>
        <button className="flex items-center gap-2 border-2 border-blue-500 px-4 py-1 rounded-full text-sm text-black hover:bg-blue-50">
          <MdOutlineBolt /> One Click Sell
        </button>
      </div>

      {/* Icons & Links */}
      <ul className="flex items-center gap-10 text-sm text-gray-700">
        <li className="flex flex-col items-center cursor-pointer">
          <LuClipboardList size={18} />
          <span className="text-xs mt-1">Your Items</span>
        </li>
        <li className="flex flex-col items-center cursor-pointer">
          <FaRegHeart size={18} />
          <span className="text-xs mt-1">Favourites</span>
        </li>
        <li className="flex flex-col items-center cursor-pointer">
          <FaRegCommentDots size={18} />
          <span className="text-xs mt-1">Chat</span>
        </li>
        <li className="flex flex-col items-center cursor-pointer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9417/9417389.png"
            alt="Blogs"
            className="w-5 h-5"
          />
          <span className="text-xs mt-1">Blogs</span>
        </li>
        <li className="flex flex-col items-center cursor-pointer">
          <MdOutlineWork size={18} />
          <span className="text-xs mt-1">Career</span>
        </li>
        <li className="flex flex-col items-center cursor-pointer">
          <FaBell size={18} />
        </li>

        {/* Profile Dropdown */}
        <li className="relative cursor-pointer">
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold"
          >
            {firstLetter}
          </div>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  {user}
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600">
                  <Link to="/">
                    Logout
                  </Link>
                </li>
              </ul>
              <div className="border-t border-gray-200">

                <button
                  className="w-full px-4 py-2 text-left text-white bg-green-500 hover:bg-green-600 rounded-b-lg"
                >
                  <Link to="/createcar">
                    Add Car
                  </Link>
                </button>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
