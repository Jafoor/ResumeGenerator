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


export const ExperienceForm = ({inputFields, setInputFields}) => {
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

  return (
    <div>
                <h1 className="text-dark font-weight-bold py-5">
          {" "}
          Professional Experience Details (Add 3 latest experiences){" "}
        </h1>
        { inputFields.map((inputField, index) => (
          <div key={inputField.id}> 
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> {index+1}{ (index === 0) ? "st" : (index === 1) ? "nd" : (index === 2) ? "rd" : "th"} Experience </FormLabel>
            <FormControl
              name="exptitle"
              type="text"
              placeholder="e.g junior web developer"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.exptitle}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
            name="expcompany"
              type="text"
              placeholder="company name"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.expcompany}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
            name="expstart"
              type="date"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.expstart}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
            name="expend"
              type="date"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.expend}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
            name="expdescrib"
              as="textarea"
              rows={6}
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.expdescrib}
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
