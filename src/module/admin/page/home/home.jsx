import React, { Component } from 'react';
import Blog from 'admin_component/blog/blog.jsx';
import Sidebar from 'admin_component/sidebar/sidebar.jsx';
import './home.styl';

export default class Home extends Component {
  render() {
    return (
      <article className="admin-Home">
        <Sidebar></Sidebar>
        <Blog></Blog>
      </article>
    )
  }
}