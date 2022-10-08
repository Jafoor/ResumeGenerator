import React from 'react';
import {
    Form,
    Col,
    FormGroup,
    FormLabel,
    FormControl,
    Button,
  } from "react-bootstrap";
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
  import { useState } from "react";
  // import { Link } from "react-router-dom";
  import axios from "axios";


  
  const GF = ({onChange, gfvalues}) => {

    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), firstName: '', lastName: '' },
      ]);

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
        <h1 className="text-dark font-weight-bold py-3">General Detail</h1>
        { inputFields.map(inputField => (
            <div key={inputField.id}> 
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>First Name</FormLabel>
            <FormControl
            name="firstName"
              type="text"
              placeholder="First Name"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.firstName}
              required
            />
          </FormGroup>
        </Form.Row>
        <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
        <RemoveIcon />
      </IconButton>
      <IconButton
        onClick={handleAddFields}
      >
        <AddIcon />
      </IconButton>
      </div>
        ))}

      </div>
    )
  }
  
  export default GF;