<template>
  <div class="navigation">
    <div class="navigation__wrapper">
      <div class="navigation__wrapper__items">
        <nuxt-link class="navigation__wrapper__items__item" to="/users">
          Users
        </nuxt-link>
        <nuxt-link class="navigation__wrapper__items__item" to="/posts">
          Posts
        </nuxt-link>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
</script>

<style scoped>
.navigation {
  display: flex;
  height: 100vh;
  position: relative;
}
.navigation__wrapper {
  width: 20%;
  height: 100%;
}
.navigation__wrapper__items {
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  background: rgb(157, 250, 250);
  width: 20%;
  padding: 50px;
  gap: 50px;
}
.navigation__wrapper__items__item {
  text-decoration: none;
  font-size: 25px;
  color:black;
  transition: all 0.3s ease;
  text-align: center;
}
.navigation__wrapper__items__item:hover {
  color: #2c2c2c;
  transform: scale(1.1);
}
</style>
