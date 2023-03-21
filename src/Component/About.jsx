import {
  Box,
  Button,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
// import resume from "../docs/Neerav_Khatri_Resume.pdf";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import GitHub from "./GitHub";
import resume from "../docs/Kunal_Deotale_Resume.pdf";

export default function About() {
  return (
    <div>
      <Box
        id="about"
        className="about section"
        w="80%"
        m="auto"
        mt="5%"
        p="30px"
      >
        <VStack>
          <Heading textDecoration="underline" color="#3e2723" mb="5%">
            About Me
          </Heading>
          <Text
            id="user-detail-name"
            fontWeight="bold"
            fontSize={{ base: "xl", md: "3xl" }}
          >
            Hello! I'm Kunal Deotale
          </Text>
          <Text
            id="user-detail-intro"
            fontSize={{ base: "md", md: "2xl" }}
            w="80%"
          >
            A full stack developer, with 1200+ hours of coding experience,
            practice 300+ hours of Data structure and algorithms. High
            adaptability to learn and collaborate in a rapidly changing
            environment. Looking forward to working as a web developer with a
            reputed firm driven by technology.{" "}
          </Text>
          <Box pt="20px">
            <Link id="resume-button-2" href={resume} download textAlign="left">
              <Button
                id="resume-link-2"
                bgColor="#ff7043"
                color="#3e2723"
                fontSize="1.5em"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1W1sxkvVZOshxEcAixTGUe8Wt9r0oxjhj/view?usp=sharing"
                  )
                }
              >
                Resume
              </Button>
            </Link>
            <HStack gap="20px" mt="10px">
              <Link href="https://github.com/kunal8987" isExternal>
                <BsGithub size="2em" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kunal-deotale-976b10246/"
                isExternal
              >
                <BsLinkedin size="2em" />
              </Link>
              <Link href="mailto:kdeotale4@gmail.com" isExternal>
                <GoMail size="3em" />
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Box>
      <GitHub />
    </div>
  );
}
