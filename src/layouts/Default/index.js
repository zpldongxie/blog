/*
 * @description: 
 * @author: zpl
 * @Date: 2019-12-03 17:07:52
 * @LastEditTime: 2019-12-04 16:39:00
 * @LastEditors: zpl
 */
import React, { Component } from 'react'
import { Layout } from 'antd'
import HeadNav from '../../components/HeadNav'

import './index.less'

import { Route } from 'react-router-dom'
import Resource from '../../views/Resource'
import Learn from '../../views/Learn'
import AboutMe from '../../views/AboutMe'
import Tools from '../../views/Tools'

const { Content, Footer } = Layout;

export default class DefaultLayout extends Component {
    render() {
        return (
            <Layout id="defaultLayout">
                <HeadNav />
                <Content>
                    <div className="mainCon">
                        <Route path={this.props.match.url} component={Resource} exact />
                        <Route path={this.props.match.url + 'learn'} component={Learn} />
                        <Route path={this.props.match.url + 'aboutMe'} component={AboutMe} />
                        <Route path={this.props.match.url + 'tools'} component={Tools} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>zpl ©2019 Created by Ant Design</Footer>
            </Layout>
        )
    }
}
