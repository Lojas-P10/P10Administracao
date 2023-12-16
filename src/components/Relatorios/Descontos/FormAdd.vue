<template>
  <div>
    <div class="modal-overlay" @click="toggleAddModal" :class="{ hide: addModalHidden }"></div>
    <div id="modal-add-content" :class="[{ hide: addModalHidden }]">
      <header>
        <h2>Novo desconto</h2>
        <button class="btn-blue" @click="toggleAddModal">
          <box-icon name="x" color="white"></box-icon>
        </button>
      </header>
      <form @submit.prevent="add" enctype="multipart/form-data">
        <div class="container-form">
          <label for="nome-input">Nome do desconto</label>
          <input type="text" id="nome-input" v-model="form.descricao" />
        </div>
        <div class="container-form">
          <label for="porcentagem-input">Porcentagem</label>
          <input type="number" id="porcentagem-input" v-model="form.porcentagem" />
        </div>
        <button type="submit" @submit.prevent="add" class="btn-blue">Adicionar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  descricao: '',
  porcentagem: null
})
const addModalHidden = ref(true)

const toggleAddModal = () => {
  addModalHidden.value = !addModalHidden.value
}

const add = async () => {
  addModalHidden.value = true
}
</script>
