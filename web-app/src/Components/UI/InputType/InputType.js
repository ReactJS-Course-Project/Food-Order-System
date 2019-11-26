import React from 'react';
import './InputType.css';

const inputType = prop => {
  return (
    <div className='form-group'>
      <input
        type={prop.type}
        id={prop.inputId}
        className='input-form'
        required
        autoComplete='off'
      />
      <label htmlFor={prop.inputId} className='label-form'>
        <span className='label-name'>{prop.title}</span>
      </label>
    </div>
  );
};

export default inputType;
