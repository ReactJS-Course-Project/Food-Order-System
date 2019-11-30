import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import classStyle from './Layout.css';
import axios from 'axios';

class Layout extends React.Component {
  componentDidMount() {
    axios.interceptors.request.use(
      config => {
        let token = localStorage.getItem('Token');

        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
      },

      error => {
        return Promise.reject(error);
      }
    );

    axios.get('/GetAll').then(response => {
      console.log(response);
    });
  }

  render() {
    console.log(this.props.token);
    return (
      <div className={classStyle.Layout}>
        <Toolbar />
        <div></div>
        <main>Content</main>
      </div>
    );
  }
}

export default Layout;
