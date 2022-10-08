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
// import { Link } from "react-router-dom";
import axios from "axios";
import GeneralForm from "./generalForm";
import SocialMedia from "./socialMedia";
import { EducationForm } from "./educationForm";
import { ExperienceForm } from "./experienceForm";

const FormComponent = ({ history }) => {




  // sum up all the information into one object
  const handleUserResumeData = (e) => {
    e.preventDefault();
    // https://cv-generator-mern.herokuapp.com/api
    axios
      .post("http://localhost:9999/api", {
      })
      .then((res) => {
        if (res.data.success) {
          history.push(`/view_resume/${res.data.resumeData._id}`);
        }
      });
  };
  return (
    <Container className="mt-5 mb-2">
      <Form className="form-section">
        <GeneralForm/>
        <SocialMedia/>
        <EducationForm/>
        <ExperienceForm/>
        <Button
          variant="dark"
          type="button"
          as={Col}
          sm={12}
          className="py-3 my-3"
          onClick={handleUserResumeData}
        >
          Generate CV
        </Button>
      </Form>
    </Container>
  );
};

export default FormComponent;
