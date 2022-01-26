import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import petStore from "../petStore";

const PetCreateModal = ({ isShown, handleClose }) => {
  const [petData, setPetData] = useState({
    id: "",
    name: "",
    type: "",
    image: "",
  });

  const handleChange = (event) => {
    setPetData = { ...petData, [event.target.name]: event.target.value };
    console.log(petData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log();
  };

  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Add a Pet</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Pet Name</Form.Label>
            <Form.Control
              name="Pet Name"
              onChange={handleChange}
              type="text"
              placeholder="Type the name here .."
            />
            <Form.Text className="text-muted">
              It's nice to meet you PET!
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Pet Type </Form.Label>
            <Form.Select
              name="Pet Type"
              onChange={handleChange}
              aria-label="Default select example"
            >
              <option>Select Pet</option>
              <option value="Cat">cat</option>
              <option value="Dog">dog</option>
              <option value="Rabbit">rabbit</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Image</Form.Label>
            <Form.Control
              name="Pet Image"
              onChange={handleChange}
              type="url"
              placeholder="url"
            />
          </Form.Group>
          <Button onSubmit={handleSubmit} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>

      {/* <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer> */}
    </Modal.Dialog>
  );
};

export default PetCreateModal;
