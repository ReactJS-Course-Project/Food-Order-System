import React from 'react';
import './submit.css';

const submit = prop => {
  return (
    <div className='group'>
      <a href='/#' className='btn-form'>
        {prop.title}
      </a>
    </div>
  );
};

export default submit;
