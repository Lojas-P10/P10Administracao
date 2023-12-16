<script setup>
import { ref, props, watch, toRefs } from 'vue'
import DescontosApi from "@/api/descontos"
const descontosApi = new DescontosApi()
const { descontoToEdit } = toRefs(props);

const editForm = ref({
  id: '',
  descricao: '',
  porcentagem: null
});
const editModalHidden = ref(true);

const toggleEditModal = () => {
  editModalHidden.value = !editModalHidden.value;
};

const update = async () => {
  if (editForm.value.id) {
    await descontosApi.atualizarDesconto(editForm.value.id, editForm.value);
  }
  editModalHidden.value = true;
};

watch(() => descontoToEdit, (newValue) => {
  editForm.value.id = newValue.id;
  editForm.value.descricao = newValue.descricao;
  editForm.value.porcentagem = newValue.porcentagem;
  toggleEditModal();
});
</script>

<template>
  <div>
    <div class="modal-overlay" @click="toggleEditModal" :class="{ hide: editModalHidden }"></div>
    <div id="modal-edit-content" :class="[{ hide: editModalHidden }]">
      <header>
        <h2>Editar desconto</h2>
        <button class="btn-blue" @click="toggleEditModal">
          <box-icon name="x" color="white"></box-icon>
        </button>
      </header>
      <form @submit.prevent="update" enctype="multipart/form-data">
        <div class="container-form">
          <label for="edit-nome-input">Nome do desconto</label>
          <input type="text" id="edit-nome-input" v-model="editForm.descricao" />
        </div>
        <div class="container-form">
          <label for="edit-porcentagem-input">Porcentagem</label>
          <input type="number" id="edit-porcentagem-input" v-model="editForm.porcentagem" />
        </div>
        <button type="submit" @submit.prevent="update" class="btn-blue">Atualizar</button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
