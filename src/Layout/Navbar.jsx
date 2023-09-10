import { useTranslation } from "react-i18next";
import { Button, Flex, Image } from "@chakra-ui/react";
import * as FiIcons from "react-icons/fi";
import logo from "../assets/logo.jpg"
const Navbar = () => {
  const { i18n } = useTranslation();

  return (
    <Flex
      as="nav"
      paddingInline={4}
      alignItems="center"
      bg="#fff"
      height="70px"
      color="#000"
      boxShadow='2xl'
    >
      <Flex alignItems="center" width="100%" justifyContent="space-around">
        <Image src={logo} alt="logo" w="100px" h="60px" />
         <Flex alignItems="center" gap={3}>
          <Button
            type="button"
            p={0}
            bg="none"
            height="auto"
            _hover={{ bg: "none" }}
            color="#000"
            onClick={() =>
              i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")
            }
          >
            <FiIcons.FiGlobe size={20} />
          </Button>
          <Button
            type="button"
            padding={"10px"}
            bg="#03D4DB"
            color="#fff"
           
            height="auto">featchers of chatbot</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
