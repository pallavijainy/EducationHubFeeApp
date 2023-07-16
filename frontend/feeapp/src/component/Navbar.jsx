import React, { useState } from "react";
import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="teal.500"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" ml="2">
          <Link to={"/"}>EducationHub</Link>
        </Heading>
      </Flex>

      {/* The following Box will be displayed on larger screens (>=md) */}
      <Box display={{ base: "none", md: "flex" }} alignItems="center">
        <Button variant="ghost" mx={2}>
          <Link to="/">Student Data</Link>
        </Button>
        <Button variant="ghost" mx={2}>
          <Link to={"/addnew"}>New Admission</Link>
        </Button>
      </Box>

      {/* The following Box will be displayed on smaller screens (<md) */}
      <Box display={{ base: "flex", md: "none" }} alignItems="center">
        <Button variant="ghost" mx={2} onClick={handleMenuToggle}>
          <HamburgerIcon />
        </Button>
      </Box>

      {/* The menu that appears on small screens */}
      {isMenuOpen && (
        <Box
          display={{ base: "block", md: "none" }}
          mt={2}
          p={2}
          bg="teal.700"
          borderRadius="md"
        >
          <Button variant="ghost" mx={2} onClick={handleMenuToggle}>
            <Link to="/">Student Data</Link>
          </Button>
          <Button variant="ghost" mx={2} onClick={handleMenuToggle}>
            <Link to={"/addnew"}>New Admission</Link>
          </Button>
        </Box>
      )}
    </Flex>
  );
};

export default Navbar;
