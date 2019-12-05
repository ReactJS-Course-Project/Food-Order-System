import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import classes from './NavigationItems.css';

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <li className={classes.NavigationItem}>
      <NavLink
        to="/"
        exact
        activeStyle={{
          backgroundColor: '#8f5c2c',
          borderBottom: '4px solid #40a4c8',
          color: 'white'
        }}
      >
        Order Food Online
      </NavLink>
    </li>
    <li className={classes.NavigationItem}>
      <NavLink
        to="/foods/checkout"
        activeStyle={{
          backgroundColor: '#8f5c2c',
          borderBottom: '4px solid #40a4c8',
          color: 'white'
        }}
      >
        Checkout
      </NavLink>
    </li>
  </ul>
);

export default withRouter(navigationItems);
