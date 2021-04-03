import React, { Component, useState } from 'react';
import { Button } from 'react-bootstrap';
// import AddQuestionButton from '../components/CreateContainer/AddQuestionButton';
import CreateButtons from '../components/CreateContainer/SaveButtons';
import CreateContainer from '../components/CreateContainer/CreateContainer';
import Question from '../components/CreateContainer/Question';
import { useStateContext } from '../utils/GlobalState';
import API from '../utils/API';

// class CreateQuiz extends Component {
const CreateQuiz = () => {

    const [state, dispatch] = useStateContext();
    const [newQuestions, setNewQuestions] = useState([]);

    // constructor() {

        // super();
        // state.questionID

        // this.state = {
        //     newQuestions: [
        //         // {id: '', body: ''}
        //     ],
        //     body: "",
        //     id: ""
        // }
    // }

    const deleteQuestion = (index) => {
        const copyNewQuestionsArray = Object.assign([], this.state.newQuestions);
        copyNewQuestionsArray.splice(index, 1);
        this.setState({
            newQuestions: copyNewQuestionsArray
        })
    }

    let handleInputChange = (event, questionIndex) => {
        console.log(event.target.value);
        console.log(questionIndex);
        
        const mapNewQuestions = newQuestions.map((question, index) => {
            if(questionIndex === index) {
                question.title = event.target.value;
            }
            return question;
        })
        setNewQuestions(mapNewQuestions);

            
    }

    const addQuestion = async () => {

        setNewQuestions([...newQuestions, {
            title: ""
        }])
 

    }

    const submitQuiz = async () => {
        const newCount = state.questionID + 1;

        const newQuestion = {question: "What is the best pizza topping?", choiceA: "pepperoni", choiceB: "veggies", choiceC: "cheese", choiceD: "pineapple", answer: "veggies"}

        API.createQuestion(newQuestion).then(response => {
            console.log(response.data);
        })
    }

        return (
            <div>
                <CreateContainer />
                {
                    newQuestions.map((question, index) => {
                        return (
                            <Question
                                key={question.title}
                                deleteQuestion={deleteQuestion}
                                index={index}
                                handleInputChange={handleInputChange}
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
                <CreateButtons />
            </div>
        )
    }
// }

export default CreateQuiz;
