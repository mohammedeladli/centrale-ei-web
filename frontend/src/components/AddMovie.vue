<template>
  <div class="add-movie">Add new movie:</div>
  <div class="add-movie-form-container">
    <form ref="addMovieForm">
      <input
        class="add-movie-input"
        v-model="movie.title"
        type="title"
        placeholder="Title"
        required
      />
      <input
        class="add-movie-input"
        v-model="movie.genre"
        type="genre"
        placeholder="Genre"
      />
      <input
        class="add-movie-input"
        v-model="movie.release_date"
        placeholder="Release Date"
        required
      />
      <input
        class="add-movie-input"
        v-model="movie.overview"
        placeholder="Overview"
      />
    </form>
    <button class="add-movie-button" @click="addMovie()">Add movie</button>
    <div v-if="movieCreationError">{{ movieCreationError }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddMovie",
  emits: ["movieAdded"],
  data: function () {
    return {
      movie: {
        title: "",
        genre: "",
        release_date: "",
        overview: " ",
      },
      movieCreationError: "",
    };
  },
  methods: {
    addMovie: function () {
      if (!this.$refs.addMovieForm.checkValidity()) {
        this.$refs.addMovieForm.reportValidity();
        return;
      }

      axios
        .post(`${process.env.VUE_APP_BACKEND_BASE_URL}/movies/new`, this.movie)
        .then(() => {
          this.$emit("movieAdded");
          this.movie = {
            title: "",
            genre: "",
            release_date: "",
            overview: " ",
          };
        })
        .catch((error) => {
          this.movieCreationError =
            "An error occured while creating new movie.";
          console.error(error);
        });
    },
  },
};
</script>
<style scoped>
.add-movie {
  margin-bottom: 10px;
}

.add-movie-form-container {
  display: flex;
  margin-bottom: 20px;
}

.add-movie-input {
  margin-right: 10px;
  padding: 5px;
}

.add-movie-button {
  cursor: pointer;
  padding: 5px;
}
</style>
