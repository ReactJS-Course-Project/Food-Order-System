import React from 'react';
import classStyle from './Update.css';
import Textinput from '../../../../../UI/InputType/InputType';
import Button from '../../../../../UI/Button/Button';
import axios from '../../../../../Axios/axiosSellerApi';
import ErrorMsg from '../../../../../UI/Message/ErrorMessage/ErrorMessage';
import Select from '../../../../../UI/Select/Select';

class Update extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    sex: '',
    age: 0,
    password: '',
    error: false,
    message: ''
  };

  componentDidMount() {
    console.log('Register.js componentDidMount');
    this.onKeypressHandler = this.onKeypressHandler.bind(this);
    let Seller_id = localStorage.getItem('sCurId');
    axios
      .get(`/${Seller_id}`)
      .then(response => {
        this.setState({
          firstname: response.data.firstName,
          lastname: response.data.lastName,
          username: response.data.userName,
          sex: response.data.sex,
          age: response.data.age
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  // retrived information of admin
  getAdminInfo = () => {};

  changedHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = () => {
    let Seller_id = localStorage.getItem('sCurId');
    axios
      .put(`/changeInfo/${Seller_id}`, {
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        userName: this.state.username,
        sex: this.state.sex,
        age: parseInt(this.state.age),
        password: this.state.password
      })
      .then(response => {
        window.location = '/Layout';
      })
      .catch(error => {
        this.setState({ message: error.response.data.message });
        if (this.state.message === '')
          this.setState({ message: 'Password is required!' });
        this.setState({ error: true });
      });
  };

  onKeypressHandler = event => {
    if (event.keyCode === 13) this.submitHandler();
  };

  setCloseError = () => {
    this.setState({ error: false });
  };
  render() {
    return (
      <div>
        <div className={classStyle.Update}>
          <h1 className={classStyle.Heading}>Update Info</h1>
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
            type='password'
            name='password'
            value={this.state.password}
            changed={event => this.changedHandler(event)}
          />
          <Button title='Update' clicked={this.submitHandler} />
        </div>
        <ErrorMsg
          error={this.state.error}
          onClose={this.setCloseError}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default Update;
