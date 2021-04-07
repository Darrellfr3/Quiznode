import React, { useState, useEffect } from "react";
import { useStateContext } from "../../utils/GlobalState";
import API from "../../utils/API";

const ViewQuestions = () => {

    // need global state to get the id for the current quiz
    const [state, dispatch] = useStateContext();
    console.log(state.currentQuiz);

    // use these to keep count and questions(array)
    // count will be used to keep track of which question(index) the user is on
    const [count, setCount] = useState(0);
    const [questionsId, setQuestionsId] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState({});

    // get quiz from db and set questions to state
    const getQuiz = async (id) => {
        // get quiz info from db
        const quiz = await API.getQuiz(id);
        // set array of question ids
        setQuestionsId(quiz.data[0].questions);
        // set initial question
        getQuestion(quiz.data[0].questions[count])
    };

    // get question from db and set to state
    const getQuestion = async (id) => {
        const question = await API.getQuestions(id);
        setCurrentQuestion(question.data[0]);
    };

    // use this to set active answer in GlobalState
    const makeActive = (value) => {
        dispatch({
            type: "activeAnswer",
            activeAnswer: value
        });
    };

    // TODO - keep track of score
    //      - end page when all questions are answered
    const submitAnswer = () => {
        console.log("submit clicked");

        const updateCount = count + 1;
        // add check to make sure there are more questions
        setCount(updateCount);
        getQuestion(questionsId[updateCount]);
    };

    useEffect(() => {
        getQuiz(state.currentQuiz);
    }, []);

    return (
        <div className="container">

            <div className="row">
                <h1>{currentQuestion.name}</h1>
            </div>

            <div className="row">
                <h3>{currentQuestion.question}</h3>
            </div>

            <div className="row justify-content-evenly">
                <div className="col-md-6">
                    { state.activeAnswer === "a" ? <p id="a" className="text-danger">{currentQuestion.choiceA}</p> : <p id="a" onClick={() => {makeActive("a")}}>{currentQuestion.choiceA}</p> }
                    { state.activeAnswer === "c" ? <p id="c" className="text-danger">{currentQuestion.choiceC}</p> : <p id="c" onClick={() => {makeActive("c")}}>{currentQuestion.choiceC}</p> }
                </div>
                <div className="col-md-6">
                    { state.activeAnswer === "b" ? <p id="b" className="text-danger">{currentQuestion.choiceB}</p> : <p id="b" onClick={() => {makeActive("b")}}>{currentQuestion.choiceB}</p> }
                    { state.activeAnswer === "d" ? <p id="d" className="text-danger">{currentQuestion.choiceD}</p> : <p id="d" onClick={() => {makeActive("d")}}>{currentQuestion.choiceD}</p> }
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