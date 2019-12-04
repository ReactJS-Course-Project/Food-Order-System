import React from 'react';
import classStyle from './DisplayModel.css';

class DisplayModel extends React.Component {
  render() {
    return <div className={classStyle.Model}>{this.props.children}</div>;
  }
}

export default DisplayModel;
