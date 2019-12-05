import React, { Component } from 'react';
import Toolbar from '../../Components/Custormer/Toolbar/Toolbar';
import axios from 'axios';
import FoodInfo from '../../Components/Custormer/FoodInfo/FoodInfo';
import ShopDetail from '../../Components/Custormer/ShopDetail/ShopDetail';
import { Link } from 'react-router-dom';

const tokenStr =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxIiwidW5pcXVlX25hbWUiOiJjaGV0aGEiLCJuYmYiOjE1NzU0NTkxOTIsImV4cCI6MTU3NjA2Mzk5MiwiaWF0IjoxNTc1NDU5MTkyfQ.hYQtiDufdLxsnB67FVFgGmfbun5DeOlg3jwijXE7DqY';

export default class FoodList extends Component {
  state = {
    foods: null,
    selectedFood: null
  };
  componentDidMount() {
    if (this.props.match.params.id) {
      if (!this.state.foods) {
        axios
          .get('http://localhost:4000/foods/' + this.props.match.params.id, {
            headers: { Authorization: `Bearer ${tokenStr}` }
          })
          .then(response => {
            this.setState({ foods: response.data });
          });
      }
    }
  }

  postSelectedHandler = id => {
    this.setState({ selectedFood: id });
    console.log(this.state.selectedFood);
  };

  render() {
    console.log(this.state.foods);
    let foods = null;
    let index = 0;
    let shopName = null;
    let shopCategory = null;
    if (this.state.foods) {
      foods = this.state.foods.map(post => {
        shopName = post.seller.lastName;
        shopCategory = post.category.name;
        return (
          <Link
            to={'/foods/checkout'}
            key={post.name}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <FoodInfo
              foodName={post.name}
              foodPrice={post.price.toLocaleString(navigator.language, {
                minimumFractionDigits: 0
              })}
              category={post.category.name}
              shopName={post.seller.lastName}
              no={++index}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          </Link>
        );
      });
    }
    return (
      <div>
        <Toolbar />
        <br />
        <br />
        <br />
        <br />
        <ShopDetail shopName={shopName} shopCategory={shopCategory} />
        <section>{foods}</section>
      </div>
    );
  }
}
