import React from "react";
import Banner from "./Banner";
import Input from "./Input";
import Filter from "./Filter";
import Jobs from "./Jobs";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-4 mt-4">
      <Banner />
      <Input />
      <Filter />
      <Jobs />
      </div>
    </>
  );
};

export default page;
