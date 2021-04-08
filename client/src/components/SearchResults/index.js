import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../utils/GlobalState";

const SearchResults = () => {

    const [state, dispatch] = useStateContext();

    const takeQuiz = (id) => {
        dispatch({
            type: "currentQuiz",
            currentQuiz: id
        });
    };

    // TODO - need to make this pretty
    return (
        state.searchResults && state.searchResults.length ? (
            state.searchResults.map(quiz =>
                <div key={quiz._id} className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <h3>{quiz.name}</h3>
                        </div>
                        <div className="col-md-6">
                            <Link to="/takeQuiz">
                                <button className="btn btn-primary" onClick={() => {takeQuiz(quiz._id)}}>
                                    Take
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        ) : (
            <div className="container">
                <h4>Search for a subject to see matching quizzes.</h4>
            </div>
        )
    );
};

export default SearchResults;