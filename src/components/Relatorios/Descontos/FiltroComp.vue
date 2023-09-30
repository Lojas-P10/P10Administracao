<script setup></script>
<template>
  <form class="filter">
    <div class="container">

      <div>
        <label>Filtrar por descrição do desconto</label>
        <input placeholder="batata doce..." type="text" />
      </div>
      <div class="container">
        <div class="dropdown">
          <label for="">Porcentagem</label>
          <select class="dropdown-select">
            <option value="">Dias da semana</option>
            <option value="1">Option #1</option>
            <option value="2">Option #2</option>
            <option value="3">Option #3</option>
          </select>
        </div>
      </div>
    </div>
    <div class="sub-main">
      <button class="btn-green"><span>Buscar</span></button>
    </div>
  </form>
</template>

<style scoped>
.filter {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.sub-main {
  display: flex;
  gap: 1em;
  flex-direction: row;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
form div {
  display: flex;
  gap: 5px;
  flex-direction: column;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
input::placeholder {
  color: var(--c-gray-100);
}

</style>
