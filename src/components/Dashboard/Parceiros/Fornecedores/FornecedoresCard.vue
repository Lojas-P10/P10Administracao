<script setup></script>

<template>
  <article class="tile">
    <div class="tile-header">
      <i class="ph-lightning-light"></i>
      <h3>
        <span>Electricity</span>
        <span>UrkEnergo LTD.</span>
      </h3>
    </div>
    <a href="#">
      <span>Mais informações</span>
      <span class="icon-button">
        <i class="ph-caret-right-bold"></i>
      </span>
    </a>
  </article>
</template>

<style scoped>
.tile {
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--c-olive-500);
  color: var(--c-gray-900);
  min-height: 200px;
  width: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: 0.25s ease;
}
.tile:hover {
  transform: translateY(-5px);
}
.tile:focus-within {
  box-shadow: 0 0 0 2px var(--c-gray-800), 0 0 0 4px var(--c-olive-500);
}
.tile:nth-child(2) {
  background-color: var(--c-green-500);
}
.tile:nth-child(2):focus-within {
  box-shadow: 0 0 0 2px var(--c-gray-800), 0 0 0 4px var(--c-green-500);
}
.tile:nth-child(3) {
  background-color: var(--c-gray-300);
}
.tile:nth-child(3):focus-within {
  box-shadow: 0 0 0 2px var(--c-gray-800), 0 0 0 4px var(--c-gray-300);
}
.tile a {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
}
.tile a .icon-button {
  color: inherit;
  border-color: inherit;
}
.tile a .icon-button:hover,
.tile a .icon-button:focus {
  background-color: transparent;
}
.tile a .icon-button:hover i,
.tile a .icon-button:focus i {
  transform: none;
}
.tile a:focus {
  box-shadow: none;
}
.tile a:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.tile-header {
  display: flex;
  align-items: center;
}
.tile-header i {
  font-size: 2.5em;
}
.tile-header h3 {
  display: flex;
  flex-direction: column;
  line-height: 1.375;
  margin-left: 0.5rem;
}
.tile-header h3 span:first-child {
  font-weight: 600;
}
.tile-header h3 span:last-child {
  font-size: 0.825em;
  font-weight: 200;
}

</style>
