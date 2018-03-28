import React, { Component } from 'react';
import Title from 'admin_component/title/title.jsx'
import Tag from 'admin_component/tag/tag.jsx'
import BlogItem from 'admin_component/blogItem/blogItem.jsx'
import { setCurBlog } from '../../../../action/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './sidebar.styl';

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { actions } = this.props;
  
    return (
      <div className="admin-sidebar">
        <article className="tag-list clearfix">
          <Title title="标签" iconName="fa-tag"></Title>
          <div className="tag-list-wrap">
            {this.props.tagList.map((item, index) => {
              return (
                <Tag tagName={item} key={index}></Tag>
              )
            })}
          </div>
        </article>
        <article className="blog-list">
          <Title title="新建文章" iconName="fa-plus"></Title>
          <div className="blog-list-wrap">
            {this.props.blogList.map((item, index) => {
              return (
                <BlogItem key={index} blog={item} actions={actions}></BlogItem>
              )
            })}
          </div>
        </article>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)