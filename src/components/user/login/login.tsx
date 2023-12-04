import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="container">
      <h1>Login Page</h1>
      <form className="login">
        <label className="inp" htmlFor="femail">Your email:</label>
        <input className="inp" type="email" id="femail" name="femail" />

        <label className="inp" htmlFor="lpassword">Password:</label>
        <input className="inp" type="password" id="lpassword" name="lpassword" />

        <div className="formBtn">
          <button type="submit" className="submitBtn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

