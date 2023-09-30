import axios  from "axios"
class ImagemApi {
  async uploadImage(file) {
    const formData = new FormData()
    formData.set('file', file)
    const response = await axios.post('https://151883915366168:F9JDCBFJbDwMEVkoezHm_qeKVfs@api.cloudinary.com/v1_1/dxwrc8dei/resources/image', formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    return response.data
  }
}

export default new ImagemApi()