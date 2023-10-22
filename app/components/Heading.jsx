"use client";

const Heading = ({ Main_text, Description }) => {
  return (
    <div
      className="w-1/2 pb-4 border-0 border-b-4 border-black">
      <h3 className="uppercase text-xl my-2">{Main_text}</h3>
      <h1 className="text-6xl font-bold tracking-tighter ">{Description}</h1>
    </div>
  );
};

export default Heading;
