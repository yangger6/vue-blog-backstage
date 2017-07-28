/**
 * Created by yangger on 2017/6/19.
 */
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const logSchema = new Schema({
  date: String, //  log时间
  data: [{
    value: String,  // log内容
    date: { // log内容时间
      type: Date,
      default: Date.now
    }
  }]
})
const Log = mongoose.model('Log', logSchema)
export default Log
