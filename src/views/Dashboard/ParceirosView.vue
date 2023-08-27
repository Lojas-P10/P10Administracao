<script setup>
import FornecedoresSection from "../../components/Dashboard/Parceiros/Fornecedores/FornecedoresSection.vue"
import EntradaSection from "../../components/Dashboard/Parceiros/UltimasEntradas/EntradaSection.vue"
import DetalhesSection from "../../components/Dashboard/Parceiros/Detalhes/DetalhesSection.vue"
</script>

<template>
  <div class="app-body-main-content">
    <nav>
      <div class="navegacao">
        <div class="links">
          <a href="#"> Produtos </a>
          <a href="#" class="active"> Parceiros </a>
          <a href="#"> Descontos </a>
          <a href="#"> Vendas </a>
        </div>
      </div>
    </nav>
    <FornecedoresSection />
    <EntradaSection />
  </div>
  <div class="app-body-sidebar">
    <DetalhesSection />
  </div>
</template>
<style scoped>
nav {
  position : absolute;
  top: 4%;
}
.links {
  display: flex;
  gap: 3em;
  color: var(--c-text-tertiary);
  border-bottom: 2px solid var(--c-gray-600);
  align-items: center;
}
.links a {
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-decoration: none;
  border-top: 2px solid transparent;
  display: inline-flex;
  transition: 0.25s ease;
}
.links a.active,
.links a:hover,
.links a:focus {
  color: var(--c-text-primary);
  border-color: var(--c-text-primary);
}

.mobile-only {
  display: none;
}
@media (max-width: 1000px) {
  .mobile-only {
    display: inline-flex;
  }
}

</style>
