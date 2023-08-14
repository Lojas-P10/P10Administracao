import axios from 'axios';
export default class FornecedoresApi {
  async buscarTodosOsFornecedores() {
    const { data } = await axios.get('http://127.0.0.1:8000/api/fornecedores/');
    return data;
  }
  async adicionarFornecedor(fornecedor) {
    const { data } = await axios.post('http://127.0.0.1:8000/api/fornecedores/', fornecedor);
    return data;
  }
  async atualizarFornecedores(fornecedor) {
    const { data } = await axios.put(`http://127.0.0.1:8000/api/fornecedores/${fornecedor.id}/`, fornecedor);
    return data;
  }
  async excluirFornecedores(id) {
    const { data } = await axios.delete(`http://127.0.0.1:8000/api/fornecedores/${id}/`);
    return data;
  }
}