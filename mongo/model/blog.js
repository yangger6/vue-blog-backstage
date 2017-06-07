/**
 * Created by yangger on 2017/6/7.
 */
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const blogSchema = new Schema({
  title: String,  //  标题
  author: String, //  作者
  body: String, //  内容
  markdown: String, //  markdown 内容
  comments: [{ body: String, date: Date }], // 评论
  date: { type: Date, default: Date.now },  // 时间
  hidden: Boolean,  // 是否隐藏
  meta: { // ？？？
    votes: Number,  // 点赞
    favs: Number  //  收藏
  }
})
const Blog = mongoose.model('Blog', blogSchema)
blogSchema.statics.findByKey = async (key, value) => {
  return this.findOne({key: value})
}
export default Blog
