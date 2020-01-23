import React from "react";
import SocialLogin from "react-social-login";

function SocialButton(props) {
  return (
    <div className="container">
      <button
        className="btn btn-primary"
        onClick={props.triggerLogin}
        {...props}
      >
        {props.children}
      </button>
    </div>
  );
}

export default SocialLogin(SocialButton);
