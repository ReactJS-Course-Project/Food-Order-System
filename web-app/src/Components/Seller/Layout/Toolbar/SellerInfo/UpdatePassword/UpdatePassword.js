import React from 'react';
import classStyle from './Update.css';
import Textinput from '../../../../../UI/InputType/InputType';
import Button from '../../../../../UI/Button/Button';
import axios from '../../../../../Axios/axiosSellerApi';

class Register extends React.Component {
  state = {
    oldPassword: '',
    newPassword: ''
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
    let Seller_id = localStorage.getItem('sCurId');
    axios
      .put(`changePassword/${Seller_id}`, {
        oldPassword: this.state.oldPassword,
        newPassword: this.state.newPassword
      })
      .then(response => {
        console.log(response);
        window.location = '/Layout';
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
      <div className={classStyle.Update}>
        <h1 className={classStyle.Heading}>Update Password</h1>
        <Textinput
          title='Old Password'
          type='password'
          name='oldPassword'
          value={this.state.oldPassword}
          changed={event => this.changedHandler(event)}
        />
        <Textinput
          title='New Password'
          type='password'
          name='newPassword'
          value={this.state.newPassword}
          changed={event => this.changedHandler(event)}
        />
        <Button title='Update' clicked={this.submitHandler} />
      </div>
    );
  }
}

export default Register;
