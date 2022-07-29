import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter,Routes, Route} from 'react-router-dom';

// 全局引入antd-mobile样式
import 'antd-mobile/es/global';
import 'lib-flexible';

import App from './App.tsx';
import Login from './pages/login.tsx';

import './style/common.less';
import cookieUtil from './common/localCache';

const root = ReactDOM.createRoot(document.getElementById('root'));

const logging = cookieUtil.get('logging');
console.log(logging)

root.render(
  <HashRouter>
    {
        logging ? (
            <App />
        ) : (
            <Routes>
                <Route path="/*" element={<Login />} />
            </Routes>
        )
    }
  </HashRouter>
);