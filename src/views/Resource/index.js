/*
 * @description: 教程分享
 * @author: zpl
 * @Date: 2019-12-04 09:22:48
 * @LastEditTime: 2019-12-04 17:09:49
 * @LastEditors: zpl
 */
import React, { Component } from 'react'
import ArticleList from '../../components/ArticleList'

export default class Resource extends Component {
  render() {
    const listData = [];
    for (let i = 0; i < 23; i++) {
      listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      });
    }
    return (
      <div>
        <ArticleList listData={listData} />
      </div>
    )
  }
}
