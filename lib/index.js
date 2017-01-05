import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Main from './components/Main';
import NewContactForm from './components/NewContactForm';
import firebase from 'firebase';
require('./styles/index.scss')

// ReactDOM.render(<Main />, document.getElementById('application'))

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      {/* <IndexRoute component={Main}/> */}
      <Route path="/NewContact" component={NewContactForm} />
    </Route>
  </Router>
), document.getElementById('application'))
