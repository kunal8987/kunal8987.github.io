import React from "react";
import { Linkedin, Github, Mail, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <section
      id="contacts"
      className="relative overflow-hidden bg-stone-300 py-12"
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-center">
          <div className="w-auto p-8">
            <div className="mb-[100px]">
              <div className="text-3xl text-center font-bold text-gray-900 md:text-5xl">
                <span className="border-b-4 border-black">Connect With Me</span>
              </div>
            </div>
            <ul className="-m-5 flex flex-wrap justify-center align-middle items-center">
              <li className="p-5">
                <a
                  className="font-medium text-xl flex text-gray-600 hover:text-gray-700"
                  href="https://www.linkedin.com/in/kunal-deotale-976b10246/"
                  target="_blank"
                >
                  <span className="px-3">
                    <Linkedin />
                  </span>
                  LinkedIn
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-xl flex text-gray-600 hover:text-gray-700"
                  href="#"
                  targrt="_blank"
                >
                  <span className="px-3">
                    <Twitter />
                  </span>
                  Twitter
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
                  GitHub
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
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
