/**
 * Created by yangger on 2017/6/7.
 */
import Blog from '../mongo/model/modelBlog'
export const add = async (ctx, next) => {
  try {
    const blog = new Blog(ctx.parameters)
    blog.save()
    ctx.body = blog
  } catch (e) {
    console.log(e)
    ctx.body = 'mongo server is Error occurred'
  }
  await next()
}
export const remove = async (ctx, next) => {
  try {
    const removeIds = ctx.parameters._id
    await Blog.remove({ _id: { $in: removeIds } })
    ctx.body = 'success'
  } catch (e) {
    console.log(e)
    ctx.body = 'mongo server is Error occurred'
  }
  await next()
}
export const select = async (ctx, next) => {
  try {
    if (ctx.parameters) {
      const selectId = ctx.parameters._id
      console.log(selectId)
    } else {
      console.log(2)
      ctx.body = await Blog.find({})
    }
  } catch (e) {
    console.log(e)
    ctx.body = 'mongo server is Error occurred'
  }
  await next()
}
export const update = async (ctx, next) => {
  try {
    const updateId = ctx.parameters._id
    delete ctx.parameters._id
    // 这里的写法很蠢  但是接直接把ctx.parameters 丢进去的话 mongo的utils会报错 return v instanceof Document || RangeError: Maximum call stack size exceeded
    const newData = {
      'title': ctx.parameters.title,
      'author': ctx.parameters.author,
      'body': ctx.parameters.body,
      'markdown': ctx.parameters.markdown,
      'comments': ctx.parameters.comments,
      'hidden': ctx.parameters.hidden,
      'tags': ctx.parameters.tags,
      'meta': ctx.parameters.meta
    }
    await Blog.findByIdAndUpdate(updateId, {$set: newData})
    ctx.body = 'success'
  } catch (e) {
    console.log(e)
    ctx.body = 'mongo server is Error occurred'
  }
  await next()
}
