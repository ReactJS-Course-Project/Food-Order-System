import React, { Component } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import './Authentication.css';

class Authentication extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      formActive: 'Login'
    };
  }

  formChangedHandler = event => {
    this.setState({
      formActive: event.target.textContent
    });
  };

  render() {
    var formName = this.state.formActive;
    var formLoad;
    if (formName === 'Login') formLoad = <Login />;
    else formLoad = <Register />;

    return (
      <div className='container'>
        <div className='Header'>
          <a
            href='/#'
            className='login-heading'
            onClick={this.formChangedHandler}
          >
            Login
          </a>
          <a
            href='/#'
            className='register-heading'
            onClick={this.formChangedHandler}
          >
            Register
          </a>
        </div>
        {formLoad}
      </div>
    );
  }
}

export default Authentication;
