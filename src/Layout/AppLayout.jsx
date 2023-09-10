import React from "react";
 import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { Flex } from "@chakra-ui/react";
function AppLayout({ children }) {
  return (
    <>
      <Navbar />
       <Flex alignItems="center" height="calc(100vh - 70px)" padding={{ base: 3, md: 10, }}>
        {children}
      </Flex>
    </>
  );
}

export default AppLayout;
