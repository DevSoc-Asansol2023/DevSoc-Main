import React, {useState, useEffect, useRef} from 'react';
import { useSpring, animated } from 'react-spring';
import {IoIosCheckmarkCircle} from "react-icons/io";

const AnimatedButton = ({ delay, children }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const animationRef = useRef(null);
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateX(-50%)' },
    to: { opacity: shouldAnimate ? 1 : 0, transform: shouldAnimate ? 'translateX(0)' : 'translateX(-50%)' },
    config: { tension: 300, friction: 15 },
    delay,
  });


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.5) {
            setShouldAnimate(true);
          }
        });
      },
      { threshold: 0.5 }
    );
  
    if (animationRef.current) {
      observer.observe(animationRef.current);
    }
  
    return () => {
      if (animationRef.current) {
        observer.unobserve(animationRef.current);
      }
    };
  }, []);

  return (
    <animated.button
      ref={animationRef}
      style={animationProps}
      className="bg-[#434343] text-white w-80 h-[100px] py-2 px-4 rounded-3xl flex items-center justify-start"
    >
      <IoIosCheckmarkCircle className="text-green-500 mr-2" />
      <span>{children}</span>
    </animated.button>
  );
}


const CountingNumber = ({ endValue, displayText }) => {
  const [count, setCount] = useState(0);
  const countingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.5 && count < endValue) {
            const timer = setInterval(() => {
              setCount((prevCount) => Math.min(prevCount + 1, endValue));
            }, 200);
  
            return () => {
              clearInterval(timer);
            };
          }
        });
      },
      { threshold: 0.5 }
    );
  
    if (countingRef.current) {
      observer.observe(countingRef.current);
    }
  
    return () => {
      if (countingRef.current) {
        observer.unobserve(countingRef.current);
      }
    };
  }, [count, endValue]);
  

  const displayCount = count >= endValue ? displayText : count;

  return <p ref={countingRef} className="text-[#4E9EFD]">{displayCount}</p>;
};


function Build(){
  return (
    <div className='flex flex-col h-[100vh] md:max-h-[90vh]'>
    <div className="flex justify-center items-start h-screen bg-[#0D1117] font-inter">
      <div className="w-[993px] md:h-[500px] bg-[#1D1D1D] md:grid grid-cols-3 grid-rows-3 gap-1 p-4 relative rounded-2xl mb-0">

        <div className="flex items-center justify-center row-start-1 col-start-1 mb-5">
          <AnimatedButton delay={100}>Build</AnimatedButton>
        </div>

        <div className="flex items-center justify-center row-start-2 col-start-2 mb-5">
          <AnimatedButton delay={300}>Review</AnimatedButton>
        </div>

        <div className="flex items-center justify-center row-start-3 col-start-3 mb-5">
          <AnimatedButton delay={500}>Engage</AnimatedButton>
        </div>
      </div>
      <div className="md:hidden flex w-full h-4"></div>
    </div> 
    
      <footer className=" flex flex-row md:flex md:flex-col md:items-center md:justify-start py-4 bg-[#0D1117] md:mt-0">
      <div className="md:flex md:items-center md:mt-0">
      <div className="bg-white w-0 h-px md:w-px md:h-28 mx-2"></div>
        <span className="text-white text-3xl md:text-center mx-20"><CountingNumber endValue={10} displayText="10+"/>Team Projects</span>
        <div className="bg-white w-0 h-px md:w-px md:h-28 mx-2"></div>
        <span className="text-white text-3xl md:text-center mx-20"><CountingNumber endValue={200} displayText="200+"/> Members</span>
        <div className="bg-white w-0 h-px md:w-px md:h-28 mx-2"></div>
        <span className="text-white text-3xl md:text-center mx-20"><CountingNumber endValue={1} displayText="1"/>Award<br/>received</span>
        <div className="bg-white w-0 h-px md:w-px md:h-28 mx-2"></div>
      <span className="text-white text-3xl md:text-center mx-20"><CountingNumber endValue={20} displayText="20+"/> Team<br/>members</span>
      <div className="bg-white w-0 h-px md:w-px md:h-28 mx-2"></div>
      </div>
    </footer>
    </div>
  );
};

export default Build;
