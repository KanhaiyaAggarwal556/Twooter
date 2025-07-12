import React, { useState } from "react";
import "./logIn.css";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setError("Both fields are required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email is invalid");
    } else {
      setError("");
      // Handle login logic here
      console.log("Form submitted:", { email, password });
    }
  };

  return (
    <div className="BODY">
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="Button1">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
