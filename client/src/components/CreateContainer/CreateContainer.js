import React from 'react';
import { Form } from 'react-bootstrap';

function CreateContainer() {
  return (
    <>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label><h2>Name Your Quiz</h2></Form.Label>
          <Form.Control size="lg" type="text" placeholder="Cool Quiz" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label><h3>Subject</h3></Form.Label>
          <Form.Control as="select">
            <option>Tech</option>
            <option>History</option>
            <option>Grammar</option>
            <option>Arithmetic</option>
            <option>The Arts</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  )
}

export default CreateContainer;