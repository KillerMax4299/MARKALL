"use client";

const Form = () => {
  return (
    <div className="font-extralight space-y-6 w-1/2 flex flex-col bg-white border-black scale-150 drop-shadow-xl py-6 p-14">
      <h1 className="text-4xl font-semibold tracking-tighter">Contact Now</h1>
      <p className="text-xs leading-3 text-neutral-400">
        In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed
        nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id vestibulum
        tincidunt adipiscing gravida risus.
      </p>
      <input
        type="text"
        placeholder="Name *"
        className="py-2 border-0 border-b-[1px]"
      />
      <input
        type="email"
        placeholder="Email *"
        className="py-2 border-0 border-b-[1px]"
      />
      <input
        type="tel"
        placeholder="Phone *"
        className="py-2 border-0 border-b-[1px]"
      />
      <input
        type="text"
        placeholder="Message"
        className="py-2 border-0 border-b-[1px]"
      />
      <button className="transition-all duration-300 active:scale-95 active:drop-shadow-none drop-shadow-md w-1/4 font-normal p-2 px-4 bg-blue-500/80 text-white hover:bg-blue-500">Submit Form</button>
    </div>
  );
};

export default Form;
