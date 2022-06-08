import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users.vue";
import Movie from "../views/Movie.vue";
import MovieCard from "../views/MovieCard.vue";
import AddMovie from "../components/AddMovie.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movie",
    name: "Movie",
    component: Movie,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
