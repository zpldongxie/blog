/*
 * @description: 导航组件
 * @author: zpl
 * @Date: 2019-12-03 17:28:34
 * @LastEditTime: 2019-12-04 16:52:44
 * @LastEditors: zpl
 */
import React, { Component } from 'react';
import { Layout, Menu, Avatar } from 'antd'
import { Link } from 'react-router-dom'

import './index.less'

const { Header } = Layout;

export default class HeadNav extends Component {
    state = {
        current: 'home',
    }
    render() {
        return (
            <Header id="headNav" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="nav-logo-wrap">
                    <Avatar size={40} src="http://img0.imgtn.bdimg.com/it/u=2881388121,25353099&fm=26&gp=0.jpg" />
                </div>
                <div className="nav-list-wrap">
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={[this.state.current]}
                    >
                        <Menu.Item key="home"><Link to="/">教程分享</Link></Menu.Item>
                        <Menu.Item key="aboutme"><Link to="/learn">学习笔记</Link></Menu.Item>
                        <Menu.Item key="article"><Link to="/aboutMe">个人简历</Link></Menu.Item>
                        <Menu.Item key="resource"><Link to="/tools">实用工具</Link></Menu.Item>
                    </Menu>
                </div>
            </Header>
        )
    }

}