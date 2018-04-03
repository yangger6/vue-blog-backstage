/**
 * Created by yangger on 2017/6/9.
 */
// import User from '../mongo/model/modelUser'
// import crypto from 'crypto'
import ServiceUser from '../service/serviceUser'
import httpCode from "./httpCode";
class UserController {
  constructor () {
  }
  async register (ctx, next) {
    const service = new ServiceUser()
    await service.register(ctx.request.body)
    ctx.status = httpCode.CREATED
    ctx.body = 'success'
    await next()
  }
}
export { UserController }
// /**
//  *
//  * @param ctx 传入的参数
//  * @param next 下一个函数
//  */
// export const register = async (ctx, next) => {
//   try {
//     // const user = new User(ctx.parameters)
//     // user.password = crypto.createHash('md5').update(ctx.parameters.password).digest('hex')
//     // user.save()
//     await service.register()
//     ctx.body = user
//   } catch (e) {
//     ctx.body = e
//   }
//   await next()
// }
// export const login = async (ctx, next) => {
//   try {
//     const password = crypto.createHash('md5').update(ctx.parameters.password).digest('hex')
//     const user = await User.findOneByKey('userName', ctx.parameters.userName) || await User.findOneByKey('email', ctx.parameters.userName)
//     if (user) {
//       if (password === user.password) {
//         user.save()
//         let result = {
//           msg: 'success',
//           data: user
//         }
//         ctx.body = result
//       } else {
//         let result = {
//           msg: 'error',
//           data: '请检查你的密码是否正确'
//         }
//         ctx.body = result
//       }
//     } else {
//       ctx.body = '请检查你的用户名或邮箱是否正确'
//     }
//   } catch (e) {
//     ctx.body = e
//   }
//   await next()
// }
// export const remove = async (ctx, next) => {
//   try {
//     const removeIds = ctx.parameters._id
//     await User.remove({ _id: { $in: removeIds } })
//     ctx.body = 'success'
//   } catch (e) {
//     ctx.body = e
//   }
//   await next()
// }
// export const update = async (ctx, next) => {
//   try {
//     const updateId = ctx.parameters._id
//     delete ctx.parameters._id
//     // 这里的写法很蠢  但是接直接把ctx.parameters 丢进去的话 mongo的utils会报错 return v instanceof Document || RangeError: Maximum call stack size exceeded
//     console.log(ctx.parameters)
//     const newData = {
//       userNiceName: ctx.parameters.userNiceName || '',
//       password: ctx.parameters.password || ''
//     }
//     newData.password = crypto.createHash('md5').update(newData.password).digest('hex')
//     await User.findByIdAndUpdate(updateId, {$set: newData})
//     ctx.body = 'success'
//   } catch (e) {
//     ctx.body = e
//   }
//   await next()
// }
