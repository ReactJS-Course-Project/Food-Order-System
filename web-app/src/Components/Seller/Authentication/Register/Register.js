import React from 'react';
import classStyle from './Register.css';
import Textinput from '../../../UI/InputType/InputType';
import Button from '../../../UI/Button/Button';

const Register = () => {
  return (
    <div className={classStyle.Register}>
      <h1 className={classStyle.Heading}>Register Form</h1>
      <Textinput title="First name" inputId="firstname" type="text" />
      <Textinput title="Last name" inputId="lastname" type="text" />
      <Textinput title="Username" inputId="username" type="text" />
      <Textinput title="Password" inputId="password" type="password" />
      <Textinput title="re-enter" inputId="re-enter" type="password" />
      <Button title="Register" />
    </div>
  );
};

export default Register;
