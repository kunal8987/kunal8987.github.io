import React, { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
const Github = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div id="github" className="bg-stone-300 w-full py-12">
      <div className="text-3xl text-center font-bold p-10 text-gray-900 md:text-5xl">
        <span className="border-b-4 border-black">Github</span>
      </div>

      <div
        data-aos="flip-right"
        className="text-2xl text-center font-bold  text-gray-900 md:text-3xl"
      >
        Github Calendar
        <div className="flex flex-wrap pt-10 justify-center align-middle ">
          <img
            src="https://ghchart.rshah.org/kunal8987"
            className=" aspect-auto object-contain object-top w-full p-10 rounded-xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Github;
