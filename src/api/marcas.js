import axios from 'axios';
export default class MarcaApi {
  async buscarTodasAsMarcas() {
    const { data } = await axios.get('https://p10backend-eugreg-dev.fl0.io/api/marca/');
    return data;
  }
  async adicionarMarca(marca) {
    const { data } = await axios.post('https://p10backend-eugreg-dev.fl0.io/api/marca/', marca);
    return data;
  }
  async atualizarMarca(marca) {
    const { data } = await axios.put(`https://p10backend-eugreg-dev.fl0.io/api/marca/${marca.id}/`, marca);
    return data;
  }
  async excluirMarca(id) {
    const { data } = await axios.delete(`https://p10backend-eugreg-dev.fl0.io/api/marca/${id}/`);
    return data;
  }
}