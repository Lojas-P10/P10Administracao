<script setup>
import { ref } from 'vue';

const detail = ref(null);
const htmlBody = ref(null);

const toggleOpen = (e) => {
  e.preventDefault();
  detail.value.classList.toggle('open');
  htmlBody.value.classList.toggle('open');
};

</script>
<template>
    <main class="app-body-main-content">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="categoria in categorias" :key="categoria.id">
              <td>{{ categoria.id }}</td>
              <td>{{ categoria.descricao }}</td>
              <td>
                <button @click="editar(categoria)">editar</button>
                <button @click="excluir(categoria)">excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
    </main>
</template>


<style scoped >

</style>