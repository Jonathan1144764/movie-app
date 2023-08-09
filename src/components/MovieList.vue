<template>
  <div class="movie-list">
    <MovieItem
      v-for="movie in movies"
      :movie="movie"
      :key="movie.id"
    ></MovieItem>
  </div>
</template>

<script>
import MovieItem from "./MovieItem.vue";

export default {
  name: "MovieList",
  props: {
    movies: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    MovieItem,
  },
};
</script>

<style></style>
