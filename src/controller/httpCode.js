'use strict'
export default {
  /**
   * [GET]：请求成功  幂等的
   */
  OK: 200,
  /**
   * [POST/PUT/PATCH]:   新建或修改成功
   */
  CREATED: 201,
  /**
   * [*]：添加到队列 (异步任务)
   */
  ACCEPTED: 202,
  /**
   * [DELETE]：删除成功
   */
  NO_CONTENT: 204,
  /**
   * [DELETE]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作
   */
  INVALID_REQUEST: 400,
  /**
   * [POST/PUT/PATCH]：表示用户没有权限（令牌、用户名、密码错误）。
   */
  UNAUTHORIZED: 401,
  /**
   *  服务器理解了本次请求但是拒绝执行该任务，该请求不该重发给服务器。
   */
  FORBIDDEN: 403,
  /**
   * [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作 幂等的
   */
  NOT_FOUND: 404,
  /**
   * [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。
   */
  NOT_ACCEPTBLE: 406,
  /**
   * [GET]：用户请求的资源被永久删除，且不会再得到的。
   */
  Gone: 410,
  /**
   * [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。
   */
  UNPROCESABLE_ENTITY: 422,
  /**
   * [*]：服务器发生错误，用户将无法判断发出的请求是否成功。
   */
  INTERNAL_SERVER_ERROR: 500
}
