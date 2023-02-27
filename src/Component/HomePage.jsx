import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import Profile from "../docs/Kunal.JPG";
// import resume from "../docs/Neerav_Khatri_Resume.pdf";

export default function HomePage() {
  return (
    <div>
      <Box id="home" w="80%" m="auto" mt="5%" color="#3e2723" p="30px">
        <Flex direction={{ sm: "column", lg: "row" }} gap="30px">
          <Box
            w={{ sm: "100%", lg: "50%" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack direction="column">
              <Box textAlign="left">
                <Heading fontSize="3em">Hello!</Heading>
                <Heading fontSize="3em">I'am Kunal</Heading>
                <Heading fontSize="3em">Full-Stack Developer</Heading>
              </Box>
              <Link href='' download textAlign="left">
                <Button
                  bgColor="#ff7043"
                  color="#3e2723"
                  fontSize="1.5em"
                  w="40%"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1W1sxkvVZOshxEcAixTGUe8Wt9r0oxjhj/view"
                    )
                  }
                >
                  Resume
                </Button>
              </Link>
              <HStack gap="20px">
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
            </Stack>
          </Box>
          <Box
            w={{ sm: "100%", lg: "50%" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={Profile}
              alt="Kunal Profile Picture"
              w="80%"
              borderRadius="10px"
            />
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
