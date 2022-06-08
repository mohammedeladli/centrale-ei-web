<template>
  <div class="home">
    <form @submit.prevent="SearchMovies()" class="search-box">
      <input
        type="text"
        placeholder="What are you looking for?"
        v-model="search"
      />
      <input type="submit" value="Search" />
    </form>

    <div class="movies-list">
      <div class="movie" v-for="movie in movies" :key="movie.id">
        <router-link
          :to="'/movie/' + movie.id"
          class="movie-link"
          @click="update(movie)"
        >
          <div class="product-image">
            <img
              :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path"
              height="500"
              weight="400"
              alt="Movie Poster"
            />
          </div>
          <div class="detail">
            <h4>
              <p class="title">{{ movie.title }}</p>
            </h4>
            <p class="year">{{ movie.release_date }}</p>
            <p class="description">{{ movie.overview }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data: function () {
    return {
      movieName: "",
      movies: [],
    };
  },
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=522d421671cf75c2cba341597d86403a&language=en-US`
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
  methods: {
    update: function (mov) {
      this.$root.movi = mov;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.product-image:hover.product-image {
  transform: scale(1.2);
  transition: 300ms;
}

.movies-list {
  display: flex;
  flex-wrap: wrap;
  gap: 50px 0px;
  align-content: center;
  justify-content: center;
}

.product-image {
  height: 500px;
  width: 400px;
  margin: auto;
}

.detail {
  width: 320px;
  align-content: center;
  justify-content: center;
}

h4 {
  margin: 0px 0 0;
}
</style>
