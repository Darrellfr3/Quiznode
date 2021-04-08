import React from "react";
import PropTypes from "prop-types";
import WOW from "wowjs";

export default class Background extends React.Component {
	componentDidMount() {
		new WOW.WOW().init();
	}

	render() {
		return (
			<div id="my-background" className="background">
				<div id="stars"></div>
				<div id="stars2"></div>
				<div id="stars3"></div>
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
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
