"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { HiPlay } from "react-icons/hi2";

const Content = () => {
  return (
    <>
      <div className="flex bg-black text-white h-[45rem] rounded-bl-[6rem]">
        <div className="w-1/2 flex p-20 ">
          <div className=" flex flex-col items-end space-y-12 justify-center">
            <div className="text-7xl font-bold tracking-tighter w-5/6">
              <h1>
                Reach your -{" "}
                <span className="cursor-pointer hover:no-underline underline decoration-4 underline-offset-4">
                  audience
                </span>{" "}
                & convert your leads
              </h1>
            </div>
            <div className="text-lg leading-6 font-extralight tracking-wide w-5/6 flex flex-col space-y-4">
              <span>
                Get your customers with SEO, rank your business with email
                marketing, build sales leads
              </span>
              <div className="flex space-x-4 font-medium">
                <button className="transition-all duration-200 active:scale-95 hover:text-green-300 hover:bg-black capitalize py-1 rounded-lg text-black border-2 border-green-400 bg-green-400 w-fit px-4">
                  get started
                </button>
                <button className="transition-all duration-200 active:scale-95 hover:bg-neutral-300 hover:text-black flex items-center space-x-2 capitalize py-1 rounded-lg border-2 bg-black w-fit px-4">
                  <HiPlay />
                  <span>watch demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-1/2 flex justify-start p-20 items-center">
          <div className="absolute border-2 border-neutral-700 w-[579px] h-[386px] translate-x-10 -translate-y-10" />
          <span className="z-10">
            <Image
              src="./Marketing.png"
              width={578}
              height={386}
              alt="Marketing.png"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Content;
