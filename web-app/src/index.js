import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Authentication from './Components/Seller/Authentication/Authentication';
import Layout from './Components/Seller/Layout/Layout';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/Sellers';

const routing = (
  <Router>
    <div>
      <Route exact path='/' component={Authentication} />
      <Route path='/Layout' component={Layout} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
