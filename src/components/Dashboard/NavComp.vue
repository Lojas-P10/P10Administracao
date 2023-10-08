<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const isRouteActive = (...paths) => {
  return paths.some(path => route.path.includes(path));
};
</script>

<template>
  <nav>
    <div class="navegacao">
      <div class="links">
        <RouterLink to="/dashboard/produtos" :class="{ active: isRouteActive('/dashboard/produtos')}"> Produtos </RouterLink>
        <RouterLink to="/dashboard/parceiros" :class="{ active: isRouteActive('/dashboard/parceiros') }"> Parceiros </RouterLink>
        <RouterLink to="/" > Vendas </RouterLink>
      </div>
    </div>
  </nav>
</template>


<style scoped>
nav {
  margin-bottom: 2em;
}
.links {
  display: flex;
  gap: 3em;
  color: var(--c-text-tertiary);
  border-bottom: 2px solid var(--c-gray-600);
  align-items: center;
}
.links a {
  padding-bottom: 1rem;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  display: inline-flex;
  transition: 0.25s ease;
}
.links a.active,
.links a:hover,
.links a:focus {
  color: var(--c-text-primary);
  border-color: var(--c-text-primary);
}</style>
