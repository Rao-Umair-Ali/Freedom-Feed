
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Screens/login/Login";
import Feed from "./Screens/feed/feed";
import Home from "./Screens/Home/Home";
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Feed" element={<Feed/>} />
          <Route path="/Home" element={<Home/>} />
          
        </Routes>
      </BrowserRouter>
  );
}
export default App;
