// use koa to load view

const Koa = require("koa")
const app = new Koa()
const routers = require('./route/index')
const bodyParser = require('koa-bodyparser')

const views = require('koa-views')
const path = require('path')
const koaStatic = require('koa-static')
const PORT = 8800

// 配置ctx.body解析中间件
app.use(bodyParser())

// 配置静态资源加载中间件
app.use(koaStatic(
    path.join(__dirname, './static')
))

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())
app.listen(PORT, () => {
    console.log('[demo] static-use-middleware is starting at port ' + PORT)
})