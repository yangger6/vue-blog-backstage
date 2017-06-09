/**
 * Created by yangger on 2017/6/7.
 */
import SchemaObject from 'schema-object'
const NotEmptyString = {type: String, minLength: 1}
// Create User schema
export const comments = new SchemaObject({
  _pid: String,
  comAuthor: String,
  comAuthorName: String,
  comAuthorHead: String,
  comBody: NotEmptyString
})
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
export const BlogRemove = new SchemaObject({
  _id: [String]
})
export const BlogUpdate = BlogAdd.extend({
  _id: NotEmptyString
})
const userName = {
  type: String,
  minLength: 6,
  maxLength: 20
}
const password = {
  type: String,
  minLength: 6,
  maxLength: 20
}
export const User = new SchemaObject({
  userName: userName,
  userNiceName: userName,
  password: password,
  email: {
    type: String,
    regex: new RegExp(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
  }
})
export const UserLogin = new SchemaObject({
  userName: userName,
  password: password
})
export const UserRemove = new SchemaObject({
  _id: [String]
})
export const UserUpdate = User.extend({
  _id: [String]
})
