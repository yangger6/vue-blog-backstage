/**
 * Created by yangger on 2017/6/7.
 */
import SchemaObject from 'schema-object'
const NotEmptyString = {type: String, minLength: 1}
// Create User schema
export const BlogAdd = new SchemaObject({
  title: NotEmptyString,
  author: NotEmptyString,
  body: NotEmptyString,
  markdown: NotEmptyString,
  comments: [{body: String}],
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
export const BlogUpdate = new SchemaObject({
  _id: NotEmptyString,
  title: NotEmptyString,
  author: NotEmptyString,
  body: NotEmptyString,
  markdown: NotEmptyString,
  comments: [{body: String}],
  hidden: Boolean,
  tags: [String],
  meta: {
    votes: Number,
    favs: Number
  }
})
