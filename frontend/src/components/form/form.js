import {
  Container,
  Form,
  Col,
  Button,
} from "react-bootstrap";
import { useState } from "react";

import GeneralForm from "./generalForm";
import SocialMedia from "./socialMedia";
import { EducationForm } from "./educationForm";
import { ExperienceForm } from "./experienceForm";
import { ExpertiseForm } from "./expertiseForm";
import { v4 as uuidv4 } from 'uuid';
import { authAxios } from "../../api/authAxios";


const FormComponent = ({ history }) => {

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


  const handleUserResumeData = async (e) => {
    const body = {
                    generalinfo:generalInputField,
                    socialMedia: socialInputForm,
                    education: eduInputFields,
                    skill: skillInputForm, 
                    experience:expInputFields}
    e.preventDefault();

    try{
  
      const res = await authAxios
      .post("http://localhost:8080/api/resume/create", body);
      if(res.status !== 200){
        history.push("/louout")
      }
      if(res.status === 200){
          history.push(`/view_resume/${res.data._id}`)
      }
  }catch(err){
console.log(err);
    }
    
    
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
