import axios from "axios";
export default class LoginApi {
  async Login(user) {
    const response = await axios.post("http://127.0.0.1:8000/api/token/", user);
    return response.data
  }
}