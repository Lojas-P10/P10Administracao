<script setup></script>
<template>
  <form class="filter">
    <div>
      <label>Filtrar por produto</label>
      <input placeholder="batata doce..." type="" />
    </div>
    <div class="container">
      <div class="dropdown">
        <label for="">Fornecedor</label>
        <select class="dropdown-select">
          <option value="">Dias da semana</option>
          <option value="1">Option #1</option>
          <option value="2">Option #2</option>
          <option value="3">Option #3</option>
        </select>
      </div>
      <div class="dropdown">
        <label for="">Categoria</label>
        <select class="dropdown-select">
          <option value="">Dias da semana</option>
          <option value="1">Option #1</option>
          <option value="2">Option #2</option>
          <option value="3">Option #3</option>
        </select>
      </div>
      <div class="dropdown">
        <label for="">Valor unitário</label>
        <select class="dropdown-select">
          <option value="">Dias da semana</option>
          <option value="1">Option #1</option>
          <option value="2">Option #2</option>
          <option value="3">Option #3</option>
        </select>
      </div>
      <div class="dropdown">
        <label for="">Valor Total</label>
        <select class="dropdown-select">
          <option value="">Dias da semana</option>
          <option value="1">Option #1</option>
          <option value="2">Option #2</option>
          <option value="3">Option #3</option>
        </select>
      </div>
    </div>
    <div class="container">
      <div class="dropdown">
        <label for="">Sazonal</label>
        <select class="dropdown-select">
          <option value="">Dias da semana</option>
          <option value="1">Option #1</option>
          <option value="2">Option #2</option>
          <option value="3">Option #3</option>
        </select>
      </div>
      <div class="dropdown">
        <label for="">Desconto</label>
        <select class="dropdown-select">
          <option value="">Dias da semana</option>
          <option value="1">Option #1</option>
          <option value="2">Option #2</option>
          <option value="3">Option #3</option>
        </select>
      </div>
      <div class="dropdown">
        <label for="">Quantidade</label>
        <select class="dropdown-select">
          <option value="">Dias da semana</option>
          <option value="1">Option #1</option>
          <option value="2">Option #2</option>
          <option value="3">Option #3</option>
        </select>
      </div>
    </div>
    <div class="sub-main">
      <button class="btn-gray"><span>Buscar</span></button>
      <button class="btn-gray"><span>Buscar</span></button>
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
  color: var(--c-gray-900);
}
.dropdown:before,
.dropdown:after {
  content: '';
  position: absolute;
  z-index: 2;
  top: 9px;
  right: 10px;
  width: 0;
  height: 0;
  border: 4px dashed;
  pointer-events: none;
}
input,
.dropdown-select {
  background-color: #333;
  border-radius: 10px;
  height: 2.8em;
}
.dropdown:before {
  border-bottom-style: solid;
  border-top: none;
}

.dropdown:after {
  margin-top: 7px;
  border-top-style: solid;
  border-bottom: none;
}

.dropdown-select {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 6px 8px 6px 10px;
  color: #f5f5f5;
  border: 0;
  -webkit-appearance: none;
}

.dropdown-select:focus {
  z-index: 3;
  width: 100%;
  color: #111;
  outline: 2px solid #49aff2;
  outline: 2px solid -webkit-focus-ring-color;
  outline-offset: -2px;
}

.dropdown-select > option {
  margin: 3px;
  padding: 6px 8px;
  text-shadow: none;
  background: #fff;
  border-radius: 3px;
  cursor: pointer;
}
</style>
