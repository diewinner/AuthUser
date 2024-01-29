<template>
  <div class="login">
    <div class="login_wrapper">
      <div class="login_wrapper__item">
        <span class="login_wrapper__item__title">Login</span>
        <BaseInput v-model="logIn.username" :placeholder="loginPlaceholder" :typeInput="inputType"/>
      </div>
      <div class="login_wrapper__item">
        <span class="login_wrapper__item__title">Password</span>
        <BaseInput v-model="logIn.password" :placeholder="passwordPlaceholder" :typeInput="inputType"/>
      </div>
      <BaseButton :nameBtn="nameBtn" @click="handleAuthUser"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      inputType:'text',
      loginPlaceholder:'Enter login...',
      passwordPlaceholder:'Enter password...',
      nameBtn:'login',
      logIn: {
        username:'',
        password:''
      }
    }
  },
  methods: {
    async handleAuthUser() {
        await axios.post(`https://dummyjson.com/auth/login`, this.logIn)
          .then((res) => {
            this.$cookies.set('token', res?.data?.token)
            this.$router.push('/users')
          })
    },
  }
}
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.login_wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  width: 500px;
  margin: 0 auto;
}
.login_wrapper__item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
</style>
