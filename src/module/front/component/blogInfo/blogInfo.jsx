import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Tag from 'front_component/tag/tag.jsx'
import './blogInfo.styl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCurBlogDetail } from '../../../../action/index';

class BlogArticle extends Component {
  constructor() {
    super();
  }

  /**
   * 插件文章详情
   */
  goDetail(blog) {
    const { actions } = this.props;
    actions.setCurBlogDetail(blog)
    this.props.history.push('/detail');
  }

  /**
   * dangerouslySetInnerHTML可以渲染html字符串
   */
  render() {
    const { blog } = this.props;
    return (
      <div>
        <article className="blog-info">
          <div className="article-inner">
            <header className="article-header">
              <h1><span onClick={this.goDetail.bind(this, blog)}>{blog.title}</span></h1>
              <span onClick={this.goDetail.bind(this, blog)}>
                <time>
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                  {new Date(blog.createTime).toLocaleDateString()} {new Date(blog.createTime).toLocaleTimeString()}
                </time>
              </span>
            </header>
            <div className="article-entry">
              <div style={{ 'maxHeight': '107px', 'overflow': 'hidden' }} dangerouslySetInnerHTML={{ __html: blog.content }}></div>
              <Link to="/detail">more >></Link>
            </div>
            <div className="article-info">
              <div className="article-tag">
                <i className="fa fa-tag" aria-hidden="true"></i>
                <ul className="article-tag-list">
                  {blog.tag.map((tag, index) => {
                    return (
                      <li key={index}><Tag name={tag}></Tag></li>
                    )
                  })}
                </ul>
                <p className="article-more-link"><Link to="/detail">展开全文 >></Link></p>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
  }
}


//mapStateToProps的作用是声明，当state树变化的时候，哪些属性是我们关心的？
function mapStateToProps(state) {
  return { curBlogDetail: state.curBlogDetail }
}

//mapDispatchToProps的作用是把store中的dispatch方法注入给组件
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ setCurBlogDetail }, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogArticle));