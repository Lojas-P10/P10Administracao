import axios from 'axios';
export default class ProdutosApi {
  async buscarTodosOsProdutos() {
    const { data } = await axios.get('https://p10backend-eugreg-dev.fl0.io/api/produtos/');
    return data;
  }
  async buscarProdutosRecentes() {
    const { data } = await axios.get('https://p10backend-eugreg-dev.fl0.io/api/produtos/');
    return data.slice(-6).reverse();
  }
  async adicionarProduto(produto) {
    const { data } = await axios.post('https://p10backend-eugreg-dev.fl0.io/api/produtos/', produto);
    return data;
  }
  async atualizarProduto(produto) {
    const { data } = await axios.put(`https://p10backend-eugreg-dev.fl0.io/api/produtos/${produto.id}/`, produto);
    return data;
  }
  async excluirProduto(id) {
    const { data } = await axios.delete(`https://p10backend-eugreg-dev.fl0.io/api/produtos/${id}/`);
    return data;
  }
}