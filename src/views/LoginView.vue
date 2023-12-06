<script setup>
import { reactive } from 'vue'

import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const user = reactive({
  email: '',
  password: ''
})

async function submit() {
  try {
    await authStore.login(user)
    router.push('/dashboard/produtos/')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <main>
    <div class="login-box">
      <div class="hello-world">
        <img src="../../public/logo/LojasP10/logo-menor.png" alt="" />
      </div>
      <form @submit.prevent="submit">
        <h1>Entre na sua conta</h1>
        <div class="user-box">
          <div class="group">
            <div class="icon">
              <box-icon color="var(--c-white)" name="envelope"></box-icon>
            </div>
            <input v-model="user.email" placeholder="email" type="email" />
          </div>
          <div class="group">
            <div class="icon">
              <box-icon color="var(--c-white)" name="lock-alt"></box-icon>
            </div>
            <input v-model="user.password" placeholder="senha" type="password" />
          </div>
          <!--          <div>
            <input
              id="sem-efeito"
              required=""
              
            />
            <div class="input-back">
              <div class="button"></div>
            </div>
          </div>
          <div>
            <input
              id="sem-efeito"
              required=""
              v-model="user.password"
              placeholder="senha"
              type="password"
            />
            <div class="input-back">
              <div class="button"><box-icon color="var(--c-white)" name="lock-alt"></box-icon></div>
            </div>
          </div> -->
        </div>

        <button @submit.prevent="submit" type="submit" class="btn-blue">entrar</button>
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
  flex-direction: column;
}

.group {
  display: flex;
  position: relative;
  margin-bottom: 1em;
  align-items: center;
}
.group .icon {
  position: absolute;
  left: 5%;
}
input {
  padding-left: 4em;
}
</style>
