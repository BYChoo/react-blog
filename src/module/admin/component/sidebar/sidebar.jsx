import React, { Component } from 'react';
import Title from 'admin_component/title/title.jsx'
import Tag from 'admin_component/tag/tag.jsx'
import BlogItem from 'admin_component/blogItem/blogItem.jsx'
import './sidebar.styl';

export default class SideBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="admin-sidebar">
        <article className="tag-list clearfix">
          <Title title="标签" iconName="fa-tag"></Title>
          <div className="tag-list-wrap">
            {this.props.tagList.map((item,index) => {
              return (
                <Tag tagName={item} key={index}></Tag>
              )
            })}
          </div>
        </article>
        <article className="blog-list">
        <Title title="新建文章" iconName="fa-plus"></Title>
        <div className="blog-list-wrap">
          {this.props.blogList.map((item,index) => {
            return (
              <BlogItem key={index} blog={item} key={index}></BlogItem>
            )
          })}
        </div>
        </article>
      </div>
    )
  }
} 