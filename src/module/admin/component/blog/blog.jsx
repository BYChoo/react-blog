import React, { Component } from 'react';
import Title from 'admin_component/title/title.jsx'
import Tag from 'admin_component/tag/tag.jsx'
import Editor from 'admin_component/editor/editor.jsx'
import Button from 'admin_component/button/button.jsx'
import Api from 'api/api.js';
import { setCurBlog } from '../../../../action/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './blog.styl';

class Blog extends Component {
  constructor(props) {
    super(props);
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
    this.props.actions.setCurBlog({
      title: val
    });
  }

  /**
   * 更改标签
   * 提交时通过","号隔开
   */
  handleTag(e) {
    const val = e.target.value;
    this.props.actions.setCurBlog({
      tag: val.split(',')
    });
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
    const { curBlog } = this.props;
    const params = {
      title: curBlog.title,
      tag: curBlog.tag,
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
        this.loadData();
        alert('发布成功');
      }
    } catch (err) {
      throw err;
    }
  }

  /**
   * 保存更新文章
   */
  async updateBlog() {
    const { curBlog } = this.props;
    const params = {
      title: curBlog.title,
      tag: curBlog.tag,
      content: this.state.content,
      _id: curBlog._id
    }
    try {
      let result = await Api.updateBlog({ data: params })
      if (result) {
        this.setState({
          title: '',
          tag: '',
          content: null
        })
        this.loadData();
        alert('更新成功');
      }
    } catch (err) {
      throw err;
    }
  }

  /**
   * 删除文章
   */
  async deleteBlog() {
    const { curBlog } = this.props;
    const params = {
      _id: curBlog._id
    }
    try {
      let result = await Api.deleteBlog({ data: params })
      if (result) {
        this.setState({
          title: '',
          tag: '',
          content: null
        })
        this.loadData();
        alert('删除成功');
      }
    } catch (err) {
      throw err;
    }
  }

  async loadData() {
    console.log('loadData')
    this.props.loadData();
  }

  render() {
    const { curBlog } = this.props;

    return (
      <article className="admin-blog">
        <Title title="请开始你的表演" iconName="fa-pencil"></Title>
        <div className="admin-blog-info">
          <div className="admin-blog-group admin-blog-title">
            <span>文章标题：<input type="text" value={curBlog.title || ''} onChange={(e) => this.handleTitle(e)} ref={(input) => { this.textInput = input }} /></span>
          </div>
          <div className="admin-blog-group admin-blog-tag">
            <span>添加标签：<input type="text" value={curBlog.tag ? curBlog.tag.join() : [].join()} onChange={(e) => this.handleTag(e)} /></span>
          </div>
        </div>
        <Editor handleContent={(content) => this.handleContent(content)} contentId={curBlog._id} content={curBlog.content}></Editor>
        <div className="btn-wrapper">
          <Button name="保存" type="primary" handleClick={() => this.updateBlog()} show={curBlog._id === null ? true : false}></Button>
          <Button name="发布" type="primary" handleClick={() => this.postBlog()} show={curBlog._id === null ? false : true}></Button>
          <Button name="删除" type="danger" handleClick={() => this.deleteBlog()} show={curBlog._id === null ? true : false}></Button>
        </div>
      </article>
    )
  }
}

//mapStateToProps的作用是声明，当state树变化的时候，哪些属性是我们关心的？
function mapStateToProps(state) {
  return { curBlog: state.curBlog }
}

//mapDispatchToProps的作用是把store中的dispatch方法注入给组件
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ setCurBlog }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)