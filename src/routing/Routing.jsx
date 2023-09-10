import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

import Home from "../Pages/Home";
function Routing() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
}

export default Routing;
