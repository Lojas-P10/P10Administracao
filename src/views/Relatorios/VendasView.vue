<script setup>
import FiltroComp from "../../components/Relatorios/Vendas/FiltroComp.vue";
import TabelaComp from "../../components/Relatorios/Vendas/TabelaComp.vue";
</script>
<template>
  <main class="app-body-main-content">
    <TabelaComp />
  </main>
  <aside class="app-body-sidebar">
    <FiltroComp />
  </aside>
</template>


<style scoped ></style>