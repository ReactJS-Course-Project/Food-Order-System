import React from 'react';
import classStyle from './Toolbar.css';

const toolbar = props => (
  <div className={classStyle.Toolbar}>
    <div>Seller Name</div>
    <div>Food Manager</div>
    <div>Category Manager</div>
    <div>view Order</div>
    <div>Log Out</div>
  </div>
);

export default toolbar;
