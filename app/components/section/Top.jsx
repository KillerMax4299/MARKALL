"use client";
import Heading from "../Heading";
import { useState, useEffect } from "react";

const Top = () => {
  return (
    <div className="py-10 px-20 w-full flex flex-col space-y-14">
      <Heading
        Main_text="our features"
        Description="Know your audience and boost sales"
      />
      <div className="text-xl flex justify-end">
        <h4 className="w-1/2">
          Effective emails convey the most significant substance to a client at
          the proper time which is our marketing approaches include scheduled
          emails.
        </h4>
      </div>
    </div>
  );
};

export default Top;
