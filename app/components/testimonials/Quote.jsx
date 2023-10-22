"use client";

import { BiSolidQuoteLeft } from "react-icons/bi";

const Quote = ({ quote, speaker, designation }) => {
  return (
    <div className="text-xl flex justify-end text-teal-900">
      <div className="w-1/2 flex flex-col relative space-y-4">
        <div className="text-4xl absolute -translate-x-12 opacity-40">
          <BiSolidQuoteLeft />
        </div>
        <h4 className="text-3xl tracking-tight">{quote}</h4>
        <div className="flex flex-col -space-y-1">
          <h2 className="text-3xl font-bold tracking-tighter ">{speaker}</h2>
          <h2 className="font-semibold opacity-50">{designation}</h2>
        </div>
      </div>
    </div>
  );
};

export default Quote;
