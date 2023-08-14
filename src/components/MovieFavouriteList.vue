<template>
  <section
    class="favourite-movies-list"
    :class="{ favouritesShown: favouritesShown }"
  >
    <div class="container">
      <ExitWindowButton @hide-window="hideWindow"></ExitWindowButton>
      <h2>Favourite Movies</h2>
      <div class="movie-list-grid">
        <MovieItem
          v-for="movie in moviesFavouritedList"
          :movie="movie"
          :key="movie.id"
          @removeFromFavourites="removeFromFavourites"
          @addToWatchlist="addToWatchlist"
          @removeFromWatchlist="removeFromWatchlist"
          @addRating="addRating"
        ></MovieItem>
      </div>
    </div>
  </section>
</template>

<script>
import MovieItem from "./MovieItem.vue";
import ExitWindowButton from "./ExitWindowButton.vue";

export default {
  name: "MovieFavouriteList",
  props: {
    moviesFavouritedList: {
      type: Array,
      default() {
        return [];
      },
    },
    favouritesShown: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  components: {
    MovieItem,
    ExitWindowButton,
  },
  methods: {
    addToWatchlist(id) {
      this.$emit("addToWatchlist", id);
    },
    removeFromWatchlist(id) {
      this.$emit("removeFromWatchlist", id);
    },
    removeFromFavourites(id) {
      this.$emit("removeFromFavourites", id);
    },
    addRating(id, rating) {
      this.$emit("addRating", id, rating);
    },
    hideWindow() {
      this.$emit("hideWindow", true);
    },
  },
};
</script>

<style scoped lang="scss"></style>
