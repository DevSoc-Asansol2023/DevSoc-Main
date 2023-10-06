import React from "react";
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
function Footer(){
  return (
    <footer className="bg-[#0D1117] text-white py-8 font-poppins">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center md:flex-row md:justify-around items-center mt-4">
          <div className="text-center md:text-left">
        <div className="flex flex-col justify-between mt-4 md:flex md:flex-row">
          <div className="text-left">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex mt-2 space-x-2 md:flex">
              <a href="https://www.instagram.com/dev.soc_aec/" className="text-white">
                <AiOutlineInstagram className="ml-1 h-7 w-7"/>
              </a>
              <a href="#" className="text-white">
                <FaFacebook className="w-6 h-6 ml-1"/>
              </a>
              <a href="https://twitter.com/devsociety2023" className="text-white">
                <BsTwitter className="w-6 h-6 ml-1"/>
              </a>
              <a href="https://www.linkedin.com/in/development-society-aec-3b6886277/" className="text-white">
                <FaLinkedin className="w-6 h-6 ml-1"/>
              </a>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mt-7 md:mt-0">Contact Us</h3>
            <p className="mt-2 text-xl ">Asansol, West Bengal-713304</p>
            <p>decsoc.aec@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
