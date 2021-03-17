import React from "react";
import { Route, Switch } from "react-router";
import Login from "./Login"
import Register from "./Register";
import Exam  from "./Exam";
import Dashboard from "./Dashboard";
import CustomizedFormat from "./CustomizedFormat"


const App = () => {
    return ( 
        <>
        <Switch>
           <Route exact path="/" component={Login} />
           <Route exact path="/signup" component={Register} />
           <Route exact path="/exam" component={Exam} />
           <Route exact path="/dashboard" component={Dashboard} />
           <Route exact path="/customizedformat" component={CustomizedFormat} />
         
        </Switch>
        </>
     );
}
 
export default App;