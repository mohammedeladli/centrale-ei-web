import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import MovieCard from "../views/MovieCard.vue";
import AddMovie from "../views/AddMovie.vue";
import Login from "../views/Login.vue";
import Recommended from "../views/Recommended.vue";
import Genre from "../views/Genre_Page.vue";
import { generate } from "@vue/compiler-core";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/movie/:id",
    name: "Movie Detail",
    component: MovieCard,
  },
  {
    path: "/add_movie",
    name: "Add Movie",
    component: AddMovie,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/movies/genres/:genre_id",
    name: "Genre",
    component: Genre,
  },
  {
    path: "/movies/recommended",
    name: "Recommended",
    component: Recommended,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
