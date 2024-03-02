import React from "react";
import { CiSearch } from "react-icons/ci";

const SvgSearchComponent = () => (
  <svg
    className="w-5 h-5"
    style={{
      fill: "#fff",
    }}
    viewBox="0 0 30 30"
  >
    <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.947 9.947 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.947 9.947 0 0 0 23 13c0-5.511-4.489-10-10-10zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z" />
  </svg>
)
const SvgPlusComponent = () => (
  <svg
    style={{
      fill: "#fff",
    }}
    className="w-8 h-8 inline"
    viewBox="0 0 30 30"
  >
    <path d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm6 13h-5v5a1 1 0 1 1-2 0v-5H9a1 1 0 1 1 0-2h5V9a1 1 0 1 1 2 0v5h5a1 1 0 1 1 0 2z" />
  </svg>
)
const Input = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full ">

        <div className="flex items-center justify-center relative">
          <input type="text" className="rounded-full w-[650px] p-2  m-1 outline-none text-[15px] font-pop leading-[22px] font-light" placeholder="Role: Google, Programmer" />
          <div className="absolute right-2 top-2 bottom-2  px-2 py-1  rounded-full bg-[#5552FF]">
            <SvgSearchComponent />
          </div>
        </div>
        <div className=" border-[0.35px] border-[#969696] p-1 rounded-full">
        <div className="bg-[#C3C3C399] p-2 rounded-full ">
    <button className="bg-[#5552FF] rounded-full px-1 py-1">
          <SvgPlusComponent /><span className="font-pop text-[16px] leading-[24px] p-1 text-white">Referral Post</span>
        </button>
    </div>
        </div>
      </div>
    </>
  );
};

export default Input;
