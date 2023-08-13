<template>
  <section class="movies-to-watch-list" :class="{ toWatchShown: toWatchShown }">
    <div class="container">
      <h2>Movies You Want to Watch</h2>
      <div class="movie-list-grid">
        <MovieItem
          v-for="movie in moviesToWatchList"
          :movie="movie"
          :key="movie.id"
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
  name: "MovieWatchlist",
  props: {
    moviesToWatchList: {
      type: Array,
      default() {
        return [];
      },
    },
    toWatchShown: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  components: {
    MovieItem,
  },
  methods: {
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

<style scoped lang="scss">
.movies-to-watch-list {
  display: none;
}

.toWatchShown {
  display: block;
}
</style>
