<template>
  <body>
    <div
      class="container"
      :style="`background-image: linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.85)), url('https://image.tmdb.org/t/p/original/${$root.movi.backdrop_path}')`"
    >
      <div class="card">
        <div class="movie-info-container">
          <div class="top">
            <div class="img-1">
              <img
                :src="
                  'https://image.tmdb.org/t/p/original/' +
                  $root.movi.poster_path
                "
                alt=""
              />
            </div>
            <div class="general-info">
              <h2>{{ $root.movi.title }}</h2>

              <div>
                <span>Release Date: </span>
                <span>{{ $root.movi.date.substr(0, 10) }}</span>
              </div>
              <div>
                <span>Rating :</span>
                <span>{{ $root.movi.vote_average }}/10</span>
              </div>
              <div>
                <span>Genres :</span>
                <span>{{ changer($root.movi.genre_ids).join(" , ") }}</span>
              </div>
              <div class="star-source">
                <svg>
                  <linearGradient
                    x1="50%"
                    y1="5.41294643%"
                    x2="87.5527344%"
                    y2="65.4921875%"
                    id="grad"
                  >
                    <stop stop-color="#FF0000" offset="0%"></stop>
                    <stop stop-color="#FF0000" offset="60%"></stop>
                    <stop stop-color="#FF0000" offset="100%"></stop>
                  </linearGradient>
                  <symbol id="star" viewBox="153 89 106 108">
                    <polygon
                      id="star-shape"
                      stroke="url(#grad)"
                      stroke-width="5"
                      fill="currentColor"
                      points="206 162.5 176.610737 185.45085 189.356511 150.407797 158.447174 129.54915 195.713758 130.842203 206 95 216.286242 130.842203 253.552826 129.54915 222.643489 150.407797 235.389263 185.45085"
                    ></polygon>
                  </symbol>
                </svg>
              </div>
              <div class="star-container">
                <input
                  type="radio"
                  name="star"
                  id="ten"
                  v-on:click="sendRating(10)"
                  :checked="$root.movi.score === 10"
                />
                <label for="ten">
                  <svg class="star">
                    <use xlink:href="#star" />
                  </svg>
                </label>
                <input
                  type="radio"
                  name="star"
                  id="nine"
                  v-on:click="sendRating(9)"
                  :checked="$root.movi.score === 9"
                />
                <label for="nine">
                  <svg class="star">
                    <use xlink:href="#star" />
                  </svg>
                </label>
                <input
                  type="radio"
                  name="star"
                  id="eight"
                  v-on:click="sendRating(8)"
                  :checked="$root.movi.score === 8"
                />
                <label for="eight">
                  <svg class="star">
                    <use xlink:href="#star" />
                  </svg>
                </label>
                <input
                  type="radio"
                  name="star"
                  id="seven"
                  v-on:click="sendRating(7)"
                  :checked="$root.movi.score === 7"
                />
                <label for="seven">
                  <svg class="star">
                    <use xlink:href="#star" />
                  </svg>
                </label>
                <input
                  type="radio"
                  name="star"
                  id="six"
                  v-on:click="sendRating(6)"
                  :checked="$root.movi.score === 6"
                />
                <label for="six">
                  <svg class="star">
                    <use xlink:href="#star" />
                  </svg>
                </label>
                <input
                  type="radio"
                  name="star"
                  id="five"
                  v-on:click="sendRating(5)"
                  :checked="$root.movi.score === 5"
                />
                <label for="five">
                  <svg class="star">
                    <use xlink:href="#star" />
                  </svg>
                </label>
                <input
                  type="radio"
                  name="star"
                  id="four"
                  v-on:click="sendRating(4)"
                  :checked="$root.movi.score === 4"
                />
                <label for="four">
                  <svg class="star">
                    <use xlink:href="#star" />
                  </svg>
                </label>

                <input
                  type="radio"
                  name="star"
                  id="three"
                  v-on:click="sendRating(3)"
                  :checked="$root.movi.score === 3"
                />
                <label for="three">
                  <svg class="star">
                    <use xlink:href="#star" />
                  </svg>
                </label>
                <input
                  type="radio"
                  name="star"
                  id="two"
                  v-on:click="sendRating(2)"
                  :checked="$root.movi.score === 2"
                />
                <label for="two">
                  <svg class="star">
                    <use xlink:href="#star" />
                  </svg>
                </label>
                <input
                  type="radio"
                  name="star"
                  id="one"
                  v-on:click="sendRating(1)"
                  :checked="$root.movi.score === 1"
                />
                <label for="one">
                  <svg class="star">
                    <use xlink:href="#star" />
                  </svg>
                </label>
              </div>
            </div>
          </div>
          <div class="movie-info">
            <p>
              {{ $root.movi.overview }}
            </p>
          </div>
        </div>
        <div class="img-2">
          <img
            :src="
              'https://image.tmdb.org/t/p/original/' + $root.movi.backdrop_path
            "
            alt=""
          />
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";

export default {
  name: "Movie Detail",
  data: function () {
    return {
      score: 0,
    };
  },
  // created(){
  //   .get("http://localhost:3000/movies/")
  //     .then((response) => {
  //       // Do something if call succeeded
  //       console.log(response);
  //       response.data = response.data;
  //       this.recommended_movies = response;
  //     })
  //     .catch((error) => {
  //       // Do something if call failed
  //       console.log(error);
  // }
  methods: {
    changer: function (liste) {
      var l = [];
      for (var i = 0; i < liste.length; i++) {
        l.push(this.$root.hm.get(liste[i]));
      }
      return l;
    },
    sendRating: function (score) {
      axios
        .put("http://localhost:3000/movies/" + this.$root.movi._id, {
          title: this.$root.movi.title,
          date: this.$root.movi.date,
          genre_ids: this.$root.movi.genre_ids,
          adult: this.$root.movi.adult,
          viewers: [],
          score: score,
        })
        .then((res) => {
          //console.log(res);
          this.$root.movi.score = res.data.score;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.container {
  display: grid;
  place-items: center;
  min-height: 10vh;
  background-color: #161616;
  color: #ffe7c8;
  font-size: 0.9rem;
  padding: 5rem;
}

.card {
  width: clamp(300px, 95vw, 900px);
  display: flex;
  padding: 1.5rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  margin: 5rem 0;
}
.img-1 {
  width: 150px;
  height: 200px;
  border-radius: 0.5rem;
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 200ms ease-in-out transform;
}
.top {
  display: flex;
  width: 95%;
}
.movie-info-container {
  width: 60%;
}
.general-info {
  margin-left: 2rem;
  flex: 1;
}
.general-info h2 {
  margin-bottom: 1rem;
}
.movie-info {
  margin-top: 2rem;
  width: 90%;
}
.general-info div {
  margin: 1rem 0;
  display: flex;
  justify-content: space-evenly;
}
.img-2 {
  position: absolute;
  width: 40%;
  height: 100%;
  right: 0;
  top: 0;
  overflow: hidden;
  opacity: 0.6;
}
.card::before {
  content: "";
  position: absolute;
  top: 0;
  right: 30%;
  width: 10%;
  height: 100%;
  background-image: linear-gradient(to right, #161616, transparent);
  z-index: 2;
}
.card:hover .img-2 img {
  transform: scale(1.1);
}

.card:first-child,
.card:first-child .img-1 {
  box-shadow: 0 0 1rem #ff0000;
}
.card:first-child .general-info div span:last-of-type {
  font-weight: 700;
  color: #ff3939;
}
.container {
  background-size: cover;
}
.card:last-child,
.card:last-child .img-1 {
  /*box-shadow: 0 0 1rem rgba(255, 166, 0, 0.8);*/
}
label {
  cursor: pointer;
}

svg {
  width: 0rem;
  height: 3rem;
  padding: 0.1rem;
}

/* hide radio buttons */

input[name="star"] {
  display: inline-block;
  width: min-content;
  opacity: 0;
  margin-left: -10px;
}

/* hide source svg */

.star-source {
  width: 0;
  height: 0;
  visibility: hidden;
}

/* set initial color to transparent so fill is empty*/

.star {
  color: transparent;
  transition: color 0.2s ease-in-out;
  width: 30px;
}

/* set direction to row-reverse so 5th star is at the end and ~ can be used to fill all sibling stars that precede last starred element*/

.star-container {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
}

label:hover ~ label .star,
svg.star:hover,
input[name="star"]:focus ~ label .star,
input[name="star"]:checked ~ label .star {
  color: #ff0000;
}

input[name="star"]:checked + label .star {
  animation: starred 0.5s;
}

input[name="star"]:checked + label {
  animation: scaleup 1s;
}

@keyframes scaleup {
  from {
    transform: scale(1.2);
  }
  to {
    transform: scale(1);
  }
}

@keyframes starred {
  from {
    color: #ec3a0d;
  }
  to {
    color: #e80707;
  }
}
</style>
