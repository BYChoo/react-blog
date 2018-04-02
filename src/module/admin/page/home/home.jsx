import React, { Component } from 'react';
import Blog from 'admin_component/blog/blog.jsx';
import Sidebar from 'admin_component/sidebar/sidebar.jsx';
import Api from 'api/api.js';
import './home.styl';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      blogList: [],
      tagList: [],
      curBlog: {}
    }
    this.getUserBlog = this.getUserBlog.bind(this);
    this.filterTag = this.filterTag.bind(this);
  }

  /**
   * 获取用户所有文章
   */
  async getUserBlog() {
    try {
      let result = await Api.getUserBlog()
      if (result) {
        this.setState({
          blogList: result.data.data,
          tagList: this.filterTag(result.data.data)
        })
      }
    } catch (err) {
      throw err;
    }
  }

  /**
   * 筛选标签
   * return: Array
   */
  filterTag(blogArr) {
    let result = [];
    blogArr.forEach(blog => { 
      result = result.concat(blog.tag)
     })
    return this.unique(result);
  }

  /**
   * 数组去重
   * return: Array
   */
  unique(arr) {
    return Array.from(new Set(arr));
  }

  componentDidMount() {
    this.getUserBlog();
  }

  render() {
    return (
      <article className="admin-Home">
        <Sidebar blogList={this.state.blogList} tagList={this.state.tagList}></Sidebar>
        <Blog loadData={this.getUserBlog}></Blog>
      </article>
    )
  }
}