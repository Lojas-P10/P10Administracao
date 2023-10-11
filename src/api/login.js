import axios from "axios";
export default class LoginApi {
  async Login(user) {
    const response = await axios.post("https://p10backend-eugreg-dev.fl0.io/api/token/", user);
    return response.data
  }
}