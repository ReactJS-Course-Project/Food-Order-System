import React, { Component } from 'react';
import classStyle from './Login.css';
import Textinput from '../../../UI/InputType/InputType';
import Button from '../../../UI/Button/Button';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: '',
    token: '',
    error: null,
    sellerId: -1
  };

  componentDidMount() {
    console.log('componentDidMount');

    this.onPressHandler = this.onPressHandler.bind(this);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  clickedHandler = () => {
    axios
      .post('/authenticate/', {
        Username: this.state.username,
        Password: this.state.password
      })
      .then(response => {
        console.log(response);
        this.setState({
          token: response.data.tokenString,
          sellerId: response.data.id
        });
        localStorage.setItem('Token', this.state.token);
        localStorage.setItem('sCurId', this.state.sellerId);
        window.location = '/Layout';
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: error });
      });
  };

  onPressHandler = event => {
    if (event.keyCode === 13) this.clickedHandler();
  };

  changedHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div
        className={classStyle.login}
        onKeyPress={event => this.onPressHandler(event)}
      >
        <h1 className={classStyle.Heading}>Login Form</h1>
        <Textinput
          title='Username'
          inputId='username'
          type='text'
          name='username'
          value={this.state.username}
          changed={this.changedHandler}
        />
        <Textinput
          title='Password'
          inputId='password'
          type='password'
          name='password'
          value={this.state.password}
          changed={event => this.changedHandler(event)}
        />
        <div className={classStyle.linkform}>
          <a href='/#'>Forget password</a>
        </div>
        <Button title='Login' clicked={this.clickedHandler} />
      </div>
    );
  }
}

export default Login;