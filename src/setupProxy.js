/*
 * @description: 设置反向代理
 * @author: zpl
 * @Date: 2019-12-04 10:52:57
 * @LastEditTime: 2019-12-04 11:46:35
 * @LastEditors: zpl
 */
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'http://localhost:3003',
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/"
    }
  }))
}