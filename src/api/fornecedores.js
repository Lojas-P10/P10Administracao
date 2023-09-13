import axios from 'axios';
export default class FornecedoresApi {
  async buscarTodosOsFornecedores() {
    const { data } = await axios.get('https://p10backend-eugreg-dev.fl0.io/api/fornecedores/');
    return data;
  }
  async adicionarFornecedor(fornecedor) {
    const { data } = await axios.post('https://p10backend-eugreg-dev.fl0.io/api/fornecedores/', fornecedor);
    return data;
  }
  async atualizarFornecedores(fornecedor) {
    const { data } = await axios.put(`https://p10backend-eugreg-dev.fl0.io/api/fornecedores/${fornecedor.id}/`, fornecedor);
    return data;
  }
  async excluirFornecedores(id) {
    const { data } = await axios.delete(`https://p10backend-eugreg-dev.fl0.io/api/fornecedores/${id}/`);
    return data;
  }
}