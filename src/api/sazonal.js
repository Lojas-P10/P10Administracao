import axios from 'axios';
export default class SazonalApi {
  async buscarTodosOsSazonais() {
    const { data } = await axios.get('https://p10backend-eugreg-dev.4.us-1.fl0.io/api/sazonal/');
    return data;
  }
  async adicionarSazonal(sazonal) {
    const { data } = await axios.post('https://p10backend-eugreg-dev.4.us-1.fl0.io/api/sazonal/', sazonal);
    return data;  
  }
  async atualizarSazonal(sazonal) {
    const { data } = await axios.put(`https://p10backend-eugreg-dev.4.us-1.fl0.io/api/sazonal/${sazonal.id}/`, sazonal);
    return data;
  }
  async excluirSazonal(id) {
    const { data } = await axios.delete(`https://p10backend-eugreg-dev.4.us-1.fl0.io/api/sazonal/${id}/`);
    return data;
  }
}