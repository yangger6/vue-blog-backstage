/**
 * Created by yangger on 2017/6/7.
 */
import Router from 'koa-router'
import blog from './routerBlog'
import user from './routerUser'
const router = new Router()
router.use('/blog', blog.routes())
router.use('/user', user.routes())
export default router
