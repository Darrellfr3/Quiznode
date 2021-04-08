import React from "react";
// TODO - import components
import ViewQuestions from "../components/ViewQuestions";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const TakeQuiz = () => {

    return (
        <div>
            <Navbar />
            <ViewQuestions />
            <Footer />
        </div>
    )
};

export default TakeQuiz;