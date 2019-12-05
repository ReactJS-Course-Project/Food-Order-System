import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Layout from './Components/Seller/Layout/Layout';
<<<<<<< HEAD
import Foods from './Components/Seller/Layout/Toolbar/Food/Food';
import Seller from './Components/Seller/Layout/Toolbar/SellerInfo/SellerInfo';
import Login from './Components/Seller/Authentication/Login/Login';
import Register from './Components/Seller/Authentication/Register/Register';
=======
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
>>>>>>> origin/master

const routing = (
  <Router>
    <div>
<<<<<<< HEAD
      <Route exact path='/' component={Login} />
      <Route path='/Register' component={Register} />
      <Route exact path='/Layout' component={Layout} />
      <Route path='/Layout/Foods' component={Foods} />
      <Route path='/Layout/Seller' component={Seller} />
=======
      <Route exact path="/" component={FoodOrder} />
      <Route exact path="/:id" component={FoodList} />
      <Route path="/foods/checkout" component={Checkout} />
      <Route path="/auth" component={Authentication} />
      <Route path="/Layout" component={Layout} />
>>>>>>> origin/master
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
