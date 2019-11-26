import React from 'react';
import './Register.css';
import Textinput from '../../../UI/InputType/InputType';
import Submit from '../../../UI/Button/submit/submit';

const Register = () => {
  return (
    <div className="Register">
      <h1 className="Heading">Register Form</h1>
      <Textinput title="First name" inputId="firstname" type="text" />
      <Textinput title="Last name" inputId="lastname" type="text" />
      <Textinput title="Username" inputId="username" type="text" />
      <Textinput title="Password" inputId="password" type="password" />
      <Textinput title="re-enter" inputId="re-enter" type="password" />
      <Submit title="Register" />
    </div>
  );
};

export default Register;
