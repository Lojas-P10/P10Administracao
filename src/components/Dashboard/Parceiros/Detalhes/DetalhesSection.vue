<script setup></script>

<template>
  <section class="payment-section">
    <h2>Mais informações</h2>
    <div class="content">
      <div class="card">
        <div>
          <span class="value">23</span>
          <span class="title"> Fornecedores</span>
        </div>
        <span class="desc"> 36 fornecedores no mês passado </span>
      </div>
      <div class="card">
        <div>
          <span class="value">400</span>
          <span class="title">Novos produtos</span>
        </div>
        <span class="desc"> 100 produtos novos no mês passado </span>
      </div>
      <div class="card">
        <div>
          <span class="value">R$ 200</span>
          <span class="title">Gastos nesse mês</span>
        </div>
      </div>
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
.card:nth-child(1) {
  background-color: var(--c-green-500);
}
.card {
  background-color: #111;

  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: 0.25s ease;
}
.card:hover {
  transform: translateY(-5px);
}

.desc {
  font-size: 0.825em;
  font-weight: 200;
  margin: auto;
  text-align: center;
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
