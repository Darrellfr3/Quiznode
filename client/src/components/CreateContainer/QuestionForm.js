import React, { Component } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import './Question.css';


const Question = (props) => {


        // let addOption = event => {
        //     if(event.target.value.length > 0) {
        //         console.log("alrighty")
        //     }
        // }

        return (
            <>
                <Form responsive className="newQuestion">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Add Question Here"
                            aria-label="Add Question Here"
                            aria-describedby="basic-addon2"
                            className={'qInput'}
                            name="question"
                            value={props.question.question}
                            onChange={event => props.handleQuestionInputChange(event, props.index)}
                        />
                        <InputGroup.Append>
                            <Button
                                onClick={() => props.deleteQuestion(props.index)}
                                variant="outline-warning"
                            >&#x2715;</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <Form.Group controlId="correctAnswer" className="mb-3">
                        <Form.Control
                            type="input"
                            placeholder="Add Answer Here"
                            className={'qInput'}
                            name="answer"
                            value={props.question.answer}
                            onChange={event => props.handleQuestionInputChange(event, props.index)}
                        />
                    </Form.Group>

                    <InputGroup>
                        <FormControl aria-label="Text input for Option A" 
                            placeholder="Option A" 
                            name="choiceA"
                            className="allInputs"
                            value={props.question.choiceA}
                            onChange={event => props.handleQuestionInputChange(event, props.index)}/>
                    </InputGroup><InputGroup>
                        <FormControl aria-label="Text input for Option B" 
                            placeholder="Option B" 
                            name="choiceB"
                            className="allInputs"
                            value={props.question.choiceB}
                            onChange={event => props.handleQuestionInputChange(event, props.index)}/>
                    </InputGroup><InputGroup>
                        <FormControl aria-label="Text input for Option C" 
                            placeholder="Option C" 
                            name="choiceC"
                            className="allInputs"
                            value={props.question.choiceC}
                            onChange={event => props.handleQuestionInputChange(event, props.index)}/>
                    </InputGroup><InputGroup>
                        <FormControl aria-label="Text input for Option D" 
                            placeholder="Option D" 
                            name="choiceD"
                            className="allInputs"
                            value={props.question.choiceD}
                            onChange={event => props.handleQuestionInputChange(event, props.index)}/>
                    </InputGroup>

                </Form>

            </>
        )
    }

    export default Question;
