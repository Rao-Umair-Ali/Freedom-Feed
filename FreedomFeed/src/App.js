

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Screens/login/Login";
import Home from "./Screens/Home/Home"
import Explore from "./Screens/Explore/Explore";
import Notification from "./Screens/Notification/Notification";
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Explore" element={<Explore/>} />
          <Route path="/Notification" element={<Notification/>} />
          
        </Routes>
      </BrowserRouter>
  );
}
export default App;
