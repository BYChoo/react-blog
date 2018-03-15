import Server from './server';

class Api extends Server {
  /**
   * 用途: 注册用户
   * method: POST
   * return: Promise
   */
  async postRegister(params = {}) {
    try {
      let result = await this.axios('POST', '/api/admin/register', params)
      if (result && result.status === 200) {
        return result;
      } else {
        let err = {
          tip: '注册失败',
          respone: result,
          url: '/api/admin/register'
        }
        throw err;
      }
    } catch (error) {
      throw error
    }
  }

  /**
   * 用户登录
   * method: POST
   * return: Promise 
   */
  async postLogin(params = {}) {
    try {
      let result = await this.axios('POST', '/api/admin/login', params)
      if (result && result.status === 200) {
        return result;
      } else {
        let err = {
          tip: '登录失败',
          respone: result,
          url: '/api/admin/login'
        }
        throw err;
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * 发布文章
   * method: POST
   * return: Promise
   */
  async postBlog(params = {}) {
    try {
      let result = await this.axios('POST', '/api/admin/postBlog', params)
      if (result && result.status === 200) {
        return result;
      } else {
        let err = {
          tip: '文章发布失败',
          respone: result,
          url: '/api/admin/postBlog'
        }
        throw err;
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * 获取个人文章
   */
  async getUserBlog(params = {}) {
    try {
      let result = await this.axios('POST', '/api/admin/getUserBlog', params)
      if (result && result.status === 200) {
        return result;
      } else {
        let err = {
          tip: '获取个人文章失败',
          respone: result,
          url: '/api/admin/getUserBlog'
        }
        throw err;
      }
    } catch (error) {
      throw error;
    }
  }
}

export default new Api();