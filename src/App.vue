<script setup>
import {RouterView} from "vue-router";
import MenuLateral from "./components/MenuLateral.vue";
import NavTop from "./components/NavTop.vue";

</script>
<template>
  <NavTop />
  <main class="app-body">
    <MenuLateral />
    <RouterView />
  </main>
</template>
