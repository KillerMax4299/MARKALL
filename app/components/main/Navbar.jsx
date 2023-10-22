"use client";

const Navbar = () => {
  return (
    <>
      <div className="flex bg-black/70 text-white h-16 fixed w-full z-20 backdrop-blur-md">
        <div className="flex items-center w-1/5 uppercase font-semibold text-2xl px-6">
          <span className="cursor-pointer">markall</span>
        </div>
        <div className="w-3/5 flex justify-center space-x-2 items-center text-lg">
          <Elements text="services" />
          <Elements text="prices" />
          <Elements text="about us" />
        </div>
        <div className="w-1/5 flex justify-end items-center px-4">
          <button className="h-fit font-semibold text-md py-[2px] transition-all duration-200 active:scale-95 hover:text-green-300 hover:bg-transparent capitalize rounded-md text-black border-2 border-green-400 bg-green-400 w-fit px-6">
            get started
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;

const Elements = ({ text }) => {
  return (
    <div className="transition-all duration-300 cursor-pointer capitalize w-fit text-white/50 hover:text-white hover:bg-neutral-500/20 px-6 py-2 rounded-md">
      {text}
    </div>
  );
};
