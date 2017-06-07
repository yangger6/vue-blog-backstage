/**
 * Created by yangger on 2017/6/7.
 */
import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/test')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('mongo is connected successfully')
})
