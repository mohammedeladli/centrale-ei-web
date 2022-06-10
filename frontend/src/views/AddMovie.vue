<template>
  <body :style="`background-image: linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url('https://mrserie.fr/wp-content/uploads/2021/11/Netflix-Background-1-1024x576.jpg?ezimgfmt=ng:webp/ngcb1')`">
    <h1> What movie do you want to see on our website?  </h1>
    <h1> Add your suggestion below: </h1>
    <input
      id="title"
      v-model="title"
      type="text"
      name="title"
      placeholder="Title"
    />
    <div class="FormDate">
      <input
        class="FormDate__input FormDate__input--day"
        type="number"
        placeholder="dd"
        v-model="day"
        min="1"
        max="31"
      />
      <span class="FormDate__divider">/</span>
      <input
        class="FormDate__input FormDate__input--month"
        type="number"
        placeholder="mm"
        v-model="month"
        min="1"
        max="12"
      />
      <span class="FormDate__divider">/</span>
      <input
        class="FormDate__input FormDate__input--year"
        type="number"
        placeholder="yyyy"
        v-model="year"
        min="0"
      />
    </div>
    <div class="adult">
      Adult Content?
      <input type="radio" id="true" value="true" v-model="adult" />
      <label for="one">Yes</label>
      <input type="radio" id="false" value="false" v-model="adult" />
      <label for="two">No</label>
    </div>

    <section class="genre">
      <div>
        <article>
          <input type="checkbox" id="28" value="28" v-model="genre_ids" />
          <div>
            <span> Action </span>
          </div>
        </article>

        <article>
          <input type="checkbox" id="12" value="12" v-model="genre_ids" />
          <div>
            <span> Adventure </span>
          </div>
        </article>
      </div>

      <article>
        <input type="checkbox" id="16" value="16" v-model="genre_ids" />
        <div>
          <span> Animation </span>
        </div>
      </article>

      <article>
        <input type="checkbox" id="35" value="35" v-model="genre_ids" />
        <div>
          <span> Comedy </span>
        </div>
      </article>

      <article>
        <input type="checkbox" id="80" value="80" v-model="genre_ids" />
        <div>
          <span> Crime </span>
        </div>
      </article>

      <article>
        <input type="checkbox" id="99" value="99" v-model="genre_ids" />
        <div>
          <span> Documentary </span>
        </div>
      </article>

      <article>
        <input type="checkbox" id="18" value="18" v-model="genre_ids" />
        <div>
          <span> Drama </span>
        </div>
      </article>

      <article>
        <input type="checkbox" id="10751" value="10751" v-model="genre_ids" />
        <div>
          <span> Family </span>
        </div>
      </article>

      <article>
        <input type="checkbox" id="14" value="14" v-model="genre_ids" />
        <div>
          <span> Fantasy </span>
        </div>
      </article>

      <article>
        <input type="checkbox" id="36" value="36" v-model="genre_ids" />
        <div>
          <span> History </span>
        </div>
      </article>

      <article>
        <input type="checkbox" id="27" value="27" v-model="genre_ids" />
        <div>
          <span> Horror </span>
        </div>
      </article>

      <article>
        <input type="checkbox" id="10402" value="10402" v-model="genre_ids" />
        <div>
          <span> Music </span>
        </div>
      </article>

      <article>
        <input type="checkbox" id="9648" value="9648" v-model="genre_ids" />
        <div>
          <span> Mistery </span>
        </div>
      </article>

      <article>
        <input type="checkbox" id="10749" value="10749" v-model="genre_ids" />
        <div>
          <span> Romance </span>
        </div>
      </article>

      <article>
        <input type="checkbox" id="878" value="878" v-model="genre_ids" />
        <div>
          <span> Science Fiction </span>
        </div>
      </article>

      <article>
        <input type="checkbox" id="53" value="53" v-model="genre_ids" />
        <div>
          <span> Thriller </span>
        </div>
      </article>

      <article>
        <input type="checkbox" id="10770" value="10770" v-model="genre_ids" />
        <div>
          <span> TV movie </span>
        </div>
      </article>

      <article>
        <input type="checkbox" id="10752" value="10752" v-model="genre_ids" />
        <div>
          <span> War </span>
        </div>
      </article>

      <article>
        <input type="checkbox" id="37" value="37" v-model="genre_ids" />
        <div>
          <span> Western </span>
        </div>
      </article>
  

      <button class="upgrade-btn" @click="envoie">Add</button>

<div class="adult">
<p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors" :key="error.id">{{ error }}</li>
    </ul>
</p>
</div>

      <h1 v-if="added">Votre film a été ajouté</h1>
    </section>
  </body>
</template>
<script>
import axios from "axios";
export default {
  name: "add_movie",
  data: function () {
    return {
      errors: [],
      title: null,
      month: null,
      day: null,
      year: null,
      genre_ids: [],
      vote_average: null,
      date: null,
      adult: null,
      overview: null,
      added: false,
    };
  },
  methods: {
    envoie: function () {
      this.checkForm();
      if (this.errors.length == 0) {
        axios
          .post(`${process.env.VUE_APP_BACKEND_BASE_URL}/movies/new`, {
            title: this.title,
            adult: this.adult,
            genre_ids: this.genre_ids,
            date: this.date,
            vote_average: this.vote_average,
            overview:this.overview,
          })
          .then((response) => {
            this.added = true;
            response.json("Movie added");
            console.log("Movie added");
          })
          .catch((error) => {
            this.moviesLoadingError = "An error occured while fetching movies.";
            console.log(error);
          });
      }
    },
    checkForm: function () {
      this.errors = [];
      if (!this.title) this.errors.push("title required.");
      if (!this.day) this.errors.push("day required.");
      if (!this.month) this.errors.push("month required.");
      if (!this.year) this.errors.push("year required.");
      if (this.genre_ids.length == 0) this.errors.push("genre required");
      if (this.adult == "false") {
        this.adult = false;
      }
      if (this.adult == "true") {
        this.adult = true;
      }
      this.date =
        String(this.year) + "/" + String(this.month) + "/" + String(this.day);
    },
  },
};
</script>
<style scoped>
.adult {
  margin-top: 13px;
  margin-bottom: 13px;
  font-family: "Courier New", Courier, monospace;
  color: rgb(255,255,255);
}
input[type="text"],
[type="number"] {
  width: 15%;
  border: 2px solid #f25050;
  border-bottom: 2px solid #f25050;
  text-align: center;
  margin-top: 13px;
  margin-bottom: 13px;
  padding-top: 7px;
  border-radius: 5px;
  background-color: transparent;
  color: rgb(255,255,255);
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
}
::placeholder {
  color: rgb(255,255,255);
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
}
body {
  text-align: center;
  color: #rgb(108, 101, 115);
  background-image: black;
  font-family: "Roboto";
  background-size: cover;
  overflow-y:scroll;
}
::-webkit-scrollbar {
display: none;
}
.genre {
  max-width: 300px;
  margin: 0 auto;
}
.genre i {
  font-size: 80px;
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: 1;
}
article {
  position: relative;
  width: 130px;
  height: 50px;
  margin: 5px;
  float: left;
  border: 2px solid #ff3700;
  box-sizing: border-box;
  color: rgb(255,255,255);
}
article div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 25px;
  transition: 0.5s ease;
}
article input {
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  height: 100px;
  opacity: 0;
  cursor: pointer;
}
input[type="checkbox"]:checked ~ div {
  background-color: #ea1414;
}
.upgrade-btn {
  display: inline-block;
  margin: 40px auto;
  width: 200px;
  padding: 10px 20px;
  border: 2px solid #f51313;
  border-radius: 50px;
  color: #rgb(108, 101, 115);
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s ease;
  background-color: black;
  color: rgb(255,255,255);
}
.upgrade-btn:hover {
  background-color: #eb0b0b;
}
.blue-color {
  color: #50bcf2;
}
.gray-color {
  color: #555;
}
.social i:before {
  width: 14px;
  height: 14px;
  position: fixed;
  color: #rgb(108, 101, 115);
  background: #0077b5;
  padding: 10px;
  border-radius: 50%;
  top: 5px;
  right: 5px;
}
@keyframes slidein {
  from {
    margin-top: 100%;
    width: 300%;
  }
  to {
    margin: 0%;
    width: 100%;
  }
}
h1 {
  text-align: center;
  margin-top: 20px;
  color: rgb(255,255,255);
  font-size: 20px;
  font-family: "Courier New", Courier, monospace;
}
</style>