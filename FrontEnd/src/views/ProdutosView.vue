<script setup>
import FiltroComp from '../components/FiltroComp.vue';

</script>

<template>
  <div>
    <FiltroComp />
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
          <th>    <button class="add">Adicionar produto</button></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>aq</td>
          <td><a href="#">produto bacana</a></td>
          <td>aq</td>
          <td>aq</td>
          <td>aq</td>
          <td>aq</td>
          <td>aq</td>
          <td>
            <button ><box-icon name='edit'></box-icon></button>
            <button><box-icon name='trash' ></box-icon></button>
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
td button {
  	text-align: center;
	width: 50px;
	padding: 5px 0;
  margin-right: 10px;
	border-radius: 10px;

}
th {
  font-weight: bold;
  padding: 10px;
}
.add {
  background: #00bf63;
  color: white;
  padding: 5px;
  border: 2px solid #018042;
  border-radius: 5px;
  transition: background 0.2s;
  width: 200px;
}
.add:hover {
  cursor: pointer;
  background: #ffffff;
  color: #018042;
}
</style>
