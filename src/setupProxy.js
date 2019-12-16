/*
 * @description: 设置反向代理
 * @author: zpl
 * @Date: 2019-12-04 10:52:57
 * @LastEditTime: 2019-12-13 10:02:37
 * @LastEditors: zpl
 */
const proxy = require('http-proxy-middleware');

/**
 * 开发环境接口转发
 *
 * @param {*} app
 */
module.exports = (app) => {
  app.use(proxy('/mock/api', {
    target: 'http://localhost:3003',
    changeOrigin: true,
    pathRewrite: {
      '^/mock/api': '/',
    },
  }));
};
