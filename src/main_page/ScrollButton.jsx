import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";


const ScrollButton = () => {
	const [visible, setvisible] = useState(false);

  const gotobtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  let mybutton = document.getElementById("mybtn");

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setvisible(true);
    } else {
		setvisible(false);
    }
  }
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  return (
    <>
      {visible && (
        <div
          id="mybtn"
          className=" w-10 h-10 fixed bottom-8  right-6 border bg-white cursor-pointer rounded-3xl flex justify-center items-center  hover:bg-sky-300 animate-bounce  "
          onClick={gotobtn}
        >
          <FaArrowUp className="top-btn--icon" />
        </div>
      )}
    </>
  );
};

export default ScrollButton;
