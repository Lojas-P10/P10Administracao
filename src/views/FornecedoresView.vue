<script setup>
import FornecedoresApi from "@/api/fornecedores";
import {ref, onMounted} from 'vue';

const fornecedoresApi = new FornecedoresApi();
const fornecedores = ref([]);

onMounted(async() => {
  fornecedores.value = await fornecedoresApi.buscarTodosOsFornecedores()
})
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Endereço</th>
          <th>Telefone</th>
          <th>Email</th>
          <th><button class="add">Adicionar produto</button></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fornecedor in fornecedores" :key="fornecedor.id">
          <td>{{ fornecedor.id }}</td>
          <td>{{ fornecedor.nome }}</td>
          <td>{{ fornecedor.endereco }}</td>
          <td>{{ fornecedor.telefone }}</td>
          <td>{{ fornecedor.email }}</td>
          <td>
            <button><box-icon name='edit'></box-icon></button>
            <button><box-icon name='trash'></box-icon></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!--         <div class="senao" v-else>
          <span class="aviso">Não existem editoras cadastradas</span>
          <i class="bx bx-error"></i>
        </div> -->
</template>

<style scoped>
div {
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

table {
  width: -webkit-fill-available;
  border-radius: 0px;
  border-collapse: collapse;
  margin-top: 10px;
}

thead {
  background-color: #eee;
}

tbody {
  background-color: #f3f3f3;
}

table tr td {
  padding: 10px;
  text-align: center;
}

th {
  font-weight: bold;
  padding: 10px;
}
</style>
