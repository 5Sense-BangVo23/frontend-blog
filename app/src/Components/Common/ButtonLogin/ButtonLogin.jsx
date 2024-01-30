import React from 'react'
import '../ButtonLogin/style.css'

export const ButtonLogin = ({ onClick, loading }) => {
    return (
        <button onClick={onClick} className="login-button" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      );
}
