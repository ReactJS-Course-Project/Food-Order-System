import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Authentication from './Components/Seller/Authentication/Authentication';
import Layout from './Components/Seller/Layout/Layout';
import FoodOrder from './Containers/FoodOrder/FoodOrder';
import Checkout from './Containers/Checkout/Checkout';
import FoodList from './Containers/FoodList/FoodList';

axios.defaults.baseURL = 'http://localhost:4000/Sellers';

axios.interceptors.request.use(
  request => {
    // console.log(request);
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    // console.log(response);
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={FoodOrder} />
      <Route exact path="/:id" component={FoodList} />
      <Route path="/foods/checkout" component={Checkout} />
      <Route path="/auth" component={Authentication} />
      <Route path="/Layout" component={Layout} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
