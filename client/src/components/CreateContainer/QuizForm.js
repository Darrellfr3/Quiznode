import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Question.css';

function CreateContainer(props) {

  const [open, setOpen] = useState();

  return (
    <>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label ><h2>Name Your Quiz</h2></Form.Label>
          <Form.Control className="allInputs" size="lg" type="text" placeholder="Cool Quiz" onChange={props.handleQuizNameInputChange}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label><h3>Subject</h3></Form.Label>
          <Form.Control as="select" 
          onChange={props.handleQuizSubjectInputChange} 
          className="form-control-menu"
          onClick={() => setOpen(!open)}>
            {/* <div> */}
            <option className="dropdown1">Tech</option>
            <option>History</option>
            <option>Grammar</option>
            <option>Arithmetic</option>
            <option>The Arts</option>
            {/* </div> */}
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  )
}

export default CreateContainer;
