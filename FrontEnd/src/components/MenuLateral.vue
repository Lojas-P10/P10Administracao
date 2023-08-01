<script>
import 'boxicons'
import { RouterLink } from 'vue-router'
export default { components: { RouterLink } }
</script>
<template>
  <nav>
    <div class="perfil-usuario">
      <img src="/src/assets/img/edudasilva.jpeg" alt="Foto do usuário" />
      <h2>Eduardo da Silva</h2>
      <h3>@edudasilva</h3>
    </div>
    <div class="links">
      <ul>
        <li>
          <box-icon name="layout"></box-icon>
          <RouterLink to="/">
             DASHBOARD 
          </RouterLink>
        </li>
        <li>
          <box-icon name="package"></box-icon>
          <RouterLink to="/produtos">
             PRODUTOS
          </RouterLink>
        </li>
        <li>
          <box-icon name="category"></box-icon>
          <RouterLink to="/categorias">
             CATEGORIAS 
          </RouterLink>
        </li>
        <li>
          <box-icon name="user-pin"></box-icon>
          <RouterLink to="/fornecedores">
             FORNECEDORES
          </RouterLink>
        </li>
        <li>
          <box-icon name="purchase-tag"></box-icon>
          <RouterLink to="/promocoes">
             PROMOÇÕES
          </RouterLink>
        </li>
        <li> <!--Arrumar Rotas-->
          <box-icon name="truck" type="solid"></box-icon>
          <RouterLink to="/entregas">
             Descontos
          </RouterLink>
        </li>
        <li>
          <box-icon name="truck" type="solid"></box-icon>
          <RouterLink to="/entregas">
             ENTREGAS
          </RouterLink>
        </li>
      </ul>
      <div class="alerta">
        <h4>Produtos em falta!</h4>
        <button></button>
      </div>
    </div>
    <div class="log-set">
      <ul>
        <li>
          <box-icon name="cog"></box-icon>
          <a href="">CONFIGURAÇÕES</a>
        </li>
        <li><box-icon name="log-out"></box-icon> <a href="">SAIR</a></li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
h3 {
  color: #00bf63;
}
nav {
  height: 97vh;
  width: 20%;
  margin-right: 7px;
  display: flex;
  background-color: #eee;
  flex-direction: column;
  justify-content: space-between;
}
nav img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}
nav .perfil-usuario {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 20px;
  border-bottom: 5px solid white;
  padding: 20px;
}
nav .links {
  padding: 20px 20px 35px 20px;
  border-bottom: 5px solid white;
}
nav ul li {
  list-style: none;
  display: flex;
  align-items: center;
  margin: 10px 0;
}
nav ul li a {
  color: rgb(20, 20, 20);
  margin-left: 10px;
  font-weight: 500;
}

nav ul li a:hover {
  color: rgb(20, 20, 20);
  font-weight: 600;
}
nav .links .alerta {
  background-color: #00bf63;
  color: white;
  padding: 10px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;

  justify-content: center;
  align-items: center;
}
nav .links .alerta button {
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
}
nav .log-set {
  padding: 10px;
}
</style>
