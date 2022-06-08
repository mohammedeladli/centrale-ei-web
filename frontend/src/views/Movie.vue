<template>
  <h1>Films</h1>
  <MovieTable v-if="movies.length" :movies="movies" />
</template>

<script>
// @ is an alias to /src
import MovieTable from "@/components/MovieTable.vue";
import axios from "axios";

export default {
  name: "Movie",
  components: {
    MovieTable,
  },
  data: function () {
    return {
      movies: [],
    };
  },
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=522d421671cf75c2cba341597d86403a&language=en-US&page=1`
      )
      .then((response) => {
        // Do something if call succeeded
        console.log(response.data.results);
        this.movies = response.data.results;
      })
      .catch((error) => {
        // Do something if call failed
        console.log(error);
      });
  },
};
</script>
