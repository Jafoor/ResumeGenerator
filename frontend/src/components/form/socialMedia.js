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


import React from 'react'

const SocialMedia = ({inputFields, setInputFields}) => {

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
        <h1 className="text-dark font-weight-bold py-4">Social Details</h1>
        { inputFields.map((inputField, index) => (
          <div key={inputField.id}> 
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel>{index+1}{ (index === 0) ? "st " : (index === 1) ? "nd " : (index === 2) ? "rd " : "th "}Social Website</FormLabel>
            <FormControl
              name="socialwebsite"
              type="text"
              placeholder="e.g Github"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.socialwebsite}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel>Link</FormLabel>
            <FormControl
              name="socialwebsitelink"
              type="text"
              placeholder="e.g https://github.com/Jafoor"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.socialwebsitelink}
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

export default SocialMedia;