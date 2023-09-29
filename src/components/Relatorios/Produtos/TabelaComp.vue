<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const form = ref({
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
  imagem: ''
});

const produtos = ref([]);
const updateSubmit = ref(false);
const erro = ref("");
const departamentos = ref([]);
const isLoading = ref(true)

const load = () => {
  axios
  .get("http://localhost:3000/users")
    .then((res) => {
      users.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
    
  axios
    .get("http://localhost:3000/departamentos")
    .then((res) => {
      departamentos.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const add = () => {
  if (
    form.value.name.length == "" ||
    form.value.data.length == "" ||
    form.value.email.length == "" ||
    form.value.departamento.length == ""
  ) {
    erro.value = "Preencha todos os campos";
  } else {
    erro.value = "";
    axios
      .post("http://localhost:3000/users/", form.value)
      .then((res) => {
        load();
        form.value.name = "";
        form.value.data = "";
        form.value.email = "";
        form.value.departamento = "";
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const edit = (user) => {
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

const del = (user) => {
  if (confirm("Tem certeza que deseja deletar este usuário?")) {
    axios
      .delete("http://localhost:3000/users/" + user.id)
      .then((res) => {
        load();
        const index = users.value.findIndex((u) => u.id === user.id);
        if (index !== -1) {
          users.value.splice(index, 1);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

onMounted(() => {
  load();
});
</script>
  
<template>
  <div v-if="isLoading" class="container-loader"><span class="loader"></span></div>
  <table v-else>
    <thead>
      <tr>
        <th><a>ID</a></th>
        <th><a>Nome</a></th>
        <th><a>Categoria</a></th>
        <th><a>Fornecedor</a></th>
        <th><a>Qtde.</a></th>
        <th><a>Sazonal</a></th>
        <th><a>Desconto</a></th>
        <th><a>Valor Unit.</a></th>
        <th><a>Valor Total</a></th>
        <th>Manutenção</th>
        <th>
          <button @click="toggleModal" class="btn-blue">
            <box-icon name="plus" color="white"></box-icon>
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="produto in produtos" :key="produto.id">
        <td>{{ produto.id }}</td>
        <td>{{ produto.nome }}</td>
        <td>{{ produto.categoria.descricao }}</td>
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
        <td class="container-manutencao">
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

  <div class="modal-overlay" @click="toggleModal" :class="{ hide: modalHidden }"></div>
  <div id="modal-content" :class="[{ hide: modalHidden }]">
    <header>
      <h2>Novo Produto</h2>
      <button class="btn-blue" @click="toggleModal">
        <box-icon name="x" color="white"></box-icon>
      </button>
    </header>
    <form>
      <div class="container-form">
        <label for="">Nome do produto</label>
        <input type="text"  v-model="currentProduto.nome" />
        <p class="input__description">Limite de 5000 caracteres</p>
      </div>
      <div class="container-form">
        <label class="input__label">Descrição</label>
        <textarea v-model="currentProduto.descricao"  class=""></textarea>
        <p class="input__description">Limite de 5000 caracteres</p>
      </div>
      <div class="container-row">
        <div class="container-form row-3">
          <label for="">Preço</label>
          <input v-model="currentProduto.preco" placeholder="R$"  type="number" />
        </div>
        <div class="container-form row-3">
          <label for="">Quantidade</label>
          <input v-model="currentProduto.quantidade" type="number"  />
        </div>
        <div class="container-form row-3">
          <label for="">Data de entrada no estoque</label>
          <input v-model="currentProduto.data" type="date"  />
        </div>
      </div>
      <div class="container-form">
        <label for="">Tags</label>
        <select v-model="currentProduto.tag"  class="dropdown-select">
          <option value="">Defina as tags</option>
          <option v-for="tag of tags" :key="tag.id" :value="tag.descricao">
            {{ tag.descricao }}
          </option>
        </select>
      </div>
      <div class="container-row">
        <div class="container-form row-2">
          <div class="dropdown">
            <label for="">Fornecedor</label>
            <select v-model="currentProduto.fornecedor"  class="dropdown-select">
              <option value="">Escolha um fornecedor</option>
              <option v-for="fornecedor of fornecedores" :key="fornecedor.id" :value="fornecedor.nome">
                {{ fornecedor.nome }}
              </option>
            </select>
          </div>
        </div>
        <div class="container-form row-2">
          <div class="dropdown">
            <label for="">Categoria</label>
            <select  v-model="currentProduto.categoria" class="dropdown-select">
              <option value="">Escolha uma categoria</option>
              <option v-for="categoria of categorias" :key="categoria.id" :value="categoria.descricao">
                {{ categoria.descricao }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="container-row">
        <div class="container-form row-2">
          <div class="dropdown">
            <label for="">Sazonal</label>
            <select v-model="currentProduto.sazonal" class="dropdown-select">
              <option value="">Escolha uma categoria Sazonal</option>
              <option v-for="sazonal of sazonais" :key="sazonal.id" :value="sazonal.nome">
                {{ sazonal.descricao }}
              </option>
            </select>
          </div>
        </div>
        <div class="container-form row-2">
          <div class="dropdown">
            <label for="">Descontos</label>
            <select v-model="currentProduto.desconto" class="dropdown-select">
              <option value="">Escolha um desconto</option>
              <option v-for="desconto of descontos" :key="desconto.id" :value="desconto.descricao">
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
                <input  type="file" @change="onFileChange" class="default-image-input" />
                <span class="browse-images-text">Procure pelo seu arquivo</span>
              </span>
            </label>
          </div>
          <!-- 
          <div class="cover">
            <img v-if="coverUrl" :src="coverUrl" />
          </div> -->
        </div>
        <!-- 
        <ul>
          <li v-for="image in selectedimages" class="selected-images" :key="image.name">
            {{ image.name }}
          </li>
        </ul> -->
      </div>
      <button @click="save" class="btn-blue">Adicionar</button>
    </form>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 2em;
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
