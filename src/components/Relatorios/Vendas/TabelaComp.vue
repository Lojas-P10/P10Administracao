<script setup></script>

<template>
  <header>
    <h2>Vendas</h2>
  </header>
  <table>
    <thead>
      <tr>
        <th><a>Última venda</a></th>
        <th><a>Categoria</a></th>
        <!--ideia: Brinquedos(bonecas)-->
        <th><a>Produto</a></th>
        <th><a>Fornecedor</a></th>
        <th><a>Qtde.</a></th>
        <th><a>Frete</a></th>
        <th><a>filial</a></th>
        <th><a>Venda Total</a></th>
        <th><a>Lucro Total</a></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Tom</td>
        <td>2</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>5</td>
      </tr>
      </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 2em;
}
h2 {
  margin-bottom: 0;
}
thead {
  background: #2f2f2f;
}

tr {}

td,
th {
  padding: 20px;
  text-align: center;
}

header {
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--c-gray-600);
}
</style>