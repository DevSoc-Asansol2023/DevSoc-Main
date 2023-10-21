import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

function Footer(){
  const { t } = useTranslation('footer');

  return (
    <footer className="bg-[#0D1117] text-white py-8 font-poppins">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center md:flex-row md:justify-around items-center mt-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">{t('followUs')}</h3>
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
            <h3 className="text-2xl font-semibold mt-7 md:mt-0">{t('contactUs')}</h3>
            <p className=" text-xl mt-2">{t('contactAddress')}</p>
            <p>{t('contactEmail')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
