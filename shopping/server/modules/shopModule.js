// 引入db文件
const mongoose = require('../configs/mongodb.js');

const Schema = mongoose.Schema;

const shopSchema = new Schema({
    'name' : String, 
     pPrice:Number, 
    'commentCount':Number, 
    'image':String, 
    'skuId': String, 
    'goodRate' : String, 
    'plusPrice' : String, 
    'groupId': String, 
    'pcpPrice': Number,
});

const shopModel = mongoose.model('shops',shopSchema);

module.exports = shopModel;

