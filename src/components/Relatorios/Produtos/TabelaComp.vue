<script setup>
import ProdutosApi from "@/api/produtos";
import { ref, onMounted } from 'vue';

const produtosApi = new ProdutosApi();
const produtos = ref([]);

function valorTotal(produto) {
  return (produto.preco * produto.quantidade).toFixed(2)
}
const modalHidden = ref(true)
const toggleModal = () => {
  modalHidden.value = !modalHidden.value
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
        <th><button @click="toggleModal" class="btn-green"><box-icon name='plus' color="white"></box-icon></button></th>
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
        <td>R${{ produto.preco }}</td>
        <td>R${{ valorTotal(produto) }}</td>
        <!--         <td>{{ categoria.categoria }}(Bonecas)</td>-->

      </tr>
    </tbody>
  </table>
  <div class="modal-overlay" @click="toggleModal" :class="{ hide: modalHidden }"></div>
  <div id="modal-content" :class="[{ hide: modalHidden }]">
    <header>
      <h2>Novo Produto</h2> 
      <button class="btn-green" @click="toggleModal">
        <box-icon name='x' color="white"></box-icon>
      </button>
      <!-- arrumar esse button -->
    </header>
  </div>
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

body.modal-open {
  overflow: hidden;
}

.btn-green {
  padding: 0.5em;
}

thead {
  background: #000;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
  transition: opacity 0.2s, pointer-events 0.2s;
}

.modal-overlay.hide {
  opacity: 0;
  pointer-events: none;
}

#modal-content {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: var(--c-gray-900);
  z-index: 100;
  transition: opacity 0.2s, pointer-events 0.2s;
  opacity: 1;
  padding: 2em;
  pointer-events: all;
  border-radius: 10px;
  height: 80vh;
}

#modal-content.hide,
.hide {
  opacity: 0;
  pointer-events: none;
}

td,
th {
  padding: 20px;
  text-align: center;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>