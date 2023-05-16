<script>
export default {}
</script>
<template>
  <aside>
    <div class="perfil">
      <box-icon name="chat"></box-icon>
      <box-icon name="bell"></box-icon>
      <img src="src/assets/img/edudasilva.jpeg" alt="" />
    </div>

    <div></div>
  </aside>
</template>

<style scoped>
aside {
  width: 20%;
  margin-left: 10px;
}
aside .perfil {
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  justify-content: flex-end;
  padding: 10px;
}
aside .perfil img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
