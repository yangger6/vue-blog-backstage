/**
 * Created by yangger on 2017/8/21.
 */
import mongoose from 'mongoose'
const Schema = mongoose.Schema
var counterSchema = Schema({ // 自增
  _id: {type: String, required: true},
  seq: { type: Number, default: 0 }
})
const Counter = mongoose.model('counter', counterSchema)
export default Counter
