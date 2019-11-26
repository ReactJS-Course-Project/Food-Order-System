import React from 'react';
import classStyle from './InputType.css';

const inputType = props => {
  return (
    <div className={classStyle.formGroup}>
      <input
        type={props.type}
        id={props.inputId}
        className={classStyle.inputForm}
        required
        autoComplete="off"
        name={props.name}
        value={props.value}
        onChange={event => props.changed(event)}
      />
      <label htmlFor={props.inputId} className={classStyle.labelForm}>
        <span className={classStyle.labelName}>{props.title}</span>
      </label>
    </div>
  );
};

export default inputType;
