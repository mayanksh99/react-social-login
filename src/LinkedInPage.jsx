import React, { useState } from "react";
import { LinkedIn } from "react-linkedin-login-oauth2";

function LinkedInPage() {
  const [state, setState] = useState({ isloggedIn: false, user: "" });

  const responseLinkedIn = response => {
    console.log(response);
    // setState({ isloggedIn: true, user: response.profileObj });
  };

  const handleFailure = error => {
    console.log(error);
  };

  return (
    <div>
      {!state.isloggedIn ? (
        <>
          <br />
          <LinkedIn
            clientId="81efgunney25e7"
            onFailure={handleFailure}
            onSuccess={responseLinkedIn}
            scope="r_emailaddress w_share"
            redirectUri="http://localhost:3006/linkedin"
          >
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtvlDB7ZGnrWzBH-hq4bTB-9uudSTW-dtsM49k6Ox9Va4IVkpQ_Q&s"
              }
              alt="Log in with Linked In"
              style={{ maxWidth: "180px" }}
            />
          </LinkedIn>
        </>
      ) : (
        <div>
          <h1>Hello</h1>
          <h1>{state.user.name}</h1>
        </div>
      )}
    </div>
  );
}

export default LinkedInPage;
