import React from 'react';
import { Button } from 'react-bootstrap';
import './Question.css';

function CreateButtons(props) {
    return (
        <>
            <Button variant="warning" size="lg" href="/home" className="saveBtns">
                Cancel
            </Button>{' '}
            <Button variant="success" size="lg" onClick={props.submitQuiz} className="saveBtns">
                Save Quiz
            </Button>
        </>
    )
}

export default CreateButtons;