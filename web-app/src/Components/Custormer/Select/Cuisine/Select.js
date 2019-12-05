import React, { Component } from 'react';

import classes from './Select.css';

export default class SelectOption extends Component {
  render() {
    return (
      <div class={classes.select}>
        <select name="slct" id="slct">
          <option selected disabled>
            Cuisine
          </option>
          <option value="1">All Cuisines</option>
          <option value="2">Burger</option>
          <option value="3">Coffee</option>
        </select>
      </div>
    );
  }
}
