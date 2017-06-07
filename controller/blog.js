/**
 * Created by yangger on 2017/6/7.
 */
export const add = async (ctx, next) => {
  ctx.body = 'saonima'
  await next()
}
export const add2 = async (ctx, next) => {
  ctx.body += ' qunimade'
  await next()
}
