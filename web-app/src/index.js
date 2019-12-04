import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Authentication from './Components/Seller/Authentication/Authentication';
import Layout from './Components/Seller/Layout/Layout';
import Foods from './Components/Seller/Layout/Toolbar/Food/Food';
import Seller from './Components/Seller/Layout/Toolbar/SellerInfo/SellerInfo';

const routing = (
  <Router>
    <div>
      <Route exact path='/' component={Authentication} />
      <Route exact path='/Layout' component={Layout} />
      <Route path='/Layout/Foods' component={Foods} />
      <Route path='/Layout/Seller' component={Seller} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
