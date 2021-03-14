import React, { useState, useEffect } from "react";
import JEE from "../Images/JEEimg.png";
import CET from "../Images/CETimg.png";
import NEET from "../Images/NEETimg.png";
import user from "../Images/user.png";
import Nav from "./Nav";
import ForgotPassword from "./ForgotPassword";
import sideImage from "../Images/computer.gif";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../index.css";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(()=>{
    localStorage.clear();
  },[])

  const [data, setData] = useState({ username: "", password: "" });

  const handleChange = ({ currentTarget: input }) => {
    const dummyData = { ...data };
    dummyData[input.name] = input.value;
    setData(dummyData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.username);
    localStorage.setItem("username", data.username);
    window.location = "/exam";
  };
  return (
    <>
      <Nav />
      <div id="topLogo">
        <img src={JEE} alt="examLogo" />
        <img src={CET} alt="examLogo" />
        <img src={NEET} alt="examLogo" />
      </div>
      <div id="Form">
        <div id="loginForm">
          <form onSubmit={handleSubmit}>
            <h3>
              Login
              <img src={user} alt="userImage" />
            </h3>
            <div className="form-group">
              <label forHtml="username">Username</label>
              <input
                autoFocus
                onChange={handleChange}
                value={data.username}
                type="text"
                className="form-control"
                id="username"
                name="username"
                aria-describedby="emailHelp"
                placeholder="Enter Username"
              />
            </div>
            <div className="form-group">
              <label forHtml="password">Password</label>
              <input
                onChange={handleChange}
                value={data.password}
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="Enter Password"
              />
            </div>
            <button
              disabled={!data.username}
              id="submit"
              type="submit"  
              className="btn btn-success"
            >
              Submit
            </button>
          </form>
          <Link id="forgotPassword" data-toggle="modal" data-target="#exampleModalCenter1" to="/">
            <p>Forgot Password?</p>
          </Link>
          <ul id="instructions">
            <li>
              Include all Subjects (Physics, Chemistry. Mathematics & Blology)
            </li>
            <li>Generate unlimited Ouestion Papers </li>
            <li>Generate Chapter wise Unit wise question papers</li>
            <li>
              Facility to select Questions from the Question Bank after
              generating the Paper,
            </li>
            <li>
              Option to generate PCM/PCB Papers as per NEET, JEE-Main and MHT
              CET
            </li>
            <li>Auto save all generated question Papers with Key Sheet</li>
            <li>
              Customize the Question paper with your Institute Name and Logo.
            </li>
            <li>Include Past Question Papers with solution and Key Sheet</li>
            <li>Option to Add and Edit Questions in the Questions Bank</li>
          </ul>
        </div>
        <div id="sideImage">
          <img src={sideImage} alt="sideImage" />
        </div>
      </div>
      <ForgotPassword />


    </>
  );
};

export default Login;
