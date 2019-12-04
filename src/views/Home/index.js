/*
 * @description: 首页
 * @author: zpl
 * @Date: 2019-12-04 09:22:10
 * @LastEditTime: 2019-12-04 11:49:58
 * @LastEditors: zpl
 */
import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props);
    fetch("/api/news", { method: 'GET' }).then(
      function (res) {
        console.log(res);
        res.json().then(function (data) {
          console.log(data);
        });
      }
    )
  }

  render() {
    return (
      <div>
        首页
      </div>
    )
  }
}
