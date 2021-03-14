import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../index.css";
import { Link } from "react-router-dom";

const MainNavBar = (props) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button onClick={props.logoutHandle} className="btn btn-danger">
          Logout
        </button>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" data-toggle="modal" data-target="#exampleModalCenter2">
                All in one
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/dashboard">
                Board Pattern
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/fixedformate">
                Fixed-Format
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/dashboard">
                Customized-Format
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/dashboard">
                Configuration
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/dashboard">
                Question-Bank
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/dashboard">
                Answer-Key
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/dashboard">
                Previous-Paper
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/dashboard">
                Help-Centre
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default MainNavBar;
