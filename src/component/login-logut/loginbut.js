import React from 'react';
import GoogleLogin from 'react-google-login';
import {Navigate, useNavigate} from "react-router-dom"
import { useContext} from 'react'
import {gapi} from 'gapi-script'
import { Context } from '../../context/context';
import { useEffect } from 'react';

function LoginButt() {
    const {user,dispatch,isFetching} = useContext(Context)
    const clientID = "303239102100-ootbj6iv6aknefmj493p2s62h6f2t2tt.apps.googleusercontent.com"
    useEffect(()=>{
      gapi.load("client:auth2",()=>{
        gapi.auth2.init({clientId:clientID})
      })
    },[])
  const responseGoogle=(rseponse)=>{
     dispatch({type:"LOGIN_SUCESS",payload:rseponse.profileObj.email})
    
  }
  /*707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com*/
 /*658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com*/
    return (
        <GoogleLogin
        clientId={clientID}
        buttonText='Log in with Google'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}></GoogleLogin>
    );
}
export default LoginButt;