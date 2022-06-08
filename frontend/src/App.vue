<template>
  <header>
    <router-link to="/">
      <img alt="ChillaCS logo" src="./assets/logo.png" />
    </router-link>
  </header>
  <div class="nav">
    <router-link class="nav-link" to="/">Home</router-link> |
    <router-link class="nav-link" to="/counter">Counter</router-link> |
    <router-link class="nav-link" to="/users">Users</router-link> |
    <router-link class="nav-link" to="/movie">Movies</router-link> |
    <router-link class="nav-link" to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      movi: Object,
    };
  },
};
</script>

<style scoped>
.nav {
  text-align: center;
  padding: 30px;
}

.nav-link {
  font-weight: bold;
  color: #2c3e50;
}

.nav-link.router-link-exact-active {
  color: #42b983;
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #7e909f;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  h1 {
    color: #fff;
    font-size: 28px;
    span {
      color: #ae731b;
    }
  }
}
</style>
