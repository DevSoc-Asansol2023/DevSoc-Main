import React from "react";
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebook, FaLinkedin} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
function Footer(){
  return (
    <footer className="bg-[#0D1117] text-white py-8 font-poppins">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center md:flex-row md:justify-around items-center mt-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex md:flex mt-2 space-x-2">
              <a href="https://www.instagram.com/dev.soc_aec/" className="text-white">
                <AiOutlineInstagram className="h-7 w-7 ml-1"/>
              </a>
              <a href="#" className="text-white">
                <FaFacebook className="h-6 w-6 ml-1"/>
              </a>
              <a href="https://twitter.com/devsociety2023" className="text-white">
                <BsTwitter className="h-6 w-6 ml-1"/>
              </a>
              <a href="https://www.linkedin.com/in/development-society-aec-3b6886277/" className="text-white">
                <FaLinkedin className="h-6 w-6 ml-1"/>
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mt-7 md:mt-0">Contact Us</h3>
            <p className=" text-xl mt-2">Asansol, West Bengal-713304</p>
            <p>decsoc.aec@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
