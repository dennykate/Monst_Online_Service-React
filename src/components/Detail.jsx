import React from "react";
import DetailItem from "./DetailItem";
import { Container } from "./StyleComponents";

import { detailData } from "../utils";

const Detail = () => {
  return (
    <Container bg={"bg-white"}>
      <div
        className="bg-white 
       grid lg:grid-cols-4 grid-cols-2 lg:gap-0 gap-5 lg:max-w-full
    max-w-[800px] mx-auto sm:px-5 px-3 "
      >
        {detailData.map((data, index) => (
          <DetailItem key={index} data={data} />
        ))}
      </div>
    </Container>
  );
};

export default Detail;
