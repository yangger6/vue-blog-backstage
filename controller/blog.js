/**
 * Created by yangger on 2017/6/7.
 */
import * as schema from './ParameterValidation/schema'
export const add = async (ctx, next) => {
  ctx.body = 'saonima'
  schema.Blog
  await next()
}
export const add2 = async (ctx, next) => {
  ctx.body += ' qunimade'
  await next()
}
