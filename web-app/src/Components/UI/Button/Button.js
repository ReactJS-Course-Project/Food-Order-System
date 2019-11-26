import React from 'react';
import './Button.css';

const button = props => {
  return (
    <div className="group">
      <div className="btn-form">{props.title}</div>
    </div>
  );
};

export default button;
