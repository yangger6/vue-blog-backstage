/**
 * Created by yangger on 2017/6/9.
 */
import Router from 'koa-router'
import * as schemaUser from './../controller/ParameterValidation/schemaUser'
import * as user from './../controller/user'
const router = new Router()
router.post('/login', schemaUser.login, user.login)
router.post('/register', schemaUser.register, user.register)
router.post('/remove', schemaUser.remove, user.remove)
router.post('/update', schemaUser.update, user.update)
export default router
