import React, { useEffect } from "react";
import Zee5 from "../../assets/Zee5.png";
import urban from "../../assets/urban company.png";
import Crystara from "../../assets/Crystara.png";
import job from "../../assets/Job finder.png";
import AOS from "aos";

import "aos/dist/aos.css";
const Project = [
  {
    id: 1,
    src: Zee5,
    name: "Zee5",
    desc: "This is Zee5 website clone which is an online movie , web-series, serial etc streaming website .This project is made by 5 people including me in a span of 5 days..",
    stack: "JavaScript | HTML | CSS | JSON server",
    github: "https://github.com/somya143/chemical-rake-3857",
    deploy: "https://legendary-brigadeiros-fb6721.netlify.app/",
  },
  {
    id: 2,
    src: urban,
    name: "Urban Company",
    desc: "Urban Company Clone. This platform provides step-door services to the user like Hair-cut, repairs and other things..",
    stack: "HTML | CSS | JavaScript",
    github: "https://github.com/NLucifer03/Urban-Company-Clone",
    deploy: "https://rainbow-smakager-616752.netlify.app/final%20output/home",
  },
  {
    id: 3,
    src: Crystara,
    name: "Crystara",
    desc: "We have clone the website Caratlane.com. CaratLane is an Indian physical and online jewelry retailer. We have given a unique name called Crystara and logo our website.",
    stack:
      "HTML | CSS | JavaScript |  ReactJs | Chakra-Ui | NextJs | Redux |JSON server",
    github: "https://github.com/Neerav-Khatri/Crystara",
    deploy: "https://crystara-swart.vercel.app/",
  },
  {
    id: 4,
    src: job,
    name: "Job Finder",
    desc: "Job Finder are a great way to find local, national, and international job opportunities. They provide job seekers with easy access to hundreds of employers and millions of job postings. Job websites allow job seekers to search and apply for jobs online, receive job alerts, and find useful information about potential employers.",
    stack: "HTML | CSS | JavaScript |  ReactJs | Chakra-Ui |JSON server",
    github: "https://github.com/kunal8987/impossible-dinner-5849",
    deploy: "https://curious-pastelito-5d0841.netlify.app/",
  },
];
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div id="projects" className="bg-stone-300 py-12">
      <div className="text-3xl text-center font-bold p-10 text-gray-900 md:text-5xl">
        <span className="border-b-4 border-black">Projects</span>
      </div>
      <div className="grid grid-cols-1 gap-10 gap-y-10 py-2 md:grid-cols-2 lg:grid-cols-3">
        {Project.map((post) => (
          <div data-aos="zoom-in-up" key={post.id} className="border-2 border-black rounded-xl">
            <img
              src={post.src}
              className="aspect-video object-contain border p-3 object-top w-full"
              alt=""
            />
            <div className="min-h-min p-3">
              <p className="mt-2 flex-1 text-xl font-semibold text-gray-900">
                {post.name}
              </p>
              <p className="mt-2 w-full text-lg leading-normal text-gray-600">
                {post.desc}
              </p>
              <div>
                <p className="text-md truncate pt-3 font-semibold leading-tight text-gray-900">
                  Tech-Stack:- {post.stack}
                </p>
                <div className="flex flex-wrap justify-between align-baseline">
                  <a href={post.github} target="_blank">
                    <button
                      type="button"
                      className="mt-4  rounded-sm bg-black px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Git-Repo
                    </button>
                  </a>
                  <a href={post.deploy} target="_blank">
                    <button
                      type="button"
                      className="mt-4 rounded-sm bg-black px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Deploy
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
