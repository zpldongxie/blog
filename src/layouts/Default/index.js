import React, { Component } from 'react'
import { Layout } from 'antd'
import HeadNav from '../../components/HeadNav'

import './index.less'

import { Route } from 'react-router-dom'
import Home from '../../views/Home'
import About from '../../views/About'
import Article from '../../views/Article'
import Resource from '../../views/Resource'

const { Content, Footer } = Layout;

export default class DefaultLayout extends Component {
    render() {
        return (
            <Layout id="defaultLayout">
                <HeadNav />
                <Content>
                    <div className="mainCon">
                        <Route path={this.props.match.url+'/'} component={Home} exact />
                        <Route path={this.props.match.url+'/about'} component={About} exact />
                        <Route path={this.props.match.url+'/article'} component={Article} exact />
                        <Route path={this.props.match.url+'/resource'} component={Resource} exact />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>zpl ©2019 Created by Ant Design</Footer>
            </Layout>
        )
    }
}
