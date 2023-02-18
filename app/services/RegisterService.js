import axios from "axios"

const REGISTER_REST_API_URL = "http://localhost:28852/api/auth"

class RegisterService {
  register(name, username, password) {
    const customAxios = axios.create({
      baseURL: REGISTER_REST_API_URL
    })
    customAxios.interceptors.response.use(
      response => {
        window.location.href = "/login"
      },
      error => {
        alert(error)
        window.location.href = "/"
      }
    )
    customAxios.post("user", {
      name: name,
      username: username,
      password: password
    })
  }
}
export default new RegisterService()
