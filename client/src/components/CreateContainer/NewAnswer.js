import React from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';

function NewAnswer(props) {
    return (
        <>
            <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Answer Choice"
                        aria-label="Answer Choice"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-warning"
                        onClick={() => props.removeAnswer(props.id)}
                        className="remove"
                        >&#x2715;</Button>
                    </InputGroup.Append>
                </InputGroup>
        </>
    )
}

export default NewAnswer;
