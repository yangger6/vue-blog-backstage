/**
 * Created by yangger on 2017/6/7.
 */
import mongoose from 'mongoose'
import Counter from './modelCounter'
const Schema = mongoose.Schema
const metaSchema = new Schema({ // 点赞与收藏
  votes: {
    type: Number,
    default: 0
  }
})
const blogSchema = new Schema({
  blogId: {type: Number, default: 0}, // 博客id
  title: String,  //  标题
  author: String, //  作者
  body: String, //  内容
  markdown: String, //  markdown 内容
  date: {
    type: Date,
    default: Date.now
  },  // 创建时间
  hidden: Boolean,  // 是否隐藏
  tags: [String], // 标签
  meta: metaSchema
})
/**
 *
 * @param key 查询的键名
 * @param value 查询的值
 * @returns {Query|*|T}  返回一个数组
 */
blogSchema.statics.findByKey = async function (key, value) {  // 这里用function （）{}  如果用（）=》{} 作用域会炸
  let result = this.find({ [key]: new RegExp(value, 'i') })
  return result
}
/**
 *
 * @param key 查询的键名
 * @param value 查询的值
 * @returns {Query|*} 返回一个对象
 */
blogSchema.statics.findOneByKey = async function (key, value) {  // 这里用function （）{}  如果用（）=》{} 作用域会炸
  let result = this.findOne({ [key]: new RegExp(value, 'i') })
  return result
}
blogSchema.pre('save', async function (next) {
  try {
    var doc = this
    const result = await Counter.findByIdAndUpdate({_id: 'blogId'}, {$inc: {seq: 1}}, {new: true, upsert: true})
    console.log(result)
    doc.blogId = result.seq
    console.log(doc)
    await next()
  } catch (e) {
    console.error('counter error-> : ' + e)
    throw e
  }
})
const Blog = mongoose.model('Post', blogSchema)
export default Blog
