import React from 'react';
import classStyle from './InputType.css';
import TextField from '@material-ui/core/TextField';

const inputType = props => {
  return (
    <div className={classStyle.formGroup}>
      <TextField
        error={props.error}
        id={'standard-basic' + props.name}
        label={props.title}
        type={props.type}
        className={classStyle.inputForm}
        required
        readOnly={props.readOnly}
        disabled={props.disabled}
        name={props.name}
        value={props.value}
        onChange={event => props.changed(event)}
      />
    </div>
  );
};

export default inputType;
