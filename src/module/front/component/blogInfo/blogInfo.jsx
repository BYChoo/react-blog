import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tag from 'front_component/tag/tag.jsx'
import './blogInfo.styl';

export default class BlogArticle extends Component {
  render() {
    return (
      <article className="blog-info">
        <div className="article-inner">
          <header className="article-header">
            <h1><Link to="/">测试测试测试的名字</Link></h1>
            <Link to="/">
              <time>
                <i className="fa fa-calendar" aria-hidden="true"></i>
                2018-3-1
              </time>
            </Link>
          </header>
          <div className="article-entry">
            <p>asdasdasd</p>
            <br/>
            <p>asddddddddddddddddddddasld;kasldk</p>
            <br/>
            <Link to="/">more >></Link>
          </div>
          <div className="article-info">
            <div className="article-tag">
              <i className="fa fa-tag" aria-hidden="true"></i>
              <ul className="article-tag-list">
                <li><Tag></Tag></li>
                <li><Tag></Tag></li>
              </ul>
              <p className="article-more-link"><Link to="/">展开全文 >></Link></p>
            </div>
          </div>
        </div>
      </article>
    )
  }
}