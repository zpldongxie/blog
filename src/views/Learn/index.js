/*
 * @description: 学习笔记
 * @author: zpl
 * @Date: 2019-12-04 09:22:10
 * @LastEditTime: 2019-12-04 16:39:28
 * @LastEditors: zpl
 */
import React, { Component } from 'react'

export default class Learn extends Component {
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
        学习笔记
      </div>
    )
  }
}
