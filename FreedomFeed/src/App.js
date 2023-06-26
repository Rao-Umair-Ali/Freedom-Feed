

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Screens/login/Login";
import Home from "./Screens/Home/Home"
import Explore from "./Screens/Explore/Explore";
import Notification from "./Screens/Notification/Notification";
import Message from "./Screens/Message/Message";
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Explore" element={<Explore/>} />
          <Route path="/Notification" element={<Notification/>} />
          <Route path="/Message" element={<Message/>} />
          
        </Routes>
      </BrowserRouter>
  );
}
export default App;
