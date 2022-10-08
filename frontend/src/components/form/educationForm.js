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

export const EducationForm = () => {
      // user high school degree name
  const [userHighSchoolDegreeName, setUserHighSchoolDegreeName] = useState("");
  const handleUserHighSchoolDegreeName = (e) => {
    setUserHighSchoolDegreeName(e.target.value);
  };
  // user high school name
  const [userHighSchoolName, setUserHighSchoolName] = useState("");
  const handleUserHighSchoolName = (e) => {
    setUserHighSchoolName(e.target.value);
  };
  // user high school degree starting date
  const [userHighSchoolStartingDate, setUserHighSchoolStartingDate] =
    useState("");
  const handleUserHighSchoolDegreeStartingDate = (e) => {
    setUserHighSchoolStartingDate(e.target.value);
    console.log(e.target.value);
  };
  // user high school degree ending date
  const [userHighSchoolEndingDate, setUserHighSchoolEndingDate] = useState("");
  const handleUserHighSchoolDegreeEndingDate = (e) => {
    setUserHighSchoolEndingDate(e.target.value);
  };
  // user high school experience
  const [userHighSchoolExperience, setUserHighSchoolExperience] = useState("");
  const handleUserHighSchoolExperience = (e) => {
    setUserHighSchoolExperience(e.target.value);
  };
  // user college degree name
  const [userCollegeDegreeName, setUserCollegeDegreeName] = useState("");
  const handleUserCollegeDegreeName = (e) => {
    setUserCollegeDegreeName(e.target.value);
  };
  // user college name
  const [userCollegeName, setUserCollegeName] = useState("");
  const handleUserCollegeName = (e) => {
    setUserCollegeName(e.target.value);
  };
  // user college degree starting date
  const [userCollegeStartingDate, setUserCollegeStartingDate] = useState("");
  const handleUserCollegeStartingDate = (e) => {
    setUserCollegeStartingDate(e.target.value);
  };
  // user college degree ending date
  const [userCollegeEndingDate, setUserCollegeEndingDate] = useState("");
  const handleUserCollegeDegreeEndingDate = (e) => {
    setUserCollegeEndingDate(e.target.value);
  };
  // user college experience
  const [userCollegeExperience, setUserCollegeExperience] = useState("");
  const handleUserCollegeExperience = (e) => {
    setUserCollegeExperience(e.target.value);
  };
  // user bachelor degree name
  const [userBachelorDegreeName, setUserBachelorDegreeName] = useState("");
  const handleUserBachelorDegreeName = (e) => {
    setUserBachelorDegreeName(e.target.value);
  };
  // user university name
  const [userUniversityName, setUserUniversityName] = useState("");
  const handleUserUniversityName = (e) => {
    setUserUniversityName(e.target.value);
  };
  // user bachelor degree starting date
  const [userBachelorStartingDate, setUserBachelorStartingDate] = useState("");
  const handleUserBachelorStartingDate = (e) => {
    setUserBachelorStartingDate(e.target.value);
  };
  // user bachelor degree ending date
  const [userBachelorEndingDate, setUserBachelorEndingDate] = useState("");
  const handleUserBachelorDegreeEndingDate = (e) => {
    setUserBachelorEndingDate(e.target.value);
  };
  // user university experience
  const [userUniversityExperience, setUserUniversityExperience] = useState("");
  const handleUserUniversityExperience = (e) => {
    setUserUniversityExperience(e.target.value);
  };
  return (
    <div>
        <h1 className="text-dark font-weight-bold py-4">
          Educational Detail (Add 2 educational details)
        </h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> High school degree </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g metric with computer sciences"
              onChange={handleUserHighSchoolDegreeName}
              value={userHighSchoolDegreeName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> School Name </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g govt school"
              onChange={handleUserHighSchoolName}
              value={userHighSchoolName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserHighSchoolDegreeStartingDate}
              value={userHighSchoolStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserHighSchoolDegreeEndingDate}
              value={userHighSchoolEndingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUserHighSchoolExperience}
              value={userHighSchoolExperience}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> College degree </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g Intermediate in computer science"
              onChange={handleUserCollegeDegreeName}
              value={userCollegeDegreeName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> College Name </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g MAO College"
              onChange={handleUserCollegeName}
              value={userCollegeName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserCollegeStartingDate}
              value={userCollegeStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserCollegeDegreeEndingDate}
              value={userCollegeEndingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUserCollegeExperience}
              value={userCollegeExperience}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> University degree </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g bachelor in computer science"
              onChange={handleUserBachelorDegreeName}
              value={userBachelorDegreeName}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> University Name </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g university of the punjab"
              onChange={handleUserUniversityName}
              value={userUniversityName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserBachelorStartingDate}
              value={userBachelorStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUserBachelorDegreeEndingDate}
              value={userBachelorEndingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUserUniversityExperience}
              value={userUniversityExperience}
              required
            />
          </FormGroup>
        </Form.Row>
    </div>
  )
}
