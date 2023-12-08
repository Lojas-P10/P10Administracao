<script setup>
import EntradaCard from './EntradaCard.vue'
import ProdutosApi from '@/api/produtos'
import FornecedoresApi from '@/api/fornecedores'
import { ref, onMounted } from 'vue'

const produtosApi = new ProdutosApi()
const fornecedoresApi = new FornecedoresApi()
const produtos = ref([])

onMounted(async () => {
  produtos.value = await produtosApi.buscarTodosOsProdutos()
  for (const produto of produtos.value) {
    produto.fornecedorInfo = await fornecedoresApi.buscarInformacoesFornecedor(
      produto.fornecedor.id
    )
  }
})
</script>

<template>
  <section>
    <header>
      <h2>Últimas entradas dos fornecedores</h2>
    </header>
    <div class="transfers">
      <EntradaCard
        v-for="produto in produtos"
        :key="produto.id"
        :fornecedor="produto.fornecedor.nome"
        :data="produto.data"
        :preco="produto.preco"
        :produtos="produto.produtos"
        :quantidade="produto.quantidade"
        :info="produto.fornecedorInfo" 
      />
    </div>
  </section>
</template>
<style scoped>
section {
  margin-top: 2.5rem;
}

header {
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--c-gray-600);
}
header h2 {
}

.transfers {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
}
</style>
