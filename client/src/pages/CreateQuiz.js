import React, { Component, useState } from 'react';
import { Button } from 'react-bootstrap';
import CreateButtons from '../components/CreateContainer/SaveButtons';
import QuizForm from '../components/CreateContainer/QuizForm';
import QuestionForm from '../components/CreateContainer/QuestionForm';
import { useStateContext } from '../utils/GlobalState';
import API from '../utils/API';
import '../components/CreateContainer/Question.css';
import Navbar from "../components/navbarx";
import Footer from "../components/footer"

// class CreateQuiz extends Component {
const CreateQuiz = () => {

    const [state, dispatch] = useStateContext();
    const [quizName, setQuizName] = useState("");
    const [quizSubject, setQuizSubject] = useState("Tech"); // Default value from QuizForm dropdown menu
    const [newQuestions, setNewQuestions] = useState([]);

    const deleteQuestion = (index) => {
        const copyNewQuestionsArray = Object.assign([], newQuestions);
        copyNewQuestionsArray.splice(index, 1);

        setNewQuestions([...copyNewQuestionsArray]);
    }

    let handleQuestionInputChange = (event, questionIndex) => {
        const name = event.target.name;
        console.log(name);

        newQuestions.forEach((question, index) => {
            if(questionIndex === index) {
                question[name] = event.target.value;
            }
        });
        setNewQuestions([...newQuestions]);
    }

    let handleQuizNameInputChange = (event) => {
        setQuizName(event.target.value);
    }

    let handleQuizSubjectInputChange = (event) => {
        setQuizSubject(event.target.value);
    }

    const addQuestion = () => {
        setNewQuestions([...newQuestions, {
            question: "",
            choiceA: "",
            choiceB: "",
            choiceC: "",
            choiceD: "",
            answer: "",
            id: newQuestions.length + 1 + Date.now() // Generate a unique key so that React can keep track of array of questions
        }])
    }

    const submitQuiz = () => {

        const requestBody = {
            quizName,
            quizSubject,
            questions: newQuestions
        };
        console.log(requestBody);

        API.createQuiz(requestBody).then(response => {
            console.log(response.data);
        })
    }

        return (
            <div id="my-background" className="background">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
            <>
            <Navbar />
            <div className="questionForm">
                
                <QuizForm 
                    quizName={quizName}
                    quizSubject={quizSubject}
                    handleQuizNameInputChange={handleQuizNameInputChange}
                    handleQuizSubjectInputChange={handleQuizSubjectInputChange}
                />
                {
                    newQuestions.map((question, index) => {
                        return (
                            
                                <QuestionForm
                                    key={question.id}
                                    deleteQuestion={deleteQuestion}
                                    index={index}
                                    question={question}
                                    handleQuestionInputChange={handleQuestionInputChange}
                                />
                        )
                    })
                }
                <Button
                    variant="dark"
                    size="lg"
                    block
                    onClick={addQuestion}
                    className="addQuestionBtn"
                >
                    + Add Question
                </Button>
                <CreateButtons 
                className="saveBtns"
                submitQuiz={submitQuiz}/>
                
            </div>
            <Footer />
            </>
            </div>
        )
    }
// }

export default CreateQuiz;
