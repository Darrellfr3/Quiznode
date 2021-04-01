import React, { useContext, useReducer, createContext } from "react";

const StateContext = createContext();
const { Provider } = StateContext;

const reducer = (state, action) => {
    switch (action.type) {
        case "activeAnswer":
            return {
                ...state,
                activeAnswer: action.activeAnswer,
                loading: false
            }
    // add cases here as needed
        case "currentQuiz":
            return {
                ...state,
                currentQuiz: action.currentQuiz,
                loading: false
            }
        case "updateScore":
            return {
                ...state,
                scoreCorrect: action.scoreCorrect,
                questionsAnswered: action.questionsAnswered,
                currentQuestion: action.currentQuestion,
                loading: false
            }
        default:
            return state;
    }
};

const initialState = {
    currentQuiz: {},
    currentQuestion: {},
    activeAnswer: "e",
// add state keys as needed
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