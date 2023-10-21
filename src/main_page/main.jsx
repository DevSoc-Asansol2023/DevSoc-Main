import Lottie from 'lottie-react';
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import animationData from './icons/developer.json';

function Main(){
  const { t } = useTranslation('main');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsHovered(true);
  }, []);

  return (
<div className="flex flex-col h-auto w-auto bg-[#0D1117] font-poppins">
  <div className="flex flex-col md:flex-row">
    <svg className="hidden lg:block absolute lg:h-96 lg:mt-80 " viewBox="0 0 126 304" fill="none">
      <line x1="125" x2="125" y2="304" stroke="#D2A8FF" strokeWidth="2"/>
      <path d="M124 89.7524C96.448 24.9082 30.52 8.04616 1 7.72064" stroke="#BF40BF"/>
    </svg>
    <div className="hidden lg:block">
    <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          style={{
            background: "transparent",
            width: "50%",
            height: "50%",
            marginTop: isHovered ? "50%" : "30%",
            marginLeft: "40%",
            transition: "margin-top 1s",
          }}
      />
      </div>
    <section className="flex flex-col items-center md:items-end justify-start flex-1 p-8 bg-[#0D1117]">
      <div className="flex flex-col items-center mb-4 mt-10 md:flex-row md:items-center z-10">
        <h1 className="text-5xl md:text-8xl font-extrabold text-yellow-500 mb-2 font-inter md:mr-5 md:mt-20">{t('brandName')}</h1>
        <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-2 md:mr-5 md:mt-20">{t('appName')}</h1>
      </div>
      <h3 className="text-xl md:text-3xl font-semibold text-center text-white mt-5 md:mr-5 font-inter">{t('slogan')}</h3>
      <div className="text-base md:text-lg text-left text-white mt-10 mx-auto">{t('welcome')}<br/>
      <br/>{t('description')}<br/>
      </div>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-3 px-4 w-48 rounded mt-10 ml-5 mx-auto md:w-auto md:mt-10">{useTranslation('common').t('readMoreButton')}</button>
    </section>
  </div>
</div>
  );
}

export default Main;
