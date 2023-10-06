import React,{useState} from "react";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
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
      <div className="justify-end px-2 mx-auto md:items-center md:flex mr-12 font-inter ">
        <div className="mt-10">
          <ul className="items-end ml-0 space-y-14 md:flex md:space-x-14 md:space-y-0">
            <li className="text-white hover:text-yellow-500 underline-offset hover:no-underline">
              <a href="#">Home</a>
            </li>
            <li className="text-white hover:text-yellow-500 underline-offset hover:no-underline">
              <a href="#">About Us</a>
            </li>
            <li className="text-white hover:text-yellow-500 underline-offset hover:no-underline">
              <a href="#">Blog</a>
            </li>
            <li className="text-white hover:text-yellow-500 ml-0 underline-offset hover:no-underline">
              <span onMouseEnter={toggleMenu} className="text-white cursor-pointer hover:text-yellow-500 hover:no-underline">Your Account</span>
              {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-opacity-50 border border-gray-300 rounded shadow-lg">
                  <ul>
                    <li className="py-2 px-4 hover:bg-purple-500 hover:text-white cursor-pointer">Log In</li>
                    <li className="py-2 px-4 hover:bg-purple-500 hover:text-white cursor-pointer">Sign In</li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    

    );
}
export default NavBar;