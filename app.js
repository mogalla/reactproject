import React from 'react';  
import ReactDOM from 'react-dom'; 

import { Router,  Route, hashHistory } from 'react-router';
//import { Link, Route, RouteHandler } from 'react-router';
import App from './js/app';
import Login from './js/components/Login';
import About from './js/components/About';
import Repo from './js/components/Repo';
import Repos from './js/components/Repos';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/repos" component={Repos}/>
      {/* add the new route */}
      <Route path="/repos/:userName/:repoName" component={Repo}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))

