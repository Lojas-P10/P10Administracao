<script setup>
defineProps({
  nome: String,
  email: String,
})
</script>

<template>
  <div class="card">
    <header>
      <h3>
        <span>{{ nome }}</span>
        <span>{{ email }}</span>
      </h3>
    </header>
    <a href="#">
      <span>Mais informações</span>
      <span class="icon-button">
        <i class="ph-caret-right-bold"></i>
      </span>
    </a>
  </div>
</template>

<style scoped>
.card {
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--c-gray-900);
  color: var(--c-white);
  min-height: 136px;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: 0.25s ease;
}
.card:nth-child(1) {
  background: rgb(0, 191, 99);
  color: var(--c-gray-900);
  background: linear-gradient(329deg, rgba(0, 191, 99, 1) 0%, rgba(92, 240, 169, 1) 100%);
}
.card:hover {
  transform: translateY(-5px);
}
.card:focus-within {
  box-shadow: 0 0 0 2px var(--c-gray-800), 0 0 0 4px var(--c-olive-500);
}
.card a {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
}
.card a .icon-button {
  color: inherit;
  border-color: inherit;
}
.card a .icon-button:hover,
.card a .icon-button:focus {
  background-color: transparent;
}
.card a .icon-button:hover i,
.card a .icon-button:focus i {
  transform: none;
}
.card a:focus {
  box-shadow: none;
}
.card a:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

header {
  display: flex;
  align-items: center;
}
header h3 {
  display: flex;
  flex-direction: column;
  line-height: 1.375;
  margin-left: 0.5rem;
}
header h3 span:first-child {
  font-weight: 600;
}
header h3 span:last-child {
  font-size: 0.825em;
  font-weight: 200;
}

</style>
