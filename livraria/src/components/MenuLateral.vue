<script>
import 'boxicons'
export default {}
</script>
<template>
  <nav>
    <ul class="toda-lista">
      <li>
        <RouterLink to="/" class="logo">
          <img src="src/assets/img/logo.png" />
          <span>Livraria do Dudu</span>
        </RouterLink>
      </li>
      <li class="lista-categorias">
        <ul>
          <li class="categoria">
            <RouterLink to="/livros" class="livros">
              <box-icon name="book" size="2em" color="#ffffff"></box-icon>
              <span>Livros</span>
            </RouterLink>
          </li>
          <li class="categoria">
            <RouterLink to="/autores" class="autores">
              <box-icon size="2em" color="#ffffff" name="pencil"></box-icon>
              <span>Autores</span>
            </RouterLink>
          </li>
          <li class="categoria">
            <RouterLink to="/categorias" class="categorias">
              <box-icon name="book-bookmark" size="2em" color="#ffffff"></box-icon>
              <span>Categorias</span>
            </RouterLink>
          </li>
          <li class="categoria">
            <RouterLink to="/editoras" class="editoras">
              <box-icon name="building-house" size="2em" color="#ffffff"></box-icon>
              <span>Editoras</span>
            </RouterLink>
          </li>
        </ul>
      </li>
      <li class="admin">
        <box-icon name="log-out" color="#ffffff" size="2em"></box-icon>
        <span>log-out</span>
      </li>
    </ul>
  </nav>
</template>
<style></style>
