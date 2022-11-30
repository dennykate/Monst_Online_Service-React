import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { AiOutlinePlus } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import Logo from "../assets/logo.svg";
import { navbarData, smNavbarData } from "../utils";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className="w-full bg-transparent justify-between items-center absolute xl:p-[40px] p-[20px] 
        top-0 lg:flex hidden"
      >
        <img src={Logo} alt="logo" className="w-[150px]" />
        <ul className=" list-none flex gap-10 ">
          {navbarData.map(({ name, dot }, index) => (
            <motion.li
              initial={{ translateY: -30, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.09 }}
              key={index}
              className=" font-montserrat text-[#475569] font-semibold hover:text-[#87858B] cursor-pointer transition-all
          duration-200 ease-in-out"
            >
              {name} {dot && <span className="text-[#94A3B8]">&#8226;</span>}
            </motion.li>
          ))}
        </ul>
        <div className="flex gap-4">
          <button
            className="py-2 px-4 font-montserrat border-[1px] border-[#93C5FD] rounded-md font-medium
          hover:-translate-y-1 transition-all duration-200 ease-in-out"
          >
            Log In
          </button>
          <button
            className="py-2 px-4 font-montserrat bg-[#3B82F6] text-white font-medium rounded-md opacity-70
          hover:-translate-y-1 transition-all duration-200 ease-in-out hover:opacity-100"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div
        className={`w-full justify-between items-center fixed bg-[#ffffff] p-[25px] top-0 lg:flex 
        hidden
          ${
            showNavbar ? "translate-y-0 " : "-translate-y-80 "
          } transition-all duration-1000 ease-in-out shadow-lg z-50`}
      >
        <img src={Logo} alt="logo" className="w-[150px]" />
        <ul className=" list-none flex gap-10 ">
          {navbarData.map(({ name, dot }, index) => (
            <li
              key={index}
              className=" font-montserrat text-[#475569] font-semibold hover:text-[#87858B] cursor-pointer transition-all
          duration-200 ease-in-out"
            >
              {name} {dot && <span className="text-[#94A3B8]">&#8226;</span>}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <button
            className="py-2 px-4 font-montserrat border-[1px] border-[#93C5FD] rounded-md font-medium
          hover:-translate-y-1 transition-all duration-200 ease-in-out"
          >
            Log In
          </button>
          <button
            className="py-2 px-4 font-montserrat bg-[#3B82F6] text-white font-medium rounded-md opacity-70
          hover:-translate-y-1 transition-all duration-200 ease-in-out hover:opacity-100"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Small Screen */}
      <div
        className="max-w-[800px] mx-auto p-[20px] sm:px-[20px] px-[10px] flex justify-between items-center 
      lg:hidden"
      >
        <img src={Logo} alt="logo" className="w-[120px]" />
        <button
          className="p-2 bg-white border-[1px] border-[#3B82F6] rounded-md"
          onClick={() => setShowSidebar(true)}
        >
          <HiBars3 size={18} color="#3B82F6" />
        </button>
      </div>

      <div
        className={`w-full fixed top-0 lg:hidden 
        bg-white z-50
      ${
        showNavbar ? "translate-y-0 " : "-translate-y-80"
      } transition-all duration-1000 ease-in-out shadow-lg`}
      >
        <div className="max-w-[800px] mx-auto p-[20px] sm:px-[20px] px-[10px] flex justify-between items-center">
          <img src={Logo} alt="logo" className="w-[120px]" />
          <button
            className="p-2 bg-white border-[1px] border-[#3B82F6] rounded-md"
            onClick={() => setShowSidebar(true)}
          >
            <HiBars3 size={18} color="#3B82F6" />
          </button>
        </div>
      </div>

      <div
        className={`w-screen h-screen bg-black bg-opacity-10 fixed top-0 
      ${
        showSidebar ? "block" : "hidden"
      } transition-all duration-200 ease-in-out lg:hidden`}
      ></div>

      <div
        className={`h-screen sm:w-[640px] w-full z-50
         bg-white fixed top-0 left-0 shadow-lg sm:px-[20px] px-[8px] overflow-scroll
         ${
           showSidebar ? "translate-x-0" : "-translate-x-[100%]"
         } transition-all duration-300 ease-in-out lg:hidden`}
      >
        <div className="w-full py-[20px] mb-6 flex justify-between ">
          <img src={Logo} alt="logo" className="w-[120px]" />
          <button onClick={() => setShowSidebar(false)}>
            <HiXMark size={26} color="gray" />
          </button>
        </div>
        <ul className="list-none flex flex-col gap-6 mb-10">
          {smNavbarData.map((data, index) => (
            <li
              key={index}
              className=" font-montserrat text-[#475569] flex justify-between items-center text-sm"
            >
              <p>{data}</p>
              {data == "Home" && <AiOutlinePlus size={10} color="black" />}
              {data == "Blog" && <AiOutlinePlus size={10} color="black" />}
            </li>
          ))}
        </ul>
        <div className="mb-24">
          <button className="w-full py-3 mb-3 bg-[#3B82F6] font-montserrat text-white text-sm font-medium">
            Sign Up
          </button>
          <button
            className="w-full py-3 border-[#3B82F6] border-[1px] font-montserrat text-[#3B82F6] text-sm 
          font-medium"
          >
            Log In
          </button>
        </div>
        <div className="flex flex-col gap-5 pb-8">
          <p className="font-montserrat text-[#475569] text-sm">
            Get in touch
            <span className="text-[#3B82F6] underline">contact@monst.com</span>
          </p>
          <div className="flex gap-5">
            <FaFacebookF color="#3B82F6" size={24} />
            <FaTwitter color="#3B82F6" size={24} />
            <FaInstagram color="#3B82F6" size={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
