import React, { useState } from 'react';

import { LinkedIn } from 'react-linkedin-login-oauth2';
// You can use provided image shipped by this package or using your own
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';



function LinkedInPage() {
  const linkedInLogin = ()=>{
     const url = window.location.href;
    console.log(url);
    const hasCode = url.includes("?code=");
    console.log(hasCode); 
  }
  return (
    <LinkedIn
      clientId="86vhj2q7ukf83q"
      redirectUri={`${window.location.origin}/linkedin`}
      onSuccess={(code) => {
        console.log("i sucesss")
        console.log(code);
      }}
      onError={(error) => {
        console.log("error")
        console.log(error);
      }}
    >
      {({ linkedInLogin }) => (
        <img
          onClick={linkedInLogin}
          src={linkedin}
          alt="Sign in with Linked In"
               style={{ maxWidth: '180px', cursor: 'pointer' }}
        />
      )}
    </LinkedIn>
  );
}


export default LinkedInPage