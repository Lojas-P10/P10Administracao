<script setup>
import EntradaCard from "./EntradaCard.vue";
</script>
<template>
  <section>
    <header>
      <h2>Mais vendidos</h2>
    </header>
    <div class="transfers">
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
  font-size: 1.5rem;
}

.transfers {
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
}


</style>
