import React, { useEffect } from "react";
import skills from "./data.json";
import AOS from "aos";

import "aos/dist/aos.css";
const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div id="skills"  className="bg-stone-300 py-12">
        <div className="text-3xl text-center font-bold p-8 text-gray-900 md:text-5xl">
          <span className="border-b-4 border-black">Skills</span>
        </div>

        <div className="grid gap-6 grid-cols-2 gap-y-10 py-6 md:grid-cols-3 lg:grid-cols-5 ">
          {skills.map((post) => (
            <div data-aos="zoom-in-down" key={post.name} className="border-2 border-black rounded-xl">
              <img
                src={post.src}
                className="aspect-video object-contain object-top w-full rounded-md"
                alt=""
              />
              <div className="min-h-min p-3">
                <p className="mt-4 flex-1 text-center text-base font-semibold text-gray-900">
                  {post.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
