import React, { useState } from "react";

import Chat from "../Components/Chat/Chat";
import { BsChatDots } from "react-icons/bs";
import classes from "../Styles/chat.module.css";
import { Box, Flex } from "@chakra-ui/react";
import Info from "../Components/Info";
import { Container } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
const Home = () => {
  const [showChatBox, setShowChatBox] = useState(true);

  return (
    <Container maxW="container.xl" >
      <SimpleGrid
        columns={{ base: 1, md: 2 }} >

        <Flex justifyContent="center" alignItems="center">
          <Info />
        </Flex>

        <Flex flexDirection="column" alignItems="flex-end"  width="100%" justifyContent="end">
          {showChatBox && (
            <div >
              <Chat />
            </div>
          )}
          <div
             onClick={() => setShowChatBox((prev) => !prev)}
          >
            <BsChatDots
              className={classes.chatBotIcon}
              style={{ fontSize: "40px" }}
            />
          </div>
        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default Home;
