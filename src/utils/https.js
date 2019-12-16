/*
 * @description: 封装http请求
 * @author: zpl
 * @Date: 2019-12-12 08:41:24
 * @LastEditTime: 2019-12-13 10:49:15
 * @LastEditors: zpl
 */
/* eslint no-console: "off" */
import axios from 'axios';
import { baseUrl } from '../common/api';

// 创建axios实例
const service = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 50000, // 请求超时时间
});

// console.log('process.env.BASE_URL',process.env.BASE_URL)
// request拦截器 axios的一些配置
service.interceptors.request.use(
  (config) => config,
  (error) => {
    // Do something with request error
    console.error('error:', error); // for debug
    Promise.reject(error);
  },
);

// respone拦截器 axios的一些配置
service.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(`error:${error}`); // for debug
    return Promise.reject(error);
  },
);

export default { ...service };
