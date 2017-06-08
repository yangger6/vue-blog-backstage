/**
 * Created by yangger on 2017/6/7.
 */
import Blog from '../mongo/model/modelBlog'
export const add = async (ctx, next) => {
  const blog = new Blog(ctx.parameters)
  blog.save()
  ctx.body = blog
  await next()
}
export const remove = async (ctx, next) => {
  const removeIds = ctx.parameters._id
  await Blog.remove({ _id: { $in: removeIds } })
  await next()
}
export const update = async (ctx, next) => {
  const updateId = ctx.parameters._id
  delete ctx.parameters._id
  console.log(ctx.parameters)
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
  // await Blog.findOneAndUpdate(updateId, {$set: ctx.parameters})
  try {
    await Blog.findByIdAndUpdate(updateId, {$set: newData})
  } catch (e) {
    ctx.body = e
  }
  await next()
}
