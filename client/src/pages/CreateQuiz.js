import React, { Component, useState } from 'react';
import { Button } from 'react-bootstrap';
// import AddQuestionButton from '../components/CreateContainer/AddQuestionButton';
import CreateButtons from '../components/CreateContainer/SaveButtons';
import QuizForm from '../components/CreateContainer/QuizForm';
import QuestionForm from '../components/CreateContainer/QuestionForm';
import { useStateContext } from '../utils/GlobalState';
import API from '../utils/API';

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
        newQuestions.forEach((question, index) => {
            if(questionIndex === index) {
                question.question = event.target.value;
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
            id: newQuestions.length + 1 + Date.now() // Generate a unique key so that React can keep track of array of questions
        }])
    }

    const submitQuiz = () => {

        const requestBody = {
            quizName,
            quizSubject,
            questions: newQuestions
        };

        API.createQuiz(requestBody).then(response => {
            console.log(response.data);
        })
    }

        return (
            <div>
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
                                    question={question.question}
                                    handleQuestionInputChange={handleQuestionInputChange}
                                />
                        )
                    })
                }
                <Button
                    variant="success"
                    size="lg"
                    block
                    onClick={addQuestion}
                >
                    + Add Question
                </Button>
                <CreateButtons submitQuiz={submitQuiz}/>
            </div>
        )
    }
// }

export default CreateQuiz;
