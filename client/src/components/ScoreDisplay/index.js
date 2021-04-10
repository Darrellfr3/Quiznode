import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../utils/GlobalState";

const ScoreDisplay = () => {

    const [state, dispatch] = useStateContext();

    const percent = state.scoreCorrect / state.questionsAnswered * 100;

    return (
        <div className="container scoreForm">
            <div className="row justify-content-center">
                <h3>You answered {state.scoreCorrect} corretly out of {state.questionsAnswered}.</h3>
            </div>
            <div className="row justify-content-center">
                <h2>{percent}%</h2>
            </div>
            <div className="row justify-content-center">
                <Link to="/home">
                    <button type="button" className="btn btn-primary">
                        <i className="fas fa-search">Return to Home</i>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ScoreDisplay;