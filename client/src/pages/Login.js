import React, { useState } from 'react';
import '../components/Login/style.css';
import '../components/Landing/index.scss';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useLocation } from 'react-router-dom';
import ReactDOM, { render } from "react-dom";
import API from '../utils/API';
import SignUp from "./SignUp";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Login() {

    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    let handleUserNameInputChange = event => {
      setUserName(event.target.value);
    };
    let handleUserPasswordInputChange = event => {
      setUserPassword(event.target.value);
    };

    const submitUserForm = event => {
      event.preventDefault();
      const UserSubmit = {
        username: userName,
        password: userPassword
      };
      API.authUser(UserSubmit).then(() => {
        return (
          render(<Redirect to={{
            pathname: "/home"
          }}/>)
        );
      });
    };

    return (
      <Router>
        <Navbar />
      <div id="my-background" className="background">
				<div id="stars"></div>
				<div id="stars2"></div>
				<div id="stars3"></div>
      <div className="container1">
      <form>
  
          <h3>Log in</h3>
  
          <div className="form-group">
              <label>Username</label>
              <input 
                value={userName}
                onChange={handleUserNameInputChange}
                type="username" 
                className="form-control" 
                placeholder="Enter Username" 
              />
          </div>
  
          <div className="form-group">
              <label>Password</label>
              <input 
                value={userPassword}
                onChange={handleUserPasswordInputChange}
                type="password" 
                className="form-control" 
                placeholder="Enter password" 
              />
          </div>
  
          <Button 
            type="submit"
            onClick={submitUserForm} 
            className="btn btn-dark btn-lg btn-block">Sign in
          </Button>
          <p className="forgot-password text-right">
          <Link onClick={() => {window.location.href="/SignUp"}} className="nav-link">SignUp</Link>
          <Switch>
				  {/* <Route exact path='/' component={Home} /> */}
				  <Route path='/SignUp' component={SignUp} />
			  </Switch>

          </p>
      </form>
      </div>
      </div>
      <Footer />

      </Router>
    )
}

export default Login

