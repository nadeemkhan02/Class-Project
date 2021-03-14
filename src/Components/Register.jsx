import React from "react";
import JEE from "../Images/JEEimg.png"
import CET from "../Images/CETimg.png"
import NEET from "../Images/NEETimg.png"
import user from "../Images/user.png"
import sideImage from "../Images/computer.gif"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../index.css";
import { Link } from "react-router-dom";
const Register = () => {
    return (
      <>
       <div id="topLogo">
          <img id="Jee" src={JEE} alt="examLogo" />
          <img src={CET} alt="examLogo" />
          <img src={NEET} alt="examLogo" />
      </div>
      <div id="Form">
      <div id="registerForm">
        <form>
          <h3>Register<img src={user} alt="userImage" /></h3>
          <div className="form-group">
            <label forHtml="username">Email Id</label>
            <input
              autoFocus
              type="email"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter Username"
            />
          </div>
          <div className="form-group">
            <label forHtml="username">Name</label>
            <input
              type="email"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label forHtml="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="form-group">
            <label forHtml="password">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Confirm Password"
            />
          </div>
          <button type="submit" className="btn btn-success">
           <Link id="allLink" to="/">Register</Link> 
          </button>
        </form>
      </div>
      <div id="sideImage"> 
          <img src={sideImage} alt="sideImage" /> 
      </div>
      </div>
      </>
    );
  };
  
 
export default Register;