/**
 * Created by yangger on 2017/6/7.
 */
import Router from 'koa-router'
import blog from './routerBlog'
import user from './routerUser'
import log from './routerLog'
const router = new Router()
// router.use('/blogs', blog.routes())
router.use('/users', user.routes())
// router.use('/logs', log.routes())
export default router
