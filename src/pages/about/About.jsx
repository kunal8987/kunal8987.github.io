import React, { useEffect } from "react";
import { Linkedin, Github, Mail, Twitter } from "lucide-react";
import AOS from "aos";

import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <section id="about" className="px-2 py-12  bg-stone-300 md:px-0">
      <div className="text-3xl text-center font-bold p-10 text-gray-900 md:text-5xl">
        <span className="border-b-4 border-black">About</span>
      </div>
      <figure
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="mx-auto max-w-2xl"
      >
        <h1 className="mb-4 text-3xl text-center font-semibold text-black md:text-5xl">
          {" "}
          Hello! I'm Kunal Deotale
        </h1>
        <blockquote className="mt-10 text-xl font-medium text-gray-700">
          <p>
            “ A Full Stack Developer, With 1200+ Hours Of Coding Practice, 300+
            Hours Of Data Structure And Algorithms. High Adaptability To Learn
            And Collaborate In A Rapidly Changing Environment. As A Full Stack
            Developer, I'm Well Versed In The Latest Front End Technologies Such
            As React, Redux, And Chakra UI, And Have Worked With Node.js,
            Express.js, Mongo DB, And Other Back End Tools. Looking Forward To
            Working As A Web Developer With A Reputed Firm Driven By
            Technology.”
          </p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-6 justify-center align-middle">
          <div className="isolate flex -space-x-2">
            <ul className="-m-5 flex flex-wrap items-center">
              <li className="p-5">
                <a
                  className=" font-medium text-xl flex text-gray-600 hover:text-gray-700"
                  href="https://www.linkedin.com/in/kunal-deotale-976b10246/"
                  target="_blank"
                >
                  <span className="px-3">
                    <Linkedin />
                  </span>
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-xl flex text-gray-600 hover:text-gray-700"
                  href="#"
                >
                  <span className="px-3">
                    <Twitter />
                  </span>
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-xl flex text-gray-600 hover:text-gray-700"
                  href="https://github.com/kunal8987"
                  target="_blank"
                >
                  <span className="px-3">
                    <Github />
                  </span>
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-xl flex text-gray-600 hover:text-gray-700"
                  href="mailto:kdeotale4@gmail.com"
                >
                  <span className="px-3">
                    <Mail />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default About;
