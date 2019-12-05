import React from 'react';

import shopLogo from '../../Assets/Icons/logo-order.png';
import classes from './Logo.css';

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={shopLogo} alt="MyShop" />
  </div>
);

export default logo;
