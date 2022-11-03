import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import { Link } from 'react-router-dom';
// You can use provided image shipped by this package or using your own
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png';

function LinkedInPage() {
   const [code, setCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
    let Navigate = useNavigate()
  const { linkedInLogin } = useLinkedIn({
    clientId: '86vhj2q7ukf83q',
    redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log("i get")
      console.log(code)
       setCode(code);
      setErrorMessage("");
    },
    onError: (error) => {
      console.log(error);
       setCode("");
      setErrorMessage(error.errorMessage);
    },
  });

  return (
    <>
    <img
      onClick={linkedInLogin}
      src={linkedin}
      alt="Sign in with Linked In"
      style={{ maxWidth:'230px',borderRadius:"10px" }}
    />
       {!code && <div>No code</div>}
      {code && (
        <div>
          <div>Authorization Code: {code}</div>
          <div>
            Follow{" "}
            <Link
              target="_blank"
              href="https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin%2Fconsumer%2Fcontext&tabs=HTTPS#step-3-exchange-authorization-code-for-an-access-token"
              rel="noreferrer"
            >
              this
            </Link>{" "}
            to continue
          </div>
        </div>
      )}
      {errorMessage && <div>{errorMessage}</div>}
      </>
  );
}

export default LinkedInPage