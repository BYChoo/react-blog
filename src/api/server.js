import Axios from 'axios';
import { getLocalStorage } from 'api/storage.js';

export default class Server {
  axios(method, url, params) {
    return new Promise((resolve, reject) => {
      if (typeof params !== 'object') params = {};
      let _option = params;
      _option = {
        method,
        url,
        timeOut: 30000,
        params: null,
        data: null,
        headers: null,
        withCredentials: true, //是否携带cookies发起请求
        validateStatus: (status) => {
          return status >= 200 && status < 300;
        },
        ...params,
      };

      // 添加请求拦截器
      Axios.interceptors.request.use(requestConfig => {
        if (getLocalStorage('token')) {
          requestConfig.headers.Authorization = `${getLocalStorage('token')}`;
        }
        return requestConfig
      }, error => {
        return Promise.reject(error)
      });

      // 添加响应拦截器
      Axios.interceptors.response.use(function (response) {
        return response;
      }, error => {
        if (error.response) {
          switch(error.response.status) {
            /**
             * 401表示当前token已经失效
             */
            case 401:
              window.location.replace("/admin/login");
            /**
             * 报错默认跳转到登录页面
             */
            default:
              throw new Error('服务器错误')
          }
        }
        return Promise.reject(error);
      });

      Axios.request(_option)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          if (err.response) {
            reject(err.response.data)
          } else {
            reject(err)
          }
        })
    })
  }
}