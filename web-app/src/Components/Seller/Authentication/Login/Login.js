import React, { Component } from 'react';
import classStyle from './Login.css';
import Textinput from '../../../UI/InputType/InputType';
import Button from '../../../UI/Button/Button';

class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  clickedHandler = () => {};

  changedHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className={classStyle.login}>
        <h1 className={classStyle.Heading}>Login Form</h1>
        <Textinput
          title="Username"
          inputId="username"
          type="text"
          name="username"
          value={this.state.username}
          changed={this.changedHandler}
        />
        <Textinput
          title="Password"
          inputId="password"
          type="password"
          name="password"
          value={this.state.password}
          changed={event => this.changedHandler(event)}
        />
        <div className={classStyle.linkform}>
          <a href="/#">Forget password</a>
        </div>
        <Button title="Login" clicked={this.clickedHandler} />
      </div>
    );
  }
}

export default Login;
