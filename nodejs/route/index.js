
/**
 * 整合所有子路由
 */
const router = require('koa-router')()

const admin = require('./admin')

router.use('/', admin.routes(), admin.allowedMethods())

module.exports = router