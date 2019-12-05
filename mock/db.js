/*
 * @description: 通过mock自动生成测试数据
 * @author: zpl
 * @Date: 2019-12-04 10:18:16
 * @LastEditTime: 2019-12-05 10:21:28
 * @LastEditors: zpl
 */
let Mock=require('mockjs');//引入mockjs模块
let Random = Mock.Random;

module.exports = function() {
    var data = {//定义等下要返回的json数据
        news: []
    };

    // var images = [1,2,3].map(x=>Random.image('200x100', Random.color(), Random.word(2,6))); //随机成长3个图片信息 尺寸 颜色 和随机字母的数组

    for (var i = 0; i < 100; i++) {

        var content = Random.cparagraph(0,10);//随机生成0到10段句子

        data.news.push({
            id: i,//固有id
            title: Random.cword(8,20),//随机长度为在8到20内的汉字字符串
            desc: content.substr(0, 30),
            content: content,
            tag: Random.cword(2,6),//随机长度为2 到 6 的汉字
            views: Random.integer(100,5000),//100到5000的随机整数
            // images: images.slice(0,Random.integer(1,3)),//截取随机一到三个图片
            image: "http://e.hiphotos.baidu.com/image/pic/item/4610b912c8fcc3cef70d70409845d688d53f20f7.jpg",
            time:Random.date()
        })
    }
    return data //返回json数据
}