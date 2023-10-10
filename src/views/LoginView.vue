<script setup>
import { reactive } from 'vue'

import { useAuthStore } from '@/stores/auth'
import { useRouter} from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const user = reactive({
  email: 'greg@gmail.com',
  password: 'admin'
})

async function submit() {
  console.log('lo')
  try {
    await authStore.login(user)
    router.push('/dashboard/produtos')
  } catch (e) {
    console.log('erro')
    // this.$toast.error(`usuario ou senha invalido`, {
    //   type: 'error',
    //   position: 'top-right'
    // })
    // setTimeout(this.$toast.clear, 3000)
  }
} 
</script>

<template>
  <main>
    <!-- <form > -->
      <div class="login-box">
        <div class="hello-world">
          <img src="../../public/logo/LojasP10/logo-menor.png" alt="" />
        </div>
        <form>
          <h1>Entre na sua conta</h1>
          <div class="user-box">
            <!-- <div><box-icon color="var(--c-white)" name="envelope"></box-icon></div> -->
            <input required="" v-model="user.email" placeholder="email" type="email" />
          </div>
          <div class="user-box">
            <!-- <div><box-icon color="var(--c-white)" name="lock-alt"></box-icon></div> -->
            <input required="" v-model="user.password" placeholder="senha" type="password" />
          </div>
          <button @click="submit" class="btn-blue">
             entrar 
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
