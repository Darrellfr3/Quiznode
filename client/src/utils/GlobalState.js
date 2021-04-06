import React, { useContext, useReducer, createContext } from "react";

const StateContext = createContext();
const { Provider } = StateContext;

const reducer = (state, action) => {
    switch (action.type) {
        // change active answer to clicked answer
        case "activeAnswer":
            return {
                ...state,
                activeAnswer: action.activeAnswer,
                loading: false
            }
        // set current quiz
        case "currentQuiz":
            return {
                ...state,
                currentQuiz: action.currentQuiz,
                loading: false
            }
        // update correct answers, total questions answered and the index of the current question
        case "updateScore":
            return {
                ...state,
                scoreCorrect: action.scoreCorrect,
                questionsAnswered: action.questionsAnswered,
                // currentQuestion: action.currentQuestion,
                loading: false
            }
        case "searchQuiz":
            return {
                ...state,
                searchResults: action.searchResults,
                currentQuestion: action.currentQuestion,
                loading: false
            }
        default:
            return state;
    }
};

const initialState = {
    searchResults: [],
    questionID: 0,
    currentQuiz: {},
    currentQuestion: {
        _id: 0,
        question: "Does this work?",
        choiceA: "Yes",
        choiceB: "No",
        choiceC: "Maybe",
        choiceD: "No idea",
        answer: "a",
        quizID: 1
    },
    activeAnswer: "e",
    scoreCorrect: 0,
    questionsAnswered: 0,
    loading: false
};

const StateProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Provider value={[state, dispatch]} {...props} />;
};

const useStateContext = () => {
    return useContext(StateContext);
};

export { StateProvider, useStateContext };