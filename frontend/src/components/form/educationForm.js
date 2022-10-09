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


export const EducationForm = ({inputFields, setInputFields}) => {

  const handleChangeInput = (id, event) => {
    console.log(id, event.target);
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

  return (
    <div>
        <h1 className="text-dark font-weight-bold py-4">
          Educational Details
        </h1>
        { inputFields.map(inputField => (
          <div key={inputField.id}> 
                <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Education Title (School, College or Others) </FormLabel>
            <FormControl
              name="edutitle"
              type="text"
              placeholder="e.g School, College, University"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.edutitle}
              required
            />
          </FormGroup>

        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> {inputField.edutitle} degree </FormLabel>
            <FormControl
              name="edudegree"
              type="text"
              placeholder="e.g metric with computer sciences"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.edudegree}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> {inputField.edutitle} Name </FormLabel>
            <FormControl
              name="eduinstitute"
              type="text"
              placeholder="e.g govt school"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.eduinstitute}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              name="edustart"
              type="date"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.edustart}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
            name="eduend"
              type="date"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.eduend}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your {inputField.edutitle}'s experience</FormLabel>
            <Form.Control
            name="edudescrib"
              as="textarea"
              rows={6}
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.edudescrib}
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
        </div>
        ))}
    </div>
  )
}
