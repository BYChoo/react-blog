import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './sidebar.styl'

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="overlay"></div>
        <div className="intrude-less">
          <header className="header">
            <Link to="/" className="profile-pic"></Link>
            <hgroup>
              <h1 className="header-author">
                <Link to="/">Choo</Link>
              </h1>
            </hgroup>
            <p className="header-subtitle">年轻无为，卖马为生</p>
            <nav className="header-menu">
              <ul>
                <li><Link to="/">首页</Link></li>
              </ul>
            </nav>
            <nav className="header-smart-menu">
              <span>所有文章</span>/<span>关于我</span>
            </nav>
            <nav className="header-nav">
              <div className="social">
                <Link to="/" className="github"><i className="fa fa-github" aria-hidden="true"></i></Link>
                <Link to="/" className="weibo"><i className="fa fa-weibo" aria-hidden="true"></i></Link>
              </div>
            </nav>
          </header>
        </div>
      </div>
    )
  }
}
