/**
 * Created by yangger on 2017/6/7.
 */
import Router from 'koa-router'
import blog from './blog'
const router = new Router()
router.use('/blog', blog.routes())
export default router
