import React, { Component } from 'react';
import './blogItem.styl'

export default class BlogItem extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="blog-item">
        <h3>asdasjldkasjdklasjdasdlkj</h3>
        <p>
          <i className="fa fa-tag" aria-hidden="true"></i>
          <span className="blog-item-tag">asdasdsad</span>
          <span className="blog-item-tag">asdasdsad</span>
        </p>
        <p>
          <i className="fa fa-calendar" aria-hidden="true"></i>
          <span className="blog-item-date">2018年03月06日 16:07</span>
        </p>
      </div>
    )
  }
}