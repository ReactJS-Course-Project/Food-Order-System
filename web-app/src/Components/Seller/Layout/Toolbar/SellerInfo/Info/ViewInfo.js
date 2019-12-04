import React from 'react';
import Input from '../../../../../UI/InputType/InputType';
const viewInfo = props => (
  <React.Fragment>
    <label>
      Firstname:
      <Input type='text' value={props.Seller.Firstname} disabled />
    </label>
    <label>
      Lastname:
      <Input type='text' value={props.Seller.Lastname} disabled />
    </label>
    <label>
      Username:
      <Input type='text' value={props.Seller.Username} disabled />
    </label>
    <label>
      Sex:
      <Input type='text' value={props.Seller.Sex} disabled />
    </label>
    <label>
      Age:
      <Input type='number' value={props.Seller.Age} disabled />
    </label>
  </React.Fragment>
);

export default viewInfo;
