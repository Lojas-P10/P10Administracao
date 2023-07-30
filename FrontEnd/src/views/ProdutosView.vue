<template>
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
    <!--         <div class="senao" v-else>
          <span class="aviso">Não existem editoras cadastradas</span>
          <i class="bx bx-error"></i>
        </div> -->
</template>

<script>
export default {

}
</script>

<style scoped>
table {
  width: -webkit-fill-available;
    margin: 20px;
    border-radius: 0px;
    border: 2px solid #00bf63;
    border-collapse: collapse;
}
thead {
  background-color: #dedede;
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
td button {
  margin-left: 5px;
  background-color: #00bf63;
  color: white;
  padding: 5px;
  width: 50px;
  border-radius: 5px;
}
td button:hover {
  cursor: pointer;
  background-color: #ffffff;
  border: 2px solid #00bf63;
  color: #00bf63;
}
</style>