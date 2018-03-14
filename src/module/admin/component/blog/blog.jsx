import React, { Component } from 'react';
import Title from 'admin_component/title/title.jsx'
import Tag from 'admin_component/tag/tag.jsx'
import Editor from 'admin_component/editor/editor.jsx'
import Button from 'admin_component/button/button.jsx'
import './blog.styl';

export default class Blog extends Component {
  render() {
    return (
      <article className="admin-blog">
        <Title title="请开始你的表演" iconName="fa-pencil"></Title>
        <div className="admin-blog-info">
          <div className="admin-blog-group admin-blog-title">
            <span>文章标题：<input type="text"/></span>
          </div>
          <div className="admin-blog-group admin-blog-tag">
            <span>添加标签：<input type="text"/></span>
          </div>
          <div className="admin-blog-tag-list clearfix">
            <Tag tagName="这是类型"></Tag>
          </div>
        </div>
        <Editor></Editor>
        <div className="btn-wrapper">
          <Button name="保存" type="primary"></Button> 
          <Button name="发布" type="primary"></Button> 
          <Button name="删除" type="danger"></Button> 
        </div>
      </article>
    )
  }
} 