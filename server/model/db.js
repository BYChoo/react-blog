/**
 * 数据库模块
 */

const Mongoose = require('mongoose');
let db = Mongoose.connection.openUri('mongodb://localhost/blog');

db.on('error', console.error.bind(console, '连接MongoDb数据库异常'));
db.once('open', function (callback) {
  console.log('连接MongoDb数据库成功');
});  
  
module.exports = Mongoose;