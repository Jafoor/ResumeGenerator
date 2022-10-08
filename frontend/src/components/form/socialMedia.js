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
import React from 'react'

const SocialMedia = () => {

      // user profile website
  const [userFirstProfileWebsite, SetUserFirstProfileWebsite] =
  useState("GitHub");
const handleFirstUserProfileWebsite = (e) => {
  SetUserFirstProfileWebsite(e.target.value);
};
// user github profile
const [userGitHubProfileName, SetUserGitHubProfileName] = useState("");
const handleUserGitHubProfileName = (e) => {
  SetUserGitHubProfileName(e.target.value);
};
// user profile website
const [userSecondProfileWebsite, SetUserSecondProfileWebsite] =
  useState("LinkedIn");
const handleSecondUserProfileWebsite = (e) => {
  SetUserSecondProfileWebsite(e.target.value);
};
// user LinkedIn profile
const [userLinkedInProfileName, SetUserLinkedInProfileName] = useState("");
const handleUserLinkedInProfileName = (e) => {
  SetUserLinkedInProfileName(e.target.value);
};
// user profile website
const [userThirdProfileWebsite, SetUserThirdProfileWebsite] =
  useState("Personal Website");
const handleThirdUserProfileWebsite = (e) => {
  SetUserThirdProfileWebsite(e.target.value);
};
// user personal website link
const [userPersonalWebsiteLink, setUserPersonalWebsiteLink] = useState("");
const handleUserPersonalWebsiteLink = (e) => {
  setUserPersonalWebsiteLink(e.target.value);
};

  return (
    <div>
        <h1 className="text-dark font-weight-bold py-4">Social Detail</h1>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl
              as="select"
              onChange={handleFirstUserProfileWebsite}
              value={userFirstProfileWebsite}
              required
            >
              <option value="GitHub">GitHub</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Personal Website">Portfolio Website</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl
              type="text"
              placeholder="e.g johnDoe123"
              onChange={handleUserGitHubProfileName}
              value={userGitHubProfileName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl
              as="select"
              onChange={handleSecondUserProfileWebsite}
              value={userSecondProfileWebsite}
              required
            >
              <option value="LinkedIn">LinkedIn</option>
              <option value="GitHub">GitHub</option>
              <option value="Portfolio Website">Portfolio Website</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl
              type="text"
              placeholder="e.g johnDoe123"
              onChange={handleUserLinkedInProfileName}
              value={userLinkedInProfileName}
              required
            />
          </FormGroup>
        </Form.Row>
        <Form.Row>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Social Website</FormLabel>
            <FormControl
              as="select"
              onChange={handleThirdUserProfileWebsite}
              value={userThirdProfileWebsite}
              required
            >
              <option value="Portfolio Website">Portfolio Website</option>
              <option value="GitHub">GitHub</option>
              <option value="LinkedIn">LinkedIn</option>
            </FormControl>
          </FormGroup>
          <FormGroup as={Col} sm={12} md={4}>
            <FormLabel>Username</FormLabel>
            <FormControl
              type="text"
              placeholder="johnDoe.com"
              onChange={handleUserPersonalWebsiteLink}
              value={userPersonalWebsiteLink}
              required
            />
          </FormGroup>
        </Form.Row>
    </div>
  )
}

export default SocialMedia;