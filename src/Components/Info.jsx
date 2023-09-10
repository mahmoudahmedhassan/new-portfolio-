import { Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";

function Info() {
  const info = [
    "Our team brings a focused, sound and innovative approach to ou",
    "With experience in both practical business and strong technology delivery we can understand our clients",
    "business goals,design IT & creative strategies in line with their vision,",
    "and providehigh quality, scalable solutions using leading technologies.",
  ];
  return (
    <Box padding="20px" bg="#fff">
      <Text >Who We Are ?</Text>
      <Text >
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team, but it also brings
        benefits to engineering teams. It makes sure that our experiences have a
        consistent look and feel, not just in our design specs, but in
        production
      </Text>
      <Button>learn more</Button>
    </Box>
  );
}

export default Info;
