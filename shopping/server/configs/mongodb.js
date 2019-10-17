
// 连接mongodb
const mongoose = require('mongoose');
 
// 连接数据库
mongoose.connect('mongodb://localhost:27017/vueshop',function(err){
    if(err){
        console.log("数据库连接失败")
    }else{
        console.log("数据连接成功.......")
    }
})

module.exports = mongoose;
