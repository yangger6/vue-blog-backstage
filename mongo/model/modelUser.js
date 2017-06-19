/**
 * Created by yangger on 2017/6/9.
 */
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const userSchema = new Schema({
  userName: String, // 用户名
  userNiceName: String, // 昵称
  password: String, // 密码
  email: String,  // 邮箱
  lastLogin: {  // 最后登录时间
    type: Date,
    default: Date.now
  },
  registerTime: { // 注册时间
    type: Date,
    default: Date.now
  },
  userLevel: {  // 用户等级
    type: Number,
    default: 0
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
const User = mongoose.model('User', userSchema)
export default User
