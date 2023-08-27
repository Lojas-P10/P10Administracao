<script setup></script>

<template>
  <div class="card">
    <div class="img"></div>
    <div class="text">
      <h3>Produto</h3>
      <div class="info">
        <div>
          <span class="si">R$</span>
          <span>2,00 unid.</span>
        </div>
        <div>
          <span class="estoque">2 unid.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 280px;
  background: var(--c-gray-900);
  border-radius: 8px;
  transition: 0.25s ease;
  color: var(--c-white)
}
.estoque {
  color: red;
  font-weight: 600;
}
.card:hover {
  cursor: pointer;
  transform: translateY(-5px);
}
.info  {
  display: flex;
  justify-content: space-around;
}
.img {
  width: 100%;
  height: 7em;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: rgb(0, 191, 99);
  background: linear-gradient(329deg, rgba(0, 191, 99, 1) 0%, rgba(92, 240, 169, 1) 100%);
  display: flex;
  align-items: top;
  justify-content: right;
}


.text {
  padding: 1em;
  display: flex;
  flex-direction: column;
}

h3 {
  text-align: center;
}

span {
  color: #999999;
  font-size: 13px;
  margin: 0px;
  text-align: center;
  padding: 5px;
}
.info .si {
  color: var(--c-green-500)
}
</style>
