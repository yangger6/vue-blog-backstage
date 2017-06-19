/**
 * Created by yangger on 2017/6/19.
 */
import Log from '../mongo/model/modelLog'
export const add = async (ctx, next) => {
  try {
    let date = new Date().toLocaleString().match(/[0-9]+-[0-9]+-[0-9]+/)[0]   // 只取天数
    const isTodayLog = await Log.findOne({date: date})  // 今天是否已经写了
    if (isTodayLog) {
      isTodayLog.data = ctx.parameters.data
      isTodayLog.save()
      ctx.body = isTodayLog
    } else {
      const log = new Log({
        date: date,
        data: ctx.parameters.data
      })
      log.save()
      ctx.body = log
    }
  } catch (e) {
    console.log(e)
    ctx.body = 'mongo server is Error occurred'
  }
  await next()
}
export const remove = async (ctx, next) => {
  try {
    const removeIds = ctx.parameters._id
    const logs = ctx.parameters.data
    const TodayLog = await Log.findById(removeIds)  // 定位到删除的那天
    TodayLog.data = logs
    TodayLog.save()
    ctx.body = 'success'
  } catch (e) {
    console.log(e)
    ctx.body = 'mongo server is Error occurred'
  }
  await next()
}
export const select = async (ctx, next) => {
  try {
    let data = await Log.find({}).sort({'_id': -1})  // 注意 sort 的写法，上例将查询结果按时间倒序，因为 MongoDB 的 _id 生成算法中已经包含了当前的时间，所以这样写不仅没问题，也是推荐的按时间排序的写法。
    ctx.body = data
  } catch (e) {
    console.log(e)
    ctx.body = 'mongo server is Error occurred'
  }
  await next()
}
