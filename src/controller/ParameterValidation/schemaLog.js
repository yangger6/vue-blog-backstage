/**
 * Created by yangger on 2017/6/19.
 */
import * as schema from './schema'
export const add = async (ctx, next) => {
  const data = ctx.request.body
  let obj = new schema.Log(data)
  if (obj.isErrors()) {
    ctx.body = obj.getErrors()
    return
  }
  ctx.parameters = obj
  await next()
}
export const remove = async (ctx, next) => {
  const data = ctx.request.body
  let obj = new schema.LogRemove(data)
  if (obj.isErrors()) {
    ctx.body = obj.getErrors()
    return
  }
  ctx.parameters = obj
  await next()
}
