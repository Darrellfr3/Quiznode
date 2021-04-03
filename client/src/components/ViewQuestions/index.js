import React, { useEffect } from "react";
import { useStateContext } from "../../utils/GlobalState";
import API from "../../utils/API";

const ViewQuestions = () => {
    // TODO - stuff to get questions for a specific quiz
    //      - use state to get either current quiz info or maybe quiz id to make call to backend
    const [state, dispatch] = useStateContext();

    // TODO - use count and currentQuestion to display questions
    //      - need to make sure this will work, may need to save count to state
    const count = state.questionsAnswered;
    const currentQuestion= state.currentQuiz.questionID[count];

    // function to get question info from the backend
    const getQuestion = async () => {
        const question =  await API.getQuestion(currentQuestion);
        return question;
    };

    // TODO - use this to set active answer in GlobalState
    const makeActive = (value) => {
        // this will set state.activeAnswer to the clicked answer choice
        dispatch({
            type: "activeAnswer",
            activeAnswer: value
        });
    };

    // TODO - make this actually do something
    const submitAnswer = () => {
        console.log("submit clicked");

        const questionsAnswered = state.questionsAnswered + 1;
        let newScore = state.scoreCorrect;

        if (state.activeAnswer === state.currentAnswer) {
            newScore += 1;
        };
        
        dispatch({
            type: "updateScore",
            scoreCorrect: newScore,
            questionsAnswered: questionsAnswered,
            currentQuestion: currentQuestion
        });
    };

    useEffect(() => {
        getQuestion();
    }, []);

    // TODO - pass in all info from db
    //      - DONE - need a way for the active question to be highlighted, if statement for each?
    return (
        <div className="container">

            <div className="row">
                <h1>Quiz Name- currentQuiz.name</h1>
            </div>

            <div className="row">
                <h3>Question- currentQuestion.question</h3>
            </div>

            <div className="row justify-content-evenly">
                <div className="col-md-6">
                    { state.activeAnswer === "a" ? <p id="a" className="text-danger">AnswerA- currentQuestion.choiceA</p> : <p id="a" onClick={() => {makeActive("a")}}>Answer A</p> }
                    { state.activeAnswer === "c" ? <p id="c" className="text-danger">AnswerC- currentQuestion.choiceC</p> : <p id="c" onClick={() => {makeActive("c")}}>Answer C</p> }
                </div>
                <div className="col-md-6">
                    { state.activeAnswer === "b" ? <p id="b" className="text-danger">AnswerB- currentQuestion.choiceB</p> : <p id="b" onClick={() => {makeActive("b")}}>Answer B</p> }
                    { state.activeAnswer === "d" ? <p id="d" className="text-danger">AnswerD- currentQuestion.choiceD</p> : <p id="d" onClick={() => {makeActive("d")}}>Answer D</p> }
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