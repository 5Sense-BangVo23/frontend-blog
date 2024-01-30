// LoginContainer.jsx
import React, { useState } from "react";
import LoginForm from "../FormLogin";
import Loader from "./Loader";
import "./LoginContainer.css";

import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import person_icon from "../Assets/person.png";

export const LoginContainer = () => {
  const [isTransitioning, setTransitioning] = useState(false);
  const [isLogged, setLogged] = useState(false);

  const handleLoginSuccess = () => {
    setLogged(true);
    setTransitioning(false);
   
  };

  const handleLoginClick = () => {
    setTransitioning(true);
  };

  return (
    <div className={`login-container ${isTransitioning ? "transitioning" : ""}`}>
      <LoginForm
        personIcon={person_icon}
        emailIcon={email_icon}
        passwordIcon={password_icon}
        onLogin={handleLoginSuccess}
        onLoginClick={handleLoginClick}
      />
      {isTransitioning && <Loader />}
    </div>
  );
};
