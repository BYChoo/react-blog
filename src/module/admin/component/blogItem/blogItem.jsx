import React, { Component } from 'react';
import './blogItem.styl'

export default class BlogItem extends Component {
  constructor() {
    super();
  }

  render() {
    const blog = this.props.blog;
    console.log(blog)
    console.log(new Date(blog.createTime))
    return (
      <div className="blog-item">
        <h3>{blog.title}</h3>
        <p>
          <i className="fa fa-tag" aria-hidden="true"></i>
          {blog.tag.map((item,index) => {
            return (
              <span className="blog-item-tag" key={index}>{item}</span>    
            )
          })}
        </p>
        <p>
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <span className="blog-item-date">{new Date(blog.createTime).toLocaleDateString()} {new Date(blog.createTime).toLocaleTimeString()}</span>
        </p>
      </div>
    )
  }
}