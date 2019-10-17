var express = require('express');
var router = express.Router();

/* 引入shops数据模块 */
var shopsModel = require('../modules/shopModule');

/* 首页 */
router.get('/', function (req, res, next) {
  res.render('index', { title: "你好" });
});

// 商品数据列表
router.get('/shops/api', function (req, res) {

  var sort = req.param('sort');
  console.log(sort)

  shopsModel.find({}).sort({"pPrice":sort }).exec(function (err,doc) {
    if (err) {
      console.log("数据查询失败")
    } else {
      var data = { status: 0, result:doc };
      res.json(data);
    }
  })
})


module.exports = router;
