import React from "react";

function NavBar() {

    return (
        <nav className="w-full bg-[#0D1117] shadow">
        <svg className="md:absolute md:top-0 md:left-0 w-80 h-80 md:z-0" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(45)">
            <stop offset="50%" stopColor="#FF52A8" />
            <stop offset="100%" stopColor="#B176F0" />
          </linearGradient>
        </defs>
        <ellipse cx="20" cy="20" rx="70" ry="70" fill="url(#gradient)" />
      </svg>
            <div className="justify-end px-2 mx-auto md:items-center md:flex md:px-8 font-inter">
                <div className="mt-5">
                        <ul className="items-end justify-end ml-0 space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-white hover:text-purple-500 underline-offset hover:no-underline ">
                                <a href="#">Home</a>
                            </li>
                            <li className="text-white hover:text-purple-500 underline-offset hover:no-underline">
                                <a href="#">About Us</a>
                            </li>
                            <li className="text-white hover:text-purple-500 underline-offset hover:no-underline">
                                <a href="#">Blog</a>
                            </li>
                            <li className="text-white hover:text-purple-500 ml-0 underline-offset hover:no-underline">
                                <a href="#">Your Account</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    );
}
export default NavBar;