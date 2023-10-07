import axios  from "axios"
class ImagemApi {
  async uploadImage(file) {
    const formData = new FormData()
    formData.set('file', file)
    const response = await axios.post('https://p10backend-eugreg-dev.fl0.io/api/media/images/', formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    return response.data
  }
}

export default new ImagemApi()