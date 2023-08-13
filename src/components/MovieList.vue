<template>
  <section class="movie-list-all">
    <div class="container">
      <h2>All Movies</h2>
      <div class="movie-list-grid">
        <MovieItem
          v-for="movie in movies"
          :movie="movie"
          :key="movie.id"
          @addToWatchlist="addToWatchlist"
          @removeFromWatchlist="removeFromWatchlist"
          @addToFavourites="addToFavourites"
          @removeFromFavourites="removeFromFavourites"
          @addRating="addRating"
        ></MovieItem>
      </div>
    </div>
  </section>
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
    },
    removeFromWatchlist(id) {
      this.$emit("removeFromWatchlist", id);
    },
    addToFavourites(id) {
      this.$emit("addToFavourites", id);
    },
    removeFromFavourites(id) {
      this.$emit("removeFromFavourites", id);
    },
    addRating(id, rating) {
      this.$emit("addRating", id, rating);
    },
  },
};
</script>

<style scoped lang="scss"></style>
