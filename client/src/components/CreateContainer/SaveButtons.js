import React from 'react';
import { Button } from 'react-bootstrap';

function CreateButtons() {
    return (
        <>
            <Button variant="warning" size="lg" href="/">
                Cancel
            </Button>{' '}
            <Button variant="primary" size="lg">
                Save Quiz
            </Button>
        </>
    )
}

export default CreateButtons;