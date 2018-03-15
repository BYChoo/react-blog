import React, { Component } from 'react';
import Blog from 'admin_component/blog/blog.jsx';
import Sidebar from 'admin_component/sidebar/sidebar.jsx';
import Api from 'admin_api/api.js';
import './home.styl';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      blogList: []
    }
  }

  /**
   * 获取用户所有文章
   */
  async getUserBlog() {
    try {
      let result = await Api.getUserBlog()
      if (result) {
        this.setState({
          blogList: result.data.data
        })
        console.log('获取所有博客')
        console.log(this.state.blogList)
      }
    } catch (err) {
      throw err;
    }
  }

  componentDidMount() {
    this.getUserBlog();
  }

  render() {
    return (
      <article className="admin-Home">
        <Sidebar blogList={this.state.blogList}></Sidebar>
        <Blog></Blog>
      </article>
    )
  }
}