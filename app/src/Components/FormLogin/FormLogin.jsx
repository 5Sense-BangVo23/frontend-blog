// FormLogin.jsx
import React, { useState } from "react";
import "./style.css"; // Đảm bảo import file CSS tương ứng
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import person_icon from "../Assets/person.png";
import { login } from "../../ApiUtils";
import { useNavigate } from "react-router-dom";
import { Loader } from "./Loader/Loader";
import { InputField } from "../Common/InputField/InputField";
import { ButtonLogin } from "../Common/ButtonLogin/ButtonLogin";

export const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true); 

      const loginRequest = {
        email,
        password,
      };

      const response = await login(loginRequest);
      console.log("Login successful:", response);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="fade">
  <div className="login-form">
    <div className="input">
      <img src={person_icon} alt="Person" className="icon" />
    </div>
    <InputField
      type="email"
      placeholder="Email"
      value={email}
      onChange={setEmail}
      icon={email_icon}
      className="custom-input" 
    />
    <InputField
      type="password"
      placeholder="Password"
      value={password}
      onChange={setPassword}
      icon={password_icon}
      className="custom-input" 
    />
    <ButtonLogin onClick={handleLogin} loading={loading} />
    
    {loading && <Loader />} 
  </div>
</div>

  );
};
