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

export default function About() {
  return (
    <div>
      <Box id="about" class="about section" w="80%" m="auto" mt="5%" p="30px">
        <VStack>
          <Heading textDecoration="underline" color="#3e2723" mb="5%">
            About Me
          </Heading>
          <Text fontWeight="bold" fontSize="3xl">
            Hello! I'm Kunal Deotale
          </Text>
          <Text fontSize="2xl" w="80%">
            A full stack developer, with 1200+ hours of coding experience,
            practice 300+ hours of Data structure and algorithms. High
            adaptability to learn and collaborate in a rapidly changing
            environment. Looking forward to working as a web developer with a
            reputed firm driven by technology.{" "}
          </Text>
          <Box pt="20px">
            <Link href='' download textAlign="left">
              <Button
                bgColor="#ff7043"
                color="#3e2723"
                fontSize="1.5em"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1W1sxkvVZOshxEcAixTGUe8Wt9r0oxjhj/view"
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
    </div>
  );
}
