/**
 * Created by yangger on 2018/4/3.
 */
export default function validateUser (mode) {
  console.log(mode)
  return (target, propertyKey, descriptor) => {
    var oldValue = descriptor.value;
    descriptor.value = function () {
      let data = oldValue.apply(null, [arguments[0]])
    }
    console.log(arguments)
    return descriptor;
  }
}
