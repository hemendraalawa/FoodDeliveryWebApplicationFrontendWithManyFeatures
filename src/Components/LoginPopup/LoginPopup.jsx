import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Enter Your Name" required />
          )}
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Enter Your Password" required />
        </div>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create A New Account <span onClick={()=>setCurrState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already Have An Account ?<span onClick={()=>setCurrState("Login")}>Login Here</span>
          </p>
        )}

        <button>
          {currState === "Sign Up" ? "Create An Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPopup;
