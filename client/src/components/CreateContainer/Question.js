import React, { Component } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import './Question.css';

export default class Question extends Component {

    render() {

        let handleInputChange = event => {
            if (event.target.value.length > 0) {
                event.target.classList.remove('qInput')
            } else {
                event.target.classList.add('qInput')
            }
        }

        let addOption = event => {
            if(event.target.value.length > 0) {
                console.log("alrighty")
            }
        }

        return (
            <>
                {this.props.id}
                {this.props.body}
                <Form>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Add Question Here"
                            aria-label="Add Question Here"
                            aria-describedby="basic-addon2"
                            className={'qInput'}
                            onChange={handleInputChange}
                        />
                        <InputGroup.Append>
                            <Button
                                onClick={this.props.delete}
                                variant="outline-warning"
                            >&#x2715;</Button>
                        </InputGroup.Append>
                    </InputGroup>

                    <Form.Group controlId="correctAnswer" className="mb-3">
                        <Form.Control
                            type="input"
                            placeholder="Add Answer Here"
                            className={'qInput'}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Form>

            </>
        )
    }
}
