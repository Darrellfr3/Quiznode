import React, { useRef } from "react";
import API from "../../utils/API";
import SearchResults from "../SearchResults";
import { useStateContext } from "../../utils/GlobalState";

const SearchBar = () => {

    const subjectRef = useRef();

    const [state, dispatch] = useStateContext();

    const searchQuiz = async (event) => {

        console.log("Search for " + subjectRef.current.value);

        const response = await API.getQuizSubject(subjectRef.current.value);
        console.log(response.data);

        dispatch({
            type: "searchQuiz",
            searchResults: response.data
        });
    }; 
 
    return (
        <div className="container searchForm">
            <div className="row justify-content-center">
                <h2>Search for quizzes by category.</h2>
            </div>
            <div className="row">
                <div className="input-group">
                    <div className="col-md-7">
                        <div className="form-outline">
                            <input type="search" id="form1" className="form-control" ref={subjectRef}/>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <button type="button" className="btn btn-primary" onClick={searchQuiz}>
                            <i className="fas fa-search">Search</i>
                        </button>
                    </div>
                </div>
            </div>
            <SearchResults />
        </div>
    );
};

export default SearchBar;