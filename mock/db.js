/*
 * @description: 通过mock自动生成测试数据
 * @author: zpl
 * @Date: 2019-12-04 10:18:16
 * @LastEditTime: 2019-12-13 16:04:50
 * @LastEditors: zpl
 */
const Mock = require('mockjs');
// 引入mockjs模块
// const { Random } = Mock;

const template = {
  'list|5-20': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    // 属性 title 是一个随机长度的标题
    title: '@title()',
    // 属性 desc 是一个随机长度的段落
    desc: '@cparagraph',
    // 属性 content 是一个5-10段长度的段落
    'content|5-10': '@cparagraph',
    // 属性 views 是一个1-3位的随机码
    'views|1-3': '',
    // 属性 image 是一个随机图片 参数分别为size, background, text
    image: "@image('200x100', '#FFC0CB', 'Hello')",
    // 属性 date 是一个yyyy-MM-dd 的随机日期
    date: '@date("yyyy-MM-dd")',
    // 属性 time 是一个 size, background, text 的随机时间
    time: '@time("HH:mm:ss")',
    // 属性 favorite_sum 是一个1-100的随机数字
    favorite_sum: '@natural(1, 100)',
    // 属性 like_sum 是一个1-100的随机数字
    like_sum: '@natural(1, 100)',
    // 属性 comment_sum 是一个1-100的随机数字
    comment_sum: '@natural(1, 100)',
  }],
};
const dataList = Mock.mock(template);

module.exports = () => ({
  login: {
    id: '001',
    name: 'pengliang.zhu',
    avatar: '管理员',
    code: 0,
  },
  getList: dataList.list,
});
