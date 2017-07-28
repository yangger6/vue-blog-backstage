/**
 * Created by yangger on 2017/6/19.
 */
/**
 * Created by yangger on 2017/6/7.
 */
import Router from 'koa-router'
import * as schemaLog from './../controller/ParameterValidation/schemaLog'
import * as log from './../controller/log'
const router = new Router()
router.post('/add', schemaLog.add, log.add)
router.post('/remove', schemaLog.remove, log.remove)
router.post('/select', log.select)
export default router
