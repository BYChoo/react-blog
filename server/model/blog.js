/**
 * 用户模块
 */

const Mongoose = require('./db.js');
const Schema = Mongoose.Schema;

// 定义用户模型schema
let blogSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  createTime: {
    type: String,
		required: true
  },
	title: {
		type: String,
		required: true,
	},
	tag: {
		type: Array,
		required: true
  },
  content: {
    type: String,
    required: true
  }
});

/**
 * 用户注册
 */
blogSchema.methods.saveBlog = function() {
	return new Promise((resolve, reject) => {
		this.save(err => {
			if (err) return reject(err)
			else return resolve('success');
		});
	})
};

module.exports = Mongoose.model('blog', blogSchema);
