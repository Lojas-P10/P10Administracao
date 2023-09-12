<script setup>
import ProdutoCard from './ProdutoCard.vue'
</script>

<template>
  <section>
    <h2>Produtos com desconto</h2>
    <div class="search-field">
      <div>
        <i class="ph-magnifying-glass"></i>
        <input type="text" placeholder="Buscar por nome ou fornecedor" />
      </div>
      <button class="btn-gray">Pesquisar</button>
    </div>
    <div class="fornecedores">
      <ProdutoCard />
      <ProdutoCard />
      <ProdutoCard />
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 2em;
}
h2 {
     
  margin-bottom: 1.25rem;
}
.fornecedores {
  display: flex;
  gap: 10px
} 
.search-field {
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
}
.search-field > * + * {
  margin-left: 1.25rem;
}
@media (max-width: 1000px) {
  .search-field {
    display: none;
  }
}

.icon-button {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: 0;
  background-color: transparent;
  border: 1px solid var(--c-gray-500);
  color: var(--c-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.25s ease;
  flex-shrink: 0;
}
.icon-button.large {
  width: 42px;
  height: 42px;
  font-size: 1.25em;
}
.icon-button i {
  transition: 0.25s ease;
}
.icon-button:hover,
.icon-button:focus {
  background-color: var(--c-gray-600);
  box-shadow: 0 0 0 4px var(--c-gray-800), 0 0 0 5px var(--c-text-tertiary);
}
.search-field div {
  display: flex;
  flex-grow: 1;
  position: relative;
}
.search-field div i {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

button {
  border-radius: 6px;
  background-color: var(--c-gray-700);
  padding: 0.5em 1.5em;
  border: 0;
  color: var(--c-text-secondary);
  transition: 0.25s ease;
  cursor: pointer;
}
button:hover,
button:focus {
  background-color: var(--c-gray-600);
}
</style>
