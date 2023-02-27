import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { MdAddIcCall } from "react-icons/md";

export default function Contact() {
  return (        
    <div>               
      <Box id="contact" bgColor="#5d4037" color="#e0e0e0" mt="5%" p="30px">
        <Heading textDecoration="underline" color="#ff7043" mb="5%" mt="2%">
          Contact
        </Heading>
        <Heading>Kunal Deotale</Heading>
        <Flex
          direction={{ sm: "column", lg: "column", xl: "row" }}
          gap="10px"
          mt="30px"
          mb="3%"
          justifyContent="space-around"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="10px"
          >
            <Link href="">
              <MdAddIcCall size="3em" />
            </Link>
            <Link href="">
              <Text fontSize="lg">+91 7719093697</Text>
            </Link>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="10px"
          >
            <Link href="https://github.com/kunal8987" isExternal>
              <BsGithub size="3em" />
            </Link>
            <Link href="https://github.com/kunal8987" isExternal>
              <Text fontSize="lg">Kunal Deotale</Text>
            </Link>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="10px"
          >
            <Link
              href="https://www.linkedin.com/in/kunal-deotale-976b10246/"
              isExternal
            >
              <BsLinkedin size="3em" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/kunal-deotale-976b10246/"
              isExternal
            >
              <Text fontSize="lg">Kunal Deotale</Text>
            </Link>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="10px"
          >
            <Link href="mailto:kdeotale4@gmail.com" isExternal>
              <GoMail size="3em" />
            </Link>
            <Link href="mailto:kdeotale4@gmail.com" isExternal>
              <Text fontSize="lg">kdeotale4@gmail.com</Text>
            </Link>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
