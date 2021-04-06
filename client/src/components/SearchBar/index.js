import React, { useRef } from "react";
import API from "../../utils/API";
import { useStateContext } from "../../utils/GlobalState";

const SearchBar = () => {

    const subjectRef = useRef();

    const [state, dispatch] = useStateContext();
    // this page may utilize local state better

    const searchQuiz = async (event) => {
        event.preventDefault();

        console.log(subjectRef.current.value);

        const response = await API.getQuizSubject(subjectRef.current.value);
        console.log(response.data);

        dispatch({
            type: "searchQuiz",
            searchResults: response.data
        });
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
                            <input type="search" id="form1" className="form-control" ref={subjectRef}/>
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