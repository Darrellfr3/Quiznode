import React, { useRef } from "react";
import API from "../../utils/API";
import { useStateContext } from "../../utils/GlobalState";

const SearchBar = () => {

    const catRef = useRef();

    const [state, dispatch] = useStateContext;

    const searchQuiz = async (event) => {
        event.preventDefault();

        const response = await API.getQuiz(titleRef.current.value);
        // add logic to parse data

        dispatch({
            type: "currentQuiz",
            post: response.data
        })
    }; 
 
    return (
        <div className="container">
            <div className="row">
                <h3>Search for quizzes by category.</h3>
            </div>
            <div className="row">
                <div className="input-group">
                    <div className="col-md-8">
                        <div className="form-outline">
                            <input type="search" id="form1" className="form-control" ref={catRef}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn btn-primary" onClick={searchQuiz}>
                            <i className="fas fa-search">Search</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;