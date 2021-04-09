import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Navbar from "../components/navbarx";
import Footer from "../components/footer";
import "../components/SearchBar/search.css"

const Search = () => {

    return (
        <div id="my-background" className="background">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div>
                <Navbar />
                <SearchBar />
                <Footer />
            </div>
        </div>
    );
};

export default Search;