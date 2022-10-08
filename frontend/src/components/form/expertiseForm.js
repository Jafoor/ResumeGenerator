import React from 'react'
import {
  Form,
  Col,
  FormGroup,
  FormLabel,
  FormControl,

} from "react-bootstrap";

import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import { v4 as uuidv4 } from 'uuid';

  import { useState } from "react";

export const ExpertiseForm = ({inputFields, setInputFields}) => {
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(),  firstName: '', lastName: '' }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }
  const [userSkills, setUserSkills] = useState("");
  const handleUserSkills = (e) => {
    setUserSkills(e.target.value);
  };
  return (
    <div>
      <h1 className="text-dark font-weight-bold py-4">Social Details</h1>
        { inputFields.map((inputField, index) => (
          <div key={inputField.id}> 

      <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel>{index+1}{ (index === 0) ? "st " : (index === 1) ? "nd " : (index === 2) ? "rd " : "th "}Skill Type</FormLabel>
            <FormControl
              name="skilltype"
              type="text"
              placeholder="Programming Language"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.skilltype}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel>Write Your Skills</FormLabel>
            <FormControl
              name="skillsets"
              type="text"
              placeholder="e.g HTML|CSS|REACTJS|NODEJS|EXPRESSJS"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.skillsets}
              required
            />
          </FormGroup>
        </Form.Row>

        <div className="text-center">
        <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
        <RemoveIcon />
      </IconButton>
      <IconButton
        onClick={handleAddFields}
      >
        <AddIcon />
      </IconButton>
      </div>
      
        </div>))}
    </div>
  )
}
