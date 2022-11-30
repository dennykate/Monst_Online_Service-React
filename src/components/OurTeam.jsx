import React from "react";
import {
  Paragraph,
  Title,
  Container,
  SubTitle,
  Paragraph2,
} from "./StyleComponents";

import { teamData } from "../utils";

const OurTeam = () => {
  return (
    <Container bg={"bg-[#F8FAFC]"}>
      <div className="lg:max-w-full max-w-[768px] mx-auto sm:px-10 px-3">
        <div className="flex flex-col lg:flex-row lg:gap-20 sm:gap-5 gap-2">
          <div className="lg:w-2/5 sm:w-2/3 w-full">
            <Title>
              We are <span className="text-[#3B82F6]">awesome team</span> for
              your business dream
            </Title>
          </div>
          <div className="lg:w-3/5 w-full">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis. Quisque vitae nulla malesuada,
              auctor arcu vitae, luctus nisi. Sed elementum vitae ligula id
              imperdiet.
            </Paragraph>
          </div>
        </div>

        <div className="mt-10 w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {teamData.map(({ image, title, paragraph }, index) => (
            <div
              className="sm:px-2 px-1 sm:py-12 py-8 bg-white flex flex-col justify-center items-center sm:gap-3 gap-2
          hover:-translate-y-2 hover:shadow-xl shadow-sm transition-all duration-200 ease-in-out lg:last:col-span-1 
          md:last:col-span-2"
            >
              <div
                className="w-14 h-14 rounded-full flex justify-center items-center bg-[#BFDBFE]
            text-[#1E40AF] font-poppins font-extrabold text-lg sm:mb-2 mb-1"
              >
                {index + 1}
              </div>
              <div className="sm:w-[180px] w-full mx-auto h-[180px] sm:mb-2 mb-1">
                <img src={image} className="w-full h-full" alt="team" />
              </div>
              <SubTitle>{title}</SubTitle>
              <Paragraph2>{paragraph}</Paragraph2>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default OurTeam;
