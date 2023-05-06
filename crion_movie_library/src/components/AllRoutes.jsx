import React from "react";
import { Routes, Route } from "react-router-dom";
// import Search from '../Pages/Search';
import Home from "../Pages/Home";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
