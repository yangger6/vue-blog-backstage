/**
 * Created by yangger on 2017/6/9.
 */
import * as schema from './schema'
export const login = async (ctx, next) => {
  const data = ctx.request.body
  let obj = new schema.UserLogin(data)
  if (obj.isErrors()) {
    ctx.body = obj.getErrors()
    return
  }
  console.log(`is error: ${obj.isErrors()}`)
  console.log(`error is : ${obj.getErrors()}`)
  console.log(`obj is :${obj}`)
  ctx.parameters = obj
  await next()
}
export const register = async (ctx, next) => {
  const data = ctx.request.body
  let obj = new schema.User(data)
  if (obj.isErrors()) {
    ctx.body = obj.getErrors()
    return
  }
  ctx.parameters = obj
  await next()
}
export const remove = async (ctx, next) => {
  const data = ctx.request.body
  let obj = new schema.UserRemove(data)
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
