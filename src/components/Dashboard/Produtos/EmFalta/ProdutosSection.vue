<script setup>
import ProdutoCard from './ProdutoCard.vue'
import ProdutosApi from '@/api/produtos'
import { ref, computed, onMounted } from 'vue'

const produtosApi = new ProdutosApi()
const produtos = ref([])

const filtrarNome = ref('')

function removerAcento(nome) {
  return nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
const props = defineProps(['produtos'])
defineEmits(['change'])

const FiltroProduto = computed(() =>
  produtos.value.filter((produto) => {
    const produtoNome = removerAcento(produto.nome.toLowerCase())
    const filter = removerAcento(filtrarNome.value.toLowerCase())
    return produtoNome.includes(filter) && produto.quantidade < 20
  })
)
const updateDataList = () => {
  if (filtrarNome.value.length >= 2) {
    const inputText = filtrarNome.value.toLowerCase()
    const fornecedoresFiltrados = props.fornecedores.filter((member) =>
      member.name.toLowerCase().startsWith(inputText)
    )
    dataListfornecedores.value = fornecedoresFiltrados
    showDataList.value = true
  } else {
    showDataList.value = false
  }
}

const dataListfornecedores = ref([])
const showDataList = ref(false)

function AlteraNome(nome) {
  filtrarNome.value = nome
}

onMounted(async () => {
  produtos.value = await produtosApi.buscarProdutosRecentes()
})
</script>

<template>
  <section>
    <h2>Produtos em falta</h2>
    <div class="search-field">
      <form @submit.prevent="filtrarNome">
        <input
          type="text"
          name="produtos"
          list="produtos"
          id="input-search"
          required
          autocomplete="off"
          v-model="filtrarNome"
          @input="updateDataList"
          @keyup.enter="$emit('change', filtrarNome)"
          placeholder="Procure por nome"
        />
        <datalist v-if="showDataList" id="produtos">
          <option v-for="produto of dataListprodutoes" :value="produto.nome" :key="produto.id">
            {{ produto.nome }}
          </option>
        </datalist>
      </form>
      <button class="btn-gray">Pesquisar</button>
    </div>
    <div class="produtos">
      <ProdutoCard
        v-for="produto in FiltroProduto"
        :key="produto.id"
        :imagem="produto.imagem"
        :nome="produto.nome"
        :preco="produto.preco"
        :quantidade="produto.quantidade"
      />
      <p v-if="FiltroProduto.length == 0">
        Este produto não foi encontrado em nossos sistemas
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  margin-top: 2em;
}
h2 {
  margin-bottom: 1.25rem;
}
.produtos {
  display: flex;
  gap: 10px;
}
.search-field {
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
}
.search-field > * + * {
  margin-left: 1.25rem;
}
@media (max-width: 1000px) {
  .search-field {
    display: none;
  }
}

form {
  width: 100%;
}

.icon-button {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: 0;
  background-color: transparent;
  border: 1px solid var(--c-gray-500);
  color: var(--c-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.25s ease;
  flex-shrink: 0;
}
.icon-button.large {
  width: 42px;
  height: 42px;
  font-size: 1.25em;
}
.icon-button i {
  transition: 0.25s ease;
}
.icon-button:hover,
.icon-button:focus {
  background-color: var(--c-gray-600);
  box-shadow: 0 0 0 4px var(--c-gray-800), 0 0 0 5px var(--c-text-tertiary);
}
.search-field div {
  display: flex;
  flex-grow: 1;
  position: relative;
}
.search-field div i {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

button {
  border-radius: 6px;
  background-color: var(--c-gray-700);
  padding: 0.5em 1.5em;
  border: 0;
  color: var(--c-text-secondary);
  transition: 0.25s ease;
  cursor: pointer;
}
button:hover,
button:focus {
  background-color: var(--c-gray-600);
}
</style>
