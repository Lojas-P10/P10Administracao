<script setup>
import ProdutosApi from "@/api/produtos";
import { ref, onMounted } from 'vue';

const produtosApi = new ProdutosApi();
const produtos = ref([]);

function valorTotal(produto) {
  return (produto.preco * produto.quantidade).toFixed(2)
}

onMounted(async () => {
  produtos.value = await produtosApi.buscarTodosOsProdutos()
})

</script>

<template>
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
        <th><a>Valor Unit.</a></th>
        <th><a>Valor Total</a></th>
        <th>Manutenção</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="produto in produtos" :key="produto.id">
        <td>{{ produto.id }}</td>
        <td>{{ produto.nome }}</td>
        <td></td>
        <td></td>
        <td>{{ produto.quantidade }}</td>
        <td></td>
        <td></td>
        <td>{{ produto.preco  }}</td>
        <td>{{ valorTotal(produto) }}</td>
<!--         <td>{{ categoria.categoria }}(Bonecas)</td>
 -->
        
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
  background: #000;
}

td,
th {
  padding: 20px;
  text-align: center;
}


</style>