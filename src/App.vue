<script setup>
import { RouterView } from "vue-router";
import MenuLateral from "./components/MenuLateral.vue";
import NavTop from "./components/NavTop.vue";

</script>
<template>
  <NavTop />
  <div class="app-body">
    <MenuLateral />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1em
}
</style>