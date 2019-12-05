import React, { Component } from 'react';
import classStyle from './Login.css';
import Textinput from '../../../UI/InputType/InputType';
import Button from '../../../UI/Button/Button';
import axios from '../../../Axios/axiosSellerApi';
import ErrorMsg from '../../../UI/Message/ErrorMessage/ErrorMessage';
import Authenticate from '../Authentication';

class Login extends Component {
  state = {
    username: '',
    password: '',
    token: '',
    UsernameE: false,
    PasswordE: false,
    sellerId: -1,
    error: false,
    errorMessage: ''
  };

  componentDidMount() {
    console.log('componentDidMount');
    document.addEventListener('keypress', this.onPressHandler);
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
        console.log(error.response.data.message);
        if (this.state.username === '') {
          this.setState({ UsernameE: true });
        } else this.setState({ UsernameE: false });
        if (this.state.password === '') this.setState({ PasswordE: true });
        else this.setState({ PasswordE: false });
        if (this.state.password !== '' && this.state.username !== '') {
          this.setState({
            error: true,
            errorMessage: error.response.data.message
          });
        }
      });
  };

  onPressHandler = event => {
    if (event.key === 'Enter') this.clickedHandler();
  };

  changedHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onsetCloseError = () => {
    this.setState({ error: false });
  };
  render() {
    return (
      <React.Fragment>
        <Authenticate>
          <div className={classStyle.login}>
            <h1 className={classStyle.Heading}>Login Form</h1>
            <Textinput
              error={this.state.UsernameE}
              title='Username'
              type='text'
              name='username'
              value={this.state.username}
              changed={this.changedHandler}
            />
            <Textinput
              error={this.state.PasswordE}
              title='Password'
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
        </Authenticate>
        <ErrorMsg
          error={this.state.error}
          onClose={this.onsetCloseError}
          message={this.state.errorMessage}
        />
      </React.Fragment>
    );
  }
}

export default Login;
