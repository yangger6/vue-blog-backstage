/**
 * Created by yangger on 2017/6/7.
 */
import mongoose from 'mongoose'
import { config } from '../config/config'
mongoose.connect(config.dbUrl)  // 链接数据库
// mongoose.Promise = global.Promise // 异步
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('mongo is connected successfully')
})
// const db = mongoose.createConnection()
// db.open('mongodb://blog:yangger6@yangger.cn:27071/blog', function (res) {
//   console.log('success:' + res)
// })
// var db = mongoose.createConnection()
// var options = { promiseLibrary: require('bluebird') }
// db.openSet('mongodb://blog:yangger6@yangger.cn/blog', options, function () {
//   console.log('mongodb connect successfully!')
// })
// export default db
// const promise = mongoose.createConnection('mongodb://blog:yangger6@yangger.cn/blog', {
//   useMongoClient: true,
//   promiseLibrary: require('bluebird')
//   /* other options */
// })
// promise.then(function (db) {
//   console.log(db)
//   /* Use `db`, for instance `db.model()`
//    });
//    // Or, if you already have a connection
//    connection.openUri('mongodb://localhost/myapp', { /* options */
// })
// export default promise
// const opts = {user: 'blog', pass: 'yangger6'}
// const db = mongoose.createConnection('mongodb://yangger.cn:27071/blog', opts)
// db.on('error', function (err) {
//   if (err) throw err
// })
// db.once('open', function callback () {
//   console.info('Mongo db connected successfully')
// })