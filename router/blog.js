/**
 * Created by yangger on 2017/6/7.
 */
import Router from 'koa-router'
import * as blog from './../controller/blog'
const router = new Router()
router.get('/add', blog.add, blog.add2)
export default router
