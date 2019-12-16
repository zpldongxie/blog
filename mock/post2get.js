/*
 * @description: node-server只支持get请求，通过中间件,把post请求转为get
 * @author: zpl
 * @Date: 2019-12-13 15:30:54
 * @LastEditTime: 2019-12-13 15:32:44
 * @LastEditors: zpl
 */
module.exports = (req, res, next) => {
  if (req.method === 'POST') {
    req.method = 'GET';
  }
  next();
};
