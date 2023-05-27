import React from "react";
import { useState, useEffect } from "react";

import "./style.css";

const apiUrl = process.env.REACT_APP_API_URL;

const LoginForm = () => {
  const [invalidForm, setInvalidForm] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);

  useEffect(() => {
    if (
      (localStorage.getItem("token") !== null &&
        localStorage.getItem("token") !== undefined &&
        localStorage.getItem("token") !== "") ||
      (sessionStorage.getItem("token") !== null &&
        sessionStorage.getItem("token") !== undefined &&
        sessionStorage.getItem("token") !== "")
    ) {
      window.location.href = "/";
    }
  }, []);

  async function LoginUser(e) {
    try {
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
          if (checkboxValue) {
            localStorage.setItem("token", data.token);
            window.location.href = "/";
          } else {
            localStorage.removeItem("token");
            sessionStorage.setItem("token", data.token);
            window.location.href = "/";
          }
        } else {
          setInvalidForm("Invalid Credentials");
        }
      } else if (username === "") {
        setInvalidForm("Please enter an username!!");
      } else if (password === "") {
        setInvalidForm("Please enter a Password!!");
      }
    } catch (error) {
      setInvalidForm("Error Occured");
      console.log(error);
    }

    // e.preventDefault();
    // if (username !== "" && password !== "") {
    //   const response = await fetch(apiUrl + `/login`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       username,
    //       password,
    //     }),
    //   });
    //   const data = await response.json();
    //   if (data.status === "ok") {
    //     if (checkboxValue) {
    //       localStorage.setItem("token", data.token);
    //       window.location.href = "/";
    //     } else {
    //       sessionStorage.setItem("token", data.token);
    //       window.location.href = "/";
    //     }
    //   } else {
    //     setInvalidForm("Invalid Credentials");
    //   }
    // } else if (username === "") {
    //   setInvalidForm("Please enter an username!!");
    // } else if (password === "") {
    //   setInvalidForm("Please enter a Password!!");
    // }
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
      <div className="RememberMe">
        <div
          type="checkbox"
          className="Remember-Checkbox"
          style={{ backgroundColor: checkboxValue ? "black" : "white" }}
          onClick={() => setCheckboxValue(!checkboxValue)}
        />
        <div>Remember Me</div>
      </div>

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
