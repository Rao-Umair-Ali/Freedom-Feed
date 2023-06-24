
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Screens/login/Login";
import Feed from "./Screens/feed/feed";
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Feed" element={<Feed/>} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;
