<script setup>
import ProdutosApi from "@/api/produtos";
import { ref, onMounted } from 'vue';
const produtosApi = new ProdutosApi();

const produtos = ref([]);

onMounted(async () => {
  produtos.value = await produtosApi.buscarTodosOsProdutos()
})
</script>

<template>
  <div>
    <FiltroComp />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Categoria</th>
          <th>Fornecedor</th>
          <th>Quantidade</th>
          <th>preco</th>
          <th>Promoção</th>
          <th>Desconto</th>
          <th> <button class="add">Adicionar produto</button></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produto in produtos" :key="produto.id">
          <td>{{ produto.id }}</td>
          <td><a href="#">{{ produto.nome }}</a></td>
          <td>{{ produto.categoria }}</td>
          <td>{{ produto.fornecedor }}</td>
          <td>{{ produto.quantidade }}</td>
          <td>{{ produto.preco }}</td>
          <td>{{ produto.promocao }}</td>
          <td>{{ produto.desconto }}</td>
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
}</style>
