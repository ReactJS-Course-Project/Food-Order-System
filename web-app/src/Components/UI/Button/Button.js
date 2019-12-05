import React from 'react';
import classStyle from './Button.css';

const button = props => {
  return (
    <div className={classStyle.group}>
      <div
        className={classStyle.btnForm}
        onClick={props.clicked}
        onKeyPress={props.press}
      >
        {props.title}
      </div>
    </div>
  );
};

export default button;
