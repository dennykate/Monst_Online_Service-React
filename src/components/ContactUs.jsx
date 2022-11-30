import React from "react";
import {
  Container,
  Header,
  Input,
  InputFile,
  InputRadio,
  InputSubmit,
  InputTextArea,
  Title,
} from "./StyleComponents";

const ContactUs = () => {
  return (
    <Container bg={"bg-white"}>
      <div className="w-full flex flex-col ">
        <div className="max-w-[500px] mx-auto flex flex-col gap-5 justify-center items-center text-center">
          <Header>Contact Us</Header>
          <Title>
            We will <span className="text-[#3B82F6]">be glad</span> to hear from
            you!
          </Title>
        </div>

        <div>
          <div
            className="mt-5 max-w-[1000px] mx-auto flex flex-col gap-4 justify-center sm:px-7 px-1
          items-center"
          >
            <div className="flex sm:gap-5 gap-2 items-center mb-2 flex-wrap">
              <h6 className=" font-montserrat font-semibold sm:text-base text-sm text-black">
                Departament:
              </h6>
              <div className="flex gap-1 items-center">
                <InputRadio name={"Support"} />
                <InputRadio name={"Sales"} />
              </div>
            </div>

            <Input placeholder="Subject" />
            <Input placeholder="Name" />
            <Input placeholder="example@gmail.com" />
            <InputTextArea />
            <InputFile />
            <InputSubmit />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
