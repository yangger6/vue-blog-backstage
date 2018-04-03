/**
 * Created by yangger on 2017/6/9.
 */
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
const User = mongoose.model('User', userSchema)
export default User
