<script setup>
import UltProdutos from '../../components/Dashboard/Produtos/UltProdutos/ProdutosSection.vue'
import EmFalta from '../../components/Dashboard/Produtos/EmFalta/ProdutosSection.vue'
import MaisVendidos from '../../components/Dashboard/Produtos/MaisVendidos/VendasSection.vue'
import EmPromocao from '../../components/Dashboard/Produtos/Promocao/ProdutosSection.vue'
import DetalhesSection from '../../components/Dashboard/Produtos/Detalhes/DetalhesSection.vue'
</script>

<template>
  <div class="app-body-main-content">
    <UltProdutos />
    <EmFalta />
    <EmPromocao />
    <MaisVendidos />
  </div>
  <div class="app-body-sidebar">
    <DetalhesSection />
  </div>
</template>
<style scoped></style>
