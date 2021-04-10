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
					<div class="node-container">
							<div class="node-container2">
								<div>
									<h4 id="quiznodemain">QuizN&nbsp; de</h4>
								</div>
								<div class="nodecircle">
									<div id="nodecircle1"></div>
									<div id="nodecircle2"></div>
									<div id="nodecircle3"></div>
									<div id="nodecircle4"></div>
								</div>
							</div>
						</div>
						<br />
						One great quiz can change the world.
					</h1>
				</div>
        </div>
      </React.Fragment>, document.getElementById('root'));
}

export default Landing
