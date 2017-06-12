/**
 * Created by yangger on 2017/6/8.
 */
import * as schema from './schema'
export const add = async (ctx, next) => {
  const data = ctx.request.body
  let obj = new schema.BlogAdd(data)
  if (obj.isErrors()) {
    ctx.body = obj.getErrors()
    return
  }
  ctx.parameters = obj
  await next()
}
export const remove = async (ctx, next) => {
  const data = ctx.request.body
  let obj = new schema.BlogRemove(data)
  if (obj.isErrors()) {
    ctx.body = obj.getErrors()
    return
  }
  ctx.parameters = obj
  await next()
}
export const update = async (ctx, next) => {
  const data = ctx.request.body
  let obj = new schema.BlogUpdate(data)
  if (obj.isErrors()) {
    ctx.body = obj.getErrors()
    return
  }
  ctx.parameters = obj
  await next()
}
export const select = async (ctx, next) => {
  const data = ctx.request.body
  let obj = new schema.BlogSelect(data)
  if (obj.isErrors()) {
    ctx.body = obj.getErrors()
    return
  }
  ctx.parameters = obj
  await next()
}