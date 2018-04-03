/**
 * Created by yangger on 2017/6/9.
 */
import Router from 'koa-router'
import { UserController } from './../controller/user'
const user = new UserController()
const router = new Router()
// const user = new UserController()
// router.post('/login', schemaUser.login, user.login)
// router.post('/register', schemaUser.register, user.register)
// router.post('/remove', schemaUser.remove, user.remove)
// router.post('/update', schemaUser.update, user.update)
router.post('/', user.register)
export default router
