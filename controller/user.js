/**
 * Created by yangger on 2017/6/9.
 */
import User from '../mongo/model/modelUser'
import crypto from 'crypto'
export const register = async (ctx, next) => {
  try {
    const user = new User(ctx.parameters)
    user.password = crypto.createHash('md5').update(ctx.parameters.password).digest('hex')
    user.save()
    ctx.body = user
  } catch (e) {
    ctx.body = e
  }
  await next()
}
export const login = async (ctx, next) => {
  try {
    const password = crypto.createHash('md5').update(ctx.parameters.password).digest('hex')
    const user = await User.findOneByKey('userName', ctx.parameters.userName) || await User.findOneByKey('email', ctx.parameters.userName)
    if (user) {
      if (password === user.password) {
        console.log(user)
        console.log(user.lastLogin)
        user.save()
        ctx.body = 'success'
      } else {
        ctx.body = '请检查你的密码是否正确'
        ctx.body += `user:${user.password}`
        ctx.body += `password:${password}`
      }
    } else {
      ctx.body = '请检查你的用户名或邮箱是否正确'
    }
  } catch (e) {
    ctx.body = e
  }
  await next()
}
export const remove = async (ctx, next) => {
  try {
    const removeIds = ctx.parameters._id
    await User.remove({ _id: { $in: removeIds } })
    ctx.body = 'success'
  } catch (e) {
    ctx.body = e
  }
  await next()
}
export const update = async (ctx, next) => {
  try {
    const updateId = ctx.parameters._id
    delete ctx.parameters._id
    // 这里的写法很蠢  但是接直接把ctx.parameters 丢进去的话 mongo的utils会报错 return v instanceof Document || RangeError: Maximum call stack size exceeded
    console.log(ctx.parameters)
    const newData = {
      userNiceName: ctx.parameters.userNiceName || '',
      password: ctx.parameters.password || ''
    }
    newData.password = crypto.createHash('md5').update(newData.password).digest('hex')
    await User.findByIdAndUpdate(updateId, {$set: newData})
    ctx.body = 'success'
  } catch (e) {
    ctx.body = e
  }
  await next()
}
