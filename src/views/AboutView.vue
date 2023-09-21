<script setup>
</script>

<template>
  <div>
    <button>Adicionar produto</button>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Descrição</th>
          <th>Categoria</th>
          <th>Tag</th>
          <th>Quantidade</th>
          <th>Preço</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>aq</td>
          <td>aq</td>
          <td>aq</td>
          <td>aq</td>
          <td>aq</td>
          <td>aq</td>
          <td>aq</td>
          <td>
            <button @click="editar()">editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!--         <div class="senao" v-else>
          <span class="aviso">Não existem editoras cadastradas</span>
          <i class="bx bx-error"></i>
        </div> -->
</template>

<style scoped>
div {
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
table {
  width: -webkit-fill-available;
  border-radius: 0px;
  border-collapse: collapse;
  margin-top: 10px;
}
thead {
  background-color: #eee;
}
tbody {
  background-color: #f3f3f3;
}
table tr td {
  padding: 10px;
  text-align: center;
}
th {
  font-weight: bold;
  padding: 10px;
}
button {
  background: #5aed83;
  color: white;
  padding: 5px;
  border: 2px solid #018042;
  border-radius: 5px;
  transition: background 0.2s;
  width: 200px;
}
button:hover {
  cursor: pointer;
  background: #ffffff;
  color: #018042;
}
</style>
