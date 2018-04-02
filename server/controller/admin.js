const router = require('koa-router')()
const db = require('../model/db.js');
const User = require('../model/user.js');
const Blog = require('../model/blog.js');

/**
 * 
 * 管理系统用户注册
 * url: '/api/admin/register'
 */
router.post('/register', async (ctx, next) => {
	const body = await ctx.request.body
	let user = await new User({
		userEmail: body.userEmail,
		userPassword: body.userPassword
	});

	try {
		await User.findOne({
			userEmail: body.userEmail
		}, (err, doc) => {
			if (doc) {
				ctx.response.status = 208;
				ctx.response.body = {
					message: 'email has already existed'
				};
			} else {
				user.saveUser();
				ctx.body = {
					msg: 'register success'
				};
			}
		})
	} catch (error) {
		ctx.body = {
			msg: error
		};
		throw error;
	}
})

/**
 * 管理系统用户登录
 * url: '/api/admin/login'
 */
router.post('/login', async (ctx, next) => {
	const body = await ctx.request.body
	let user = await new User({
		userEmail: body.userEmail,
		userPassword: body.userPassword
	});

	try {
		await User.findOne({
			userEmail: body.userEmail
		}, (err, doc) => {
			if (!doc) {
				ctx.response.status = 208;
				ctx.response.body = {
					message: 'user has already existed'
				};
			} else {
				ctx.session.token = body.userEmail;
				ctx.body = {
					msg: 'login success'
				};
			}
		})
	} catch (error) {
		ctx.body = {
			msg: error
		};
		throw error;
	}
})

/**
 * 管理系统用户发布文章
 */
router.post('/postBlog', async (ctx, next) => {
	const body = await ctx.request.body
	let blog = await new Blog({
		title: body.title,
		tag: body.tag,
		content: body.content,
		author: ctx.request.header.authorization,
		createTime: new Date()
	});
	try {
		await blog.saveBlog()
		ctx.body = {
			msg: 'Successful'
		};
	} catch (error) {
		ctx.body = {
			msg: error
		};
		throw error;
	}
})

/**
 * 管理系统用户更新保存文章
 */
router.post('/updateBlog', async (ctx, next) => {
	const { title, _id, content, tag } = ctx.request.body;
	try {
		let result = new Blog().updateBlog({ _id }, { content, title, tag })
		if (result) {
			ctx.body = {
				msg: 'success'
			}
		}
	} catch (error) {
		ctx.response.status = 400;
		ctx.response.body = {
			message: 'update user blog error'
		}
		throw error;
	}
})

/**
 * 用户删除文章
 */
router.post('/deleteBlog', async (ctx, next) => {
	const { _id } = ctx.request.body;
	try {
		let result = new Blog().deleteBlog({ _id })
		if (result) {
			ctx.body = {
				msg: 'success'
			}
		}
	} catch (error) {
		ctx.response.status = 400;
		ctx.response.body = {
			message: 'update user blog error'
		}
		throw error;
	}
})

/**
 * 管理系统用户获取所有文章
 */
router.get('/getUserBlog', async (ctx, next) => {
	try {
		let doc = {
			author: '1111@qq.com'
		}
		let result = await new Blog().findBlog(doc);
		if (result) {
			ctx.body = {
				data: result
			}
		}
	} catch (error) {
		ctx.response.status = 400;
		ctx.response.body = {
			message: 'get user blog error'
		}
		throw error;
	}
})

module.exports = router