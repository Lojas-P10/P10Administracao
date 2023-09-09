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
    </div>
    <div class="dropdown">
      <label for="">Preço</label>
      <input type="text">
    </div>
    <div class="sub-main">
      <button class="button-two"><span>Buscar</span></button>
    </div>
  </form>
</template>

<style scoped>
.filter {
  display: flex;
  align-items: center;
  flex-direction: column;
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

.button-two {
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  background-color: #00bf63;
  padding: 5px;
  color: white;
  border: none;
  transition: all 0.5s;
  margin-top: 5px;
}

.button-two span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button-two span:after {
  content: '»';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button-two:hover span {
  padding-right: 25px;
}

.button-two:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
