import * as React from 'react';
import { NavBar, TabBar } from 'antd-mobile';
import {Route,Routes,useNavigate} from 'react-router-dom';
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';

import Home from './pages/home';
import Poetry from './pages/poetry';
import Person from './pages/person';
import PersonalCenter from './pages/personal_center';


const tabs = [
  {
    key: '/home',
    title: '首页',
    icon: <AppOutline />,
  },
  {
    key: '/poetry',
    title: '我的待办',
    icon: <UnorderedListOutline />,
  },
  {
    key: '/person',
    title: '我的消息',
    icon: <MessageOutline />,
  },
  {
    key: '/me',
    title: '个人中心',
    icon: <UserOutline />,
  },
]

const App = () => {

  const navigate = useNavigate();

  const renderBottom = () => {
    return tabs.map(item => (
      <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
    ))
  }

  const setRouteActive = (value: string) => {
    console.log(value)
    navigate(value);
  }

  return (
      <div className="app">
        <div className="top">
          <NavBar>配合路由使用</NavBar>
        </div>
        <div className="content">
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/poetry' element={<Poetry />}></Route>
            <Route path='/person' element={<Person />}></Route>
            <Route path='/me' element={<PersonalCenter />}></Route>
          </Routes>
        </div>
        <div className="bottom">
          <TabBar safeArea={true} onChange={value => setRouteActive(value)}>
            {renderBottom()}
          </TabBar>
        </div>
      </div>
  )
}

export default App;