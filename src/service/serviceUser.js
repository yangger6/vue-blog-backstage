import { Validate } from "../controller/validate/validateUser"
import User from '../mongo/model/modelUser'
import crypto from 'crypto'
export default class ServiceUser {
  @Validate
  async register (data) {
    if (data.error) {
      console.log(data.error)
      return data.error
    }
    const user = new User(data)
    user.password = crypto.createHash('md5').update(data.password).digest('hex')
    user.save()
    return 'success'
  }
  @Validate
  async login (data) {
    if (data.error) {
      console.log(data.error)
      return data.error
    }
    const user = await User.findOne({
      $or: [
        { email: data.userName },
        { userName: data.userName }
      ]
    })
    if (!user) {
      return {
        code: httpCode.INVALID_REQUEST,
        message: '用户名不存在'
      }
    }
  }
}
