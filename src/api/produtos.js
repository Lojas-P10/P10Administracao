import axios from 'axios';
export default class ProdutosApi {
  async buscarTodosOsProdutos() {
    const { data } = await axios.get('https://p10backend-eugreg-dev.fl0.io/api/produtos/1/');
    return data;
  }
  async adicionarProduto(produto) {
    const { data } = await axios.post('http://127.0.0.1:8000/api/produtos/', produto);
    return data;
  }
  async atualizarProduto(produto) {
    const { data } = await axios.put(`http://127.0.0.1:8000/api/produtos/${produto.id}/`, produto);
    return data;
  }
  async excluirProduto(id) {
    const { data } = await axios.delete(`http://127.0.0.1:8000/api/produtos/${id}/`);
    return data;
  }
}