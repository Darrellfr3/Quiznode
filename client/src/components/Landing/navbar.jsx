import React from "react";
import Background from "./background.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignUp from "../../pages/SignUp"
import Login from "../../pages/Login"
import "./index.scss"


class Navbar extends React.Component {
	render() {
		return (
		<Router>
			<Background
					ref={this.navEffect}
					id="my-background"
					aboutRef={this.about}
					bounceIn={"wow bounceIn"}
				/>
				
			<div>
			<nav class="navbar navbar-light bg-dark justify-content-between navbar-expand-lg text-white">
 				 <a class="navbar-brand">Quiznode</a>
			  <ul className="navbar-nav">
				<li><Link onClick={() => {window.location.href="/Login"}} className="nav-link float-right border-right text-white">Login</Link></li>
				<li><Link onClick={() => {window.location.href="/SignUp"}} className="nav-link float-right text-white">Sign-up</Link></li>
			  </ul>
			  </nav>
			  <Switch>
				  {/* <Route exact path='/' component={Home} /> */}
				  <Route path='/Login' component={Login} />
				  <Route path='/SignUp' component={SignUp} />
			  </Switch>
			</div>
		  </Router>
		);
	  }
	}

export default Navbar;
