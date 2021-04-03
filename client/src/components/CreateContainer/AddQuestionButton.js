import React from 'react';
import { Button } from 'react-bootstrap';

function AddQuestionButton() {
    return (
        <>
            <Button variant="success" size="lg" block >
                + Add Question
            </Button>
        </>
    )
}

export default AddQuestionButton;