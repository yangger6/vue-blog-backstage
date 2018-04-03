import validateUser from '../controller/validate/validateUser'
export default class Validate {
  @validateUser('')
  go (data) {
    return 1
  }
}
