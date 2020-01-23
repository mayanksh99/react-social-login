import React, { useState } from "react";
import "./App.css";
import SocialButton from "./SocialButton";

function App() {
  const [state, setState] = useState({ isloggedIn: false, user: "" });
  const handleSocialLogin = user => {
    console.log("user", user._profile);
    setState({ isloggedIn: true, user: user._profile });
  };

  const handleSocialLoginFailure = err => {
    console.error(err);
  };

  const handleLogout = () => {
    setState({ isloggedIn: false, user: "" });
  };
  return (
    <>
      <div className="container">
        <h1 className="heading">Social Login</h1>
      </div>
      {!state.isloggedIn ? (
        <div>
          <SocialButton
            provider="facebook"
            appId="1763913083744541"
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={handleSocialLoginFailure}
          >
            Login with Facebook
          </SocialButton>
        </div>
      ) : (
        <div>
          <h1>{state.user.name}</h1>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      )}
    </>
    // if(state.isloggedIn){
    //   <div></div>
    // }else{
    //   <SocialButton
    //   provider='facebook'
    //   appId='YOUR_APP_ID'
    //   onLoginSuccess={handleSocialLogin}
    //   onLoginFailure={handleSocialLoginFailure}
    // >
    //   Login with Facebook
    // </SocialButton>
    // }
  );
}

export default App;
