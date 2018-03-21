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
		type: Date,
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
 * 保存博客
 */
blogSchema.methods.saveBlog = function () {
	return new Promise((resolve, reject) => {
		this.save(err => {
			if (err) return reject(err)
			else return resolve('success');
		});
	})
};

/**
 * 查找博客
 */
blogSchema.methods.findBlog = function(doc) {
	return new Promise((resolve, reject) => {
		Mongoose.model('blog').find(doc,(err, docs) => {
			if (err) return reject(err);
			else return resolve(docs)
		})
	})
}

module.exports = Mongoose.model('blog', blogSchema);
