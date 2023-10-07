import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Card = ({ title, index }) => {
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
        <h2 className="flex justify-center items-center text-3xl font-semibold mb-10 ">
          {title}
        </h2>
        <button
          onClick={() => console.log(`Clicked "Read More" on: ${title}`)}
          className="bg-white hover:bg-purple-500 text-black font-bold px-8 py-4 rounded-xl"
        >
          Read More
        </button>
      </div>
    </motion.div>
  );
};

function Cards() {
  const cardTitles = [
    "Hackathon",
    "Upcoming Events",
    "Submit Your Projects",
    "1:1 mentorship",
    "Alumni Connect",
    "Project Review",
  ];

  return (
    <div className="h-auto bg-[#0D1117]  overflow-hidden font-poppins">
      <div className="text-white flex  flex-col text-[70px] md:flex md:flex-row md:items-center md:gap-8 md:justify-center lg:text-[100px] ">
        <span className="mt-5 font-extrabold ">INNOVATE.</span>
        <span
          className="mt-5 font-extrabold bg-gradient-to-b from-pink-500 to-blue-500 text-transparent bg-clip-text inset-0"
          style={{
            "--tw-gradient-from": "#F300F8",
            "--tw-gradient-to": "#2EA1E2",
          }}
        >
          DEVELOP.
        </span>
        <span className="mt-5 font-extrabold">ENGAGE</span>
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
