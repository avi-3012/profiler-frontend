import React from 'react'
import { useState, useEffect } from "react";
import './style.css'

const apiUrl = "http://localhost:8080";

const LoginForm = () => {
    const [invalidForm, setInvalidForm] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function LoginUser(e) {
      e.preventDefault();
      if (email !== "" && password !== "") {
        const response = await fetch(apiUrl + `/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
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
      } else if (email === "") {
        setInvalidForm("Please enter an Email!!");
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
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
  }
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
  )
}

export default Login;