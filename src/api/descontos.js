import axios from 'axios';
export default class DescontosApi {
  async buscarTodosOsDescontos() {
    const { data } = await axios.get('http://p10backend-eugreg-dev.fl0.io/api/descontos/');
    return data;
  }
  async adicionarDesconto(desconto) {
    const { data } = await axios.post('http://p10backend-eugreg-dev.fl0.io/api/descontos/', desconto);
    return data;
  }
  async atualizarDesconto(desconto) {
    const { data } = await axios.put(`http://p10backend-eugreg-dev.fl0.io/api/descontos/${desconto.id}/`, desconto);
    return data;
  }
  async excluirDesconto(id) {
    const { data } = await axios.delete(`http://p10backend-eugreg-dev.fl0.io/api/descontos/${id}/`);
    return data;
  }
}