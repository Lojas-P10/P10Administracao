<script setup>
import AsideComp from '/src/components/AsideComp.vue'
</script>

<template>
  <main>
    <div class="pesquisa">
      <img src="src/assets/img/logo.png" alt="" />
      <div class="input-pesquisa">
        <input type="text" />
        <button>
          <box-icon color="#fff" name="search"></box-icon>
        </button>
      </div>
    </div>
  </main>
  <AsideComp />
</template>
<style scoped>
main .pesquisa {
  display: flex;
  align-items: center;
  width: 100%;
}
main .pesquisa img {
  width: 35px;
  height: 35px;
}
main .pesquisa input {
  outline: 2px solid;
  width: 100%;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  padding: 5px 10px;
}
main .pesquisa .input-pesquisa {
  display: flex;
  align-items: center;
  width: 100%;
}
main .pesquisa .input-pesquisa button {
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 2px solid;

  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
}
</style>
