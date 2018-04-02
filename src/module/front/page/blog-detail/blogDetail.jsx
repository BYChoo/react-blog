import React, { Component } from 'react';
import Sidebar from 'front_component/sidebar/sidebar.jsx';
import './blogDetail.styl';
import { connect } from 'react-redux';

class BlogDetail extends Component {
  render() {
    const { curBlogDetail } = this.props;
    return (
      <div>
        <Sidebar></Sidebar>
        <div className="detail">
          <article className="blog-info">
            <div className="article-inner">
              <header className="article-header">
                <h1>{curBlogDetail.title}</h1>
                <span>
                  <time>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    {new Date(curBlogDetail.createTime).toLocaleDateString()} {new Date(curBlogDetail.createTime).toLocaleTimeString()}
                  </time>
                </span>
              </header>
              <div className="article-entry" dangerouslySetInnerHTML={{ __html: curBlogDetail.content }}>
              </div>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

//mapStateToProps的作用是声明，当state树变化的时候，哪些属性是我们关心的？
function mapStateToProps(state) {
  return { curBlogDetail: state.curBlogDetail }
}

export default connect(mapStateToProps)(BlogDetail);