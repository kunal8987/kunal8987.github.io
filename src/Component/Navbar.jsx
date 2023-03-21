import style from "../Style/Navbar.module.css";
import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import resume from "../docs/Kunal_Deotale_Resume.pdf";

const Navbar = () => {
  return (
    <div>
      <Box id="nav-menu" className={style.navbar}>
        <Flex justifyContent="space-between" alignContent="center">
          <Box ml="20px">
            <Heading>Kunal Deotale</Heading>
          </Box>
          <Box id={style.normal}>
            <HStack gap="30px" fontSize="20px">
              <Link href="#home" class="nav-link home">
                Home
              </Link>
              <Link href="#about" class="nav-link about">
                About Me
              </Link>
              <Link href="#skills" class="nav-link skills">
                Skills
              </Link>
              <Link href="#projects" class="nav-link projects">
                Project
              </Link>
              <Link href="#contact" class="nav-link contact">
                Contact
              </Link>
              <Link href={resume} download class="nav-link resume">
                <Button
                  color="#3e2723"
                  bgColor="#ff7043"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1W1sxkvVZOshxEcAixTGUe8Wt9r0oxjhj/view?usp=sharing"
                    )
                  }
                >
                  Resume
                </Button>
              </Link>
            </HStack>
          </Box>
          <Box id={style.hamburger}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon color="#05386B" />}
              />
              <MenuList bgColor="#ff7043" textAlign="center" closeOnSelect>
                <MenuItem bgColor="#ff7043" color="#3e2723">
                  <Link href="#home" class="nav-link home">
                    Home
                  </Link>
                </MenuItem>
                <MenuItem bgColor="#ff7043" color="#3e2723">
                  <Link href="#about" class="nav-link about">
                    About Me
                  </Link>
                </MenuItem>
                <MenuItem bgColor="#ff7043" color="#3e2723">
                  <Link href="#skills" class="nav-link skills">
                    Skills
                  </Link>
                </MenuItem>
                <MenuItem bgColor="#ff7043" color="#3e2723">
                  <Link href="#projects" class="nav-link projects">
                    Project
                  </Link>
                </MenuItem>
                <MenuItem bgColor="#ff7043" color="#3e2723">
                  <Link href="#contact" class="nav-link contact">
                    Contact
                  </Link>
                </MenuItem>
                <MenuItem bgColor="#ff7043">
                  <Link href={resume} download class="nav-link resume">
                    <Button
                      color="#3e2723"
                      bgColor="#ffe0b2"
                      onClick={() =>
                        window.open(
                          "https://drive.google.com/file/d/1W1sxkvVZOshxEcAixTGUe8Wt9r0oxjhj/view?usp=sharing"
                        )
                      }
                    >
                      Resume
                    </Button>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
      <Box h="80px"></Box>
    </div>
  );
};

export default Navbar;
