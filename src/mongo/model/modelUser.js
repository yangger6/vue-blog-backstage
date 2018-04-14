/**
 * Created by yangger on 2017/6/9.
 */
const uuidv4 = require('uuid/v4')
const crypto = require('crypto')
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const userSchema = new Schema({
  userName: String, // 用户名
  password: String, // 密码
  email: String,  // 邮箱
  date: {  // 创建时间
    type: Date,
    default: Date.now
  },
  cookies: {  // 登录cookies
    cookie: String,
    create_date: Date,
    expiry_date: Date
  }
})
/**
 *
 * @param key 查询的键名
 * @param value 查询的值
 * @returns {Query|*} 返回一个对象
 */
userSchema.statics.findOneByKey = async function (key, value) {  // 这里用function （）{}  如果用（）=》{} 作用域会炸
  let result = this.findOne({ [key]: new RegExp(value, 'i') })
  return result
}
/**
 * 计算 cookie
 * @param {string} username 用户名
 * @return {string} 返回结果
 */
UserSchema.statics.genCookie = function genCookie(username) {
  return `${new Buffer(username).toString('base64')}:` + uuidv4().toString().replace(/\-/g, '')
}
/**
 *  登录
 * @param {string} username 用户名
 * @param {string} password 密码
 * @return {Promise<string | null>} 返回结果
 */
UserSchema.statics.login = async function login(userName, password) {
  const cookie = UserModule.genCookie(userName)
  const isLogin = (await UserModule.update({
    userName,
    password: this.genPassword(password)
  }, {
    set: {
      cookies: {
        cookie,
        create_date: new Date(),
        expiry_date: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
      }
    }
  })).n
  await UserModule.update({
    username,
    password: this.genPassword(password)
  }, {
    $push: {
      cookies: {
        $each: [],
        $slice: -7
      }
    }
  })
  if (isLogin) {
    return cookie
  }
  return null
}
const User = mongoose.model('User', userSchema)
export default User
