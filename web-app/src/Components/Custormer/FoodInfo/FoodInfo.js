import React, { Component } from 'react';
import plusSign from '../../../Assets/Icons/plus-circle-solid.svg';
import classes from './FoodInfo.css';

export default class FoodInfo extends Component {
  render() {
    const style = {
      width: '12x',
      height: '12px'
    };
    return (
      <div className={classes.mid}>
        <div className={classes.card}>
          <div className={classes.title}>
            <span className={classes.name}>{this.props.foodName}</span>
            <span>{this.props.foodPrice} KHR</span>
            <img style={{ ...style }} src={plusSign} alt="Plus" />
          </div>
          <div>
            <p className={classes.cat}>({this.props.category})</p>
          </div>
          <div>
            <p className={classes.shop}>
              #A{this.props.no} {this.props.shopName}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
