<script setup></script>

<template>
  <section class="payment-section">
    <div class="atual">
      <h2>Mais informações</h2>
      <div class="content">
        <div class="card">
          <i class="ph ph-arrow-square-up"></i>
          <div>
            <span class="value">62</span>
            <span class="title"> Fornecedores</span>
          </div>
          <span class="desc">+ 5%</span>
        </div>
        <div class="card">
          <i class="ph ph-arrow-square-up"></i>
          <div>
            <span class="value">32</span>
            <span class="title"> Novos fornecedores</span>
          </div>
          <span class="desc">+ 12%</span>
        </div>
      </div>
    </div>
    <div>
      <h2>Mês passado</h2>
      <div class="content">
        <div class="card">
          <div>
            <span class="value">30</span>
            <span class="title"> Fornecedores</span>
          </div>
        </div>
        <div class="card">
          <div>
            <span class="value">2</span>
            <span class="title"> Novos fornecedores</span>
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
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 36px;
}
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
  position: absolute;
  right: 5%;
}
.card,
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
.exportar i {
  font-size: 1.5em;
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
