import axios from 'axios';
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const { data } = await axios.get('http://127.0.0.1:8000/api/categorias/');
    return data;
  }
  async adicionarCategoria(categoria) {
    const { data } = await axios.post('http://127.0.0.1:8000/api/categorias/', categoria);
    return data;
  }
  async atualizarCategoria(categoria) {
    const { data } = await axios.put(`http://127.0.0.1:8000/api/categorias/${categoria.id}/`, categoria);
    return data;
  }
  async excluirCategoria(id) {
    const { data } = await axios.delete(`http://127.0.0.1:8000/api/categorias/${id}/`);
    return data;
  }
}