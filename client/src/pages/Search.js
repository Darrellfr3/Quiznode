import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Navbar from "../components/navbarx";
import Footer from "../components/footer";
import "../components/SearchBar/search.css"

const Search = () => {

    return (
        <div>
            <Navbar />
            <SearchBar />
            <Footer />
        </div>
    );
};

export default Search;