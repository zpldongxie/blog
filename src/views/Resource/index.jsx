/*
 * @description: 教程分享
 * @author: zpl
 * @Date: 2019-12-04 09:22:48
 * @LastEditTime: 2019-12-12 16:10:30
 * @LastEditors: zpl
 */
import React, { Component } from 'react';

import { postGetList } from '../../common/api';
import https from '../../utils/https';
import ArticleList from '../../components/ArticleList/index';

export default class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    };
  }

  componentDidMount() {
    this.getDateList();
  }

  getDateList() {
    https.post(postGetList).then((res) => {
      if (res.status === 200 && res.data && res.data.length) {
        this.setState({
          listData: res.data.map((item) => ({
            id: item.id,
            href: 'http://www.baidu.com',
            title: item.title,
            image: item.image,
            description: item.desc,
            content: item.content,
            favorite_sum: item.favorite_sum,
            like_sum: item.like_sum,
            comment_sum: item.comment_sum,
          })),
        });
      }
    }).catch((err) => {
      // TODO: 应遵循eslint规范，此处不使用console，改用其他方式记录错误
      // eslint-disable-next-line no-console
      console.log(err);
    });
  }

  render() {
    const { listData } = this.state;
    return (
      <div>
        <ArticleList listData={listData} pageSize={6} />
      </div>
    );
  }
}
