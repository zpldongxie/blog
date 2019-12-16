/*
 * @description: 统一配置请求接口
 * @author: zpl
 * @Date: 2019-12-13 09:44:55
 * @LastEditTime: 2019-12-13 15:52:59
 * @LastEditors: zpl
 */
let baseUrl = '/api';
if (process.env.NODE_ENV === 'development') {
  baseUrl = '/mock/api';
}

exports.baseUrl = baseUrl;
exports.postLogin = '/login';
exports.postGetList = '/getList';
exports.postGetContent = '/getContent';
