import React from "react";
import { motion } from "framer-motion";
import { Container, Header, Paragraph, Title } from "./StyleComponents";

import { expertData } from "../utils";

const OurExpert = () => {
  return (
    <Container bg={"bg-white"}>
      <div className="w-full flex justify-center items-center flex-col gap-3">
        <Header>About Our Expert</Header>
        <div className="max-w-[600px] flex flex-col gap-3 items-center text-center">
          <Title>
            Entrust Your Project To Our{" "}
            <span className="text-[#3B82F6]">Specialists</span>
          </Title>
          <Paragraph>
            Our IT services converge business and technology experts to help to
            manage business categories
          </Paragraph>
        </div>
        <div className="w-full lg:px-0 sm:px-5 px-1 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-8 gap-4 mt-8">
          {expertData.map(({ image, name, role }, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              key={index}
              className="sm:py-10 py-5 hover:-translate-y-2 hover:shadow-2xl flex justify-center transition-all duration-200 ease-in-out 
          items-center sm:gap-3 gap-1 flex-col shadow-md rounded-md"
            >
              <img
                src={image}
                alt="experts"
                className="sm:w-[150px] sm:h-[150px] w-[90px] h-[90px] rounded-full mb-2"
              />

              <h1 className="sm:text-xl text-base font-poppins font-bold text-black text-center">
                {name}
              </h1>
              <h6 className="sm:text-base text-xs text-center font-montserrat text-[#94A9C1]">
                {role}
              </h6>
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OurExpert;
