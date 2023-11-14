import axios from "axios";
export default class LoginApi {
  async Login(user) {
    const response = await axios.post("https://p10backend-eugreg-dev.4.us-1.fl0.io/api/token/", user);
    return response.data
  }
}