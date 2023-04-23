<script>
import 'boxicons'
import AsideComp from '../components/AsideComp.vue'
export default {
  components: { AsideComp }
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
        <box-icon class="icon" size="2.5em" color="#fff" name="line-chart-down"></box-icon>
        <div>
          <h2>00</h2>
          <h3>Volume de vendas</h3>
        </div>
      </div>
      <div class="card-vendas">
        <box-icon class="icon" size="2.5em" color="#fff" name="line-chart-down"></box-icon>
        <div>
          <h2>00</h2>
          <h3>Ticket médio</h3>
        </div>
      </div>
      <div class="card-vendas">
        <box-icon class="icon" size="2.5em" color="#fff" name="line-chart-down"></box-icon>
        <div>
          <h2>00</h2>
          <h3>Margem de lucro</h3>
        </div>
      </div>
    </section>
    <section class="estoque">
      <div class="card-estoque">
        <h2>Unidades vendidas</h2>
        <h1>25</h1>
      </div>
      <div class="card-estoque">
        <h2>Estoque mínimo</h2>
        <h1>38</h1>
      </div>
      <div class="card-estoque">
        <h2>Produtos em estoque</h2>
        <h1>71</h1>
      </div>
    </section>
  </main>
  <AsideComp />
</template>
