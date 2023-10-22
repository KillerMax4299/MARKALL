"use client";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

const Bottom = () => {
  return (
    <div className="px-20 py-16 w-full rounded-xl bg-neutral-200/50 flex">
      <div className="w-1/2 flex items-center">
        <div className="flex flex-col space-y-12">
          <div className="font-bold text-4xl tracking-tight w-2/3">
            Save precious time with automation
          </div>
          <div className="text-xl w-2/3">
            Lorem ipsum dolor sit amet consectetur. Sed id luctus posuere massa
            leo purus cras commodo. Volutpat massa fusce sit libero ut mollis
            risus.
          </div>
          <div className="group font-semibold cursor-pointer transition-all duration-500 flex items-center">
            <span>Learn more</span>
            <div className="ml-1 transition-all duration-300 group-hover:ml-[12px]">
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <Image
          src="./Automation.png"
          width={528}
          height={352}
          alt="Automation.png"
        />
      </div>
    </div>
  );
};

export default Bottom;
