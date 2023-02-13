import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyLayout from "./components/MyLyout";
import Help from "./Pages copy/Help";
import Home from "./Pages copy/Home";



export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyLayout />}>
          <Route index element={<Home />} />
          <Route path="help" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}