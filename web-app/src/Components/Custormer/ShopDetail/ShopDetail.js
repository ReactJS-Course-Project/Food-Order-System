import React, { Component } from 'react';
import classes from './ShopDetail.css';

export default class ShopDetail extends Component {
  render() {
    return (
      <div className={classes.shop}>
        <h1>{this.props.shopName}</h1>
        <h3 className={classes.cat}>{this.props.shopCategory}</h3>
      </div>
    );
  }
}
