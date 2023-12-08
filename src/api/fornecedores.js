import axios from 'axios';
export default class FornecedoresApi {
  async buscarTodosOsFornecedores() {
    const { data } = await axios.get('https://p10backend-eugreg-dev.4.us-1.fl0.io/api/fornecedores/');
    return data;
  }
  async adicionarFornecedor(fornecedor) {
    const { data } = await axios.post('https://p10backend-eugreg-dev.4.us-1.fl0.io/api/fornecedores/', fornecedor);
    return data;
  }
  async atualizarFornecedores(fornecedor) {
    const { data } = await axios.put(`https://p10backend-eugreg-dev.4.us-1.fl0.io/api/fornecedores/${fornecedor.id}/`, fornecedor);
    return data;
  }
  async buscarInformacoesFornecedor(id) {
    try {
      const { data } = await axios.get(`https://p10backend-eugreg-dev.4.us-1.fl0.io/api/fornecedores/${id}/`);
      const produtosDoFornecedor = await this.buscarProdutosDoFornecedor(id);

      // Calcula a quantidade, valor total e unidades dos produtos
      const quantidadeProdutos = produtosDoFornecedor.length;
      const valorTotalProdutos = produtosDoFornecedor.reduce((total, produto) => total + produto.preco, 0);
      const unidadesTotalProdutos = produtosDoFornecedor.reduce((total, produto) => total + produto.quantidade, 0);

      return {
        ...data,
        quantidadeProdutos,
        valorTotalProdutos,
        unidadesTotalProdutos,
      };
    } catch (error) {
      console.error('Erro ao buscar informações do fornecedor:', error);
      throw error;
    }
  }

  async buscarProdutosDoFornecedor(id) {
    try {
      const { data } = await axios.get(`https://p10backend-eugreg-dev.4.us-1.fl0.io/api/produtos/?fornecedor=${id}`);
      return data;
    } catch (error) {
      console.error('Erro ao buscar produtos do fornecedor:', error);
      throw error;
    }
  }
  async excluirFornecedores(id) {
    const { data } = await axios.delete(`https://p10backend-eugreg-dev.4.us-1.fl0.io/api/fornecedores/${id}/`);
    return data;
  }
}