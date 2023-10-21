import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { animated, useSpring } from "react-spring";

const AnimatedButton = ({ delay, children }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const animationRef = useRef(null);
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateX(-50%)" },
    to: {
      opacity: shouldAnimate ? 1 : 0,
      transform: shouldAnimate ? "translateX(0)" : "translateX(-50%)",
    },
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
};

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

  return (
    <p ref={countingRef} className="text-[#4E9EFD]">
      {displayCount}
    </p>
  );
};

function Build() {
  const { t } = useTranslation('build');

  return (
    <div className="flex flex-col h-100">
      <div className="sm:flex justify-center items-start h-100 bg-[#0D1117] font-inter">
        <div className="sm:w-[1024px] md:h-[500px] bg-[#1D1D1D] md:grid grid-cols-3 grid-rows-3 gap-1 p-4 relative rounded-2xl mb-4">
          <div className="flex items-center justify-center sm:row-start-1 sm:col-start-1 mb-5">
            <AnimatedButton delay={100}>{t('actionButton1')}</AnimatedButton>
          </div>

          <div className="flex items-center justify-center row-start-2 col-start-2 mb-5">
            <AnimatedButton delay={300}>{t('actionButton2')}</AnimatedButton>
          </div>

          <div className="flex items-center justify-center row-start-3 col-start-3 mb-5">
            <AnimatedButton delay={500}>{t('actionButton3')}</AnimatedButton>
          </div>
        </div>
        <div className="md:hidden flex w-full h-4"></div>
      </div>

      <div className="flex justify-center items-center text-center  sm:flex sm:flex-col md:flex md:flex-col md:items-center md:justify-start sm:justify-center bg-[#0D1117] md:mt-0">
        <div className="md:flex md:items-center md:mt-0">
          <div className="bg-white w-0 h-px md:w-px md:h-28 mx-2"></div>
          <span className="text-white flex flex-col justify-center text-3xl mb-10 sm:mx-10 sm:mt-0 mt-10">
            <CountingNumber endValue={10} displayText="10+" />
            {t('teamProjects')}
          </span>
          <div className="bg-white w-0 h-px md:w-px md:h-28 mx-2"></div>
          <span className="text-white flex flex-col justify-center text-3xl md:text-center sm:mx-10 mb-7">
            <CountingNumber endValue={200} displayText="200+" />
            {t('members')}
          </span>
          <div className="bg-white w-0 h-px md:w-px md:h-28 mx-2"></div>
          <span className="text-white flex flex-col justify-center text-3xl md:text-center sm:mx-10 mb-7">
            <CountingNumber endValue={1} displayText="1" />
            {t('awardsReceived')}
          </span>
          <div className="bg-white w-0 h-px md:w-px md:h-28 mx-2"></div>
          <span className="text-white flex flex-col justify-center text-3xl md:text-center sm:mx-10 mb-10">
            <CountingNumber endValue={20} displayText="20+" />
            {t('teamMembers')}
          </span>
          <div className="bg-white w-0 h-px md:w-px md:h-28 mx-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Build;
