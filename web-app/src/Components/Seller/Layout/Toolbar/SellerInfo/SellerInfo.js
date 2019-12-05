import React, { Component } from 'react';
import axios from '../../../../Axios/axiosSellerApi';
import DisplayModel from '../../../Navigations/DisplayModel/DisplayModel';
import UserInfoUI from '../../../../UI/UserInfoUI/UserInfoUI';
import Avatar from '../../../../../Assets/Images/kanao.jpg';
import Update from './Update/Update';
import UpdatePassword from './UpdatePassword/UpdatePassword';
import LayOut from '../../Layout';

class Seller extends Component {
  state = {
    Seller: {
      Firstname: '',
      Lastname: '',
      Username: '',
      Sex: '',
      Age: 0
    },
    content: null
  };

  componentDidMount() {
    const rows = [
      { name: 'First name', field: 'Firstname' },
      { name: 'Last name', field: 'Lastname' },
      { name: 'Username', field: 'Username' },
      { name: 'Sex', field: 'Sex' },
      { name: 'Age', field: 'Age' }
    ];
    let Seller_id = localStorage.getItem('sCurId');
    axios.get(`/${Seller_id}`).then(response => {
      this.setState({
        Seller: {
          Firstname: response.data.firstName,
          Lastname: response.data.lastName,
          Username: response.data.userName,
          Sex: response.data.sex,
          Age: response.data.age
        }
      });
      this.setState({
        content: (
          <DisplayModel>
            <UserInfoUI
              avatar={Avatar}
              rows={rows}
              data={this.state.Seller}
              update={this.onUpdateHandle}
              changed={this.onChangePassword}
            />
          </DisplayModel>
        )
      });
    });
  }

  ModalClosing = () => {
    this.setState({ show: false });
  };

  onChangePassword = () => {
    this.setState({
      content: <UpdatePassword />
    });
  };

  onUpdateHandle = () => {
    this.setState({
      content: <Update />
    });
  };

  render() {
    return <LayOut>{this.state.content}</LayOut>;
  }
}

export default Seller;
