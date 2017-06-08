/**
 * Created by yangger on 2017/6/7.
 */
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const metaSchema = new Schema({
  votes: {type: Number, default: 0},
  favs: {type: Number, default: 0}
})
const blogSchema = new Schema({
  title: String,  //  标题
  author: String, //  作者
  body: String, //  内容
  markdown: String, //  markdown 内容
  comments: [{ body: String, date: {type: Date, default: Date.now} }], // 评论
  date: { type: Date, default: Date.now },  // 时间
  hidden: Boolean,  // 是否隐藏
  tags: [String], // 标签
  meta: metaSchema
})
blogSchema.statics.findByKey = async function (key, value) {  // 这里用function （）{}  如果用（）=》{} 作用域会炸
  let result = this.find({ [key]: new RegExp(value, 'i') })
  return result
}
blogSchema.statics.findOneByKey = async function (key, value) {  // 这里用function （）{}  如果用（）=》{} 作用域会炸
  let result = this.findOne({ [key]: new RegExp(value, 'i') })
  return result
}
const Blog = mongoose.model('Blog', blogSchema)
export default Blog
