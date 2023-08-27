<script setup></script>

<template>
  <section class="payment-section">
    <h2>Mais informações</h2>
    <div class="content">
      <div class="card">
        <div>
          <span class="value">531</span>
          <span class="title"> Vendas nesse mês</span>
        </div>
        <span class="desc"> 365 vendas no mês passado </span>
      </div>
      <div class="card">
        <div>
          <span class="value">5%</span>
          <span class="title"> De margem de lucro</span>
        </div>
        <span class="desc"> 30% margem de lucro no mês passado </span>
      </div>
      <div class="card">
        <div>
          <span class="value">10</span>
          <span class="title"> Novos produtos</span>
        </div>
        <span class="desc"> 23 novos produtos no mês passado </span>
      </div>
      <div class="card">
        <div>
          <span class="value">5</span>
          <span class="title"> Produtos em promoção</span>
        </div>
        <span class="desc"> 20 Produtos em promoção no mês passado </span>
      </div>
      <div class="card">
        <div>
          <span class="value">8</span>
          <span class="title"> Perdas no estoque</span>
        </div>
        <span class="desc"> 40 Produtos perdidos no mês passado </span>
      </div>
<!--       <div class="card">
        <div>
          <span class="value"><span class="valor">R$</span> 200</span>
          <span class="title">Gastos nesse mês</span>
        </div>
      </div> -->
      <!--fazer um aviso quando o desempenho desse mÊs for inferior ao mês passado-->
    </div>
  </section>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
  margin-bottom: 11px;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 15px;    
}
.title {
  font-weight: 600;
  line-height: 1.375;
}
.card:nth-child(2) .title{
    text-decoration:underline
}
.card:nth-child(1) {
  background: rgb(0, 191, 99);
  color: var(--c-gray-900);
  background: linear-gradient(329deg, rgba(0, 191, 99, 1) 0%, rgba(92, 240, 169, 1) 100%);
}
.card {
  background-color:var(--c-gray-900);

  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: 0.25s ease;
}
.card:hover {
  transform: translateY(-5px);
}
.card:focus-within {
  box-shadow: 0 0 0 2px var(--c-gray-800), 0 0 0 4px var(--c-green-500);
}
.desc {
  font-size: 0.825em;
  font-weight: 200;
  margin: auto;
  text-align: center;
}
.valor {
    color: var(--c-green-500)
}
.card div {
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
}
.value {
  font-size: 2em;
}
</style>
