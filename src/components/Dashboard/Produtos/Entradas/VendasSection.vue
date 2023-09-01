<script setup>
import EntradaCard from "./EntradaCard.vue";
</script>
<template>
  <section>
    <header>
      <h2>Últimas entradas</h2>
    </header>
    <div class="transfers">
      <EntradaCard />
      <EntradaCard />
      <EntradaCard />
      <EntradaCard />
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
   
}

.transfers {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
}


</style>
