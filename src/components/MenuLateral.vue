<script>
import 'boxicons'
import { RouterLink } from 'vue-router'
export default { components: { RouterLink } }
</script>
<template>
  <nav>
    <div>
      <header>
        <div class="top">
          <img class="logo" src="src/assets/img/3.png" alt="" />
          <div>
            <box-icon type="solid" color="#222" name="bell"></box-icon>
            <box-icon type="solid" color="#222" name="user-circle"></box-icon>
          </div>
        </div>
        <div class="user">
          <img src="/src/assets/img/edudasilva.jpeg" alt="Foto do usuário" />
          <h2>Eduardo da Silva</h2>
          <h3>@edudasilva</h3>
        </div>
      </header>
      <div class="links">
        <ul>
          <li>
            <RouterLink to="/produtos">
              <div>
                <i class="bx bx-package"></i>
              </div>
              DASHBOARD
            </RouterLink>
          </li>
          <li>
            <input class="dark-light" type="checkbox" id="dark-light" name="dark-light" />
            <label for="dark-light"></label>

            <div class="light-back"></div>

            <a href="https://front.codes/" class="logo" target="_blank">
              <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
            </a>

            <div class="sec-center">
              <input class="dropdown" type="checkbox" id="dropdown" name="dropdown" />
              <label class="for-dropdown" for="dropdown"
                >Dropdown Menu <i class="uil uil-arrow-down"></i
              ></label>
              <div class="section-dropdown">
                <a href="#">Dropdown Link <i class="uil uil-arrow-right"></i></a>
                <input class="dropdown-sub" type="checkbox" id="dropdown-sub" name="dropdown-sub" />
                <label class="for-dropdown-sub" for="dropdown-sub"
                  >Dropdown Sub <i class="uil uil-plus"></i
                ></label>
                <div class="section-dropdown-sub">
                  <a href="#">Dropdown Link <i class="uil uil-arrow-right"></i></a>
                  <a href="#">Dropdown Link <i class="uil uil-arrow-right"></i></a>
                </div>
                <a href="#">Dropdown Link <i class="uil uil-arrow-right"></i></a>
                <a href="#">Dropdown Link <i class="uil uil-arrow-right"></i></a>
              </div>
            </div>
          </li>
          <li>
            <RouterLink to="/produtos">
              <div>
                <i class="bx bx-package"></i>
              </div>
              PRODUTOS
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/categorias">
              <div>
                <i class="bx bx-category"></i>
              </div>
              CATEGORIAS
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/fornecedores">
              <div>
                <i class="bx bx-user-pin"></i>
              </div>
              FORNECEDORES
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/promocoes">
              <div>
                <i class="bx bx-purchase-tag"></i>
              </div>
              PROMOÇÕES
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/sazonais">
              <div>
                <i class="bx bx-purchase-tag"></i>
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
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.logo {
  width: 35px;
}
.user img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
}
nav header {
  width: 100%;
  display: flex;
  justify-content: center;
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
  font-size: 1.5em;
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
