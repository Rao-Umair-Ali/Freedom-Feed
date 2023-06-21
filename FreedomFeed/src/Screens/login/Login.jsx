import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div className='mainlogin'>
      <div><img src="https://cdn.iconscout.com/icon/free/png-512/metamask-2728406-2261817.png"  className='Metamasklogo' alt='Not Found'/></div>
      <div> <button className="loginbtn" type="submit">Log in</button></div>
      <div><p className='loginpara'>Login by connecting your metamask wallet</p></div>
     
     
      </div>
  
  )
}

export default Login