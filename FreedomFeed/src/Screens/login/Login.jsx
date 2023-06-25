import React from 'react'
import "./Login.css"
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className='mainlogin'>
      <div className="childdiv">
      <div><img src="https://cdn.iconscout.com/icon/free/png-512/metamask-2728406-2261817.png"  className='Metamasklogo' alt='Not Found'/></div>
      <div> <button className="loginbtn" type="submit" onClick={()=>navigate("/Home")}>Log in</button></div>
      <div><p className='loginpara'>Login by connecting your metamask wallet</p></div>
      </div>
     
      </div>
  
  )
}

export default Login