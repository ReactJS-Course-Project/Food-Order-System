import React from 'react';
import classStyle from './Button.css';
import Button from '@material-ui/core/Button';

const button = props => {
  return (
    <div className={classStyle.group}>
      <Button
        variant='contained'
        color='secondary'
        className={classStyle.btnForm}
        onClick={props.clicked}
      >
        {props.title}
      </Button>
    </div>
  );
};

export default button;
