<script setup>
import { ref, onMounted } from 'vue';
const promocaoApi = new PromocaoApi();

const promocoes = ref([]);

onMounted(async () => {
  promocoes.value = await promocaoApi.buscarTodasAsPromocoes()
})
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Promoção</th>
          <th>Porcentagem</th>
          <th><button class="add">Adicionar produto</button></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="promocao in promocoes" :key="promocao.id">
          <td>{{  }}</td>
          <td>{{  }}</td>
          <td>{{  }}</td>
          <td>{{  }}</td>
          <td>{{  }}</td>
          <td>{{  }}</td>
          <td>{{  }}</td>
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
