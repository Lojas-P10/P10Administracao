<script setup>
import { ref, onMounted, reactive, computed, onBeforeUnmount } from 'vue'

import ImagemApi from '@/api/imagem'
import SazonalApi from '@/api/sazonal'
import ProdutosApi from '@/api/produtos'
import CategoriasApi from '@/api/categorias'
import FornecedoresApi from '@/api/fornecedores'
import DescontosApi from '@/api/descontos'
import TagsApi from '@/api/tags'
import MarcaApi from '@/api/marcas'

const produtosApi = new ProdutosApi()
const categoriasApi = new CategoriasApi()
const fornecedoresApi = new FornecedoresApi()
const tagsApi = new TagsApi()
const descontosApi = new DescontosApi()
const sazonalApi = new SazonalApi()
const marcaApi = new MarcaApi()

const form = reactive({
  nome: '',
  descricao: '',
  quantidade: 0,
  preco: 0,
  data: null,
  categoria: null,
  marca: null,
  sazonal: null,
  desconto: null,
  tag: []
})

const produtos = ref([])
const descontos = ref([])
const sazonais = ref([])
const categorias = ref([])
const marcas = ref([])
const fornecedores = ref([])
const file = ref([])
const coverUrl = ref([''])
const tags = ref([])
const isLoading = ref(true)
const modalHidden = ref(true)

const toggleModal = () => {
  modalHidden.value = !modalHidden.value
}

const load = async () => {
  try {
    isLoading.value = true
    produtos.value = await produtosApi.buscarTodosOsProdutos()
    fornecedores.value = await fornecedoresApi.buscarTodosOsFornecedores()
    descontos.value = await descontosApi.buscarTodosOsDescontos()
    sazonais.value = await sazonalApi.buscarTodosOsSazonais()
    categorias.value = await categoriasApi.buscarTodasAsCategorias()
    marcas.value = await marcaApi.buscarTodasAsMarcas()
    tags.value = await tagsApi.buscarTodasAsTags()
    isLoading.value = false
  } catch (err) {
    isLoading.value = false
    console.error(err)
  }
}

async function add() {
  const imagens = await Promise.all(file.value.map((file) => ImagemApi.uploadImage(file)))
  form.imagens_attachment_keys = imagens.map((imagem) => imagem.attachment_key)

  await produtosApi.adicionarProduto(form)
  Object.assign(form, {
    id: '',
    nome: '',
    descricao: '',
    quantidade: 0,
    preco: 0,
    data: null,
    categoria: null,
    marca: null,
    sazonal: null,
    desconto: null,
    tag: [],
    imagens_attachment_key: []
  })
  modalHidden.value = true
}



function onFileChange(e) {
  coverUrl.value = []
  file.value.push(...e.target.files)
  coverUrl.value = file.value.map((file) => URL.createObjectURL(file))
}

onBeforeUnmount(() => {
  if (coverUrl.value) {
    URL.revokeObjectURL(coverUrl.value)
  }
})

function valorTotal(produto) {
  return (produto.preco * produto.quantidade).toFixed(2)
}
const itemsPerPage = 5
let currentPage = ref(1)

const paginatedData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return produtos.value.slice(startIndex, endIndex)
})

const totalPages = computed(() => Math.ceil(produtos.value.length / itemsPerPage))

const changePage = (increment) => {
  currentPage.value += increment
}

onMounted(() => {
  load()
})
</script>

<template>
  <div v-if="isLoading" class="container-loader"><span class="loader"></span></div>
  <div v-else>
    <button @click="toggleModal" class="btn-blue add">
      Adicionar Produto<box-icon name="plus" color="white"></box-icon>
    </button>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th class="sticky-left th"><a>Nome</a></th>
            <th><a>ID</a></th>
            <th><a>Categoria</a></th>
            <th><a>Marca</a></th>
            <th><a>Fornecedor</a></th>
            <th><a>Qtde.</a></th>
            <th><a>Sazonal</a></th>
            <th><a>Desconto</a></th>
            <th><a>Valor Unit.</a></th>
            <th><a>Valor Total</a></th>
            <th class="sticky-right th"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="produto in paginatedData" :key="produto.id">
            <td class="sticky-left">{{ produto.nome }}</td>
            <td>{{ produto.id }}</td>
            <td>{{ produto.categoria.descricao }}</td>
            <td>{{ produto.marca.nome }}</td>
            <td>{{ produto.fornecedor.nome }}</td>
            <td>{{ produto.quantidade }}</td>
            <td v-if="produto.sazonal">{{ produto.sazonal.descricao }}</td>
            <td v-else><box-icon name="block" size="2em" color="var(--c-blue-500)"></box-icon></td>
            <td v-if="produto.desconto">
              {{ produto.desconto.descricao }} ({{ produto.desconto.porcentagem }}%)
            </td>
            <td v-else><box-icon name="block" size="2em" color="var(--c-blue-500)"></box-icon></td>
            <td>R${{ produto.preco }}</td>
            <td>R${{ valorTotal(produto) }}</td>
            <td class="container-manutencao sticky-right">
              <button class="btn-green">
                <box-icon color="var(--c-white)" type="solid" name="edit"></box-icon>
              </button>
              <button class="btn-green">
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
  </div>
  <div class="modal-overlay" @click="toggleModal" :class="{ hide: modalHidden }"></div>
  <div id="modal-content" :class="[{ hide: modalHidden }]">
    <header>
      <h2>Novo Produto</h2>
      <button class="btn-blue" @click="toggleModal">
        <box-icon name="x" color="white"></box-icon>
      </button>
    </header>
    <form @submit.prevent="add" enctype="multipart/form-data">
      <div class="container-form">
        <label for="">Nome do produto</label>
        <input v-model="form.nome" type="text" />
        <p class="input__description">Limite de 5000 caracteres</p>
      </div>
      <div class="container-form">
        <label class="input__label">Descrição</label>
        <textarea v-model="form.descricao" class=""></textarea>
        <p class="input__description">Limite de 5000 caracteres</p>
      </div>
      <div class="container-row">
        <div class="container-form row-3">
          <label for="">Preço</label>
          <input v-model="form.preco" placeholder="R$" type="number" />
        </div>
        <div class="container-form row-3">
          <label for="">Quantidade</label>
          <input v-model="form.quantidade" type="number" />
        </div>
        <div class="container-form row-3">
          <label for="">Data de entrada no estoque</label>
          <input type="date" v-model="form.data" />
        </div>
      </div>
      <div class="container-form">
        <label for="">Tags</label>
        <select v-model="form.tag" multiple class="dropdown-select">
          <option value="">Defina as tags</option>
          <option v-for="tag of tags" :key="tag.id" :value="tag.id">
            {{ tag.descricao }}
          </option>
        </select>
      </div>
      <div class="container-row">
        <div class="container-form row-3">
          <div class="dropdown">
            <label for="">Fornecedor</label>
            <select v-model="form.fornecedor" class="dropdown-select">
              <option value="">Escolha um fornecedor</option>
              <option
                v-for="fornecedor of fornecedores"
                :key="fornecedor.id"
                :value="fornecedor.id"
              >
                {{ fornecedor.nome }}
              </option>
            </select>
          </div>
        </div>
        <div class="container-form row-3">
          <div class="dropdown">
            <label for="">Categoria</label>
            <select v-model="form.categoria" class="dropdown-select">
              <option value="">Escolha uma categoria</option>
              <option v-for="categoria of categorias" :key="categoria.id" :value="categoria.id">
                {{ categoria.descricao }}
              </option>
            </select>
          </div>
        </div>
        <div class="container-form row-3">
          <div class="dropdown">
            <label for="">Marca</label>
            <select v-model="form.marca" class="dropdown-select">
              <option value="">Escolha uma marca</option>
              <option v-for="marca of marcas" :key="marca.id" :value="marca.id">
                {{ marca.nome }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="container-row">
        <div class="container-form row-2">
          <div class="dropdown">
            <label for="">Sazonal</label>
            <select v-model="form.sazonal" class="dropdown-select">
              <option value="">Escolha uma categoria Sazonal</option>
              <option v-for="sazonal of sazonais" :key="sazonal.id" :value="sazonal.id">
                {{ sazonal.descricao }}
              </option>
            </select>
          </div>
        </div>
        <div class="container-form row-2">
          <div class="dropdown">
            <label for="">Descontos</label>
            <select class="dropdown-select">
              <option value="">Escolha um desconto</option>
              <option v-for="desconto of descontos" :key="desconto.id" :value="desconto.id">
                {{ desconto.descricao }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="container-form">
        <label for="">Imagens</label>
        <div class="upload-images-container">
          <div class="drag-image-area">
            <h3>Jogue seu arquivo aqui</h3>
            <label>
              ou
              <span class="browse-images">
                <input
                  type="file"
                  name="file"
                  @change="onFileChange"
                  multiple
                  class="default-image-input"
                />
                <span class="browse-images-text">Procure pelo seu arquivo</span>
              </span>
            </label>
          </div>
          <div class="cover">
            <img v-for="url in coverUrl" :key="url" :src="url" />
          </div>
        </div>
      </div>
      <button type="submit" @submit.prevent="add" class="btn-blue">Adicionar</button>
    </form>
  </div>
</template>

<style scoped>
table {
  width: 133%;
  overflow: auto;
  border-radius: 10px;
  border-collapse: collapse;
  table-layout: fixed;
}

.all-buttons {
  display: flex;
  flex-direction: row;
  gap: 1em;
  margin: 1em 0;
  justify-content: right;
  align-items: center;
}

th {
  width: fit-content;
  white-space: nowrap;
}

td {
  vertical-align: middle;
  white-space: nowrap;
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
  height: 65vh;
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
  position: sticky;
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
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: var(--c-gray-900);
  z-index: 100;
  transition: opacity 0.2s, pointer-events 0.2s;
  opacity: 1;
  padding: 2em;
  pointer-events: all;
  border-radius: 10px;
  height: 80vh;
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
