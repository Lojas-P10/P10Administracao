<script>
import 'boxicons'
import { RouterLink } from 'vue-router'
export default { components: { RouterLink } }
</script>
<template>
  <nav>
    <div>

      <header>
        <img src="/src/assets/img/edudasilva.jpeg" alt="Foto do usuário" />
        <h2>Eduardo da Silva</h2>
        <h3>@edudasilva</h3>
      </header>
      <div class="links">
        <ul>
          <li>
            <RouterLink to="/produtos">
              <div>
                <i class='bx bx-package'></i>
              </div>
              PRODUTOS
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/categorias">
              <div>
                <i class='bx bx-category' ></i>
              </div>
              CATEGORIAS
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/fornecedores">
              <div>
                <i class='bx bx-user-pin' ></i>
              </div>
              FORNECEDORES
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/promocoes">
              <div>
                <i class='bx bx-purchase-tag' ></i>
              </div>
              PROMOÇÕES
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/sazonais">
              <div>
                <i class='bx bx-purchase-tag' ></i>
              </div>
              SAZONAIS
            </RouterLink>
          </li>
        </ul>
        <div class="alerta">
          <h4>Produtos em falta!</h4>
          <button></button>
        </div>
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
  height: 100vh;
width: 20%;
margin-right: 7px;
display: flex;
flex-direction: column;
box-shadow: 2px 2px 50px rgba(151, 151, 151, 0.25);
justify-content: space-between;
}

nav img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

nav header {
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
nav ul {
  gap: 20px;
  display: flex;
  flex-direction: column;
}
nav ul li {
  list-style: none;
  display: flex;
  border-radius: 10px;
  align-items: center;
  width: fit-content;
  padding-right: 15px;
}
li div i {
  color: #888;
  font-size: 1.5em
}
li div {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: #ececec;
  border-radius: 10px;
/*   background-color: ; */
}
li:hover {
  box-shadow: 2px 2px 30px rgba(73, 73, 73, 0.247);
}
nav ul li a {
  color: rgb(20, 20, 20);
  align-items: center;
  display: flex;
  gap: 10px;
  font-weight: 500;
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
