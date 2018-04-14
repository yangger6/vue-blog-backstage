/**
 * Created by yangger on 2018/4/3.
 */
const Joi = require('joi')
const schema = Joi.object().keys({
  userName: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  email: Joi.string().email()
})
export function Validate (target, propertyKey, descriptor) {
  let oldValue = descriptor.value
  descriptor.value = function () {
    let Parms = arguments[0]
    try {
      const {error, value} = Joi.validate(Parms, schema)
      if (error) {
        let err = {
          error: error.details.map(({message}) => message).join(',')
        }
        return oldValue.call(null, err)
      }
      return oldValue.call(null, value)
    } catch (e) {
      console.log(e)
    }
  }
  return descriptor
}
