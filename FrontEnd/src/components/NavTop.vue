<script>
export default {}
</script>

<template>
  <header>
    <RouterLink to="/">
      <img src="src/assets/img/1.png" alt="" />
    </RouterLink>
    <div>
      <input type="text" />
      <button>
        <box-icon size="1.7em" color="#fff" name="search"></box-icon>
      </button>
      <box-icon size="1.7em" name="bell"></box-icon>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
header img {
  width: 15em;
  height: auto;
}
header input {
  outline: 2px solid #00bf63;
  width: 100%;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  padding: 5px 10px;
}
header div {
  display: flex;
  align-items: center;
  width: 35%;
}
header div button {
  background-color: #00bf63;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-right: 10px;
  border: none;

  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
}
</style>
