import React from 'react';
import { Button } from 'react-bootstrap';

function CreateButtons(props) {
    return (
        <>
            <Button variant="warning" size="lg" href="/">
                Cancel
            </Button>{' '}
            <Button variant="primary" size="lg" onClick={props.submitQuiz}>
                Save Quiz
            </Button>
        </>
    )
}

export default CreateButtons;