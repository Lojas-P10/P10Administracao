<script>
import 'boxicons'
export default {}
</script>
<template>
  <nav>
    <div class="perfil-usuario">
      <img src="/src/assets/img/edudasilva.jpeg" alt="Foto do usuário" />
      <h2>TESTE</h2>
      <h3>@edudasilva</h3>
    </div>
    <div class="links">
      <ul>
        <li>
          <box-icon name="layout"></box-icon>
          <a href="#"> DASHBOARD </a>
        </li>
        <li>
          <box-icon name="book"></box-icon>
          <a href=""> LIVROS </a>
        </li>
        <li>
          <box-icon name="category"></box-icon>
          <a href=""> CATEGORIAS </a>
        </li>
        <li>
          <box-icon name="user-pin"></box-icon>
          <a href=""> AUTORES </a>
        </li>
        <li>
          <box-icon name="building-house"></box-icon>
          <a href=""> EDITORAS </a>
        </li>
      </ul>
      <div class="alerta">
        <h4>O QUE RAIOS COLOCA AQUI</h4>
        <p>ninguem sabe</p>
        <button>novas</button>
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
nav {
  position: fixed;
  height: 97%;
  width: 20%;
  background-color: #f3f3f3;
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
  background-color: black;
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
