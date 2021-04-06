import React, { useEffect } from "react";
import { useStateContext } from "../../utils/GlobalState";
import API from "../../utils/API";

const ViewQuestions = () => {

    const [state, dispatch] = useStateContext();

    const count = state.questionsAnswered;
    console.log("count is :" + count);
    console.log(state.currentQuiz._id);
    console.log(state.currentQuestion);

    // TODO - add function to get the currentQuiz from the backend by Id from globalstate
    const getQuiz = async (id) => {
        const quiz = await API.getQuiz(id);
        console.log(quiz);
    };

    // use this to set active answer in GlobalState
    const makeActive = (value) => {
        dispatch({
            type: "activeAnswer",
            activeAnswer: value
        });
    };

    // TODO - make this actually do something
    const submitAnswer = () => {
        console.log("submit clicked");

        let questionsAnswered = state.questionsAnswered + 1;
        let newScore = state.scoreCorrect;

        if (state.activeAnswer === state.currentQuestion.answer) {
            newScore += 1;
            console.log("You answered correctly")
        };
        
        dispatch({
            type: "updateScore",
            scoreCorrect: newScore,
            questionsAnswered: questionsAnswered,
            // currentQuestion: nextQuestion
        });
    };

    // TODO - may need useEffect to call getQuiz on page load
    useEffect(() => {
        getQuiz(state.currentQuiz._id);
    }, []);

    // TODO - pass in all info from db
    return (
        <div className="container">

            <div className="row">
                <h1>Quiz Name- currentQuiz.name</h1>
            </div>

            <div className="row">
                <h3>{state.currentQuestion.question}</h3>
            </div>

            <div className="row justify-content-evenly">
                <div className="col-md-6">
                    { state.activeAnswer === "a" ? <p id="a" className="text-danger">{state.currentQuestion.choiceA}</p> : <p id="a" onClick={() => {makeActive("a")}}>{state.currentQuestion.choiceA}</p> }
                    { state.activeAnswer === "c" ? <p id="c" className="text-danger">{state.currentQuestion.choiceC}</p> : <p id="c" onClick={() => {makeActive("c")}}>{state.currentQuestion.choiceC}</p> }
                </div>
                <div className="col-md-6">
                    { state.activeAnswer === "b" ? <p id="b" className="text-danger">{state.currentQuestion.choiceB}</p> : <p id="b" onClick={() => {makeActive("b")}}>{state.currentQuestion.choiceB}</p> }
                    { state.activeAnswer === "d" ? <p id="d" className="text-danger">{state.currentQuestion.choiceD}</p> : <p id="d" onClick={() => {makeActive("d")}}>{state.currentQuestion.choiceD}</p> }
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