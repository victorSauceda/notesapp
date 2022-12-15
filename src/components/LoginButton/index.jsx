import React, { useState } from "react";
import "./index.css";

const LoginButton = () => {
  const [user, setUser] = useState(false);
  return (
    <div className="loginButton">
      <button onClick={() => setUser(!user)}>
        {user ? "Log out" : "Log in"}
      </button>
      <p>You are {user ? "Logged in" : "Logged out"}</p>
    </div>
  );
};

export default LoginButton;
