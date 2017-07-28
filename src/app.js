/**
 * Created by yangger on 2017/6/7.
 */
import '../node_modules/babel-core/register'  // babel转码后报错提示
import 'babel-polyfill' // babel转码后报错提示
import Koa from 'koa'
import KoaBody from 'koa-body'
import router from './router/index'
require('./mongo/index.js')
const app = new Koa()
const koaBody = new KoaBody()
app.use(koaBody)
app.use(router.routes())
    .use(router.allowedMethods())
app.listen(3000)
