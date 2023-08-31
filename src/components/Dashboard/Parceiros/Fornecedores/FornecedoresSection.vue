<script setup>
import FornecedoresCard from './FornecedoresCard.vue'
import FornecedoresApi from "@/api/fornecedores";
import { ref, computed, onMounted } from 'vue';
import FiltroComp from "./FiltroComp.vue"

const fornecedoresApi = new FornecedoresApi();
const fornecedores = ref([]);

const filtrarNome = ref('')

function removerAcento(nome) {
  return nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const FiltroFornecedores = computed(() =>
  fornecedores.value.filter((m) => {
    const fornecedorNome = removerAcento(m.nome.toLowerCase())
    const filter = removerAcento(filtrarNome.value.toLowerCase())
    return fornecedorNome.includes(filter)
  })
)

function AlteraNome(nome) {
  filtrarNome.value = nome
}


onMounted(async () => {
  fornecedores.value = await fornecedoresApi.buscarTodosOsFornecedores()
})
</script>

<template>
  <section>
    <h2>Fornecedores</h2>
    <FiltroComp :fornecedores="fornecedores" @change="AlteraNome" />
    <div  class="fornecedores">
      <FornecedoresCard v-for="fornecedor in FiltroFornecedores" :key="fornecedor.key" :nome="fornecedor.nome"
        :email="fornecedor.email" />
        <p v-if="FiltroFornecedores.length == 0">Este fornecedor não foi encontrado em nossos sistemas</p>
    </div>
    <div >
    </div>
  </section>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
}

.fornecedores {
  display: flex;
  gap: 10px;
  overflow: auto;
  white-space: nowrap;
  width: 115vh;
  padding: 18px 0;
}
</style>
