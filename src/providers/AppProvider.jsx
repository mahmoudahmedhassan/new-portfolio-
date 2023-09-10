import  ChakraProvider  from "./ChakraProvider";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Routing from "../routing/Routing";
import RoutesProvider from "./RoutesProvider";
import AppLayout from "../Layout/AppLayout";

function AppProvider() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
       <RoutesProvider>
        <ChakraProvider>
          <AppLayout>
            <Routing />
          </AppLayout>
        </ChakraProvider>
      </RoutesProvider>
   );
}

export default AppProvider;
