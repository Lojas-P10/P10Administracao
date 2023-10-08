<script setup>
import { ref, onMounted, reactive } from 'vue'

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
const file = ref([]); 
const coverUrls = ref([]);
const tags = ref([])
const updateSubmit = ref(false)
const erro = ref('')
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
const coverUrl = ref('')

async function add() {
  try {

      const imagem = await ImagemApi.uploadImage(file.value);
      form.imagens_attachment_key = imagem.attachment_key;

      await produtosApi.adicionarProduto(form);

      resetForm();

      modalHidden.value = true;

  } catch (error) {
    console.error(error);
  }}



function resetForm() {
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
    imagens_attachment_key: [],
  });
}


function onFileChange(e) {
  const files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    file.value.push(files[i]); 
    coverUrls.value.push(URL.createObjectURL(files[i]));
  }
}




function valorTotal(produto) {
  return (produto.preco * produto.quantidade).toFixed(2)
}
/* const edit = (user) => {
  updateSubmit.value = true;
  form.value.id = user.id;
  form.value.name = user.name;
  form.value.data = user.data;
  form.value.email = user.email;
  form.value.departamento = user.departamento;
};
 */
/* const update = () => {
  axios
    .put("https://p10backend-eugreg-dev.fl0.io/api/produtos/" + form.value.id, {
      name: form.value.name,
      data: form.value.data,
      email: form.value.email,
      departamento: form.value.departamento,
    })
    .then((res) => {
      load();
      form.value.id = "";
      form.value.name = "";
      form.value.data = "";
      form.value.email = "";
      form.value.departamento = "";
      updateSubmit.value = false;
      alert("Usuário alterado");
    })
    .catch((err) => {
      console.log(err);
    });
}; */

/* const del = (user) => {
  if (confirm('Tem certeza que deseja deletar este usuário?')) {
    axios
      .delete('https://p10backend-eugreg-dev.fl0.io/api/produto/' + user.id)
      .then((res) => {
        load()
        const index = produtos.value.findIndex((u) => u.id === user.id)
        if (index !== -1) {
          produtos.value.splice(index, 1)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
} */

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
          <tr v-for="produto in produtos" :key="produto.id">
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
  </div>
  <div class="modal-overlay" @click="toggleModal" :class="{ hide: modalHidden }"></div>
  <div id="modal-content" :class="[{ hide: modalHidden }]">
    <header>
      <h2>Novo Produto</h2>
      <button class="btn-blue" @click="toggleModal">
        <box-icon name="x" color="white"></box-icon>
      </button>
    </header>
    <form @submit.prevent="add" action="https://p10backend-eugreg-dev.fl0.io/api/produtos/" method="POST" enctype="multipart/form-data">
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
              <option
                v-for="categoria of categorias"
                :key="categoria.id"
                :value="categoria.id"
              >
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
                <input type="file" name="file" @change="onFileChange" multiple class="default-image-input" />
                <span class="browse-images-text">Procure pelo seu arquivo</span>
              </span>
            </label>
          </div>
          <div class="cover" v-if="coverUrls.length > 0">
      <img v-for="coverUrl in coverUrls" :src="coverUrl" :key="coverUrl" />
    </div>
        </div>
      </div>
      <button type="submit" class="btn-blue">Adicionar</button>
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
.sticky-left {
  position: sticky;
  z-index: 1;
  width: 13%;
  top: 0;
  background-color: #262626;
  left: 0;
}

.sticky-right {
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: #262626;
  right: 0;
}
.table-wrapper {
  overflow-x: auto;
  max-width: 100%;
}

.th {
  background: #000;
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

.upload-images-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
}

.drag-image-area {
  border: 3px dashed var(--c-green-500);
  border-radius: 10px;
  margin: 10px 0 15px;
  padding: 30px 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.drag-image-area,
.drag-image-area label,
.browse-images {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.drag-image-area h3 {
  margin: 15px 0;
}

.drag-image-area label .browse-images-text {
  color: var(--c-green-500);
  font-weight: bolder;
  cursor: pointer;
}

.browse-images span {
  position: relative;
  top: -25px;
}

.default-image-input {
  opacity: 0;
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
