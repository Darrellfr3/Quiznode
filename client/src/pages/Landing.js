import React from 'react';
import ReactDOM from 'react-dom';
import '../components/Landing/index.scss';
import Navbar from "../components/Landing/lanNav";
import 'bootstrap/dist/css/bootstrap.css';

function Landing() {
    return ReactDOM.render(
      <React.Fragment>
        <div id="my-background" className="background">
				<div id="stars"></div>
				<div id="stars2"></div>
				<div id="stars3"></div>
        <Navbar />
        <div className="top-container flex">
					<h1>
						Quiznode
						<br />
						One great quiz can change the world.
					</h1>
				</div>
        </div>
      </React.Fragment>, document.getElementById('root'));
}

export default Landing
