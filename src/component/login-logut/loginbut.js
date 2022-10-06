import React from 'react';
import GoogleLogin from 'react-google-login';
import {Navigate, useNavigate} from "react-router-dom"
function LoginButt() {
    const handlefailure=(result)=>{
    console.log(result)
    alert(result)
    
  }
  const handleLogin=(googleData)=>{
    console.log(googleData);
    window.open("http://localhost:3000/","_self");

  }
 
    return (
        <GoogleLogin
        clientId="707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com"
        buttonText='Log in with Google'
        onSuccess={handleLogin}
        onFailure={handlefailure}
        cookiePolicy={'single_host_origin'}></GoogleLogin>
    );
}
export default LoginButt;