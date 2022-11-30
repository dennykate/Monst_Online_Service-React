import React from "react";
import { MdMail } from "react-icons/md";

import { Container, Paragraph, Title } from "./StyleComponents";

const Subscribe = () => {
  return (
    <Container bg={"bg-[#3B82F6]"}>
      <div className="max-w-[600px] mx-auto text-center flex gap-5 items-center flex-col">
        <Title color="text-white">
          Subscribe now to{" "}
          <span className="text-[#BFDBFE]">Our Newsletter</span> and get the
          Coupon code.
        </Title>
        <Paragraph color="text-[#BDE3F0]">
          All your information is completely confidential
        </Paragraph>
        <div className="flex gap-5 w-full  px-1 mt-2 md:flex-row flex-col ">
          <div className="md:w-9/12 w-full h-[60px] flex bg-transparent border-[1px] border-[#93C5FD] rounded-md">
            <div className="flex justify-center items-center w-2/12 h-full">
              <MdMail size={25} color="#93C5FD" />
            </div>
            <input
              type="text"
              className="md:w-11/12 w-full h-[60px] border-none outline-none bg-transparent font-montserrat font-semibold
              text-sm text-white subscribe"
              placeholder="Type your email..."
            />
          </div>
          <button
            className="md:w-3/12 w-full h-[60px] flex justify-center items-center bg-white font-montserrat text-sm
          font-semibold text-[#3B82F6] rounded-md border-[1px] border-[#93C5FD] hover:bg-transparent
          hover:text-white transition-all duration-200 ease-in-out"
          >
            Sign Up
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Subscribe;
