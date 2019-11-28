import React from 'react';
import Toolbar from './Toolbar/Toolbar';
import classStyle from './Layout.css';
import axios from 'axios';

class Layout extends React.Component {
  componentDidMount() {
    axios.get('/GetAll').then(response => {
      console.log(response);
    });
  }

  render() {
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
