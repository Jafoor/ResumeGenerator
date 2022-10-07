import React from 'react';
import {
    Form,
    Col,
    FormGroup,
    FormLabel,
    FormControl,
    Button,
  } from "react-bootstrap";
  import { useState } from "react";
  // import { Link } from "react-router-dom";
  import axios from "axios";


  
  const GeneralForm = () => {

        // first name of the person
    const [userFirstName, setUserFirstName] = useState("");
    const handleFirstName = (e) => {
        setUserFirstName(e.target.value);
    };
    // second name of the person
    const [userSecondName, setUserSecondName] = useState("");
    const handleUserSecondName = (e) => {
        setUserSecondName(e.target.value);
    };
    // gender of user
    const [userGender, setUserGender] = useState("Male");
    const handleUserGender = (e) => {
        setUserGender(e.target.value);
    };
    // age of the user
    const [userAge, setUserAge] = useState("");
    const handleUserAge = (e) => {
        setUserAge(e.target.value);
    };
    // user profession
    const [userProfession, setUserProfession] = useState("");
    const handleUserProfession = (e) => {
        setUserProfession(e.target.value);
    };
    // user location
    const [userLocation, setUserLocation] = useState("");
    const handleUserLocation = (e) => {
        setUserLocation(e.target.value);
    };
    // user phone number
    const [userPhoneNumber, setUserPhoneNumber] = useState("");
    const handleUserPhoneNumber = (e) => {
        setUserPhoneNumber(e.target.value);
    };
    // user email address
    const [userEmail, setUserEmail] = useState("");
    const handleUserEmail = (e) => {
        setUserEmail(e.target.value);
    };
    // user house address
    const [userHouseAddress, setUserHouseAddress] = useState("");
    const handleUserHouseAddress = (e) => {
        setUserHouseAddress(e.target.value);
    };
    // user description
    const [userProfileDescription, setUserProfileDescription] = useState("");
    const handleUserProfileDescription = (e) => {
        setUserProfileDescription(e.target.value);
    };

    return (
      <div>
        <h1 className="text-dark font-weight-bold py-3">General Detail</h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>First Name</FormLabel>
            <FormControl
              type="text"
              placeholder="First Name"
              onChange={handleFirstName}
              value={userFirstName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Last Name</FormLabel>
            <FormControl
              type="text"
              placeholder="Last Name"
              onChange={handleUserSecondName}
              value={userSecondName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Gender</FormLabel>
            <FormControl
              as="select"
              onChange={handleUserGender}
              value={userGender}
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
              type="number"
              min="1"
              onChange={handleUserAge}
              value={userAge}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Profession</FormLabel>
            <FormControl
              type="text"
              placeholder="e.g Full stack developer"
              onChange={handleUserProfession}
              value={userProfession}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Location</FormLabel>
            <FormControl
              type="text"
              placeholder="Lahore, Pakistan"
              onChange={handleUserLocation}
              value={userLocation}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Mobile Phone </FormLabel>
            <FormControl
              type="number"
              placeholder="+01 23 456 789"
              onChange={handleUserPhoneNumber}
              value={userPhoneNumber}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> Email </FormLabel>
            <FormControl
              type="email"
              placeholder="info@domain.com"
              onChange={handleUserEmail}
              value={userEmail}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel> House Address </FormLabel>
            <FormControl
              type="text"
              placeholder="House#0 St#0 street and city name"
              onChange={handleUserHouseAddress}
              value={userHouseAddress}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12}>
            <Form.Label>Describe Yourself</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUserProfileDescription}
              value={userProfileDescription}
              required
            />
          </FormGroup>
        </Form.Row>
      </div>
    )
  }
  
  export default GeneralForm;