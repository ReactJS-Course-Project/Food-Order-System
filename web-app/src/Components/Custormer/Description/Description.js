import React, { Component } from 'react';

export default class Description extends Component {
  render() {
    const style = {
      color: 'red',
      fontWeight: 'bold'
    };
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div style={{ textAlign: 'center' }}>
          <h1>Online Food Ordering & Delivery</h1>
          <br />
          <p>
            Wide variety of delicious cuisines conveniently delivered to your
            home or office. Prices are same as in venue. Open every day from
            7.30am to 10pm.
          </p>
          <br />
          <p>
            <span style={{ ...style }}>NOTE! </span>We offer faster delivery
            than ever
          </p>
        </div>
      </div>
    );
  }
}
