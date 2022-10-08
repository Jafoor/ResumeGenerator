import React from 'react';
import {
    Form,
    Col,
    FormGroup,
    FormLabel,
    FormControl,
  } from "react-bootstrap";
  
  const GeneralForm = ({inputFields, setInputFields}) => {

      const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        
        setInputFields(newInputFields);
      }

    return (
      <div>
        <h1 className="text-dark font-weight-bold py-3">General Details</h1>
        { inputFields.map((inputField) => (
          <div key={inputField.id}> 
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>First Name</FormLabel>
            <FormControl
              name="fname"
              type="text"
              placeholder="First Name"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.fname}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Last Name</FormLabel>
            <FormControl
              name="lastname"
              type="text"
              placeholder="Last Name"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.lastname}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Gender</FormLabel>
            <FormControl
              name='gender'
              as="select"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.gender}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">other</option>
            </FormControl>
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Age</FormLabel>
            <FormControl
              name="age"
              type="number"
              min="1"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.age}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Profession</FormLabel>
            <FormControl
              name="profession"
              type="text"
              placeholder="e.g Full stack developer"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.profession}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Permanent Address</FormLabel>
            <FormControl
              name="permanentaddress"
              type="text"
              placeholder="Dhaka, Bangladesh"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.permanentaddress}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Mobile Phone </FormLabel>
            <FormControl
              name='mobilenumber'
              type="number"
              placeholder="+880 1846825017"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.mobilenumber}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Email </FormLabel>
            <FormControl
              name="email"
              type="email"
              placeholder="info@domain.com"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.email}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Present Address </FormLabel>
            <FormControl
              name="presentaddress"
              type="text"
              placeholder="House#0 St#0 street and city name"
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.presentaddress}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12}>
            <Form.Label>Describe Yourself</Form.Label>
            <Form.Control
              name="describe"
              as="textarea"
              rows={6}
              onChange={event => handleChangeInput(inputField.id, event)}
              value={inputField.describe}
              required
            />
          </FormGroup>
        </Form.Row>
        </div>
        ))}
      </div>
    )
  }
  
  export default GeneralForm;