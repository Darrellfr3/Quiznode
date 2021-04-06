import React from "react";
import API from "../../utils/API";
import { useStateContext } from "../../utils/GlobalState";

const SearchResults = () => {

    const [state, dispatch] = useStateContext();

    console.log(state.searchResults);

    const takeQuiz = async (id) => {
        const response = await API.getQuiz(id);
        console.log(response.data);
        // response.data seems to be some sort of html page

        dispatch({
            type: "currentQuiz",
            currentQuiz: response.data 
        });
    };

    // need to make this pretty
    // button needs a redirect
    return (
        state.searchResults && state.searchResults.length ? (
            state.searchResults.map(quiz =>
                <div key={quiz._id}>
                    <div>
                        <h3>{quiz.name}</h3>
                    </div>
                    <button className="btn btn-primary" onClick={() => {takeQuiz(quiz._id)}}>
                        Take
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