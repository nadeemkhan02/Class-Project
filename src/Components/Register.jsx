import React, { useState } from "react";
import JEE from "../Images/JEEimg.png"
import CET from "../Images/CETimg.png"
import NEET from "../Images/NEETimg.png"
import user from "../Images/user.png"
import sideImage from "../Images/computer.gif"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../index.css";
import { Link } from "react-router-dom";
import Joi from "joi-browser";



const Register = () => {
  const [inputData, setInputData] = useState({})
  const [error, setError] = useState({})
 
  // Joi schema decleration
  const Schema = {
    username: Joi.string().email().required(),
    name: Joi.string(),
    password: Joi.string().required().min(5),
    cnfPassword: Joi.string().required().min(5)
  }


  // validateProperty function 

  const validateProperty = ({name, value}) =>{
    const obj = {[name] : value}
    const schema = {[name] : Schema[name]}
    const {error} = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  }




  // Onchange handle

 const handleChange = ({currentTarget:input}) =>{
    const errorMessage = validateProperty(input);
    if(errorMessage) error[input.name]=errorMessage;
    else delete error[input.name]
    const InputData = { ...inputData }
    InputData[input.name] = input.value;
    setInputData(InputData)
    console.log(InputData)
 }


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
                onChange={handleChange}
                value={inputData.username}
                name="username"
                type="email"
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
                placeholder="Enter Username"
              />
              {error && error.username && <div style={{marginTop:"0px"}} className="alert alert-danger ">{error.username}</div>}
            </div>
            <div className="form-group">
              <label forHtml="username">Name</label>
              <input
                onChange={handleChange}
                value={inputData.name}
                name="name"
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
              />
              {error && error.name && <div style={{marginTop:"0px"}} className="alert alert-danger ">{error.name}</div>}
            </div>
            <div className="form-group">
              <label forHtml="password">Password</label>
              <input
                onChange={handleChange}
                value={inputData.password}
                name="password"
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
              />
              {error && error.password && <div style={{marginTop:"0px"}} className="alert alert-danger ">{error.password}</div>}
            </div>
            <div className="form-group">
              <label forHtml="password">Confirm Password</label>
              <input
                onChange={handleChange}
                value={inputData.confPassword}
                name="cnfPassword"
                type="password"
                className="form-control"
                id="password"
                placeholder="Confirm Password"
              />
              {error && error.cnfPassword && <div style={{marginTop:"0px"}} className="alert alert-danger ">{error.cnfPassword}</div>}
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