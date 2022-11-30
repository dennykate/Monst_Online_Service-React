import React from "react";
import { motion } from "framer-motion";

import Favicon from "../assets/favicon.svg";

const LoadingPage = () => {
  return (
    <div className="w-screen h-screen bg-white z-50 flex justify-center items-center">
      <motion.div
        animate={{ translateY: [-15, 20, 0] }}
        transition={{ duration: 1.8 }}
        className="flex flex-col items-center gap-1 "
      >
        <img src={Favicon} alt="favicon" className="w-[60px]" />
        <h1 className=" font-poppins font-semibold text-black text-lg">
          Monst
        </h1>
      </motion.div>
    </div>
  );
};

export default LoadingPage;
