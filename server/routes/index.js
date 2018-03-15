const router = require('koa-router')()
const db = require('../model/db.js');
const admin  = require('../controller/admin.js');

router.use('/api/admin', admin.routes(), admin.allowedMethods());

module.exports = router