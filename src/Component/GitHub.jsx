import { Box, Flex, Heading, Image } from "@chakra-ui/react";

export default function Github() {
  return (
    <div>
      <Box w="70%" m="auto" mt="5%" p="30px">
        <Box>
          <Heading textDecoration="underline" color="#3e2723" mb="5%">
            Github Statistics
          </Heading>
          <Flex
            justifyContent="space-around"
            direction={{ base: "column", sm: "column", lg: "row", xl: "row" }}
            gap="10px"
          >
            <Box id="github-stats-card">
              <Image
                src="https://camo.githubusercontent.com/32f8241a4739dfdb553ef0a14d847e47a31b8cdae086a9e5ff7d416a956c3ba2/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6b756e616c383938372673686f775f69636f6e733d74727565266c6f63616c653d656e267468656d653d726561637426686964655f626f726465723d747275652662675f636f6c6f723d304431313137"
                alt="Stats"
              />
            </Box>
            <Box id="github-streak-stats">
              <Image
                src="https://camo.githubusercontent.com/0dee9080cbcc6f3f387fae6f56db60269bf978ee55336b4fd3f1116f902db553/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d6b756e616c3839383726686964655f626f726465723d74727565267468656d653d726561637426686964655f626f726465723d747275652662675f636f6c6f723d304431313137"
                alt="Strek"
              />
            </Box>
            <Box id="github-top-langs">
              <Image
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=kunal8987&theme=dark"
                alt="Language"
              />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Heading textDecoration="underline" color="#3e2723" mb="5%" mt="5%">
            Github Calendar
          </Heading>
          <Box className="react-activity-calendar">
            <Image
              width={{ base: "100%", sm: "100%" }}
              m="auto"
              bgColor="#e0e0e0"
              borderRadius="5px"
              src="https://ghchart.rshah.org/kunal8987"
              alt="Git Calender"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
