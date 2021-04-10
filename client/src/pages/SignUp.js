import React, { useState } from 'react';
import '../components/Login/style.css';
import '../components/Landing/index.scss';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import API from '../utils/API';
import Login from "./Login"
import Navbar from "../components/navbar";
import Footer from "../components/footer"


function SignUp() {
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

      API.createUser(UserSubmit).then(API.authUser(UserSubmit)).then(response => {
        console.log(response.data);
      })
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
                <h3>Sign-Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input 
                        value={userName}
                        onChange={handleUserNameInputChange}
                        type="username" 
                        className="form-control" 
                        placeholder="Enter Username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                        value={userPassword}
                        onChange={handleUserPasswordInputChange}
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password" />
                </div>

                <Button 
                    type="submit" 
                    onClick={submitUserForm}
                    className="btn btn-dark btn-lg btn-block">Register
                </Button>
                <p className="forgot-password">
				Already have an account?<Link onClick={() => {window.location.href="/Login"}} className="nav-link">Login</Link></p>
                <Switch>
				  <Route path='/Login' component={Login} />
			  </Switch>  
            </form>
            </div>
      </div>
      <Footer />
      </Router>
    )
}

export default SignUp
