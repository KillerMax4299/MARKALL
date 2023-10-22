import axios from "axios";
import { Suspense, useEffect, useRef, useState } from "react";
import { useResource } from "react-request-hook";
import { Icon } from "@iconify/react";
import { FaExclamation } from "react-icons/fa";

//<Icon icon="svg-spinners:ring-resize" />

const Form = () => {
  const [submit, setSubmit] = useState(false);
  const [data, setData] = useState({});
  const name = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const message = useRef(null);
  // const result = use(axios.get(process.env.API_URL));

  function handleClick() {
    if (
      name.current.value != "" &&
      phone.current.value != "" &&
      email.current.value != "" &&
      message.current.value != ""
    ) {
      setSubmit(true);

      setData({
        name: name.current.value,
        phone: phone.current.value,
        email: email.current.value,
        message: message.current.value,
      });
    }
  }
  return (
    <div className="font-extralight space-y-6 w-1/2 flex flex-col bg-white border-black scale-150 drop-shadow-xl py-6 p-14">
      <h1 className="text-4xl font-semibold tracking-tighter">Contact Now</h1>
      <p className="text-xs leading-3 text-neutral-400">
        In diam consequat nec eu. Eu sem nec vel, sollicitudin ipsum viverra sed
        nibh amet. Nunc, et pharetra, duis tortor dictum nisl. Id vestibulum
        tincidunt adipiscing gravida risus.
      </p>
      <input
        spellCheck="false"
        ref={name}
        type="text"
        placeholder="Name *"
        className="py-2 border-0 border-b-[1px] transition-all duration-300 focus:border-zinc-600"
      />
      <input
        spellCheck="false"
        ref={email}
        type="email"
        placeholder="Email *"
        className="py-2 border-0 border-b-[1px] transition-all duration-300 focus:border-zinc-600"
      />
      <input
        spellCheck="false"
        ref={phone}
        type="tel"
        placeholder="Phone *"
        className="py-2 border-0 border-b-[1px] transition-all duration-300 focus:border-zinc-600"
      />
      <input
        spellCheck="false"
        ref={message}
        type="text"
        placeholder="Message"
        className="py-2 border-0 border-b-[1px] transition-all duration-300 focus:border-zinc-600 "
      />
      <button
        onClick={handleClick}
        className=" transition-all duration-300 active:scale-95 active:drop-shadow-none drop-shadow-md w-1/4 font-normal p-2 px-4 bg-blue-500/80 text-white hover:bg-blue-500"
      >
        Submit Form
      </button>
      {submit ? (
        <Data input={data} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Form;

const Loading = () => {
  return (
    <div
      style={{ marginTop: "0" }}
      className="absolute inset-0 z-10 backdrop-blur-md flex justify-center items-center"
    >
      <div className="text-4xl text-blue-500 tracking-tight">
        <Icon icon="svg-spinners:ring-resize" />
      </div>
    </div>
  );
};

const Data = ({ input }) => {
  const [result, setResult] = useState(false)
  
  useEffect(() => {
    const logDataAfterDelay = setTimeout(() => {
      senddata()
    }, 10);
    return () => clearTimeout(logDataAfterDelay);
  }, []); 

  async function senddata() {
    console.log(process.env.API_URL);
    const result = await axios.post(
      "http://localhost:5000/sendemail",
      input
    );
    setResult(result.data)
  }

  
  if (result) {
    return (
      <div
        style={{ marginTop: "0" }}
        className="absolute inset-0 z-10 backdrop-blur-md flex justify-center items-center"
      >
        <div className="font-semibold text-2xl text-black/50 tracking-tight">
          Thank you contacting us.
        </div>
      </div>
    );
  }
  else {
    return (
      <Loading/>
    )
  }
};
