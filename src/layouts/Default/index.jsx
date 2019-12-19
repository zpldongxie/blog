/*
 * @description:
 * @author: zpl
 * @Date: 2019-12-03 17:07:52
 * @LastEditTime: 2019-12-12 11:11:27
 * @LastEditors: zpl
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Divider } from 'antd';
import { Route, Link } from 'react-router-dom';

import './index.less';

import HeadNav from '../../components/HeadNav';
import Resource from '../../views/Resource/index';
import Learn from '../../views/Learn';
import AboutMe from '../../views/AboutMe';
import WebTools from '../../views/WebTools';

const { Content, Footer } = Layout;

const Default = (props) => {
  const { match } = props;

  return (
    <Layout id="defaultLayout">
      <HeadNav />
      <Content>
        <div className="mainCon">
          <Route path={match.url} component={Resource} exact />
          <Route path={`${match.url}learn`} component={Learn} />
          <Route path={`${match.url}aboutMe`} component={AboutMe} />
          <Route path={`${match.url}tools`} component={WebTools} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <div>
          <a href="https://tongxuelu.zhupengliang.cn/" target="_blank" rel="noopener noreferrer">Classmates</a>
          <Divider type="vertical" />
          <a href="https://www.w3school.com.cn/" target="_blank" rel="noopener noreferrer">w3school</a>
          <Divider type="vertical" />
          <a href="https://ant.design/index-cn" target="_blank" rel="noopener noreferrer">ant.design</a>
          <Divider type="vertical" />
          <a href="https://docs.nestjs.com" target="_blank" rel="noopener noreferrer">NestJS Documentation</a>
          <Divider type="vertical" />
          <Link to="/login">manager</Link>
        </div>
        zpl ©2019 Created by Ant Design
      </Footer>
    </Layout>
  );
};

Default.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Default;
