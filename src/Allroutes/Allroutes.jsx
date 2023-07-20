import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../features/Authentication/login";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
