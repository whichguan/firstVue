const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const produceData = function (opt) {
  console.log('opt', opt)
  let articles = []
  for (let i = 0; i < 5; i++) {
    let newArticleObject = {
      title: Random.csentence(5, 30), // 中文 Random.csentence( min, max )
      img: Random.dataImage('100x50'), // 图片
      name: Random.cname(), // Random.cname() 中文姓名
      info: Random.ctitle(3, 5), // 中文标题
      number: Random.string('number', 1), // 字符
      price: Random.float(0, 100, 0, 2), // 浮点数
      total: Random.integer(60, 100),    // 整数
      status: Random.boolean(),       // 布尔值
      region: Random.region(),
      province: Random.province(),
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    articles.push(newArticleObject)
  }
  return {
    data: articles
  }
}
Mock.mock('/news', /post|get/i, produceData)
