import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router'
import Main from './components/Main';
import firebase from 'firebase';
require('./styles/index.scss')

import NewContactForm from './components/NewContactForm';
import ContactList from './components/ContactList';
// import FollowUpList from './components/F'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      {/* <IndexRoute component={Header}/> */}
      <Route path="/NewContact" component={NewContactForm} />
      <Route path="/ContactList" component={ContactList} />
    </Route>
  </Router>
), document.getElementById('application'))
