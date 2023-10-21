'use client'

const Navbar = () => {
  return (
    <>
      <div className="flex bg-black text-white h-16 ">
        <div className="flex items-center w-1/5 uppercase font-semibold text-2xl px-6">
          <span className="cursor-pointer">markall</span>
        </div>
        <div className="w-3/5 flex justify-center space-x-2 items-center text-lg">
          <div className="transition-all duration-300 cursor-pointer capitalize w-fit text-neutral-500 hover:text-white hover:bg-neutral-800 px-6 py-2 rounded-md">
            services
          </div>
          <div className="transition-all duration-300 cursor-pointer capitalize w-fit text-neutral-500 hover:text-white hover:bg-neutral-800 px-6 py-2 rounded-md">
            prices
          </div>
          <div className="transition-all duration-300 cursor-pointer capitalize w-fit text-neutral-500 hover:text-white hover:bg-neutral-800 px-6 py-2 rounded-md">
            about us
          </div>
        </div>
        <div className="w-1/5 flex justify-end items-center px-4">
          <button className="h-fit font-semibold text-md py-[2px] transition-all duration-200 active:scale-95 hover:text-green-300 hover:bg-black capitalize rounded-md text-black border-2 border-green-400 bg-green-400 w-fit px-6">
            get started
          </button>
        </div>
      </div>
    </>
  );
}
export default Navbar