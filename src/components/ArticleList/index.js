/*
 * @description: 文章列表
 * @author: zpl
 * @Date: 2019-12-04 16:42:36
 * @LastEditTime: 2019-12-05 10:31:46
 * @LastEditors: zpl
 */
import React, { Component } from 'react'
import { List, Icon } from 'antd';

import './index.less'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default class ArticleList extends Component {
  render() {
    const { listData, pageSize } = this.props;
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: pageSize,
        }}
        dataSource={listData}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText type="star-o" text="156" key="list-vertical-star-o" />,
              <IconText type="like-o" text="156" key="list-vertical-like-o" />,
              <IconText type="message" text="2" key="list-vertical-message" />,
            ]}
            extra={
              <img
                alt="logo"
                src={item.image}
              />
            }
          >
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {/* {item.content} */}
          </List.Item>
        )}
      />
    )
  }
}
