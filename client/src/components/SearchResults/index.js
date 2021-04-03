import React from "react";
import API from "../../utils/API";
import { useStateContext } from "../../utils/GlobalState";

const SearchResults = () => {

    const [state, dispatch] = useStateContext();

    console.log(state.searchResults);

    const takeQuiz = async (id) => {
        const response = await API.getQuiz(id);

        dispatch({
            type: "currentQuiz",
            currentQuiz: response.data 
        });
    };

    return (
        state.searchResults && state.searchResults.length ? (
            state.searchResults.map(quiz =>
                <div>
                    <div>
                        <h3>{quiz.name}</h3>
                    </div>
                    <button className="btn btn-primary" onClick={() => {takeQuiz(quiz._id)}}>
                    </button>
                </div>
            )
        ) : (
            <div>
                <h4>Search for a subject to see matching quizzes.</h4>
            </div>
        )
    );
};

export default SearchResults;