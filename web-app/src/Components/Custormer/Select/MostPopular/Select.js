import React, { Component } from 'react';

import classes from './Select.css';

export default class SelectOption extends Component {
  render() {
    return (
      <div class={classes.select}>
        <select name="slct" id="slct">
          <option selected disabled>
            Most Popular
          </option>
          <option value="1">ABC Backery</option>
          <option value="2">Pizza World</option>
          <option value="3">The Street</option>
        </select>
      </div>
    );
  }
}
