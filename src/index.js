// 引入依赖
import React from 'react';
import ReactDOM from 'react-dom';
import RouterMap from './router/router.jsx';

// 引入依赖样式
import './static/styles/reset.css'
import './static/css/font-awesome.min.css'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < RouterMap / > , document.getElementById('root'));
registerServiceWorker();