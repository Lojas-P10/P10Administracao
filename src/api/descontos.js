import axios from 'axios';

export default class descontosApi {
  async buscarTodosOsDescontos() {
    const { data } = await axios.get('https://p10backend-eugreg-dev.4.us-1.fl0.io/api/descontos/');
    return data;
  }

  async adicionarDesconto(desconto) {
    let response;
    if (desconto.id) {
      response = await axios.put(
        `https://p10backend-eugreg-dev.4.us-1.fl0.io/api/descontos/${desconto.id}/`,
        desconto
      );
    } else {
      response = await axios.post(
        "https://p10backend-eugreg-dev.4.us-1.fl0.io/api/descontos/",
        desconto
      );
    }
    return response.data;
  }

  async atualizarDesconto(desconto) {
    const { data } = await axios.put(`https://p10backend-eugreg-dev.4.us-1.fl0.io/api/descontos/${desconto.id}/`, desconto);
    return data;
  }

  async excluirDesconto(id) {
    const { data } = await axios.delete(`https://p10backend-eugreg-dev.4.us-1.fl0.io/api/descontos/${id}/`);
    return data;
  }
}
