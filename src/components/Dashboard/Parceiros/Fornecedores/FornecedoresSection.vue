<script setup>
import FornecedoresCard from './FornecedoresCard.vue'
</script>

<template>
  <section>
    <h2>Fornecedores</h2>
    <div class="search-field">
      <div>
        <i class="ph-magnifying-glass"></i>
        <input type="text" placeholder="Busque por nome ou CNPJ" />
      </div>
      <button>Pesquisar</button>
    </div>
    <div class="fornecedores">
      <FornecedoresCard />
      <FornecedoresCard />
      <FornecedoresCard />
    </div>
  </section>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
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


.search-field div {
  display: flex;
  flex-grow: 1;
  position: relative;
}
.search-field div input {
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 0;
  border-bottom: 1px solid var(--c-gray-600);
  background-color: transparent;
  padding-left: 1.5rem;
}
.search-field div i {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.dropdown-field {
  display: flex;
  flex-grow: 1;
  position: relative;
}
.dropdown-field select {
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 0;
  border-bottom: 1px solid var(--c-gray-600);
  background-color: transparent;
  padding-right: 1.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: var(--c-text-tertiary);
  width: 100%;
}
.dropdown-field i {
  position: absolute;
  right: 0;
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
