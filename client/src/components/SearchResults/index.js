import React from "react";
import API from "../../utils/API";
import { useStateContext } from "../../utils/GlobalState";

const SearchResults = () => {

    const [state, dispatch] = useStateContext();
    // why is this not holding the currentQuiz
    console.log(state.currentQuiz);

    console.log(state.searchResults);

    const takeQuiz = async (id) => {
        console.log(id);
        // may not need this
        const response = await API.getQuiz(id);
        console.log(response.data);

        dispatch({
            type: "currentQuiz",
            currentQuiz: id
        });
    };

    // TODO - need to make this pretty
    //      - button needs a redirect
    return (
        state.searchResults && state.searchResults.length ? (
            state.searchResults.map(quiz =>
                <div key={quiz._id}>
                    <div>
                        <h3>{quiz.name}</h3>
                    </div>
                    <a >
                        <button className="btn btn-primary" onClick={() => {takeQuiz(quiz._id)}}>
                            Take
                        </button>
                    </a>
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