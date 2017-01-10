import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router'
import Main from './components/Main';
import firebase from 'firebase';
require('./styles/index.scss')

import NewContactForm from './components/NewContactForm';
import ContactList from './components/ContactList';
import ContactProfile from './components/ContactProfile';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={ContactList}/>
      <Route path="/NewContact" component={NewContactForm} />
      <Route path="/Contacts" component={ContactList} />
      {/* <Route path="/ContactProfile" component={ContactProfile} /> */}
    </Route>
  </Router>
), document.getElementById('application'))
