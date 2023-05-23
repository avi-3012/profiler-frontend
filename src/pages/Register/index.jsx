import React from 'react'
import { useState, useEffect } from "react";

const apiUrl = "http://localhost:5000";



const Register = () => {
  const [pageState, setPageState] = useState("PROFILER");
  const [formState, setFormState] = useState();

  const RegisterForm = () => {
    const [invalidForm, setInvalidForm] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    async function registerUser(e) {
      e.preventDefault();
      if (
        password === confirmPassword &&
        password !== "" &&
        email !== "" &&
        password.length > 3
      ) {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        const response = await fetch(apiUrl + `/users/register`, {
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
        setPageState("");
        setFormState(<div className="Registering">Registering User...</div>);
        if (data.status === "ok") {
          setFormState(<div className="Registering">User Registered!</div>);
        } else if (data.error.code === 11000) {
          setFormState(
            <div className="Registering">Email Already Registered!!</div>
          );
        } else {
          setFormState(<div className="Registering">Error Occured</div>);
        }
      } else if (email === "") {
        setInvalidForm("Please enter an Email!!");
      } else if (password === "") {
        setInvalidForm("Please enter a Password!!");
      } else if (password.length < 3) {
        setInvalidForm("Password cannot be smaller than 3 digits!!");
      } else if (confirmPassword === "") {
        setInvalidForm("Please confirm Password!!");
      } else {
        setInvalidForm("Passwords did not match!!");
      }
    }
    useEffect(() => {
      setTimeout(() => {
        setInvalidForm("");
      }, 3000);
    }, [invalidForm]);
    return (
      <form className="RegisterForm" onSubmit={(e) => registerUser(e)}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter E-mail"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
        />
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Confirm Password"
        />
        <div className="InvalidForm">{invalidForm}</div>
        <button type="submit">Register</button>
      </form>
    );
  };

  const handleClick = () => {
    window.location.href = "/login";
  }
  return (
    <div className="LoginPageContainer">
      <div className="LoginBox">
        <div className="LoginBoxHeader">{pageState}</div>
        <RegisterForm/>
        <div className="LoginBoxButton" onClick={handleClick}>
          Login
        </div>
      </div>
    </div>
  )
}

export default Register