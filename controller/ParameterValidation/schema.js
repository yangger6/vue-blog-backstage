/**
 * Created by ROBOT on 2017/6/7.
 */
import SchemaObject from 'schema-object'
const NotEmptyString = {type: String, minLength: 1}
// Create User schema
const Blog = new SchemaObject({
    title: NotEmptyString,
    author: NotEmptyString,
    body: NotEmptyString,
    markdown: NotEmptyString,
    comments: [{ body: String}],
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
})
export const blog = async (data, next) => {
    let obj = new Blog(data)
    if (obj.isErrors()) console.log(obj.getErrors())
    console.log(obj)
    await next(obj)
}
(async () => {
    await blog({
        title: '123',
        author: '456',
        body: '789',
        markdown: '66666',
        comments: [{ body: 'CCC'}],
        hidden: false,
        meta: {
            votes: 33,
            favs: 33
        }
    })
})()