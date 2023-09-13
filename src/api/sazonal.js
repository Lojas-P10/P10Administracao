import axios from 'axios';
export default class SazonalApi {
  async buscarTodosOsSazonais() {
    const { data } = await axios.get('http://p10backend-eugreg-dev.fl0.io/api/sazonal/');
    return data;
  }
  async adicionarSazonal(sazonal) {
    const { data } = await axios.post('http://p10backend-eugreg-dev.fl0.io/api/sazonal/', sazonal);
    return data;
  }
  async atualizarSazonal(sazonal) {
    const { data } = await axios.put(`http://p10backend-eugreg-dev.fl0.io/api/sazonal/${sazonal.id}/`, sazonal);
    return data;
  }
  async excluirSazonal(id) {
    const { data } = await axios.delete(`http://p10backend-eugreg-dev.fl0.io/api/sazonal/${id}/`);
    return data;
  }
}