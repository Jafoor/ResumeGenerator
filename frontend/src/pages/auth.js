
import React, { useState } from "react"
import { Link } from 'react-router-dom';
import axios from "axios";
const Auth = ( { history } ) => {
  const [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const [InputFields, setInputFields] = useState(
    { name: '', email:'', password:'' }
  );
  
  const handleChangeInput = (e) => {
    setInputFields({...InputFields,  [e.target.name] : e.target.value});
    console.log(InputFields);
  }

  const handleUserData = async (e) => {

    e.preventDefault();
    if(authMode === "signin"){
          const res = await axios
          .post("http://localhost:8800/api/auth/signin", InputFields);

        if(res.status === 200){
          history.push(`/`);
        }
    }else{
      const res = await axios
          .post("http://localhost:8800/api/auth/signup", InputFields);

        if(res.status === 200){
          setAuthMode("signin");
        }
    }
    
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="text-info"  role="button" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                name="email"
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                onChange={ e => handleChangeInput(e)}
                value={InputFields.email}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                name="password"
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                onInput={ e => handleChangeInput(e)}
                value={InputFields.password}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={handleUserData}>
                Submit
              </button>
            </div>
            <p className="text-center mt-2 text-danger">
               <Link to="#"> Forgot password?</Link>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="text-info" role="button" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              name="name"
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              onChange={ e => handleChangeInput(e)}
              value={InputFields.name}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              name="email"
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={ e => handleChangeInput(e)}
              value={InputFields.email}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onInput={ e => handleChangeInput(e)}
              value={InputFields.password}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={handleUserData}>
              Submit
            </button>
          </div>
          <p className="text-center mt-2 text-danger">
             <Link to="#"> Forgot password?</Link>
          </p>
        </div>
      </form>
    </div>
  )
};

export default Auth;