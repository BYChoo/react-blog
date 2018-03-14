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
}

export default new Api();