/**
 * Created by yangger on 2017/6/7.
 */
import Router from 'koa-router'
import * as schemaBlog from './../controller/ParameterValidation/schemaBlog'
import * as blog from './../controller/blog'
const router = new Router()
router.post('/add', schemaBlog.add, blog.add)
router.post('/remove', schemaBlog.remove, blog.remove)
router.post('/update', schemaBlog.update, blog.update)
export default router
