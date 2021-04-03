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
                <Form>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Add Question Here"
                            aria-label="Add Question Here"
                            aria-describedby="basic-addon2"
                            className={'qInput'}
                            onChange={event => props.handleInputChange(event, props.index)}
                        />
                        <InputGroup.Append>
                            <Button
                                onClick={() => props.deleteQuestion(props.index)}
                                variant="outline-warning"
                            >&#x2715;</Button>
                        </InputGroup.Append>
                    </InputGroup>

                    {/* <Form.Group controlId="correctAnswer" className="mb-3">
                        <Form.Control
                            type="input"
                            placeholder="Add Answer Here"
                            className={'qInput'}
                            onChange={handleInputChange}
                        />
                    </Form.Group> */}
                </Form>

            </>
        )
    }

    export default Question;
