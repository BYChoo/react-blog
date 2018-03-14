import React, { Component } from 'react';
import Api from 'admin_api/api.js';
import { setLocalStorage, getLocalStorage } from 'admin_api/storage.js';
import './login.styl';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: null,
      userPassword: null
    }
  }

  /**
   * 改变用户名
   */
  handleChangeUserEmail(e) {
    const val = e.target.value;
    this.setState({
      userEmail: val
    })
  }

  /**
   * 改变密码
   */
  handleChangeUserPassword(e) {
    const val = e.target.value;
    this.setState({
      userPassword: val
    })
  }

  /**
   * 注册用户
   */
  postLogin = async () => {
    const emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    if (!(emailReg.test(this.state.userEmail))) {
      return alert('邮箱格式错误')
    } else if (this.state.userPassword.length < 4) {
      return alert('密码长度少于4')
    }
    const params = {
      userEmail: this.state.userEmail,
      userPassword: this.state.userPassword
    }
    try {
      await setLocalStorage('token', this.state.userEmail)
      let result = await Api.postLogin({ data: params })
      if (result.status === 200) {
        this.props.history.push('/admin')
      }
    } catch (err) {
      throw err;
    }
  }

  /**
   * 检查用户是否已经登录
   */
  checkUserState() {
    if (getLocalStorage('token')) {
      this.props.history.push('/admin')
    }
  }

  /**
   * 生命周期: 组件创建前调用
   */
  componentWillMount() {
    this.checkUserState();
  }

  render() {
    return (
      <article className="admin-login">
        <h1 className="admin-login-header">博客登录</h1>
        <div className="admin-login-item"><input type="text" placeholder="输入用户名" onChange={(e) => this.handleChangeUserEmail(e)} /></div>
        <div className="admin-login-item"><input type="text" placeholder="输入用户名" onChange={(e) => this.handleChangeUserPassword(e)} /></div>
        <div className="admin-login-btn" onClick={(e) => this.postLogin(e)}>登录</div>
      </article>
    )
  }
}