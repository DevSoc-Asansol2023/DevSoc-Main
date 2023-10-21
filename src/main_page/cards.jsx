import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

const Card = ({ title, index }) => {
  const { t } = useTranslation('common');

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { delay: index * 0.2 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="rounded-lg overflow-hidden"
    >
      <div className="bg-black text-white p-16 custom-border-gradient rounded-2xl flex flex-col justify-between items-center">
        <h2 className="flex justify-center items-center text-3xl font-semibold mb-12 ">
          {title}
        </h2>
        <button
          onClick={() => console.log(`Clicked "Read More" on: ${title}`)}
          className="bg-white hover:bg-purple-500 text-black font-bold px-8 py-4 rounded-xl"
        >
          {t('readMoreButton')}
        </button>
      </div>
    </motion.div>
  );
};

function Cards() {
  const { t } = useTranslation('cards');

  const cardTitles = t('cardTitles', { returnObjects: true });

  return (
    
    <div className="h-100 bg-[#0D1117] overflow-hidden font-poppins ">
      <div className="text-white flex flex-col justify-center items-center sm:text-[70px] text-[42px] md:flex md:flex-row md:items-center h-100 md:gap-8 md:justify-center lg:text-[100px] ">

        <span className="mt-5 font-extrabold">{t('statement1')}.</span>
        <span
          className="mt-3  font-extrabold bg-gradient-to-b from-pink-500 to-blue-500 text-transparent bg-clip-text inset-0"

          style={{
            "--tw-gradient-from": "#F300F8",
            "--tw-gradient-to": "#2EA1E2",
          }}
        >
          {t('statement2')}.
        </span>

        <span className="mt-3 font-extrabold">{t('statement3')}</span>
      </div>
      <div className=" flex justify-center items-center">
        <div className=" bg-gray-900  px-5 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl gap-4">
          {cardTitles.map((title, index) => (
            <Card key={title} title={title} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
