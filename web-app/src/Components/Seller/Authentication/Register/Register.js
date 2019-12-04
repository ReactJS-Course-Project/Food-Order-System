import React from 'react';
import classStyle from './Register.css';
import Textinput from '../../../UI/InputType/InputType';
import Button from '../../../UI/Button/Button';
import axios from '../../../Axios/axiosSellerApi';
import Select from '../../../UI/Select/Select';

class Register extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    sex: '',
    age: 0,
    password: '',
    adminId: 1
  };

  componentDidMount() {
    console.log('Register.js componentDidMount');
    this.onKeypressHandler = this.onKeypressHandler.bind(this);
  }
  // retrived information of admin
  getAdminInfo = () => {};

  changedHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = () => {
    axios
      .post('/register', {
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        userName: this.state.username,
        sex: this.state.sex,
        age: parseInt(this.state.age),
        password: this.state.password,
        adminId: this.state.adminId
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  onKeypressHandler = event => {
    if (event.keyCode === 13) this.submitHandler();
  };

  render() {
    return (
      <div className={classStyle.Register}>
        <h1 className={classStyle.Heading}>Register Form</h1>
        <Textinput
          title='First name'
          inputId='firstname'
          type='text'
          name='firstname'
          value={this.state.firstname}
          changed={event => this.changedHandler(event)}
        />
        <Textinput
          title='Last name'
          inputId='lastname'
          type='text'
          name='lastname'
          value={this.state.lastname}
          changed={event => this.changedHandler(event)}
        />
        <Textinput
          title='Username'
          inputId='username'
          type='text'
          name='username'
          value={this.state.username}
          changed={event => this.changedHandler(event)}
        />

        <Select
          title='Sex'
          data={[
            { id: 'm', item: 'Male' },
            { id: 'f', item: 'Female' }
          ]}
          value={this.state.sex}
          name='sex'
          changed={event => this.changedHandler(event)}
        />
        <Textinput
          title='Age'
          inputId='age'
          type='number'
          name='age'
          value={this.state.age}
          changed={event => this.changedHandler(event)}
        />
        <Textinput
          title='Password'
          inputId='password'
          type='password'
          name='password'
          value={this.state.password}
          changed={event => this.changedHandler(event)}
        />
        <Button title='Register' clicked={this.submitHandler} />
      </div>
    );
  }
}

export default Register;
