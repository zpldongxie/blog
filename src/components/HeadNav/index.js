/*
 * @description: 导航组件
 * @author: zpl
 * @Date: 2019-12-03 17:28:34
 * @LastEditTime: 2019-12-04 09:30:55
 * @LastEditors: zpl
 */
import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd'
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
                    <Icon type="global" className="nav-logo" />
                </div>
                <div className="nav-list-wrap">
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={[this.state.current]}
                    >
                        <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
                        <Menu.Item key="aboutme"><Link to="/home/about">关于我</Link></Menu.Item>
                        <Menu.Item key="article"><Link to="/home/article">文章分享</Link></Menu.Item>
                        <Menu.Item key="resource"><Link to="/home/resource">资源共享</Link></Menu.Item>
                    </Menu>
                </div>
            </Header>
        )
    }

}