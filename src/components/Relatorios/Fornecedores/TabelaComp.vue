<script setup>
/* import { ref, onMounted, reactive } from 'vue'
import SazonalApi from '@/api/sazonal'
import fornecedorsApi from '@/api/fornecedors'
import CategoriasApi from '@/api/categorias'
import FornecedoresApi from '@/api/fornecedores'
import DescontosApi from '@/api/descontos'
import TagsApi from '@/api/tags'
import ImagemApi from '@/api/imagem'

const fornecedorsApi = new fornecedorsApi()
const categoriasApi = new CategoriasApi()
const fornecedoresApi = new FornecedoresApi()
const descontosApi = new DescontosApi()
const sazonalApi = new SazonalApi()
const tagsApi = new TagsApi()

const fornecedors = ref([])
const fornecedores = ref([])
const categorias = ref([])
const descontos = ref([])
const tags = ref([])
const sazonais = ref([])
const isLoading = ref(true)
const modalHidden = ref(true)
const coverUrl = ref('')
const file = ref(null)
const = reactive({
  nome: '',
  descricao: '',
  quantidade: 0,
  preco: 0,
  data: '',
  categoria: '',
  marca: '',
  sazonal: '',
  desconto: '',
  tag: ''
})

function onFileChange(e) {
  file.value = e.target.files[0]
  coverUrl.value = URL.createObjectURL(file.value)
}
const toggleModal = () => {
  modalHidden.value = !modalHidden.value
}

async function save() {
  const imagem = await ImagemApi.uploadImage(file.value)
  cover_attachment_key = imagem.attachment_key
  await fornecedorsApi.adicionarfornecedor(
  Object.assign( {
    nome: '',
    descricao: '',
    quantidade: 0,
    preco: 0,
    data: '',
    categoria: '',
    marca: '',
    sazonal: '',
    desconto: '',
    tag: '',
    cover_attachment_key: ''
  })
}

const valorTotal = (fornecedor) => {
  return (fornecedor.preco * fornecedor.quantidade).toFixed(2)
}
const loadDataFromDatabase = async () => {
  try {
    fornecedors.value = await fornecedorsApi.buscarTodosOsfornecedors()
    fornecedores.value = await fornecedoresApi.buscarTodosOsFornecedores()
    descontos.value = await descontosApi.buscarTodosOsDescontos()
    sazonais.value = await sazonalApi.buscarTodosOsSazonais()
    categorias.value = await categoriasApi.buscarTodasAsCategorias()
    tags.value = await tagsApi.buscarTodasAsTags()
  } catch (error) {
    console.error('Erro ao carregar dados do banco de dados:', error)
  }
  isLoading.value = false
}
onMounted(async () => {
  try {
    await loadDataFromDatabase(); 
  } catch (error) {
    console.error('Erro ao carregar dados do banco de dados:', error);
  }
}); */
import { ref, onMounted } from 'vue'
import axios from 'axios'

const form = ref({
  nome: '',
  cnpj: '',
  cep: '',
  endereco: '',
  telefone: '',
  email: ''
})

const fornecedores = ref([])
const updateSubmit = ref(false)
const erro = ref('')
const modalHidden = ref(true)
const isLoading = ref(false)

const toggleModal = () => {
  modalHidden.value = !modalHidden.value
}
const load = () => {
  axios
    .get('https://p10backend-eugreg-dev.fl0.io/api/fornecedores/')
    .then((res) => {
      fornecedores.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

const add = () => {
  if (
    form.value.nome.length == '' ||
    form.value.endereco.length == '' ||
    form.value.email.length == '' ||
    form.value.telefone.length == '' ||
    form.value.cep.length == '' ||
    form.value.cnpj.length == ''
  ) {
    erro.value = 'Preencha todos os campos'
  } else {
    erro.value = ''
    axios
      .post('https://p10backend-eugreg-dev.fl0.io/api/fornecedores/', form.value)
      .then((response) => {
        console.log(response)
        load()
        form.value.nome = ''
        form.value.endereco = ''
        form.value.email = ''
        form.value.telefone = ''
        form.value.cnpj = ''
        form.value.cep = ''
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

/* const edit = (user) => {
  updateSubmit.value = true;
  form.value.id = user.id;
  form.value.name = user.name;
  form.value.data = user.data;
  form.value.email = user.email;
  form.value.departamento = user.departamento;
};

const update = () => {
  axios
    .put("http://localhost:3000/users/" + form.value.id, {
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
};
*/
const del = (fornecedor) => {
  if (confirm('Tem certeza que deseja deletar este usuário?')) {
    axios
      .delete(`https://p10backend-eugreg-dev.fl0.io/api/fornecedores/${fornecedor.id}/`)
      .then((response) => {
        console.log(response)
        load()
        const index = fornecedores.value.findIndex((u) => u.id === fornecedor.id)
        if (index !== -1) {
          fornecedores.value.splice(index, 1)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

onMounted(() => {
  load()
})
</script>

<template>
  <div v-if="isLoading" class="container-loader"><span class="loader"></span></div>
  <button @click="toggleModal" class="btn-blue">
    Adicionar Fornecedor<box-icon name="plus" color="white"></box-icon>
  </button>
  <div class="container-table">
    <table>
      <thead>
        <tr>
          <th><a>ID</a></th>
          <th><a>Nome</a></th>
          <th><a>Endereço</a></th>
          <th><a>Telefone</a></th>
          <th><a>CEP</a></th>
          <th><a>CNPJ</a></th>
          <th><a>Email</a></th>
          <th>Manutenção</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="fornecedor in fornecedores" :key="fornecedor.id">
          <td>{{ fornecedor.id }}</td>
          <td>{{ fornecedor.nome }}</td>
          <!-- Criar um link para uma página com as informações sobre o fornecedor -->
          <td>{{ fornecedor.endereco }}</td>
          <td>{{ fornecedor.telefone }}</td>
          <td>{{ fornecedor.cep }}</td>
          <td>{{ fornecedor.cnpj }}</td>
          <td>{{ fornecedor.email }}</td>
          <td class="container-manutencao">
            <button class="btn-green">
              <box-icon color="var(--c-white)" type="solid" name="edit"></box-icon>
            </button>
            <button @click="del(fornecedor)" class="btn-green">
              <box-icon name="trash-alt" color="var(--c-white)" type="solid"></box-icon>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="modal-overlay" @click="toggleModal" :class="{ hide: modalHidden }"></div>
  <div id="modal-content" :class="[{ hide: modalHidden }]">
    <header>
      <h2>Novo fornecedor</h2>
      <button class="btn-blue" @click="toggleModal">
        <box-icon name="x" color="white"></box-icon>
      </button>
    </header>
    <form @submit.prevent="add">
      <div class="container-form">
        <label for="nome-input">Nome do fornecedor</label>
        <input type="text" id="nome-input" v-model="form.nome" />
        <p class="input__description">Limite de 5000 caracteres</p>
      </div>
      <div class="container-form">
        <label for="email-input">Email</label>
        <input type="email" id="email-input" v-model="form.email" />
      </div>
      <div class="container-form">
        <label for="endereco-input">Endereço</label>
        <input type="text" id="endereco-input" v-model="form.endereco" />
        <p class="input__description">Limite de 5000 caracteres</p>
      </div>
      <div class="container-form">
        <label for="telefone-input">Telefone</label>
        <input type="tel" id="telefone-input" v-model="form.telefone" />
      </div>
      <div class="container-form">
        <label for="cnpj-input">CNPJ</label>
        <input type="number" id="cnpj-input" v-model="form.cnpj" />
      </div>
      <div class="container-form">
        <label for="cep-input">CEP</label>
        <input type="number" id="cep-input" v-model="form.cep" />
      </div>
      <button @click="add" class="btn-blue">Adicionar</button>
    </form>
  </div>
</template>

<style scoped>
table {
  width: 133%;
  overflow: hidden;
  border-radius: 10px;
}
.container-table {
  overflow-x: auto;
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

.selected-images {
  background-color: var(--c-gray-800);
  width: fit-content;
  padding: 0.5em;
  border-radius: 10px;
}

.btn-blue {
  padding: 0.5em;
  margin-bottom: -2em;
  margin-top: 1em;
  padding-bottom: 2.5em;
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
