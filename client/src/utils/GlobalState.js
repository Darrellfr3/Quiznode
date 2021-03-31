import React, { useContext, useReducer, createContext } from "react";

const StateContext = createContext();
const { Provider } = StateContext;

const reducer = (state, action) => {
    switch (action.type) {
        case "active":
            return {
                ...state,
                activeAnswer: action.activeAnswer,
                loading: false
            }
            // add cases here as needed
        default:
            return state;
    }
};

const initialState = {
    currentQuiz: [],
    activeAnswer: "e",
    // add state keys as needed
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