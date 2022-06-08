<template>
  <div class="product-image">
    <img
      :src="'https://image.tmdb.org/t/p/original/' + $root.movi.poster_path"
      height="500"
      weight="400"
      alt="Movie Poster"
    />
  </div>
  <div class="detail">
    <h4>
      <p class="title">{{ $root.movi.title }}</p>
    </h4>
    <h3>
      <p class="year">{{ $root.movi.release_date }}</p>
    </h3>
    <h2>
      <p class="description">{{ $root.movi.overview }}</p>
    </h2>
  </div>
</template>

<style>
.product-image {
  height: 500px;
  width: 400px;
  margin: auto;
  align-items: center;
  justify-content: center;
}

h4 {
  margin: 0px 0 0;
}
h3 {
  margin: 0px 0 0;
}
h2 {
  margin: 0px 0 0;
  font-family: "Roboto", sans-serif;
}
</style>
