import React, { useState } from 'react';
import { NavBar, TabBar } from 'antd-mobile';
import {Route,Routes,useNavigate} from 'react-router-dom';
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';

const Bottom = () => {

  const navigate = useNavigate();

  const setRouteActive = (value: string) => {
    console.log(value)
    navigate(value);
  }

  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/todo',
      title: '我的待办',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/message',
      title: '我的消息',
      icon: <MessageOutline />,
    },
    {
      key: '/me',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ]

  return (
    <TabBar defaultActiveKey='/home' safeArea={true} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

const App = () => {
  return (
      <div className="app">
        <div className="top">
          <NavBar>配合路由使用</NavBar>
        </div>
        <div className="content">
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/todo' element={<Todo />}></Route>
            <Route path='/message' element={<Message />}></Route>
            <Route path='/me' element={<PersonalCenter />}></Route>
          </Routes>
        </div>
        <div className="bottom">
          <Bottom />
        </div>
      </div>
  )
}

function Home() {
  return <div>首页</div>
}

function Todo() {
  return <div>我的待办</div>
}

function Message() {
  return <div>我的消息</div>
}

function PersonalCenter() {
  return <div>个人中心</div>
}

export default App;
