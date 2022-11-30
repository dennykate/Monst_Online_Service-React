import React from "react";
import { motion } from "framer-motion";

import HeroBanner from "../assets/hero.svg";

const Hero = () => {
  return (
    <div className="w-full lg:min-h-screen lg:mb-0 mb-16 flex bg-white flex-col lg:flex-row">
      <div className="lg:w-1/2 w-full sm:px-[40px] px-[5px] lg:mt-[100px] sm:my-[50px] my-[20px] flex justify-start items-center">
        <div
          className="lg:max-w-[500px] max-w-[600px] lg:text-start text-center mx-auto flex flex-col 
        lg:items-start items-center"
        >
          <motion.h1
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
            className="md:text-[62px] sm:text-[50px] text-[30px] sm:leading-[75px]
          leading-[40px] font-poppins font-bold"
          >
            Committed to <span className="text-[#3B82F6]">People</span> and the
            future
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.7 }}
            className=" font-montserrat mt-6 text-[#9BA3B8] sm:text-lg text-base"
          >
            We are <span className="text-[#3B82F6] font-bold">Monst</span>, a
            Creative Design
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
            className="font-montserrat sm:mt-4 mt-2 text-[#9BA3B8] sm:text-base text-sm"
          >
            Helping you maximize operations management with digitization
          </motion.h1>
          <motion.div
            initial={{ translateY: 50 }}
            whileInView={{ translateY: 0 }}
            transition={{ duration: 1 }}
            className="flex sm:gap-10 gap-2 sm:mt-8 mt-6 sm:flex-row flex-col w-full sm:w-auto"
          >
            <button
              className="px-8 py-3 font-montserrat  text-white bg-[#3B82F6] rounded-sm
            opacity-75 hover:opacity-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 ease-in-out 
            font-bold text-sm sm:w-auto w-full"
            >
              Our Services
            </button>
            <button
              className="border border-[#CBD5E1] px-8 py-3 text-[#475569] font-montserrat font-bold 
      hover:-translate-y-1 transition-all duration-200 ease-in-out text-sm hover:shadow-lg
      sm:w-auto w-full"
            >
              How We Works?
            </button>
          </motion.div>
        </div>
      </div>
      <div
        className="lg:w-1/2 w-full lg:bg-[#F1F5F9] bg-white flex justify-center items-center lg:mt-0 
      sm:mt-16 mt-10 "
      >
        <motion.img
          whileInView={{ scale: [0.9, 1.1, 1] }}
          transition={{ duration: 1 }}
          src={HeroBanner}
          alt="hero"
          className="md:w-9/12 w-11/12 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
