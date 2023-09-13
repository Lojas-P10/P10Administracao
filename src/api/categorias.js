import axios from 'axios';
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const { data } = await axios.get('https://p10backend-eugreg-dev.fl0.io/api/categorias/');
    return data;
  }
  async adicionarCategoria(categoria) {
    const { data } = await axios.post('https://p10backend-eugreg-dev.fl0.io/api/categorias/', categoria);
    return data;
  }
  async atualizarCategoria(categoria) {
    const { data } = await axios.put(`https://p10backend-eugreg-dev.fl0.io/api/categorias/${categoria.id}/`, categoria);
    return data;
  }
  async excluirCategoria(id) {
    const { data } = await axios.delete(`https://p10backend-eugreg-dev.fl0.io/api/categorias/${id}/`);
    return data;
  }
}