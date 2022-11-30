import React, { useEffect, useRef, useState } from "react";
import { Waypoint } from "react-waypoint";

const DetailItem = ({ data }) => {
  const [number, setNumber] = useState(0);
  const [isLeave, setIsLeave] = useState(false);

  let countInterval = useRef(null);
  let initialNumber = 0;

  const handleCounting = () => {
    setNumber(0);

    countInterval.current = setInterval(() => {
      initialNumber += data.quantity / 42.5555; // sec * 10

      if (initialNumber > data.quantity) {
        setNumber(data.quantity);
        clearInterval(countInterval.current);
      } else {
        setNumber(Math.floor(initialNumber));
      }
    }, 100);
  };

  const resetCounting = () => {
    clearInterval(countInterval.current);
    countInterval.current = null;
  };

  return (
    <Waypoint onEnter={handleCounting} onLeave={resetCounting}>
      <div className=" bg-white flex sm:gap-3 gap-1 items-center">
        <div
          className="xl:h-[100px] xl:w-[100px] sm:w-[70px] sm:h-[70px] w-[40px] h-[40px] 
        bg-[#F8FAFC] flex justify-center items-center rounded-lg"
        >
          <svg
            className="sm:w-10 sm:h-10 w-4 h-4"
            fill="none"
            stroke="#3B82F6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={data.svg}
            ></path>
          </svg>
        </div>
        <div className="flex flex-col ">
          <h1 className=" font-poppins font-bold text-black xl:text-3xl sm:text-2xl text-base">
            + {number}
            {data.aboveK && "k"}
          </h1>
          <h6 className=" font-montserrat text-[#94A3B8] xl:text-lg sm:text-base text-[8px]">
            {data.title}
          </h6>
        </div>
      </div>
    </Waypoint>
  );
};

export default DetailItem;
