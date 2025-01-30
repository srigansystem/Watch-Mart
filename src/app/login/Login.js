import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      alert("Login Successful");
      window.location.href = "/home";
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="brand-title">Eswari Times Watch Hub</h1>
        <p className="tagline">Your gateway to timeless elegance</p>
        <form className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        {/* <p className="register-text">
          Don't have an account? <a href="/register">Register here</a>
        </p> */}
      </div>
    </div>
  );
};

export default Login;
