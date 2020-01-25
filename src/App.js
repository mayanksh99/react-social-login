import React, { useState } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import { LinkedInPopUp } from "react-linkedin-login-oauth2";
import LinkedInPage from "./LinkedInPage";
import "./App.css";

function App() {
  const [state, setState] = useState({ isloggedIn: false, user: "" });
  // const handleFailure = err => {
  //   console.error(err);
  // };

  const handleLogout = () => {
    setState({ isloggedIn: false, user: "" });
  };
  const responseFacebook = response => {
    console.log(response);
    setState({ isloggedIn: true, user: response });
  };
  const responseGoogle = response => {
    console.log(response.profileObj);
    setState({ isloggedIn: true, user: response.profileObj });
  };
  return (
    <>
      <div className="container">
        <h1 className="heading">Social Login</h1>

        {!state.isloggedIn ? (
          <div>
            <FacebookLogin
              appId="1763913083744541"
              // autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
            />
            <br></br>
            <br></br>
            <GoogleLogin
              clientId="805194883716-hqmtmdffp68a10tl323nd3eplrblnb9h.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        ) : (
          <div>
            <h1>{state.user.name}</h1>
            <img
              className="img-fluid"
              src={state.user.picture.data.url || state.user.imageUrl}
              height="200px"
              width="200px"
              alt=""
            ></img>
            <br></br>
            <button className="btn btn-primary" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        )}
        <div>
          <Switch>
            <Switch>
              <Route exact path="/linkedin" component={LinkedInPopUp} />
              <Route path="/" component={LinkedInPage} />
            </Switch>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
