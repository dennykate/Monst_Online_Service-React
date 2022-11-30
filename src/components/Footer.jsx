import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Container, Paragraph, Paragraph2, SubTitle } from "./StyleComponents";

import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <Container>
      <div
        className="w-full flex lg:flex-row flex-col lg:justify-between justify-center lg:gap-0 gap-10
       lg:items-start items-center sm:px-[20px]"
      >
        <img src={Logo} alt="logo" className="w-[150px]" />
        <div className="max-w-[400px] lg:text-start text-center">
          <Paragraph>
            Helping you{" "}
            <span className="text-[#94A3B8] font-extrabold">maximize</span>{" "}
            operations management with digitization
          </Paragraph>
        </div>
        <div className="max-w-[200px] flex flex-col gap-3 lg:items-start items-center lg:text-start text-center">
          <SubTitle>Office</SubTitle>
          <Paragraph>359 Hidden Valley Road, NY</Paragraph>
        </div>
        <div className="max-w-[200px] flex flex-col gap-3 lg:items-start items-center lg:text-start text-center">
          <SubTitle>Contacts</SubTitle>
          <Paragraph>
            (+01) 234 568 <br /> contact@monst.com
          </Paragraph>
        </div>
      </div>

      <div
        className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-5 justify-between items-center lg:mt-[80px] mt-[40px] 
      sm:px-[30px]"
      >
        <Paragraph2>
          © 2022. All rights reserved. Designed by{" "}
          <span className="text-[#60A5FA]">Alithemes.com</span>
        </Paragraph2>
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-5"
        >
          <FaFacebookF
            size={30}
            className="cursor-pointer hover:bg-[#3B82F6] p-1 rounded-sm text-[#3B82F6] hover:text-white
            transition-all duration-200 ease-in-out"
          />
          <FaTwitter
            size={30}
            className="cursor-pointer hover:bg-[#3B82F6] p-1 rounded-sm text-[#3B82F6] hover:text-white
            transition-all duration-200 ease-in-out"
          />
          <FaInstagram
            size={30}
            className="cursor-pointer hover:bg-[#3B82F6] p-1 rounded-sm text-[#3B82F6] hover:text-white
            transition-all duration-200 ease-in-out"
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default Footer;
