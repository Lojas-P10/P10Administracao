<script setup>
import {RouterView} from "vue-router";
import MenuLateral from "./components/MenuLateral.vue";
import NavTop from "./components/NavTop.vue";

</script>
<template>
  <MenuLateral />
  <main>
    <NavTop />
    <RouterView />
  </main>
</template>
