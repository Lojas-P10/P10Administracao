<script setup>
import { ref, onMounted } from 'vue';

import EntradaCard from "./EntradaCard.vue";
import FornecedoresApi from "@/api/fornecedores";
const fornecedoresApi = new FornecedoresApi();
const fornecedores = ref([]);

onMounted(async () => {
  fornecedores.value = await fornecedoresApi.buscarTodosOsFornecedores()
})
</script>
<template>
  <section>
    <header>
      <h2>Últimas entradas no estoque</h2>
    </header>
    <div class="transfers">
      <EntradaCard />
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
  font-size: 1.5rem;
}

.transfers {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
}


</style>
