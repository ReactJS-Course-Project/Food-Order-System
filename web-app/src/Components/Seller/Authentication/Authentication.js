import React, { Component } from 'react';
import classStyle from './Authentication.css';

class Authentication extends Component {
  formChangedHandler = event => {
    var formName = event.target.textContent;
    if (formName === 'Login') window.location = '/';
    else window.location = '/Register';
  };

  render() {
    return (
      <div className={classStyle.container}>
        <div className={classStyle.Header}>
          <div
            className={classStyle.loginHeading}
            onClick={this.formChangedHandler}
          >
            Login
          </div>
          <div
            className={classStyle.registerHeading}
            onClick={this.formChangedHandler}
          >
            Register
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Authentication;
