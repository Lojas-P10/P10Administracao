<script setup></script>

<template>
  <section class="payment-section">
    <div class="atual">
      <h2>Mais informações</h2>
      <div class="content">
        <div class="card">
          <i class="ph ph-arrow-square-up"></i>

          <div>
            <span class="value">531</span>
            <span class="title"> Vendas nesse mês</span>
          </div>
        </div>
        <div class="card">
          <i class="ph ph-arrow-square-up"></i>

          <div>
            <span class="value">5%</span>
            <span class="title"> De margem de lucro</span>
          </div>
        </div>
        <div class="card">
          <i class="ph ph-arrow-square-up"></i>

          <div>
            <span class="value">10</span>
            <span class="title"> Novos produtos</span>
          </div>
        </div>
        <div class="card">
          <i class="ph ph-arrow-square-up"></i>

          <div>
            <span class="value">5</span>
            <span class="title"> Produtos em promoção</span>
          </div>
        </div>
        <div class="card">
          <i class="ph ph-arrow-square-up"></i>

          <div>
            <span class="value">8</span>
            <span class="title"> Perdas no estoque</span>
          </div>
        </div>
      </div>
    </div>

    <div class="btn">
      <span class="title"> Meses anteriores</span>
      <i class="ph ph-caret-right"></i>
    </div>
    <div class="exportar">
      <div class="btn">
        <span class="title"> Exportar para PDF</span>
      </div>
      <div class="btn">
        <span class="title"> Exportar para Excel</span>
      </div>
    </div>
    <!--       <div class="card">
        <div>
          <span class="value"><span class="valor">R$</span> 200</span>
          <span class="title">Gastos nesse mês</span>
        </div>
      -->
    <!--fazer um aviso quando o desempenho desse mÊs for inferior ao mês passado-->
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 36px;
}
h2 {
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
.atual .card:nth-child(2) .title {
  text-decoration: underline;
}
.atual .card:nth-child(1) {
  background: rgb(0, 191, 99);
  color: var(--c-gray-900);
  background: linear-gradient(329deg, rgba(0, 191, 99, 1) 0%, rgba(92, 240, 169, 1) 100%);
}
.card i {
  font-size: 1.5em;
}
.card {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  background-color: var(--c-gray-900);
  transition: 0.25s ease;
  padding: 1rem;
}
.btn {
  background-color: var(--c-gray-900);

  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: 0.25s ease;
}
.btn {
  text-align: center;
  background-color: transparent;
  display: flex;
  border: 1px solid;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
}
.btn:hover,
.btn:focus {
  background-color: var(--c-gray-600);
  box-shadow: 0 0 0 4px var(--c-gray-800), 0 0 0 5px var(--c-text-tertiary);
}
.exportar {
  display: flex;
  justify-content: space-between;
}
.exportar .btn {
  width: 48%;
}
.card:hover {
  transform: translateY(-5px);
}
.card:focus-within {
  box-shadow: 0 0 0 2px var(--c-gray-800), 0 0 0 4px var(--c-green-500);
}
.desc {
  font-size: 1em;
  font-weight: 200;
  margin: auto;
  text-align: center;
}
.valor {
  color: var(--c-green-500);
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
