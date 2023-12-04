import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="container">
      <h1>Register Page</h1>
      <form className="reg">
        <label htmlFor="email">Your name:</label>
        <input type="text" />

        <label htmlFor="email">Your email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <div className="radioInpBox">
          <label htmlFor="email">Admin:</label>
          <input className="radioInp" type="radio" value="Admin" />

          <label htmlFor="password">User:</label>
          <input className="radioInp" type="radio" value="User"/>
        </div>

        <div className="formBtn">
          <button type="submit" className="submitBtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
