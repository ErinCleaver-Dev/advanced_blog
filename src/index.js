import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/Header'
import Blog from './components/body/Blog'
import Post from './components/body/Post'

import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Header/>    
    <Switch>
      <Route path="/" exact component={Blog}/>
      <Route path="/post/:id" component={Post}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
