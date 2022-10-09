import { useState, useEffect, Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import axios from "axios";

import Printer, { print } from 'react-pdf-print'

const ids = ['1']

const ResumeComponent = ({ match }) => {
  const [userResumeData, setUserResumeData] = useState({});
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    const fetchedData = async () => {
      try{
        const res =  await axios
        .get(`http://localhost:8800/api/resume/get/${match.params.id}`);

        if(res.data){
          
          setUserResumeData(res.data);
          setMounted(true);

        }
      }catch(err){
        setMounted(false);
      }
      
    };
    fetchedData();
    
  }, [match.params.id,mounted]);

  return (
    <Fragment>
      {mounted ? (
        <div>
        <Container id={ids[0]} className="mt-4 mb-2">
          <Printer>
          <main  className="resume-section pl-4">
            <div  >
            <header>
              <Row className="border-bottom border-dark w-100">
                <Col sm={12} md={6} className="py-4 px-4">
                  <h1 className="text-dark font-weight-bold">
                    {userResumeData.generalinfo['0'].fname}
                    {userResumeData.generalinfo['0'].lastname}
                  </h1>
                  <h6 className="h5 text-dark">
                    {userResumeData.generalinfo['0'].profession}
                  </h6>
                  <div className=" w-25 d-flex justify-content-between user-social-icons">
                    
                  { userResumeData.socialMedia.map((data, index) => (
  <a
  key={data.id}
                      href={`${data.socialwebsitelink}`}
                      className="text-dark"
                    >
                      {data.socialwebsite}
            </a>
))}

                  </div>
                </Col>
                <Col sm={12} md={6}>
                  <p className="py-4 text-dark">
                    {userResumeData.generalinfo['0'].describe}
                  </p>
                </Col>
              </Row>
            </header>
            <Row className="border-bottom border-dark w-100">
              <h1 className="text-center text-dark w-100 pt-4 font-weight-bold">
                General Info
              </h1>
              <Col sm={12} md={6} className="my-4">
                <ul>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">
                      Email Address:
                    </h6>
                    <p className="px-2">{userResumeData.generalinfo['0'].email}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">Location:</h6>
                    <p className="px-2">{userResumeData.generalinfo['0'].permanentaddress}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">
                      Phone Number:
                    </h6>
                    <p className="px-2">{userResumeData.generalinfo['0'].mobilenumber}</p>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={6} className="my-4">
                <ul>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">
                      House Address:
                    </h6>
                    <p className="px-2">{userResumeData.generalinfo['0'].presentaddress}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">Age:</h6>
                    <p className="px-2">{userResumeData.generalinfo['0'].age}</p>
                  </li>
                  <li className="d-flex align-items justify-content-start">
                    <h6 className="font-weight-bold text-dark">Gender:</h6>
                    <p className="px-2">{userResumeData.generalinfo['0'].gender}</p>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row className="border-bottom border-dark w-100">
              <h1 className="text-center text-dark w-100 pt-4 font-weight-bold">
                Educational Info
              </h1>
              <Col className="py-4">
                <ul>
                { userResumeData.education.map((data, index) => (
<li key={data.id}>

                    <h3 className="text-dark font-weight-bold">
                      1.
                      {data.edudegree}
                    </h3>
                    <h6 className="text-dark font-weight-bold">
                      {data.eduinstitute}
                    </h6>
                    <p className="text-dark font-weight-bold">
                      
                      {data.edustart}/
                      {data.eduend}
                    </p>
                    <p className="text-dark font-weight-normal">
                      {data.edudescrib}
                    </p>
          </li>
))}
                </ul>
              </Col>
            </Row>
            <Row className="w-100">
              <h1 className="text-center text-dark w-100 pt-4 font-weight-bold">
                Professional Info
              </h1>
              <Col className="py-4">
                <ul>
                  
{ userResumeData.experience.map((data, index) => (
  <li key={data.id}>
  <h3 className="text-dark font-weight-bold">
    {index + 1}
    {data.exptitle}
  </h3>
  <h6 className="text-dark font-weight-bold">
    {data.expcompany}
  </h6>
  <p className="text-dark font-weight-bold">
    
    {data.expstart}/
    {data.expend}
  </p>
  <p className="text-dark font-weight-normal">
    {data.expdescrib}
  </p>
</li>


))}
                </ul>
              </Col>
            </Row>
            <Row className="w-100">
            <h1 className="text-center text-dark w-100 pt-4 font-weight-bold">
                Hands on Skill
              </h1>
              <Col className="py-4">
              <ul>
              { userResumeData.skill.map((data, index) => (

  <li key={data.id}>
    <h6 className="font-weight-bold text-dark">
                      {data.skilltype}:
                    </h6>
                    <p className="px-2">{data.skillsets}</p>
</li>

))}
</ul>
</Col>
            </Row>
            </div>
          </main>
          </Printer>
          
        </Container>
        <div className="d-grid gap-2 col-6 mx-auto">
        <Button
            variant="success"
            as={Col}
            sm={2}
            className="  py-2 my-3 text-white font-weight-bold text-center"
            onClick={() => print(ids)}
            value='Stampa'
          >
            Print
          </Button>

        </div>
        
        </div>
      ) : (
        "Loading....."
      )}
    </Fragment>
  );
};

export default ResumeComponent;
