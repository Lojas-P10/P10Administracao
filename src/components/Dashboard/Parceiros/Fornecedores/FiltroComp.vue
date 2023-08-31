<script setup>
import { ref, defineEmits, defineProps, onMounted } from 'vue'
import FornecedoresApi from '@/api/fornecedores'

const fornecedoresApi = new FornecedoresApi();
const fornecedores = ref([]);

const filtrarNome = ref('')
const props = defineProps(['fornecedores'])
defineEmits(['change'])

onMounted(async () => {
    fornecedores.value = await fornecedoresApi.buscarTodosOsFornecedores()
});

const updateDataList = () => {
    if (filtrarNome.value.length >= 2) {
        const inputText = filtrarNome.value.toLowerCase();
        const fornecedoresFiltrados = props.fornecedores.filter(member => member.name.toLowerCase().startsWith(inputText));
        dataListfornecedores.value = fornecedoresFiltrados;
        showDataList.value = true;
    } else {
        showDataList.value = false;
    }
}

const dataListfornecedores = ref([]);
const showDataList = ref(false);

</script>

<template>
    <div class="search-field">
        <form @submit.prevent="filtrarNome">
            <i class="ph-magnifying-glass"></i>
            <input type="text" name="fornecedores" list="fornecedores" id="input-search" required autocomplete="off"
                v-model="filtrarNome" @input="updateDataList" @keyup.enter="$emit('change', filtrarNome)"
                placeholder="Busque por nome ou CNPJ" />
            <datalist v-if="showDataList" id="fornecedores">
                <option v-for="fornecedor of dataListfornecedores" :value="fornecedor.nome" :key="fornecedor.id">
                    {{ fornecedor.nome }}
                </option>
            </datalist>
            <button @click="$emit('change', filtrarNome)">Pesquisar</button>
        </form>
    </div>
</template>


<style scoped>
.search-field {
    display: flex;
    margin-bottom: 16px;
    align-items: center;
    justify-content: space-between;
}

.search-field>*+* {
    margin-left: 1.25rem;
}

@media (max-width: 1000px) {
    .search-field {
        display: none;
    }
}

input:focus-visible {
    outline: 0;
}

.search-field form {
    display: flex;
    flex-grow: 1;
    position: relative;
}

input:focus {
    color: var(--c-white);
    border-bottom: 1px solid var(--c-white);

}

input {
    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border: 0;
    border-bottom: 1px solid var(--c-gray-600);
    background-color: transparent;
    padding-left: 1.5rem;
}

.search-field form i {
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