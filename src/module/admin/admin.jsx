import React, { Component } from 'react';
import Home from 'admin_page/home/home.jsx';
import Login from 'admin_page/login/login.jsx';
import Register from 'admin_page/register/register.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class admin extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/admin" exact component={Home}></Route>
            <Route path="/admin/login" component={Login}></Route>
            <Route path="/admin/register" component={Register}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default admin