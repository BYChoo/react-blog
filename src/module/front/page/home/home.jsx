import React, { Component } from 'react';
import BlogInfo from 'front_component/blogInfo/blogInfo.jsx'
import Api from 'api/api.js'
import './home.styl'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      blogList: []
    }
    this.toDetail = this.toDetail.bind(this)
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
      }
    } catch (err) {
      throw err;
    }
  }

  toDetail() {
    this.props.history.push('/detail')
  }

  componentDidMount() {
    this.getUserBlog();
  }

  render() {
    return (
      <div className="container">
        {this.state.blogList.map((item,index) => {
          return (
            <BlogInfo key={index} blog={item} toDetail={this.toDetail}></BlogInfo>
          )
        })}
      </div>
    )
  }
}