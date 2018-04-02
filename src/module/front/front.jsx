import React, { Component } from 'react';
import Home from 'front_page/home/home.jsx'
import BlogDetail from 'front_page/blog-detail/blogDetail.jsx'
import Sidebar from 'front_component/sidebar/sidebar.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class front extends Component {
  render() {
    return (
      <div className="front">
        <Sidebar></Sidebar>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </div>
    );
  }
}

export default front