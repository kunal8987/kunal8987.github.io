import { Box, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import Zee5 from "../docs/Zee5.png";
import urban from "../docs/urban company.png";
import Crystara from "../docs/Crystara.png";
import job  from "../docs/Job finder.png";

export default function Project() {
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
            deploy: "https://rainbow-smakager-616752.netlify.app/final%20output/home"
           
        },
        {
            id: 3,
            src: Crystara,
            name: "Crystara",
            desc: "We have clone the website Caratlane.com. CaratLane is an Indian physical and online jewelry retailer. We have given a unique name called Crystara and logo our website.",
            stack: "HTML | CSS | JavaScript |  ReactJs | Chakra-Ui | NextJs | Redux |JSON server",
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
        }
    ]
   
    return (
        <div>
            <Box id="projects" w={{base: "95%", md: "80%"}} m="auto" mt="5%" p="30px">
                <Heading textDecoration="underline" color="#3e2723" mb="5%">Projects</Heading>
                {Project.map((e) => <ProjectCard key={e.id} data={e} />)}
            </Box>
        </div>
    )
}