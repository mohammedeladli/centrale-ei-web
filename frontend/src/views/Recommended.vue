<template>
  <body>
    <div class="home">
      <div class="logo">
        <img alt="ChillaCS logo" src="../assets/logo.png" />
      </div>
      <br />
      <br />
      <div class="reco">Recommended Movies:</div>
      <br />
      <br />
      <br />
      <div class="movies-list">
        <div
          class="movie"
          v-for="movie in $root.recommended_movies.data.slice(0, this.offset)"
          :key="movie._id"
        >
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <a>
        <button @click="LoadMore" class="bn53">Load More</button>
      </a>
    </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      offset: Number,
    };
  },
  created() {
    this.offset = 18;
  },
  methods: {
    LoadMore: function () {
      this.offset += 9;
    },
    update: function (mov) {
      this.$root.movi = mov;
    },
  },
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
  padding: 0px 0px;
  background-color: #161616;
  overflow-y: scroll;
  height: 709px;
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
.logo {
  height: 10px;
  width: 30px;
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

.reco {
  color: #ffffff;
  font-size: 50px;
  justify-content: left;
  font-family: Century Gothic;
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
.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  height: 200px;
  transition: all 0.5s ease-in-out;
  bottom: 20px;
  gap: 40px;
  padding-top: 1%;
}
.logo:hover {
  transform: scale(1.3);
}
h4 {
  margin: 0px 0 0;
}
.bn53 {
  background-color: #b81515;
  padding: 7px;
  width: 100px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  animation: bn53bounce 4s infinite;
  cursor: pointer;
}

@keyframes bn53bounce {
  5%,
  50% {
    transform: scale(1);
  }

  10% {
    transform: scale(1);
  }

  15% {
    transform: scale(1);
  }

  20% {
    transform: scale(1) rotate(-5deg);
  }

  25% {
    transform: scale(1) rotate(5deg);
  }

  30% {
    transform: scale(1) rotate(-3deg);
  }

  35% {
    transform: scale(1) rotate(2deg);
  }

  40% {
    transform: scale(1) rotate(0);
  }
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
