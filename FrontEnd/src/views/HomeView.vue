<script>
import AsideComp from '../components/AsideComp.vue'
import VueScrollSnap from 'vue-scroll-snap'
import 'boxicons'
export default {
  components: { AsideComp, VueScrollSnap }
}
</script>

<template>
  <main>
    <div class="pesquisa">
      <div>
        <box-icon name="search-alt-2"></box-icon>
        <input placeholder="O que você procura?" type="text" />
      </div>
    </div>
    <section class="vendas">
      <div class="card-vendas">
        <h1>44</h1>
        <div>
          <h2>Volume de vendas</h2>
        </div>
      </div>
      <div class="card-vendas">
        <h1>89</h1>
        <div>
          <h2>Ticket médio</h2>
        </div>
      </div>
      <div class="card-vendas">
        <h1>51%</h1>
        <div>
          <h2>Margem de lucro</h2>
        </div>
      </div>
    </section>
    <section class="estoque">
      <div class="card-estoque">
        <h1>25</h1>
        <h2>Unidades vendidas</h2>
      </div>
      <div class="card-estoque">
        <h1>38</h1>
        <h2>Estoque mínimo</h2>
      </div>
      <div class="card-estoque">
        <h1>71</h1>
        <h2>Produtos em estoque</h2>
      </div>
    </section>
    <section class="recentes">
      <h1>Recém adicionados</h1>
      <div class="livros">
        <vue-scroll-snap :horizontal="true">
          <div class="capa-livro"></div>
          <div class="capa-livro"></div>
          <div class="capa-livro"></div>
          <div class="capa-livro"></div>
          <div class="capa-livro"></div>
          <div class="capa-livro"></div>
          <div class="capa-livro"></div>
          <div class="capa-livro"></div>
          <div class="capa-livro"></div>
        </vue-scroll-snap>
      </div>
    </section>
  </main>
<!--   <AsideComp />
 -->
 </template>
