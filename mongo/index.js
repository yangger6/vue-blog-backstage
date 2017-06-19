/**
 * Created by yangger on 2017/6/7.
 */
import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/test')  // 链接数据库
mongoose.Promise = global.Promise // 异步
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('mongo is connected successfully')
})
