/**
 * 用户模块
 */

const Mongoose = require('./db.js');
const Schema = Mongoose.Schema;

// 定义用户模型schema
let userSchema = new Schema({
	userEmail: {
		type: String,
		required: true,
		default: '匿名用户'
	},
	userPassword: {
		type: String,
		required: true
	}
});

/**
 * 用户注册
 */
userSchema.methods.saveUser = function() {
	return new Promise((resolve, reject) => {
		this.save(err => {
			if (err) return reject(err)
			else return resolve('success');
		});
	})
};

/**
 * 查找某一用户
 */
userSchema.methods.findOne = function() {
	return new Promise((resolve, reject) => {
		this.find(function(err,row) {
			console.log(err)
			console.log(row)
		});
	})
};

module.exports = Mongoose.model('user', userSchema);
