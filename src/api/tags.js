import axios from 'axios';
export default class TagsApi {
  async buscarTodasAsTags() {
    const { data } = await axios.get('https://p10backend-eugreg-dev.fl0.io/api/tag/');
    return data;
  }
  async adicionarTags(tag) {
    const { data } = await axios.post('https://p10backend-eugreg-dev.fl0.io/api/tag/', tag);
    return data;
  }
  async atualizarTags(tag) {
    const { data } = await axios.put(`https://p10backend-eugreg-dev.fl0.io/api/tag/${tag.id}/`, tag);
    return data;  
  }
  async excluirTags(id) {
    const { data } = await axios.delete(`https://p10backend-eugreg-dev.fl0.io/api/tag/${id}/`);
    return data;
  }
}