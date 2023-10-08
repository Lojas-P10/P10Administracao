<template>
  <div class="app-body">
    <NavTop v-if="!$route.meta.hideNavTop" />
    <div class="container">
      <MenuLateral v-if="!$route.meta.hideMenuLateral" />
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import MenuLateral from "./components/MenuLateral.vue";
import NavTop from "./components/NavTop.vue";


</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 2em
}
</style>
