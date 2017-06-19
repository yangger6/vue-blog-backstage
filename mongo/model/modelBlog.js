/**
 * Created by yangger on 2017/6/7.
 */
import mongoose from 'mongoose'
const Schema = mongoose.Schema
const metaSchema = new Schema({ // 点赞与收藏
  votes: {
    type: Number,
    default: 0
  },
  favs: {
    type: Number,
    default: 0
  }
})
const comment = new Schema({  // 评论
  _pid: String, // 可用来相互评论  就是 谁回复了谁
  comAuthor: String,  //  评论者Id
  comAuthorName: {
    type: String,
    default: '游客'
  },
  comAuthorHead: {
    type: String,
    default: 'http://image.yangger.cn/tourist.png'
  },
  comBody: String,
  comDate: {
    type: Date,
    default: Date.now
  }
})
const blogSchema = new Schema({
  title: String,  //  标题
  author: String, //  作者
  body: String, //  内容
  markdown: String, //  markdown 内容
  comments: [comment], // 评论
  date: {
    type: Date,
    default: Date.now
  },  // 时间
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
const Blog = mongoose.model('Post', blogSchema)
export default Blog
