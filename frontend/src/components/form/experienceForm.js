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

export const ExperienceForm = () => {

      // user 1st experience
  const [user1stExperience, setUser1stExperience] = useState("");
  const handleUser1stExperience = (e) => {
    setUser1stExperience(e.target.value);
  };
  // user 1st company name
  const [user1stCompanyName, setUser1stCompanyName] = useState("");
  const handleUser1stCompanyName = (e) => {
    setUser1stCompanyName(e.target.value);
  };
  // user 1st experience starting date
  const [user1stExperienceStartingDate, setUser1stExperienceStartingDate] =
    useState("");
  const handleUser1stExperienceStartingDate = (e) => {
    setUser1stExperienceStartingDate(e.target.value);
  };
  // user 1st experience ending date
  const [user1stExperienceEndingDate, setUser1stExperienceEndingDate] =
    useState("");
  const handleUser1stExperienceEndingDate = (e) => {
    setUser1stExperienceEndingDate(e.target.value);
  };
  // user 1st company experience
  const [user1stCompanyExperience, setUser1stCompanyExperience] = useState("");
  const handleUser1stCompanyExperience = (e) => {
    setUser1stCompanyExperience(e.target.value);
  };
  // user 2nd experience
  const [user2ndExperience, setUser2ndExperience] = useState("");
  const handleUser2ndExperience = (e) => {
    setUser2ndExperience(e.target.value);
  };
  // user 2nd company name
  const [user2ndCompanyName, setUser2ndCompanyName] = useState();
  const handleUser2ndCompanyName = (e) => {
    setUser2ndCompanyName(e.target.value);
  };
  // user 2nd experience starting date
  const [user2ndExperienceStartingDate, setUser2ndExperienceStartingDate] =
    useState("");
  const handleUser2ndExperienceStartingDate = (e) => {
    setUser2ndExperienceStartingDate(e.target.value);
  };
  // user 2nd experience ending date
  const [user2ndExperienceEndingDate, setUser2ndExperienceEndingDate] =
    useState("");
  const handleUser2ndExperienceEndingDate = (e) => {
    setUser2ndExperienceEndingDate(e.target.value);
  };
  // user 2nd company experience
  const [user2ndCompanyExperience, setUser2ndCompanyExperience] = useState("");
  const handleUser2ndCompanyExperience = (e) => {
    setUser2ndCompanyExperience(e.target.value);
  };
  // user 3rd experience
  const [user3rdExperience, setUser3rdExperience] = useState("");
  const handleUser3rdExperience = (e) => {
    setUser3rdExperience(e.target.value);
  };
  // user 3rd company name
  const [user3rdCompanyName, setUser3rdCompanyName] = useState();
  const handleUser3rdCompanyName = (e) => {
    setUser3rdCompanyName(e.target.value);
  };
  // user 3rd experience starting date
  const [user3rdExperienceStartingDate, setUser3rdExperienceStartingDate] =
    useState("");
  const handleUser3rdExperienceStartingDate = (e) => {
    setUser3rdExperienceStartingDate(e.target.value);
  };
  // user 3rd experience ending date
  const [user3rdExperienceEndingDate, setUser3rdExperienceEndingDate] =
    useState("");
  const handleUser3rdExperienceEndingDate = (e) => {
    setUser3rdExperienceEndingDate(e.target.value);
  };
  // user 3rd company experience
  const [user3rdCompanyExperience, setUser3rdCompanyExperience] = useState("");
  const handleUser3rdCompanyExperience = (e) => {
    setUser3rdCompanyExperience(e.target.value);
  };

  return (
    <div>
                <h1 className="text-dark font-weight-bold py-5">
          {" "}
          Professional Experience Details (Add 3 latest experiences){" "}
        </h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 1st Experience </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g junior web developer"
              onChange={handleUser1stExperience}
              value={user1stExperience}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
              type="text"
              placeholder="company name"
              onChange={handleUser1stCompanyName}
              value={user1stCompanyName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser1stExperienceStartingDate}
              value={user1stExperienceStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser1stExperienceEndingDate}
              value={user1stExperienceEndingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUser1stCompanyExperience}
              value={user1stCompanyExperience}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 2nd Experience </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g junior web developer"
              onChange={handleUser2ndExperience}
              value={user2ndExperience}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
              type="text"
              placeholder="company name"
              onChange={handleUser2ndCompanyName}
              value={user2ndCompanyName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser2ndExperienceStartingDate}
              value={user2ndExperienceStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser2ndExperienceEndingDate}
              value={user2ndExperienceEndingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUser2ndCompanyExperience}
              value={user2ndCompanyExperience}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> 3rd Experience </FormLabel>
            <FormControl
              type="text"
              placeholder="e.g junior web developer"
              onChange={handleUser3rdExperience}
              value={user3rdExperience}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={6}>
            <FormLabel> Company Name </FormLabel>
            <FormControl
              type="text"
              placeholder="company name"
              onChange={handleUser3rdCompanyName}
              value={user3rdCompanyName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Starting Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser3rdExperienceStartingDate}
              value={user3rdExperienceStartingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Ending Date</FormLabel>
            <FormControl
              type="date"
              onChange={handleUser3rdExperienceEndingDate}
              value={user3rdExperienceEndingDate}
              required
            />
          </FormGroup>
          <FormGroup as={Col} sm={12}>
            <FormLabel>Describe your experience</FormLabel>
            <Form.Control
              as="textarea"
              rows={6}
              onChange={handleUser3rdCompanyExperience}
              value={user3rdCompanyExperience}
              required
            />
          </FormGroup>
        </Form.Row>
    </div>
  )
}
