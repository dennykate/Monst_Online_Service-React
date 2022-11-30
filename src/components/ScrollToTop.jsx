import React, { useEffect, useState } from "react";
import { HiArrowSmUp } from "react-icons/hi";

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={`fixed sm:bottom-7 sm:right-7 bottom-2 right-2 w-[40px] h-[40px] flex justify-center items-center 
      z-50 bg-[#086AD8] opacity-100 hover:opacity-100
    rounded-sm  transition-all duration-500 ease-in-out cursor-pointer md:opacity-80 
    ${showBtn ? "translate-y-0 opacity-100" : "translate-y-52 opacity-0"}`}
      onClick={handleScroll}
    >
      <HiArrowSmUp color="white" size={22} />
    </button>
  );
};

export default ScrollToTop;
