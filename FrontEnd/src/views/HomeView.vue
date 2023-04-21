<script>
import 'boxicons'
import AsideComp from '../components/AsideComp.vue'
export default {
  components: { AsideComp },}
</script>

<template>
  <main>
    <div class="pesquisa">
      <div>
        <box-icon name="search-alt-2"></box-icon>
        <input placeholder="O que você procura?" type="text" />
      </div>
    </div>
    <section class="valores">
      <div class="card-valores">
        <box-icon color="#fff" name="line-chart-down"></box-icon>
        <div>
          <h2>00</h2>
          <h3>vendas</h3>
        </div>
      </div>
      <div class="card-valores">
        <box-icon color="#fff" name="line-chart-down"></box-icon>
        <div>
          <h2>00</h2>
          <h3>vendas</h3>
        </div>
      </div>
      <div class="card-valores">
        <box-icon color="#fff" name="line-chart-down"></box-icon>
        <div>
          <h2>00</h2>
          <h3>vendas</h3>
        </div>
      </div>
      <div class="card-valores">
        <box-icon color="#fff" name="line-chart-down"></box-icon>
        <div>
          <h2>00</h2>
          <h3>vendas</h3>
        </div>
      </div>
    </section>
  </main>
  <AsideComp />
</template>
