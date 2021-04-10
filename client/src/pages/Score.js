import React from "react";
import ScoreDisplay from "../components/ScoreDisplay";
import Navbar from "../components/navbarx";
import Footer from "../components/footer";
import "../components/ScoreDisplay/score.css";

const Score = () => {

    return (
        <div>
            <Navbar />
            <ScoreDisplay />
            <Footer />
        </div>
    );
};

export default Score;