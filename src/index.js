import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App';
import './index.css';

ReactDOM.render((
  <Router>
    <Route path="/credentials/:CLIENT_ID/:API_KEY/:SPREADSHEET_ID/:RANGE" component={App} />
  </Router>),
  document.getElementById('root')
);
