import Validate from "../controller/validate"
export default class ServiceUser {
  async register (data) {
    const validate = new Validate()
    validate.go(data)
    console.log(data)
  }
}
