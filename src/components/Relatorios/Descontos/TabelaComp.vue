<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import DescontosApi from '@/api/descontos'
const form = ref({
  descricao: '',
  porcentagem: null
})

const descontosApi = new DescontosApi()
const descontos = ref([])
const modalHidden = ref(true)
const isLoading = ref(true)
const updateSubmit = ref(false)

const toggleModal = () => {
  console.log('Before toggle:', updateSubmit.value)
  modalHidden.value = !modalHidden.value
  updateSubmit.value = false // Ensure updateSubmit is false when opening the modal
  console.log('After toggle:', updateSubmit.value)
}
const itemsPerPage = 5
let currentPage = ref(1)

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return descontos.value.slice(startIndex, endIndex)
})

const totalPages = computed(() => Math.ceil(descontos.value.length / itemsPerPage))

const changePage = (increment) => {
  currentPage.value += increment
}

const load = async () => {
  try {
    isLoading.value = true
    descontos.value = await descontosApi.buscarTodosOsDescontos()
    isLoading.value = false
  } catch (err) {
    isLoading.value = false
    console.log(err)
  }
}
async function add() {
  if (updateSubmit.value) {
    await descontosApi.atualizarDesconto(form.value.id, form)
  } else {
    await descontosApi.adicionarDesconto(form.value)
  }
  Object.assign(form, {
    id: '',
    descricao: '',
    porcentagem: null
  })
  modalHidden.value = true
}
const del = (desconto) => {
  if (confirm('Tem certeza que deseja deletar este desconto?')) {
    axios
      .delete(`https://p10backend-eugreg-dev.4.us-1.fl0.io/api/descontos/${desconto.id}/`)
      .then((response) => {
        console.log(response)
        const index = descontos.value.findIndex((u) => u.id === desconto.id)
        if (index !== -1) {
          descontos.value.splice(index, 1)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
const edit = (desconto) => {
  modalHidden.value = false
  updateSubmit.value = true
  form.value.id = desconto.id
  form.value.descricao = desconto.descricao
  form.value.porcentagem = desconto.porcentagem
}
onMounted(() => {
  load()
})
</script>

<template>
  <div v-if="isLoading" class="container-loader"><span class="loader"></span></div>
  <div v-else class="container-table">
    <button @click="toggleModal" class="btn-blue add">
      Adicionar Desconto<box-icon name="plus" color="white"></box-icon>
    </button>
    <table>
      <thead>
        <tr>
          <th class="sticky-left th"><a>Descricao</a></th>
          <th><a>ID</a></th>
          <th><a>Porcentagem</a></th>
          <th class="sticky-right th"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="desconto in paginatedData" :key="desconto.id">
          <td class="sticky-left">{{ desconto.descricao }}</td>
          <td>{{ desconto.id }}</td>
          <td>{{ desconto.porcentagem }}</td>
          <td class="container-manutencao sticky-right">
            <button @click="edit(desconto)" class="btn-green">
              <box-icon color="var(--c-white)" type="solid" name="edit"></box-icon>
            </button>
            <button @click="del(desconto)" class="btn-green">
              <box-icon name="trash-alt" color="var(--c-white)" type="solid"></box-icon>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="all-buttons">
    <button
      class="btn-blue"
      @click="changePage(-1)"
      text="Anterior"
      link="/"
      :disabled="currentPage === 1"
    >
      anterior
    </button>
    <span>{{ currentPage }}</span>
    <button
      class="btn-blue"
      @click="changePage(1)"
      text="Próxima"
      link="/"
      :disabled="currentPage === totalPages"
    >
      proxima
    </button>
  </div>
  <div class="modal-overlay" @click="toggleModal" :class="{ hide: modalHidden }"></div>
  <div id="modal-content" :class="[{ hide: modalHidden }]">
    <header>
      <h2>Novo desconto</h2>
      <button class="btn-blue" @click="toggleModal">
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
</template>

<style scoped>
table {
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
}
.container-table {
  overflow-x: auto;
}
.all-buttons {
  display: flex;
  flex-direction: row;
  gap: 1em;
  margin: 1em 0;
  justify-content: right;
  align-items: center;
}

h2 {
  margin-bottom: 0;
}

form {
  gap: 1em;
  display: flex;
  margin-top: 1em;
  padding: 0 1em;
  overflow-y: scroll;
  height: 40vh;
  flex-direction: column;
}

body.modal-open {
  overflow: hidden;
}

.container-loader {
  width: 100%;
  display: flex;
  padding: 5em;
  justify-content: center;
  align-items: center;
}

.container-manutencao {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.selected-images {
  background-color: var(--c-gray-800);
  width: fit-content;
  padding: 0.5em;
  border-radius: 10px;
}

.btn-blue {
  padding: 0.5em;
}
.add {
  padding-bottom: 2.5em;
  margin-top: 1em;

  margin-bottom: -2em;
}

.container-form {
  display: flex;
  flex-direction: column;
}

.row-3 {
  width: 31%;
}

.row-2 {
  width: 48%;
}

.container-row {
  display: flex;
  justify-content: space-between;
}

button {
  width: fit-content;
}

.container-row input {
  width: 100%;
}

label {
  margin-bottom: 0.6em;
}

thead {
  background: #000;
}

tbody {
  background-color: var(--c-gray-600);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
  transition: opacity 0.2s, pointer-events 0.2s;
}

.input__description {
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: #8d8d8d;
}

.modal-overlay.hide {
  opacity: 0;
  pointer-events: none;
}

#modal-content {
  position: fixed;
  left: 50%;
  top: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: var(--c-gray-900);
  z-index: 100;
  transition: opacity 0.2s, pointer-events 0.2s;
  opacity: 1;
  padding: 2em;
  pointer-events: all;
  border-radius: 10px;
  height: 50vh;
}

#modal-content.hide,
.hide {
  opacity: 0;
  pointer-events: none;
}

td,
th {
  padding: 20px;
  text-align: center;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
