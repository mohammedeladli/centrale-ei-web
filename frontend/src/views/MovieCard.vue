<template>
  <div class="product-image">
    <img
      :src="'https://image.tmdb.org/t/p/original/' + $root.movi.backdrop_path"
      height="720"
      weight="auto"
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
  margin: auto;
  align-items: center;
  justify-content: center;
}

h4 {
  margin: auto;
}
h3 {
  margin: auto;
}
h2 {
  margin: 0px 0 0;
  font-family: "Roboto", sans-serif;
}
</style>
