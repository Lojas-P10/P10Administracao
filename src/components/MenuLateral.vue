<script setup>
import 'boxicons'
</script>
<template>
  <nav>
    <div class="routes">
      <RouterLink to="/Dashboard">
        <i class="ph-browsers"></i>
        <span>Dashboard</span>
      </RouterLink>
      <RouterLink to="/categorias">
        <i class="ph-table"></i>
        <span>Tabelas</span>
      </RouterLink>
    </div>
    <footer class="footer">
      <h1>Lojas P10<small>©</small></h1>
      <div>
        geosgrafia (Alter ego de geovana horodeski) ©<br />
      </div>
    </footer>
  </nav>
</template>
<style scoped>
nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (max-width: 1200px) {
  nav {
    display: none;
  }
}
.routes {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--c-text-tertiary);
}
.routes a {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.25s ease;
}
.routes a * {
  transition: 0.25s ease;
}
.routes a i {
  margin-right: 0.75rem;
  font-size: 1.25em;
  flex-shrink: 0;
}
.routes a + a {
  margin-top: 1.25rem;
}
.routes a:hover,
.routes a:focus {
  transform: translateX(4px);
  color: var(--c-text-primary);
}
.footer {
  margin-top: auto;
}
.footer h1 {
  font-size: 1.5rem;
  line-height: 1.125;
  display: flex;
  align-items: flex-start;
}
.footer h1 small {
  font-size: 0.5em;
  margin-left: 0.25em;
}
.footer div {
  border-top: 1px solid var(--c-gray-600);
  margin-top: 1.5rem;
  padding-top: 1rem;
  font-size: 0.75rem;
  color: var(--c-text-tertiary);
}
</style>
