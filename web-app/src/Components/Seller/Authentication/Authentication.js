import React, { Component } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import classStyle from './Authentication.css';

class Authentication extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      formActive: 'Login'
    };
  }

  shouldComponentUpdate(prevProps, prevState) {
    return prevState.formActive !== this.state.formActive;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
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
      <div className={classStyle.container}>
        <div className={classStyle.Header}>
          <a
            href="/#"
            className={classStyle.loginHeading}
            onClick={this.formChangedHandler}
          >
            Login
          </a>
          <a
            href="/#"
            className={classStyle.registerHeading}
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
