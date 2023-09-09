<script setup>
import FiltroComp from '../../components/Relatorios/Produtos/FiltroComp.vue'
import TabelaComp from '../../components/Relatorios/Produtos/TabelaComp.vue'
</script>
<template>
  <main>
    <header>
      <h2>Produtos</h2>
    </header>
    <FiltroComp />
    <TabelaComp />
  </main>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--c-gray-600);
}
</style>
