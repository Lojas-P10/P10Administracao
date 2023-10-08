<script>
export default {
}
</script>
<template>
  <main>
    <div class="login-box">
      <div class="hello-world">
        <img src="../../public/logo/LojasP10/logo-menor.png" alt="" />
      </div>
      <form>
        <h1>Entre na sua conta</h1>
        <div class="user-box">
          <div><box-icon color="var(--c-white)" name="envelope"></box-icon></div>
          <input required="" name="" placeholder="email" type="email" />
        </div>
        <div class="user-box">
          <div><box-icon color="var(--c-white)" name="lock-alt"></box-icon></div>
          <input required="" name="" placeholder="senha" type="password" />
        </div>
        <button class="btn-blue">
          <RouterLink to="/dashboard/produtos"> entrar </RouterLink>
        </button>
      </form>
    </div>
  </main>
</template>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 1em;
}
main {
  width: 100%;
  height: 77vh;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
}
img {
  width: 6em;
  margin-bottom: 2em;
}
.btn-blue {
  padding: 1em;
}

.login-box {
  width: 50%;
  padding: 40px;
  display: flex;
  margin: 20px auto;
  box-sizing: border-box;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-box .user-box {
  display: flex;
}
.login-box .user-box div {
  background-color: var(--c-green-500);
  padding: 1em;
  border-radius: 10px;
  position: absolute;
}
input {
  padding: 2em 5em;
  margin-bottom: 1em;
}
</style>
