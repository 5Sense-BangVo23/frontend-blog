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
  const [loading, setLoading] = useState(false); // Thêm state để theo dõi trạng thái của Loader
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true); // Bắt đầu hiển thị Loader khi bắt đầu đăng nhập

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
      setLoading(false); // Dừng hiển thị Loader khi quá trình đăng nhập kết thúc (thành công hoặc thất bại)
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
      className="custom-input" // Apply custom class here
    />
    <InputField
      type="password"
      placeholder="Password"
      value={password}
      onChange={setPassword}
      icon={password_icon}
      className="custom-input" // Apply custom class here
    />
    <ButtonLogin onClick={handleLogin} loading={loading} />
    
    {loading && <Loader />} 
  </div>
</div>

  );
};
