import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };


export const AuthProvider = ({ children }) => {
  
    const [token, setToken] = useState(localStorage.getItem("accessToken") || null);

    const login = (token) => {
      setToken(token);
      localStorage.setItem("accessToken", token);
      console.log("User logged in");
    };
    
    const logout = () => {
      setToken(null);
      localStorage.removeItem("accessToken");
      console.log("User logged out");
    };
    
    console.log("Current token:", token);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
            {children}
    </AuthContext.Provider>
  )
}
