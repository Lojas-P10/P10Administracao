<script setup></script>

<template>
  <nav>
    <div class="navegacao">
      <div class="links">
        <a href="/"> Produtos </a>
        <a href="/dashboard/parceiros" class="active"> Parceiros </a>
        <a href="/"> Descontos </a>
        <a href="/"> Vendas </a>
      </div>
    </div>
  </nav>
  <RouterView />
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
</style>
