import {
  Container,
  Form,
  Col,
  Button,
} from "react-bootstrap";
import { useState } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import GeneralForm from "./generalForm";
import SocialMedia from "./socialMedia";
import { EducationForm } from "./educationForm";
import { ExperienceForm } from "./experienceForm";
import { ExpertiseForm } from "./expertiseForm";

import { v4 as uuidv4 } from 'uuid';

const FormComponent = ({ history }) => {
// gender:'', age:'', profession:'', permanentaddress:'', presentaddress:'', mobilenumber:'', email:'', describe:''
  const [eduInputFields, setEduInputFields] = useState([
    { id: uuidv4(), edutitle: '', edudegree:'', eduinstitute:'', edustart:'', eduend:'', edudescrib:'' },
  ]);

  const [expInputFields, setExpInputFields] = useState([
    { id: uuidv4(), exptitle: '', expcompany:'', expstart:'', expend:'', expdescrib:'' },
  ]);

  const [generalInputField, setGeneralInputFiels] = useState([
    { id: uuidv4(), fname:'', lastname:'', gender:'', age:'', profession:'', permanentaddress:'', presentaddress:'', mobilenumber:'', email:'', describe:''}
  ])

  const [socialInputForm, setSocialInputForm] = useState([
    { id: uuidv4(), socialwebsite:'', socialwebsitelink:'' },
  ])

  const [skillInputForm, setSkillInputForm] = useState([
    { id: uuidv4(), skilltype:'', skillsets:'' },
  ])



  // sum up all the information into one object
  const handleUserResumeData = async (e) => {
    const body = {
                    generalinfo:generalInputField,
                    socialMedia: socialInputForm,
                    education: eduInputFields,
                    skill: skillInputForm, 
                    experience:expInputFields}
    e.preventDefault();
    console.log(body);
    const res = await axios
      .post("http://localhost:8800/api/resume/create", body);
    console.log(res);
  };
  return (
    <Container className="mt-5 mb-2">
      <Form className="form-section">
        <GeneralForm inputFields={generalInputField} setInputFields={setGeneralInputFiels}/>
        <SocialMedia inputFields={socialInputForm} setInputFields={setSocialInputForm} />
        <EducationForm inputFields={eduInputFields} setInputFields={setEduInputFields} />
        <ExperienceForm inputFields={expInputFields}  setInputFields={setExpInputFields}/>
        <ExpertiseForm inputFields={skillInputForm} setInputFields={setSkillInputForm}/>
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
