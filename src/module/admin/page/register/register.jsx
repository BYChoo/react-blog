import React, { Component } from 'react';
import Api from 'admin_api/api.js';
import { setLocalStorage, getLocalStorage } from 'admin_api/storage.js';
import './register.styl';

export default class Register extends Component {
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
  postRegister = async () => {
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
      let result = await Api.postRegister({ data: params })
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
      <article className="admin-reg">
        <h1 className="admin-reg-header">博客注册</h1>
        <div className="admin-reg-item"><input type="text" placeholder="输入邮箱" onChange={(e) => this.handleChangeUserEmail(e)} /></div>
        <div className="admin-reg-item"><input type="text" placeholder="输入密码" onChange={(e) => this.handleChangeUserPassword(e)} /></div>
        <div className="admin-reg-btn" onClick={(e) => this.postRegister(e)}>注册</div>
      </article>
    )
  }
}