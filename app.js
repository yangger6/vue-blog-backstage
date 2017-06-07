/**
 * Created by yangger on 2017/6/7.
 */
import 'babel-core/register'
import 'babel-polyfill'
import Koa from 'koa'
import router from './router/index'

const app = new Koa()
app.use(async (ctx, next) => {
  ctx.body = 'hi'
  await next()
})
app.use(router.routes())
    .use(router.allowedMethods())
app.listen(3000)
