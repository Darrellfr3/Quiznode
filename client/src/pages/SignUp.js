import React from 'react';
import '../components/Login/style.css';
import '../components/Landing/index.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from "./Login"
import Navbar from "../components/navbar";
import Footer from "../components/footer"


function SignUp() {
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
                    <input type="email" className="form-control" placeholder="Enter Username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
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
