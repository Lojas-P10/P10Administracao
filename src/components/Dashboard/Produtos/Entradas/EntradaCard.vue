<script setup>
defineProps({
  nome: String,
  fornecedor: String,
  produtos: String,
  preco: Number,
  quantidade: Number
})
</script>

<template>
  <div class="card">
    <dl class="desc">
      <div>
        <dt>{{ fornecedor }}</dt>
      </div>
      <div>
        <dd>Produtos</dd>
        <dt>{{ produtos }}</dt>
      </div>
      <div>
        <dd>Valor total</dd>
        <dt>{{ formatarMoeda(preco) }}</dt> <!-- Adicionando uma função para formatar como moeda, você pode ajustar conforme necessário -->
      </div>
      <div>
        <dd>Unidades</dd>
        <dt>{{ quantidade }}</dt>
      </div>
    </dl>
  </div>
</template>

<script>
function formatarMoeda(valor) {
  // Lógica para formatar o valor como moeda (por exemplo, R$ 1,000.00)
  // Você pode usar bibliotecas como 'numeral' ou 'Intl.NumberFormat' para isso
  // Aqui está um exemplo simples:
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}
</script>


<style scoped>
.card {
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 0.875rem;
}
@media (max-width: 1000px) {
  .card {
    align-items: flex-start;
    flex-direction: column;
  }
}
.card + * {
  margin-top: 2rem;
}

.logo {
  background-color: var(--c-gray-200);
  border-radius: 4px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo img {
  width: 45%;
} 
.desc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
@media (max-width: 1000px) {
  .desc {
    flex-wrap: wrap;
    margin-left: 0;
    margin-top: 1rem;
  }
}
.desc div {
  width: calc(100% / 3 - 1rem);
}
@media (max-width: 1000px) {
  .desc div {
    width: 100%;
  }
}
.desc div + div {
  margin-left: 1rem;
}
@media (max-width: 1000px) {
  .desc div + div {
    margin-left: 0;
    margin-top: 1rem;
  }
}
.desc dd {
  color: var(--c-text-tertiary);
  margin-top: 2px;
}

.unid {
  margin-left: 2rem;
  font-size: 1.125rem;
  flex-shrink: 0;
  width: 15%;
  display: flex;
  justify-content: flex-end;
}
@media (max-width: 1000px) {
  .unid {
    margin-left: 0;
    margin-top: 1.25rem;
    width: 100%;
    justify-content: flex-start;
  }
}
</style>
