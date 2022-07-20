import React from "react";
import { Route, Routes } from "react-router-dom";
import Timer from "../pages/Timer";
import Error404 from "../pages/Error404";

function AppRouter () {
  return(
    <Routes>
      <Route path="/" element={<Timer/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
  );
}

export default AppRouter;