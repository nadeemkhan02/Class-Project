import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../index.css";
import { Link } from "react-router-dom";

const Nav = (history) => {
        const [username, setUsername] = useState()
        useEffect(()=>{
            console.log(localStorage.getItem("username"))
            setUsername(localStorage.getItem("username"))
        }, [])

        const handleLogout = () =>{
            localStorage.clear();
            window.location = "/"
            
        }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      {username &&
        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
      }
        {!username &&
        <button type="submit" className="btn btn-success">
           <Link id="allLink" to="/signup">Register</Link> 
        </button>
        }
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
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
            {username &&
              <a class="nav-link" href="/">
                Hello, {username}
              </a>
            }
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
