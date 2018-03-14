import React, { Component } from 'react';
import Title from 'admin_component/title/title.jsx'
import Tag from 'admin_component/tag/tag.jsx'
import BlogItem from 'admin_component/blogItem/blogItem.jsx'
import './sidebar.styl';

export default class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      tagList:[2,2,2,2,2,2,2,2,2,2]
    }
  }

  render() {
    return (
      <div className="admin-sidebar">
        <article className="tag-list clearfix">
          <Title title="标签" iconName="fa-tag"></Title>
          <div className="tag-list-wrap">
            {this.state.tagList.map((item,index) => {
              return (
                <Tag tagName="javascript" key={index}></Tag>
              )
            })}
          </div>
        </article>
        <article className="blog-list">
        <Title title="新建文章" iconName="fa-plus"></Title>
        <div className="blog-list-wrap">
          {this.state.tagList.map((item,index) => {
            return (
              <BlogItem key={index}></BlogItem>
            )
          })}
        </div>
        </article>
      </div>
    )
  }
} 