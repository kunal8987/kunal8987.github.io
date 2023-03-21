import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function SkillCard({ src, name }) {
  return (
    <div>
      <Box
        class="skills-card"
        textAlign="center"
        border="1px solid #3e2723"
        borderRadius="20px"
        _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;" }}
      >
        <Flex flexDirection={"column"}>
          <Box
            class="skills-card-img"
            display="flex"
            justifyContent="center"
            alignItems="center"
            h={{ base: "15vh", sm: "20vh", md: "20vh", lg: "25vh" }}
          >
            <Image  w="40%" src={src} alt={name} />
          </Box>
          <Text
            class="skills-card-name"
            fontSize={{ base: "sm", sm: "md", md: "lg", lg: "2xl" }}
          >
            {name}
          </Text>
        </Flex>
      </Box>
    </div>
  );
}
