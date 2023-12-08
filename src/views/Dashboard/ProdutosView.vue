<script setup>
import UltProdutos from '../../components/Dashboard/Produtos/UltProdutos/ProdutosSection.vue'
import EmFalta from '../../components/Dashboard/Produtos/EmFalta/ProdutosSection.vue'
/* import MaisVendidos from '../../components/Dashboard/Produtos/MaisVendidos/VendasSection.vue' */
import Entradas from '../../components/Dashboard/Produtos/Entradas/VendasSection.vue'
import EmPromocao from '../../components/Dashboard/Produtos/Promocao/ProdutosSection.vue'
import DetalhesSection from '../../components/Dashboard/Produtos/Detalhes/DetalhesSection.vue'
import NavComp from "../../components/Dashboard/NavComp.vue"
</script>

<template>
  <div class="app-body-main-content">
    <NavComp />
    <UltProdutos />
    <EmFalta />
    <EmPromocao />
<!--     <MaisVendidos /> -->
    <Entradas />
  </div>
  <div class="app-body-sidebar">
    <DetalhesSection />
  </div>
</template>
<style scoped></style>
