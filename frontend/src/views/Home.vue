<template>
  <body>
    <div class="home">
      <br />
      <form @submit.prevent="searchMovies()" class="search-box">
        <input
          type="text"
          placeholder="What are you looking for?"
          name="search"
          v-model="search"
          id="search"
        />
        <input type="submit" value="Search" />
      </form>
      <div class="movies-list">
        <div class="movie" v-for="movie in movies.data" :key="movie._id">
          <router-link
            :to="'/movie/' + movie._id"
            class="movie-link"
            @click="update(movie)"
          >
            <div class="product-image">
              <div class="images">
                <img
                  :src="
                    'https://image.tmdb.org/t/p/original/' + movie.poster_path
                  "
                  alt="Movie Poster"
                />
              </div>
              <div class="detail">
                <h3>{{ movie.title }} ({{ movie.date.substr(0, 4) }})</h3>
                <br />
                <p class="description">
                  {{ movie.overview.substr(0, 150) }}...
                </p>
                <br />
                <p class="rating">{{ movie.vote_average }}/10</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data: function () {
    return {
      movies: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => {
        // Do something if call succeeded
        console.log(response);
        response.data = response.data.slice(0, 100);
        this.movies = response;
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
    searchMovies: function () {
      var search = document.getElementById("search").value;
      axios
        .get("http://localhost:3000/movies/search/" + search)
        .then((response) => {
          console.log("http://localhost:3000/movies/search/" + search);
          this.movies = response;
        })
        .catch((error) => {
          this.moviesLoadingError =
            "An error occured while searching for movies.";
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
  /*background: linear-gradient(#1f1b1b, #ff0000);*/
  padding: 0px 0px;
  background-color: #161616;
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

body {
  background-color: #161616;
}

.product-image:hover.product-image {
  transform: scale(1.2);
  transition: 300ms;
}

.movies-list {
  display: flex;
  flex-wrap: wrap;
  gap: 150px 50px;
  align-content: center;
  justify-content: center;
}

.product-image {
  width: 320px;
  margin: auto;
  height: 400px;
  transition: all 0.5s ease-in-out;
}

.product-image:hover {
  transform: scale(1.2);
}

.product-image:hover .images {
  transition: 0.5s;
  opacity: 0.4;
}

.detail {
  width: 260px;
  position: relative;
  opacity: 0;
}

.product-image:hover .detail {
  opacity: 1;
  color: rgb(255, 255, 255);
  transition: 0.5s;
}

.detail {
  position: absolute;
  bottom: 20px;
  left: 30px;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
h4 {
  margin: 0px 0 0;
}
.most-popular {
  font-weight: 700;
  color: #ffffff;
  font-size: 30px;
  position: left;
}
input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(22, 22, 219, 0.25) 0px 2px 5px -1px,
    rgba(41, 34, 141, 0.3) 0px 1px 3px -1px;
}
.rating {
  font-weight: 700;
  color: #ff3939;
  font-size: 30px;
}
</style>
