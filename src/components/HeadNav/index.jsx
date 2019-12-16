/*
 * @description: 导航组件
 * @author: zpl
 * @Date: 2019-12-03 17:28:34
 * @LastEditTime: 2019-12-12 11:00:48
 * @LastEditors: zpl
 */
import React, { Component } from 'react';
import {
  Layout, Menu, Dropdown, Avatar, Icon,
} from 'antd';
import { Link } from 'react-router-dom';

import { BANNERIMGS } from '../../common/constant';

import './index.less';

const { Header } = Layout;

export default class HeadNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'home',
    };
  }

  render() {
    const { current } = this.state;
    const menu = (
      <Menu
        mode="horizontal"
        defaultSelectedKeys={[current]}
        onSelect={({
          key,
        }) => {
          this.setState({ current: key });
        }}
      >
        <Menu.Item key="home"><Link to="/">教程分享</Link></Menu.Item>
        <Menu.Item key="learn"><Link to="/learn">学习笔记</Link></Menu.Item>
        <Menu.Item key="aboutMe"><Link to="/aboutMe">个人简历</Link></Menu.Item>
        <Menu.Item key="tools"><Link to="/tools">实用工具</Link></Menu.Item>
      </Menu>
    );
    return (
      <div className="commonHeader">
        <Header id="headNav" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <div className="nav-logo-wrap">
            <Avatar size={40} src={`${process.env.PUBLIC_URL}avatar.jpg`} />
          </div>
          <div className="nav-list-wrap">
            {menu}
          </div>
          <Dropdown overlay={menu} trigger={['click']}><Icon type="menu" /></Dropdown>
        </Header>
        <img alt="" src={process.env.PUBLIC_URL + BANNERIMGS[current]} />
      </div>
    );
  }
}
