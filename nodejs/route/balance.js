const router = require('koa-router')()

const balance = require('./../controllers/balance')

module.exports = router.get('/', balance.indexPage)