<template>
  <table>
    <thead>
      <th>Film</th>
      <th>Date</th>
    </thead>
    <tbody>
      <tr v-for="movie in movies" :key="movie.id">
        <td>{{ movie.title }}</td>
        <td>{{ movie.release_date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: "MovieTable",
  props: {
    movies: Array,
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #000000;
  padding: 10px;
}

.delete-button {
  cursor: pointer;
}
</style>
