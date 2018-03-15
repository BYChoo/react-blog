import React, { Component } from 'react';
import Title from 'admin_component/title/title.jsx'
import Tag from 'admin_component/tag/tag.jsx'
import Editor from 'admin_component/editor/editor.jsx'
import Button from 'admin_component/button/button.jsx'
import Api from 'admin_api/api.js';
import './blog.styl';

export default class Blog extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      tag: '',
      content: null
    }
  }

  /**
   * 更改标题
   */
  handleTitle(e) {
    const val = e.target.value;
    this.setState({
      title: val
    })
  }

  /**
   * 更改标签
   * 提交时通过","号隔开
   */
  handleTag(e) {
    const val = e.target.value;
    this.setState({
      tag: val
    })
  }

  /**
   * 同步原文
   */
  handleContent(content) {
    this.setState({
      content: content
    })
  }

  /**
   * 发布文章
   */
  async postBlog() {
    const params = {
      title: this.state.title,
      tag: this.state.tag.split(','),
      content: this.state.content
    }
    try {
      let result = await Api.postBlog({ data: params })
      if (result) {
        this.setState({
          title: '',
          tag: '',
          content: null
        })
        alert('发布成功');
      }
    } catch (err) {
      throw err;
    }
  }

  render() {
    return (
      <article className="admin-blog">
        <Title title="请开始你的表演" iconName="fa-pencil"></Title>
        <div className="admin-blog-info">
          <div className="admin-blog-group admin-blog-title">
            <span>文章标题：<input type="text" onChange={(e) => this.handleTitle(e)} value={this.state.title}/></span>
          </div>
          <div className="admin-blog-group admin-blog-tag">
            <span>添加标签：<input type="text" onChange={(e) => this.handleTag(e)} value={this.state.tag}/></span>
          </div>
          <div className="admin-blog-tag-list clearfix">
            <Tag tagName="这是类型"></Tag>
          </div>
        </div>
        <Editor handleContent={(content) => this.handleContent(content)}></Editor>
        <div className="btn-wrapper">
          <Button name="保存" type="primary"></Button>
          <Button name="发布" type="primary" handleClick={() => this.postBlog()}></Button>
          <Button name="删除" type="danger"></Button>
        </div>
      </article>
    )
  }
} 