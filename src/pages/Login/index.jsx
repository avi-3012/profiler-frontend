import React from "react";
import { useState, useEffect } from "react";

import "./style.css";

const apiUrl = process.env.REACT_APP_API_URL;

const LoginForm = () => {
  const [invalidForm, setInvalidForm] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  async function LoginUser(e) {
    e.preventDefault();
    if (username !== "" && password !== "") {
      const response = await fetch(apiUrl + `/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      if (data.status === "ok") {
        localStorage.setItem("token", data.token);
        window.location.href = "/";
      } else {
        setInvalidForm("Invalid Credentials");
      }
    } else if (username === "") {
      setInvalidForm("Please enter an username!!");
    } else if (password === "") {
      setInvalidForm("Please enter a Password!!");
    }
  }
  useEffect(() => {
    setTimeout(() => {
      setInvalidForm("");
    }, 3000);
  }, [invalidForm]);
  return (
    <form className="LoginForm" onSubmit={(e) => LoginUser(e)}>
      <input
        type="username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="Enter Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <div className="InvalidForm">{invalidForm}</div>
      <button type="submit">Login</button>
    </form>
  );
};

const Login = () => {
  const handleClick = () => {
    window.location.href = "/register";
  };
  return (
    <div className="LoginPageContainer">
      <div className="LoginBox">
        <div className="LoginBoxHeader">PROFILER</div>
        <LoginForm />
        <div className="LoginBoxButton" onClick={handleClick}>
          Register
        </div>
      </div>
    </div>
  );
};

export default Login;
