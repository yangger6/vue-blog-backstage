/**
 * Created by yangger on 2017/6/7.
 */
import SchemaObject from 'schema-object'
/**
 *
 * @type {{type: String, minLength: number}} 是否为空字符串
 */
const NotEmptyString = {type: String, minLength: 1}
// Create User schema
/**
 * 评论验证
 */
export const comments = new SchemaObject({
  _pid: String,
  comAuthor: String,
  comAuthorName: String,
  comAuthorHead: String,
  comBody: NotEmptyString
})
/**
 * 新增博客验证
 */
export const BlogAdd = new SchemaObject({
  title: NotEmptyString,
  author: NotEmptyString,
  body: NotEmptyString,
  markdown: NotEmptyString,
  comments: [comments],
  hidden: Boolean,
  tags: [String],
  meta: {
    votes: Number,
    favs: Number
  }
})
/**
 * 删除博客验证
 */
export const BlogRemove = new SchemaObject({
  _id: [String]
})
/**
 * 选择博客验证
 */
export const BlogSelect = new SchemaObject({
  key: NotEmptyString,
  value: NotEmptyString
})
/**
 * 更新博客
 */
export const BlogUpdate = BlogAdd.extend({
  _id: NotEmptyString
})
/**
 *
 * @type {{type: String, minLength: number, maxLength: number}} 用户名验证
 */
const userName = {
  type: String,
  minLength: [6, '用户名不得小于6位'],
  maxLength: [20, '用户名不得大于20位']
}
/**
 *
 * @type {{type: String, minLength: number, maxLength: number}} 用户密码验证
 */
const password = {
  type: String,
  minLength: [6, '密码不得小于6位'],
  maxLength: [20, '密码名不得大于20位']
}
// 用户验证
export const User = new SchemaObject({
  userName: userName,
  userNiceName: userName,
  password: password,
  email: {
    type: String,
    regex: new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
  }
})
/**
 * 登录验证
 */
export const UserLogin = new SchemaObject({
  userName: userName,
  password: password
})
/**
 * 移除用户验证
 */
export const UserRemove = new SchemaObject({
  _id: [String]
})
/**
 * 更新用户验证
 */
export const UserUpdate = User.extend({
  _id: [String]
})
// 日志验证
export const Log = new SchemaObject({
  data: [{value: NotEmptyString}]
})
/**
 * 移除日志验证
 */
export const LogRemove = Log.extend({
  _id: NotEmptyString
})
