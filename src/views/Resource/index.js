/*
 * @description: 教程分享
 * @author: zpl
 * @Date: 2019-12-04 09:22:48
 * @LastEditTime: 2019-12-06 10:17:23
 * @LastEditors: zpl
 */
import React, { Component } from 'react'
import ArticleList from '../../components/ArticleList'

export default class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    }

  }

  render() {
    const {listData} = this.state;
    return (
      <div>        
        <ArticleList listData={listData} pageSize={6} />
      </div>
    )
  }

  componentDidMount() {
    const self = this;
    fetch("/api/news", { method: 'GET' }).then(
      function (res) {
        console.log(res);
        res.json().then(function (data) {
          self.setState({
            listData: data.map(item => {
              return {
                id: item.id,
                href: "http://www.baidu.com",
                title: item.title,
                image: item.image,
                description: item.desc,
                content: item.content
              }
            })
          });
        });
      }
    )
  }
}
