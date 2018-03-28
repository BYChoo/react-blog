// 引入依赖
import React from 'react';
import ReactDOM from 'react-dom';
import RouterMap from './router/router.jsx';
import { createStore } from 'redux' // Redux 提供createStore这个函数，用来生成 Store，返回新生成的 Store 对象
import { Provider } from 'react-redux' // React-Redux 提供Provider组件，可以让容器组件拿到state
import rootReducer from './reducers'

// 引入依赖样式
import './static/styles/reset.css'
import './static/css/font-awesome.min.css'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);
store.subscribe(() => {
  console.log('store tree update')
  console.log(store.getState())
});

ReactDOM.render(
  <Provider store={store}>
    <RouterMap />
  </Provider>, document.getElementById('root'));
registerServiceWorker();