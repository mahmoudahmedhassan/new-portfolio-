import { useTranslation } from "react-i18next";
import { ChakraProvider as ChProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    bg: "#EAF2F6",
    primary: "#602ACE",
    secondary: "#21c1d6",
    light: "#ffffff",
    lightGray: "#ffffff8c",
    dark: "#fff",
    text: "#67757c",
    border: "#eee",
    shadow: "0 0.5rem 1rem rgba(0,0,0,.05)"
  }
});

const ChakraProvider = ({ children }) => {
  const { i18n } = useTranslation();
  return (
    <ChProvider
      theme={{
        ...theme,
        start: i18n.language === "en" ? "left" : "right",
        end: i18n.language === "en" ? "right" : "left"
      }}
    >
      {children}
    </ChProvider>
  )
}

export default ChakraProvider