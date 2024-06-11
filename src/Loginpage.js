import React from 'react';
import './index.css';

// import {FormContainer, TextFieldElement} from 'react-hook-form-mui'
export default function Loginpage() {
  return (
  <>

  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="js.js" />
  <div className="container">
    <div className="sub-container">
      <div className="left-container" id="signIn">
        <div className="left">
          <h1 className="a-heading">SIGN IN</h1>
          <form className="login">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <p className="f-password">Forgot Password?</p>
            <button type="submit" className="s-button">
              {" "}
              <a href="..//loadding/Loadding.html">SIGN IN</a>
            </button>
            <p className="n-new">
              New Member
              <i className="t-button" aria-hidden="true" onclick="showSignup()">
                Sign up now
              </i>
            </p>
          </form>
        </div>
      </div>
      <div className="right-container" id="signUp">
        <div className="right">
          <h1 className="a-heading">
            <a href="">SIGN UP</a>
          </h1>
          <from className="signup">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit" className="s-button">
              <a href="">SING UP</a>
            </button>
            <p className="n-new">
              Already have an account?
              <i className="t-button" aria-hidden="true" onclick="hideSignup()">
                Sign in
              </i>
            </p>
          </from>
        </div>
      </div>
    </div>
  </div>
</>

  //   <FormContainer
  //           defaultValues={{name: ''}}
  //           onSuccess={data => console.log(data)}
  //       >
  //           <TextFieldElement name="name" label="TeacherName" required/>
  //  </FormContainer>
       
)
}
