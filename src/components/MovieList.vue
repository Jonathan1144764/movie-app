<template>
  <h2>All Movies</h2>
  <div class="movie-list">
    <MovieItem
      v-for="movie in movies"
      :movie="movie"
      :key="movie.id"
      @addToWatchlist="addToWatchlist"
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
  methods: {
    addToWatchlist(id) {
      this.$emit("addToWatchlist", id);
      console.log("arrived2");
    },
  },
};
</script>

<style scoped lang="scss"></style>
