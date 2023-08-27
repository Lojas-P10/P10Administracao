<script setup>
import FornecedoresSection from '../../components/Dashboard/Parceiros/Fornecedores/FornecedoresSection.vue'
import EntradaSection from '../../components/Dashboard/Parceiros/UltimasEntradas/EntradaSection.vue'
import DetalhesSection from '../../components/Dashboard/Parceiros/Detalhes/DetalhesSection.vue'
</script>

<template>
  <div class="app-body-main-content">
    <FornecedoresSection />
    <EntradaSection />
  </div>
  <div class="app-body-sidebar">
    <DetalhesSection />
  </div>
</template>
<style scoped></style>
