<script setup>
defineProps({
  nome: String,
  desconto: String,
  imagem: String,
  preco: Number,
  quantidade: Number
})
</script>

<template>
  <div class="card">
    <img :src="imagem" class="img" />
    <div class="text">
      <h3>{{ nome }}</h3> 
      <div class="info">
        <div>
          <span>{{ desconto.descricao }}</span>
        </div>
        <div class="container">
          <div>
            <span class="si">R$</span>
            <span>{{ preco }} unid.</span>
          </div>
          <div>
            <span>{{ quantidade }} unids.</span>
          </div>
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
  color: var(--c-white);
}

.card:hover {
  cursor: pointer;
  transform: translateY(-5px);
}
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  display: flex;
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
  color: var(--c-green-500);
}
</style>
