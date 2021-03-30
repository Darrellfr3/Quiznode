import React from "react";

const ViewQuestions = () => {
    // TODO - stuff to get questions for a specific quiz
    const [state, dispatch] = useStateContext();

    // TODO - make this actually do something
    const submitAnswer = (event) => {
        event.preventDefault();

        console.log("submit clicked");
    };

    // TODO - pass in all if from db
    //      - need a way for the active question to be highlighted, if statement for each?
    return (
        <div className="container">
            <div className="row">
                <h1>Quiz Name- pass in</h1>
            </div>

            <div className="row">
                <h3>Question- pass in</h3>
            </div>

            <div className="row justify-content-evenly">
                <div className="col-md-6">
                    <p>Answer A</p>
                    <p>Answer C</p>
                </div>
                <div className="col-md-6">
                    <p>Answer B</p>
                    <p>Answer D</p>
                </div>
            </div>

            <div className="row">
                <button type="button" className="btn btn-primary" onClick={submitAnswer}>
                    <i className="fas fa-search">Submit Answer</i>
                </button>
            </div>
        </div>
    );
};

export default ViewQuestions;