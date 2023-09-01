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
  <header>
    <h2>Produtos</h2>
  </header>
  <table>
    <thead>
      <tr>
        <th><a>ID</a></th>
        <th><a>Nome</a></th>
        <th><a>Categoria</a></th>
        <th><a>Fornecedor</a></th>
        <th><a>Qtde.</a></th>
        <th><a>Sazonal</a></th>
        <th><a>Desconto</a></th>
        <th><a>Preço</a></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="produto in produtos" :key="produto.id">
        <td>{{ produto.id }}</td>
        <td>{{ produto.nome }}</td>
        <td>{{ categoria.descricao }}(Bonecas)</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        
      </tr>
      </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 2em;
}
h2 {
  margin-bottom: 0;
}
thead {
  background: #2f2f2f;
}

tr {}

td,
th {
  padding: 20px;
  text-align: center;
}

header {
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--c-gray-600);
}
</style>