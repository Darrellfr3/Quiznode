import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import AddQuestionButton from '../components/CreateContainer/AddQuestionButton';
import CreateButtons from '../components/CreateContainer/SaveButtons';
import CreateContainer from '../components/CreateContainer/CreateContainer';
import Question from '../components/CreateContainer/Question';
import { useStateContext } from '../../util'
// import NewAnswer from '../components/CreateContainer/NewAnswer';

class CreateQuiz extends Component {

    const [state, dispatch] = useStateContext();

    constructor() {

        super();
        this.questionID = 0;

        this.state = {
            newQuestions: [
                // {id: '', body: ''}
            ],
            body: "",
            id: ""
        }
    }

    deleteQ = (index) => {
        const copyNewQuestionsArray = Object.assign([], this.state.newQuestions);
        copyNewQuestionsArray.splice(index, 1);
        this.setState({
            newQuestions: copyNewQuestionsArray
        })
    }

    addQuestion = () => {
        this.questionID = this.questionID + 1;
        const copyNewQuestionsArray = Object.assign([], this.state.newQuestions)
        copyNewQuestionsArray.push({
            id: this.questionID,
            body: this.state.body
        })
        this.setState({
            newQuestions: copyNewQuestionsArray
        })
    }

    render() {
        return (
            <div>
                <CreateContainer />
                {
                    this.state.newQuestions.map((question, index) => {
                        return (
                            <Question
                                key={question.id}
                                id={question.id}
                                body={question.body}
                                delete={this.deleteQ.bind(this, index)}
                            />
                        )
                    })
                }
                <Button
                    variant="success"
                    size="lg"
                    block
                    onClick={this.addQuestion}
                >
                    + Add Question
                </Button>
                <CreateButtons />
            </div>
        )
    }
}

export default CreateQuiz;
