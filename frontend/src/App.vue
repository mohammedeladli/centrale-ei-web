<template>
  <div class="topnav">
    <router-link class="nav-link" to="/">
      <img alt="ChillaCS logo" src="./assets/logo.png" height="10px" />
    </router-link>
    <router-link class="nav-linkl" to="/login">Login</router-link>
    <router-link class="nav-linkl" to="/add_movie">Add Movie</router-link>
    <router-link class="nav-linkl" to="/users">Users</router-link>
    <router-link class="nav-linkl" to="/movie">Movies</router-link>
    <router-link class="nav-linkl" to="/">Home</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      movi: Object,
      // hm: new Map([
      //   [28, "Action"][(12, "Adventure")][(16, "Animation")][(35, "Comedy")][
      //     (80, "Crime")
      //   ][(99, "Documentary")][(18, "Drama")][(10751, "Family")][
      //     (14, "Fantasy")
      //   ][(36, "History")][(27, "Horror")][(10402, "Music")][(9648, "Mystery")][
      //     (10749, "Romance")
      //   ][(878, "Science Fiction")][(10770, "TV Movie")][(53, "Thriller")][
      //     (10752, "War")
      //   ][(37, "Western")],
      // ]),
    };
  },
};
</script>

<style scoped>
.nav {
  text-align: center;
  padding: 0px;
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
  align-items: left;
  justify-content: left;
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
.topnav {
  background-color: #333;
  overflow: hidden;
  align-items: left;
  /* position: fixed; */
}

.topnav .nav-link {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  height: 100px;
}
.topnav .nav-linkl {
  float: right;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04aa6d;
  color: white;
}
</style>
