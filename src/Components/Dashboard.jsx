import React from "react";
import AllInOne from "./AllInOne";
import Chapter from "./Chapter.jsx";
import MainNavBar from "./MainNavBar";



const Dashboard = (props) => {
  const handleLogout = () => {
    localStorage.clear();
    props.history.push("/")
  };
    return ( 
        <>
          <MainNavBar logoutHandle = {handleLogout} />
            <AllInOne />
           <Chapter /> 
          
        </>
     );
}
 
export default Dashboard;