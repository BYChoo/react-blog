import React, { Component } from 'react';
import BlogInfo from 'front_component/blogInfo/blogInfo.jsx'
import './home.styl'

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      blogList: [1,2,3]
    }
  }
  render() {
    return (
      <div className="container">
        {this.state.blogList.map((item,index) => {
          return (
            <BlogInfo key={index}></BlogInfo>
          )
        })}
      </div>
    )
  }
}