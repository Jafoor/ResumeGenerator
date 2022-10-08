import React from 'react'
import {
    Container,
    Form,
    Col,
    FormGroup,
    FormLabel,
    FormControl,
    Button,
  } from "react-bootstrap";
  import { useState } from "react";

export const ExpertiseForm = () => {
      // user experiences
  const [userSkills, setUserSkills] = useState("");
  const handleUserSkills = (e) => {
    setUserSkills(e.target.value);
  };
  return (
    <div>
        <Form.Row>
          <FormGroup as={Col} sm={12}>
            <Form.Label>Write Your Skills</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="e.g HTML|CSS|REACTJS|NODEJS|EXPRESSJS"
              onChange={handleUserSkills}
              value={userSkills}
              required
            />
          </FormGroup>
        </Form.Row>
    </div>
  )
}
