import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopup, setPopup] = useState(false);

  const popOver = () => {
    setPopup(!isPopup);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderLinks = () => (
  <ul className={`items-end justify-end ml-0 space-y-8 md:flex md:space-x-6 md:space-y-0 text-xl ${isPopup ? 'bg-[#F3F4F6]' : ''} rounded-lg p-4 mr-3`}>
    <li className={`text-${isPopup ? 'black' : 'white'} transition duration-300 ease-in-out hover:text-purple-500 underline-offset hover:no-underline`}>
      <a href="#">Home</a>
    </li>
    <li className={`text-${isPopup ? 'black' : 'white'} transition duration-300 ease-in-out hover:text-purple-500 underline-offset hover:no-underline`}>
      <a href="#">About Us</a>
    </li>
    <li className={`text-${isPopup ? 'black' : 'white'} transition duration-300 ease-in-out hover:text-purple-500 underline-offset hover:no-underline`}>
      <a href="#">Blog</a>
    </li>
    <li className={`text-${isPopup ? 'black' : 'white'} transition duration-300 ease-in-out hover:text-purple-500 ml-0 underline-offset hover:no-underline`}>
      <span
        onMouseEnter={toggleMenu}
        className={`text-${isPopup ? 'black' : 'white'} cursor-pointer transition duration-300 ease-in-out hover:text-purple-500 hover:no-underline mr-4`}
      >
        Your Account
      </span>
      {isOpen && (
        <div className={`absolute left-0 mt-3 w-40 bg-opacity-90 border border-gray-300 rounded-md shadow-lg ${isPopup ? 'bg-white' : ''}`}>
          <ul>
            <li className="py-2 px-4 transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white cursor-pointer rounded-md ">Log In</li>
            <li className="py-2 px-4 transition duration-300 ease-in-out hover:bg-purple-500 hover:text-white cursor-pointer rounded-md">Sign In</li>
          </ul>
        </div>
      )}
    </li>
  </ul>
);

  return (
    <nav className="w-full bg-[#0D1117] shadow">
      <div onClick={popOver} className="absolute top-3 right-5 md:hidden">
        <svg
          className="w-9 h-9 text-white"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          fill="#ffffff"
          viewBox="0 0 50 50"
        >
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
        </svg>
      </div>

      <svg className="md:absolute md:top-0 md:left-0 w-80 h-80 md:z-0" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(45)">
            <stop offset="50%" stopColor="#FF52A8" />
            <stop offset="100%" stopColor="#B176F0" />
          </linearGradient>
        </defs>
        <ellipse cx="20" cy="20" rx="70" ry="70" fill="url(#gradient)" />
      </svg>

      {isPopup && (
        <div className="absolute top-0 right-0 justify-end px-2 mx-auto md:items-center md:flex md:px-8 font-inter mt-14">
          {renderLinks()}
        </div>
      )}

      <div className="justify-end px-2 mx-auto md:items-center md:flex md:px-8 font-inter hidden">
        {renderLinks()}
      </div>
    </nav>
  );
}

export default NavBar;
